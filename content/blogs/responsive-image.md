---
title: '반응형 이미지 최적화'
description: '뷰포트에 적합한 이미지를 불러올 수 있도록 설정해야 이미지 로딩 성능을 개선할 수 있다.'
thumbnail: 'browser'
tag: 'browser'
createdAt: '2024-04-16'
---

# 반응형 이미지 최적화

뷰포트에 적합한 이미지를 불러올 수 있도록 설정해야 이미지 로딩 성능을 개선할 수 있다.\
반응형 이미지를 설정하는 방법에 대해서 다룬다.

## 전제 조건

일부 브라우저에서는 뷰포트의 너비를 제대로 측정하지 않는 경우가 있기 때문에 아래의 meta 태그가 head 안에 포함되어야 한다.

```xml
<meta name="viewport" content="width=device-width">
```

## Img Element

### 1. 뷰포트에 맞는 이미지 선택

```xml
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy" />
```

- srcset
  - `elva-fairy-480w.jpg`라는 파일의 원본 width는 `480px`임을 알려준다.
- sizes
  - 뷰포트의 너비가 `600px`이하일 때 `480px`의 이미지가 채워져야 함을 알려준다.
  - 뷰포트 조건에 해당하지 않는 경우 `800px`의 이미지가 채워져야 함을 알려준다.
  - srcset을 설정해야 작동하고 `2x`과 같은 단위가 아닌 `480w` 따위의 값을 넣어야 된다.
- src
  - 브라우저에서 지원하지 않는 경우 fallback 이미지를 설정한다.

### 2. 해상도에 맞는 이미지 선택 (같은 사이즈일 때)

```xml
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy" />
```

- `320px` width의 이미지. (CSS에서 별도로 style을 설정해줘야 함)
- sizes는 필요없다.
- 디스플레이의 해상도에 따라서 알아서 이미지를 선택한다.

## Picture Element

아래의 경우에 picture를 쓴다.

- 아트 디렉션 (Art Direction)
  - 다양한 레이아웃에 맞는 잘린 이미지 제공
- 다양한 이미지 포맷 제공
  - 특정 이미지 포맷을 지원하지 않을 경우 대체 이미지를 넣을 수 있음
  - 구형 브라우저는 avif 또는 webp를 지원하지 않는 경우가 있음
- 디스플레이에 가장 적합한 이미지를 선택 → 성능 개선

### 1. 뷰포트에 맞는 이미지 선택

```xml
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

- 뷰포트가 `799px` 이하인 경우 첫 번째 source를 선택, 아니면 두 번째 source를 선택
- `</picture>` 바로 앞에 `<img>`를 넣어야 이미지가 표시됨
- `<img>`의 src는 media 조건에 해당하는 게 없는 경우
- media는 아트 디렉션에서만 사용해야하고 sizes와 같이 쓰면 안 됨

### 2. 해상도에 맞는 이미지 선택 (같은 사이즈일 때)

```xml
<picture>
  <source srcset="logo.png, logo-1.5x.png 1.5x" />
  <img src="logo.png" alt="MDN Web Docs logo" height="320" width="320" />
</picture>
```

- 해상도 `1x`에서는 `logo.png`를, 해상도 `1.5x`에서는 `logo-1.5x.png`를 선택

### 3. 브라우저에서 지원하는 포맷의 이미지 선택

```xml
<picture>
  <source srcset="photo.avif" type="image/avif" />
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="photo" />
</picture>
```

- type을 이용해서 user agent가 지원하지 않는 경우 스킵하도록 할 수 있음
- avif와 webp를 지원하지 않는 브라우저의 경우 `<img>`를 선택

## Nextjs에서 picture 활용하기

getImageProps를 이용해서 아래와 같이 쓸 수 있다.

```javascript
import { getImageProps } from 'next/image';

export default function Home() {
  const common = { alt: 'Art Direction Example', sizes: '100vw' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: '/desktop.jpg',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1334,
    quality: 70,
    src: '/mobile.jpg',
  });

  return (
    <picture>
      <source media="(min-width: 1000px)" srcSet={desktop} />
      <source media="(min-width: 500px)" srcSet={mobile} />
      <img {...rest} style={{ width: '100%', height: 'auto' }} />
    </picture>
  );
}
```

https://nextjs.org/docs/app/api-reference/components/image#getimageprops

## References

- https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
