import { spawn } from 'child_process';
import path from 'path';
import puppeteer from 'puppeteer';

// next dev 서버가 사용할 포트. 일반 dev(3000)와 충돌하지 않도록 별도 포트 사용.
const PORT = 3456;
// next dev 가 이 시간 안에 "Ready" 상태가 되지 않으면 실패 처리.
const READY_TIMEOUT_MS = 60_000;

// 자식 프로세스(next dev)가 요청을 받을 준비가 될 때까지 기다리는 헬퍼.
// stdout/stderr 로그를 감시하다가 "Ready" 류 문구가 보이면 resolve.
const waitForReady = (proc: ReturnType<typeof spawn>): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 일정 시간 내에 Ready 신호가 없으면 reject (서버가 멈췄거나 너무 느린 경우).
    const timer = setTimeout(() => {
      reject(new Error('next dev did not become ready in time'));
    }, READY_TIMEOUT_MS);

    // stdout/stderr 청크가 들어올 때마다 호출되는 콜백.
    const onData = (chunk: Buffer) => {
      const text = chunk.toString();
      // next dev 로그를 부모 콘솔에 그대로 노출 (디버깅 편의).
      process.stdout.write(text);
      // Next.js 버전별로 다른 Ready 메시지 포맷에 모두 대응.
      if (/Ready in|started server on|Local:\s+http/i.test(text)) {
        clearTimeout(timer);
        // 더 이상 로그를 감시할 필요 없으므로 리스너 해제.
        proc.stdout?.off('data', onData);
        proc.stderr?.off('data', onData);
        resolve();
      }
    };

    proc.stdout?.on('data', onData);
    proc.stderr?.on('data', onData);
    // Ready 가 되기 전에 프로세스가 죽으면 곧바로 실패 처리.
    proc.on('exit', (code) => {
      clearTimeout(timer);
      reject(new Error(`next dev exited early with code ${code}`));
    });
  });
};

const main = async () => {
  // 프로젝트 루트 경로 (이 스크립트는 scripts/ 하위에 있음).
  const cwd = path.resolve(__dirname, '..');

  // next dev 서버를 자식 프로세스로 기동.
  // - env-cmd: .env.resume 의 환경변수(NEXT_PUBLIC_PHONE 등)를 next 에 주입.
  // - -p PORT: 고정 포트로 띄워 puppeteer 가 정확히 같은 주소에 접근.
  // - detached: true: 새 프로세스 그룹의 리더로 만들어서 finally 의
  //   process.kill(-pid) 한 번으로 next 가 띄운 자식들까지 일괄 종료 가능.
  const dev = spawn(
    'npx',
    ['env-cmd', '-f', '.env.resume', 'next', 'dev', '-p', String(PORT)],
    {
      cwd,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: true,
    }
  );

  try {
    // 서버가 요청을 받을 수 있을 때까지 대기.
    await waitForReady(dev);

    // 헤드리스 브라우저 기동.
    const browser = await puppeteer.launch();
    try {
      const page = await browser.newPage();
      // /resume 첫 요청 시 next 가 on-demand 로 해당 라우트만 컴파일.
      // networkidle2 는 네트워크가 잠잠해질 때까지 = 컴파일/리소스 로딩 완료까지 대기.
      await page.goto(`http://localhost:${PORT}/resume`, {
        waitUntil: 'networkidle2',
      });
      // 렌더된 페이지를 A4 PDF 로 저장.
      await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        margin: {
          top: 10,
          bottom: 10,
        },
      });
    } finally {
      // PDF 생성 성공/실패와 무관하게 브라우저는 항상 정리.
      await browser.close();
    }
  } finally {
    // dev 가 아직 살아 있다면 종료. 정상 흐름/예외 흐름 모두에서 실행됨.
    if (dev.pid !== undefined && dev.exitCode === null) {
      try {
        // detached 로 만든 프로세스 그룹 전체에 SIGTERM (음수 pid = 그룹 시그널).
        process.kill(-dev.pid, 'SIGTERM');
      } catch {
        // 그룹 시그널이 실패하면 (권한/플랫폼 차이 등) 단일 프로세스만이라도 종료.
        dev.kill('SIGTERM');
      }
    }
  }
};

// 최상위 에러를 잡아 비정상 종료 코드로 빠져나감 (CI/스크립트 체이닝에서 중요).
main().catch((err) => {
  console.error(err);
  process.exit(1);
});
