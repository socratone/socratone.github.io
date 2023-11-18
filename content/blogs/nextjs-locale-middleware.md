---
title: 'NextJS를 이용해서 나라별로 다른 페이지를 보여주는 방법'
description: 'NextJS의 middleware와 locale을 이용한다.'
thumbnail: 'nextjs'
tag: 'nextjs'
createdAt: '2023-11-16'
---

# NextJS를 이용해서 나라별로 다른 페이지를 보여주는 방법

랜딩 페이지에 나라별로 다른 언어 또는 다른 페이지를 보여줘야 한다면 locale을 사용할 수 있다.\
locale과 middleware를 활용한 방법을 다루겠다.

## 준비물

다음은 middleware를 이용해서 국가를 식별할 수 있는 앱이다.

https://edge-functions-geolocation.vercel.sh/

이 앱을 이용해서 자신의 나라가 아닌 다른 나라가 보이도록 테스트하려면 VPN을 이용한다.\
필자는 싱가폴이 포함된 다음 크롬 확장팩을 이용해서 테스트했다.

https://chromewebstore.google.com/detail/vpn-freepro-free-unlimite/bibjcjfmgapbfoljiojpipaooddpkpai

## middleware.ts

server side에서 접속한 국가에 따라 다른 동작을 하게 하려면 middleware를 이용한다.\
middleware에서 request가 완료되기 전에 무엇인가를 할 수 있다.\
middleware에 대한 자세한 내용은 아래를 참고하자.

https://nextjs.org/docs/app/building-your-application/routing/middleware

위 링크에서 제공하는 예제는 다음과 같다.\
이 `middleware.ts`를 `/pages`나 `/app` 폴더와 같은 레벨에 둬야 한다.

```javascript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// '/about/**'을 '/home'으로 redirect 시킨다.
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

// 특정 경로에만 동작하도록 할 수 있다.
export const config = {
  matcher: '/about/:path*',
};
```

## next.config.js

next.config.js에서 i18n을 설정하면 손쉽게 locale에 따라 다른 페이지를 만들 수 있다.\
예를 들어 `i18n.locales: ['ko', 'en']`으로 하면 `/about`에 `/ko/about`과 `/en/about` 페이지를 빌드할 수 있다.

```javascript
// next.config.js

const nextConfig = {
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
};
```

## 실제 활용 코드

그러나 `default`라는 locale을 하나 만들고 `/about`으로 진입했을 때 한국이라면 `/ko/about`, 그렇지 않은 영어권의 나라라면 `/en/about`으로 하려는 게 목적이었고 `default`라는 locale을 하나 더 추가해줬다.

```javascript
// next.config.js

const nextConfig = {
  i18n: {
    locales: ['default', 'ko', 'en'],
    defaultLocale: 'default',
    localeDetection: false,
  },
};
```

그리고 middleware를 추가해준다.

```javascript
// middleware.ts

function parseCountryToLocale(country?: string) {
  switch (country) {
    case 'KO':
      return 'ko';

    case 'EN':
    default:
      return 'en';
  }
}

export function middleware(request: NextRequest) {
  const { geo, nextUrl } = request;
  // 사용자의 위치에 따라 locale 값을 가져옴
  const locale = parseCountryToLocale(geo?.country);

  // 'ko'나 'en'으로 정해지지 않은 경우
  if (nextUrl.locale === 'default') {
    // '/ko'나 '/en'을 앞에 붙여서 redirect
    const url = new URL(
      `/${locale}${nextUrl.pathname}${nextUrl.search}`,
      request.url
    );
    return NextResponse.redirect(url);
  }
}
```

`default` locale일 때에 country 값을 보고 locale을 계산한 뒤 URL의 제일 앞에 넣어준다.\
결국 `/`로 접속하면 사용자의 위치에 따라서 `/ko`나 `/en`이 되고 `/about`은 `/ko/about`이나 `/en/about`이 된다.\
그러면 `const { locale } = useRouter()`를 이용해서 `/ko`와 `/en`의 페이지를 다르게 보여줄 수 있다.
