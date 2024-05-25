---
title: '프론트엔드 웹 페이지 성능 개선 방법'
description: '웹 페이지의 성능 개선은 눈에 띄지는 않지만 중요한 문제다. 페이지 로딩 속도가 빨라질수록 사용자의 이탈율은 떨어지고 전환율이 올라간다는 연구 결과가 있다. 구글 검색엔진도 속도가 빠른 웹 사이트를 높은 순위에 둔다고 한다. 결국 비즈니스의 성공에 중요한 지표 중 하나가 된다. 여기서는 프론트엔드에서 웹 페이지의 성능 개선 방법에 대해서 다룬다.'
thumbnail: 'browser'
tag: 'browser'
createdAt: '2023-12-14'
---

# 프론트엔드 웹 페이지 성능 개선 방법

웹 페이지의 성능 개선은 눈에 띄지는 않지만 중요한 문제다.\
페이지 로딩 속도가 빨라질수록 사용자의 이탈율은 떨어지고 전환율이 올라간다는 연구 결과가 있다.\
구글 검색엔진도 속도가 빠른 웹 사이트를 높은 순위에 둔다고 한다.\
결국 비즈니스의 성공에 중요한 지표 중 하나가 된다.\
여기서는 프론트엔드에서 웹 페이지의 성능 개선 방법에 대해서 다룬다.

## 성능 측정 지표

먼저 성능 상태가 어떤지를 확인할 수 있는 지표에 대해서 알아야 한다.\
구글에서는 사용자 경험을 개선하기 위한 지표로 Core Web Vitals를 제시한다.\
여기에는 LCP, INP, CLS가 있다.\
그밖에 TTFB와 TTI도 다룬다.

### 1. LCP(Largest Contentful Paint)

사용자에게 보여주는 가장 큰 영역의 콘텐츠가 얼마나 빨리 나타나는지를 측정한다.\
페이지 로딩이 다 되었다는 인상에 가장 큰 영향을 주기 때문에 지표로 삼는 것이다.\
사용자가 페이지 방문시 처음으로 겪는 경험이기도 하다.\
보통은 이미지가 이에 해당한다.

- 양호: 2.5s 미만
- 심각: 4s 초과

### 2. INP(Interaction to Next Paint)

사용자가 클릭 등의 액션을 했을 때 UI의 변화가 생기기까지의 시간을 말한다.

- 양호: 200ms 미만
- 심각: 500ms 초과

### 3. CLS(Cumulative Layout Shift)

레이아웃 쉬프트 현상이 얼마나 일어나는지를 측정한다.\
네트워크 요청의 시간 차이로 인해서 중간 콘텐츠가 뒤늦게 끼어들어 레이아웃이 껑충 뛰는 현상이 나타나면 사용자 경험에 좋지 않다.\
레이아웃 쉬프트가 발생하지 않으면 시각적 안정성도 생긴다.

- 양호: 0.1 미만
- 심각: 0.25 초과

### 4. TTFB(Time to First Byte)

웹 페이지 요청 후 첫 번째 리소스를 받기까지의 시간을 말한다.\
백엔드에 문제가 있음을 알 수 있는 지표다.

- 양호: 800ms 미만
- 심각: 1800ms 초과

### 5. TTI(Time to Interactive)

페이지 인터렉션을 완전히 할 수 있을 때까지 걸리는 시간을 말한다.\
사용자에게 유용한 정보를 표시하면서도 대부분의 이벤트 핸들러가 등록되는 시점을 측정한다.

- 양호: 3.8s 미만
- 심각: 7.3s 초과

### 6. 네트워크 요청수와 페이지 크기

## 속도 측정 툴

### 1. Lighthouse

크롬의 개발자 도구에서 간단하게 쓸 수 있다.\
크롬 익스텐션 등을 빼고 테스트하기 위해 시크릿 모드에서 실행시키는 게 좋다.

### 2. Pagespeed insights

https://pagespeed.web.dev

### 3. Chrome UX Report

### 4. Web Vitals JS

크롬 이외의 브라우저에서도 측정하기 위해서 쓴다.

### 5. Performance Insight

크롬 개발자 도구에 새로 나온 기능

## 속도 개선 방법

### Text Content 압축

- network 탭에서 big requests row로 설정하면 size 칼럼에 압축된 사이즈와 원본 사이즈를 비교할 수 있다.
- 동일한 경우 압축이 안 된 것이고 헤더 속성 중 Content-Encoding이 설정되지 않은 경우에도 그렇다.
  - Content-Encoding은 `gzip`, `deflate`, `br` 중 하나로 지정되어 있어야 한다.\
    https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Content-Encoding#Directives
- 이미지에는 잘 적용되지 않는다.
- 적용 방법 예제

```javascript
const fs = require('fs');
const compression = require('compression');

app.use(compression());
app.use(express.static('build'));
```

### 이미지 크기 조절

- 빌드할 때에 자동으로 리사이즈 되도록
- srcset을 이용해서 뷰포트나 기기에 맞는 이미지를 불러올 수 있도록
- 요청 시 이미지 크기를 동적으로 조정할 수 있는 이미지 CDN 사용
- 프로그램을 이용한 이미지 최적화

https://developer.chrome.com/docs/devtools/lighthouse?hl=en#images

### 렌더링 차단 리소스 제거

- 브라우저가 페이지를 렌더링하기 위해서 필요한 js와 css 파일을 최소한으로 해야한다.
- 이를 위해서 페이지 로드시 실행할 필요가 없는 코드를 줄인다.

  - 라이트하우스에서 **Eliminate render-blocking resources** 항목을 참고한다.
  - `cmd + shift + p` 를 눌러 show coverage를 선택한다.\
    → coverage tab이 나타난다.
  - reload를 하면 사용하고 있지 않은 코드가 몇 퍼센트인지, 어떤 코드인지를 확인할 수 있다.

- 제거해도 상관없는지 확인하는 방법
  - `cmd + shift + p` 를 눌러 show Network request blocking을 선택한다.\
    → Network request blocking 탭이 나타난다.
  - \+ 버튼을 클릭해서 차단할 리소스의 패턴을 입력한다.
  - 리로드하면 network 탭에서 status가 `blocked:devtools` 가 된 것을 볼 수 있다.
  - 이 상태에서 페이지 로딩에 문제가 없다면 지워도 상관없다는 의미다. 또는 lazy loading으로 처리

https://developer.chrome.com/docs/devtools/lighthouse?hl=en#render

### 메인 스레드의 작업을 줄이기

- 성능 탭의 톱니바퀴 아이콘에서 아래와 같이 설정하여 성능이 느린 모바일을 흉내낸다.
  - CPU: 6x slowdown
  - Network: Slow 3G
- reload 버튼 클릭
  - network row와 main row를 보면서 어떤 부분에 문제가 있는지 파악한다.

https://developer.chrome.com/docs/devtools/lighthouse?hl=en#main

## 코어 웹바이탈별 속도 개선 방법

### 1. LCP

거대한 resource를 최대한 빨리 받는 게 관건이다.

- 브라우저가 LCP resource를 HTML에서 빨리 발견하도록 해야 한다.
  - CSS에서 background 이미지를 불러올 경우 CSS를 다운 받을 때까지 이미지를 발견하지 못한다.
- 우선적으로 다운 받을 수 있도록 해야 한다.
- CDN을 이용해서 근거리에서 받는다.
- CSR보다 SSR을 이용하면 HTML에 바로 접근할 수 있다.
- 외부 리소스를 이용하는 경우 `<link rel="preload">`를 이용할 수 있다.
  - `<link rel="preload" as="image" media="(max-width: 1200px)" href=" ...`
- `<img fetchpriority="high">`를 이용해서 우선적으로 다운로드 할 수 있다.
- 바로 보이는 이미지가 아닌 경우 `<img loading="lazy">`를 이용해서 첫 로딩 리소스를 줄일 수 있다.
- `<script>`에 `async`나 `defer`를 붙여 blocking을 없앤다.

### 2. FID (First Input Delay, 이전 core web vital)

- 자바스크립트는 싱글 스레드이기 때문에 blocking이 생기지 않도록 태스크를 잘게 쪼개는 게 좋다.
  - 예를 들어 핵심 .js만 먼저 다운 받는다.
- 불필요한 자바스크립트를 줄인다.
  - 크롬 개발자 도구의 coverage tool로 확인 가능하다.
- 큰 렌더링 업데이트를 피한다.
- code splitting
- 메인 스레드에 리소스를 양보하는 yielding 등을 적용해보자.
- 과도한 마케팅 분석 태그들이 속도를 저하시킬 수 있다.
  - 중요하지 않은 태그는 삭제
- requestAnimationFrame을 과도하게 사용하지 않는다.
  - 큰 렌더링 업데이트를 한다.
  - 중요하지 않은 화면에서는 사용하지 않는다.
- DOM 사이즈를 줄인다.

### 3. CLS

- 콘텐츠의 사이즈를 명시한다.
- 첫 로딩시에는 애니메이션을 지양한다.
- 요즘 브라우저에는 기본적으로 bfcache가 적용되는데 뒤로가기와 앞으로 가기를 할 때에 이로 인한 캐싱이 잘 적용되는지 확인한다.
- `aspect-ratio`를 쓴다.
- 레이아웃 시프트가 덜 일어나도록 `min-height`를 쓴다.

## References

- https://www.youtube.com/watch?v=BEwv4to9OWY
