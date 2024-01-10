---
title: 'NextJS 앱 라우터 마이그레이션'
description: 'NextJS 페이지 라우터에서 앱 라우터로 마이그레이션 할 때 필요한 정보들을 기록한다.'
thumbnail: 'nextjs'
tag: 'nextjs'
createdAt: '2024-01-09'
---

# NextJS 앱 라우터 마이그레이션

Google Search Console에 문제가 발생해서 metadata를 손쉽게 설정할 수 있는 NextJS 앱 라우터로 마이그레이션을 하게 되었다.\
다시 동일한 작업을 한다고 가정했을 때 유념해야 할 점들을 기록해 둔다.

## 기본 폴더 구조

기존의 `/pages`가 아닌 `/app`에 각 url의 페이지를 두는 방식이다.
`index.tsx`가 `page.tsx`로 대체되고 보통 `Layout` 컴포넌트로 페이지를 감싸는 것처럼 같은 위치에 `layout.tsx`를 둘 수 있다.\
`layout.tsx`에서는 `page.tsx`를 감싸는 provider를 넣거나 `Header` 컴포넌트 등을 넣을 수 있다.\
자식 라우트에 `layout.tsx`를 추가하더라도 조상과 중첩되서 적용된다.\
때문에 최상단 `layout.tsx`에 페이지 라우터의 `_app.tsx`와 `_document.tsx`의 내용을 옮겨 넣으면 된다.

https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

이렇게 `page`와 `layout`이라는 예약어가 정해져있기 때문에 예를 들어 `constants.ts` 등과 같은 파일들을 따로 빼지 않고 함께 넣을 수 있게 되었다.

https://nextjs.org/docs/app/building-your-application/routing

### Root Layout

모든 라우트에 골격이 되는 `html`이나 `body` 태그가 적용되도록 최상단 `layout.tsx`를 다음과 같이 설정해야 한다.

```javascript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 서버 컴포넌트와 클라이언트 컴포넌트

`/pages`는 클라이언트 컴포넌트였지만 `/app`에 있는 페이지들은 기본적으로 서버 컴포넌트다.\
여전히 `getServerSideProps`와 같이 서버 코드가 돌아가야할 부분과 클라이언트 코드가 돌아가야할 부분이 구분돼야 하기 때문에 마이그레이션시 아래와 같이 나누는 것을 권장한다.

- `/app/home-page.tsx`
  - 서버 컴포넌트
- `/app/page.tsx`
  - 클라이언트 컴포넌트
  - `'use client'`를 제일 위에 명시

파일의 첫 번째 줄에 `'use client'`라고 명시하면 client 컴포넌트가 된다.\
context provider의 경우 client 컴포넌트에 위치해야 한다.

https://nextjs.org/docs/app/building-your-application/rendering/client-components

(🚧 TODO: 리액트 서버 컴포넌트와 클라이언트 컴포넌트에 대해서)

## getS\*\*Props

NextJS를 처음 접하면 다소 괴상해 보일 수 있는 `getStaticProps`, `getServerSideProps`, `getStaticPaths`가 사라지고 단순하게 처리할 수 있게 되었다.

### getServerSideProps

React의 서버 컴포넌트를 이용하게 되면서 컴포넌트 내부에서 데이터를 불러올 수 있게 되었다.\
`cache` 옵션을 `no-store`로 설정하면 `getServerSideProps`처럼 요청할 때마다 새로운 데이터가 적용된 페이지를 얻을 수 있다.\
아래와 같이 `getServerSideProps`를 대신해서 사용한다.

```javascript
async function getProjects() {
  const res = await fetch(`https://...`, { cache: 'no-store' });
  const projects = await res.json();

  return projects;
}

export default async function Dashboard() {
  const projects = await getProjects();

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}
```

### getStaticProps

이와 반대로 `getStaticProps`처럼 빌드 시점에서 미리 페이지를 찍어내려면 `cache` 옵션에 아무것도 넣지 않는다.\
기본값이 `force-cache`다.

### getStaticPaths

`getStaticPaths`는 `generateStaticParams`로 대체됐다.\
`layout.tsx`에서도 사용할 수 있게 되었다.\
`getStaticPaths`에서 `fallback` 옵션을 활성화하면 빌드 시점에 페이지를 생성해 두지 않고 라이브에서 요청을 받았을 때 각각 생성할 수 있었다.\
그러나 이제는 `fallback` 옵션이 기본으로 설정되고 아래에서 바꿀 수 있다.

https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams

## fetch

ISR을 위해 아래처럼 revalidate 옵션을 넣을 수 있다.

```javascript
async function getPosts() {
  const res = await fetch(`https://.../posts`, { next: { revalidate: 60 } });
  const data = await res.json();

  return data.posts;
}
```

https://nextjs.org/docs/app/api-reference/functions/fetch

(🚧 TODO: fetch 상세 스펙, cache 활용법)

## metadata

`next/head`를 이용한 방법 대신 각 페이지마다 데이터를 받아서 metadata를 설정할 수 있게 되었다.\
`next-seo` 같은 라이브러리를 안 써도 된다.

https://nextjs.org/docs/app/api-reference/functions/generate-metadata

https://nextjs.org/docs/app/building-your-application/optimizing/metadata

## useRouter

`useRouter`의 기능이 쪼개졌다.\
`pathname`을 알고 싶으면 `usePathname`을, query를 알고 싶으면 `useSearchParams`를 쓰자.

```javascript
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  // ...
}
```

### Search Params 변경 방법

[`URLSearchParams`](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams)을 이용해서 아래처럼 `params.set`이나 `params.delete` 등으로 search params를 업데이트 할 수 있다.

```javascript
export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page);
    params.delete('tag');
    const newParams = params.toString();
    router.push(pathname + '?' + newParams);
  };

  // ...
}
```
