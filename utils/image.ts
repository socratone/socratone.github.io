/* eslint-disable no-console */
import path from 'path';
import sharp from 'sharp';

type ResizeAndConvertImageParams = {
  /** 변환하고자 하는 이미지 경로 */
  inputFilePath: string;
  /**
   * 출력될 폴더 경로
   * 생략된 경우 inputFilePath의 부모 폴더로 설정
   */
  outputFolderPath?: string;
  width: number;
};

export async function resizeAndConvertImage({
  inputFilePath,
  outputFolderPath,
  width,
}: ResizeAndConvertImageParams) {
  try {
    // 파일 정보 가져오기
    const fileInfo = path.parse(inputFilePath);

    // 입력 파일 읽기
    const image = sharp(inputFilePath);

    // 원본 이미지 메타데이터 읽기
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error('Invalid metadata.');
    }

    // 높이 비율 계산
    const height = Math.round(metadata.height * (width / metadata.width));

    // 출력 파일 이름 생성
    const outputFileName = `${fileInfo.name}-${width}w.webp`;
    const outputPath = path.join(
      outputFolderPath ?? fileInfo.dir,
      outputFileName
    );

    // 이미지 리사이즈 및 webp로 변환 후 저장
    await image.resize(width, height).toFormat('webp').toFile(outputPath);

    console.log(`Image resized and converted successfully: ${outputPath}`);
  } catch (error: any) {
    console.error(`Error resizing and converting image: ${error.message}`);
  }
}
