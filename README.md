# Socratone.github.io

Next.js 기반 개발 블로그. 블로그 포스트 콘텐츠를 MDX로 관리한다.

## Getting Started

```bash
yarn dev
```

`dev` 스크립트는 실행 전 `blogs-metadata` 스크립트를 자동으로 먼저 실행한다.

## Scripts

### blogs-metadata

블로그 포스트 메타데이터를 `generated/` 폴더에 생성한다. `yarn dev` 실행 시 자동으로 호출되며, 콘텐츠를 추가하거나 수정한 뒤 별도로 실행할 수도 있다.

```bash
yarn blogs-metadata
```

### optimize-thumbnail-image

썸네일 이미지를 WebP로 변환하고 지정된 크기로 최적화한다. 썸네일 이미지를 추가하거나 교체했을 때 실행해야 한다.

```bash
yarn optimize-thumbnail-image
```

세 가지 카테고리(blogs, doctrines, lifehacks)의 썸네일을 한 번에 처리하며, 각각 96px, 192px 크기로 생성한다.

### sitemap

정적 빌드 결과물(`out/`)을 기반으로 `sitemap.xml`을 생성한다. `next build` 이후에 실행해야 한다.

```bash
yarn sitemap
```

### test

Jest 기반 유닛 테스트를 실행한다.

```bash
yarn test
```

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Language**: TypeScript
- **UI**: MUI (Material UI) + Emotion
- **Content**: MDX (gray-matter, highlight.js)
- **Search**: Fuse.js
- **Test**: Jest + Testing Library
