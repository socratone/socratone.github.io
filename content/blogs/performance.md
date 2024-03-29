---
title: '프론트엔드 성능 개선'
description: '프론트엔드 개발자로서 앱의 성능을 개선하기 위해서 어떤 부분을 고려해야 하는지를 다룬다.'
thumbnail: 'browser'
tag: 'browser'
createdAt: '2023-12-14'
---

# 프론트엔드 성능 개선

프론트엔드 개발자로서 앱의 성능을 개선하기 위해서 어떤 부분을 고려해야 하는지를 다룬다.

## 성능 개선을 해야하는 이유

- 사용자 경험을 개선하기 위해
  - 속도가 사용자 경험에 큰 영향을 준다.
  - 구매를 유도하게 된다.
- 로딩이 느려지면 이탈이 발생 한다.
- SEO가 좋아진다.

## 속도의 지표

구글에서 CWV(Core Web Vitals)를 기준으로 성능을 측정한다. 이에 따라 검색 순위에도 영향을 주기 때문에 더욱 유의미하다.\
첫 로딩에만 집중한다는 특징이 있다.\
여기에는 다음 세 가지 지표가 있다.

### 1. LCP(Largest Contentful Paint)

사용자에게 보여주는 가장 큰 영역의 콘텐츠가 얼마나 빨리 나타나는지를 측정한다.\
보통은 이미지가 가장 큰 영역을 차지한다.

### 2. FID(First Input Delay)

사용자가 클릭 등의 액션을 했을 때 얼마나 빨리 반응하는지를 측정한다.

### 3. CLS(Cumulative Layout Shift)

로딩 중 화면의 흔들림이 없는지를 측정한다.\
네트워크 요청의 차이로 인해서 중간 콘텐츠가 뒤늦게 끼어들어 레이아웃이 껑충 뛰는 현상이 나타나면 안 된다.

덧붙여 첫 로딩이 아닌 평균값을 측정하는 INP라는 지표도 요새 나왔다고 한다.

## 속도 측정 툴

### 1. Lighthouse

크롬의 개발자 도구에서 간단하게 쓸 수 있다.\
크롬 익스텐션 등을 빼고 테스트하기 위해 시크릿 모드에서 실행시키는 게 좋다.

### 2. Chrome UX Report

### 3. Pagespeed insights

https://pagespeed.web.dev

### 4. Web Vitals JS

크롬 이외의 브라우저에서도 측정하기 위해서 쓴다.

### 5. Performance Insight

크롬 개발자 도구에 새로 나온 기능

## 속도 개선 방법

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

### 2. FID

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
