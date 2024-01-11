---
title: '글로벌 사이트에 표준 URL을 설정하는 방법'
description: ''
thumbnail: 'browser'
tag: 'browser'
createdAt: '2024-01-11'
---

# 글로벌 사이트에 표준 URL을 설정하는 방법

하나의 콘텐츠를 보여주기 위해 다양한 버전의 페이지가 있을 수 있다.\
예를 들어 모바일 버전의 페이지, 해외 언어로 변역된 페이지가 있다.\
페이지마다 제각각 다른 url이 설정됐을 경우 검색엔진 입장에서 모두를 등록하는 것은 중복이기 때문에 대표로 할 수 있는 페이지를 정해야 한다.\
대표로 지정된 페이지의 url을 `표준 URL`이라고 한다.

구글 검색엔진이 대부분 알아서 판단해주지만 원하지 않게 설정되는 경우가 있기 때문에 코드로 명시해주는 것이 좋다.\
게다가 글로벌 서비스의 경우 한국, 영어 버전의 페이지가 있다면 검색엔진이 둘 중 하나를 표준 url로 지정해서 하나가 등록되지 않게 되는 문제가 발생할 수 있다.\
이를 해결하기 위해 웹페이지의 html에 어떤 것들을 설정해야 하는지 정리하겠다.

## rel="canonical"

검색엔진이 `<link rel="canonical" href=...`을 보면 현재 접근한 페이지가 href의 url과 동일한 콘텐츠를 가지고 있다는 것을 알려준다.\
그러므로 검색엔진은 url을 따로 등록할 필요 없이 href에서 명시한 페이지를 표준 url로 취급한다.\
아래는 `https://example.com/dresses/green-dresses`을 표준 url로 설정하는 예제다.

```xml
<html>
  <head>
    <title>Explore the world of dresses</title>
    <link rel="canonical" href="https://example.com/dresses/green-dresses" />
    <!-- other elements -->
  </head>
  <!-- rest of the HTML -->
</html>
```

https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=ko#rel-canonical-link-method

`hreflang`과 같이 사용하는 경우 같은 언어에 해당하는 url을 표준 url로 지정한다.

https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=ko#best-practices

## hreflang

글로벌 사이트를 구성한 경우 구글에게 각 언어권에 맞는 페이지 url이 무엇인지를 알려줘야 한다.\
hreflang 속성을 이용해서 모든 언어 버전의 페이지 url을 알려줄 수 있다.\
아래와 같은 형태로 모든 언어 버전의 url을 명시한다.

```xml
<link rel="alternate" hreflang="<lang_code>" href="<url_of_page>" />
```

https://developers.google.com/search/docs/specialty/international/localized-versions?hl=ko#html

- `lang_code`
  - 유효한 lang 코드는 아래 링크에서 확인
  - https://developers.google.com/search/docs/specialty/international/localized-versions?hl=en#language-codes
  - 또는 x-default를 넣을 수 있음
    - 매칭되는 언어가 없는 경우를 가리킴
- `url_of_page`
  - 이 언어에 해당되는 페이지의 full url을 가리킴

다음을 유념해서 작성한다.

- 모든 언어 버전에 해당하는 link를 작성해서 구글에게 알려줘야 함
- 이 link 리스트는 모든 언어 버전의 페이지에 동일하게 들어가야 함
- 자기 자신도 포함되어야 함

### 예제

`en-gb`, `en-us`, `en`, `de`에 해당하는 사용자는 설정된 페이지로 연결되고 나머지는 일반 홈페이지로 연결된다.

```xml
<head>
  <title>Widgets, Inc</title>
  <link
    rel="alternate"
    hreflang="en-gb"
    href="https://en-gb.example.com/page.html"
  />
  <link
    rel="alternate"
    hreflang="en-us"
    href="https://en-us.example.com/page.html"
  />
  <link rel="alternate" hreflang="en" href="https://en.example.com/page.html" />
  <link rel="alternate" hreflang="de" href="https://de.example.com/page.html" />
  <link rel="alternate" hreflang="x-default" href="https://www.example.com/" />
</head>
```

아래는 에어비앤비 html 일부다.

```xml
<link rel="canonical" href="https://www.airbnb.co.kr/"/>
<link rel="alternate" hrefLang="en" href="https://www.airbnb.com/"/>
<link rel="alternate" hrefLang="es-US" href="https://es.airbnb.com/"/>
<link rel="alternate" hrefLang="zh-US" href="https://zh.airbnb.com/"/>
<link rel="alternate" hrefLang="de" href="https://www.airbnb.de/"/>
<link rel="alternate" hrefLang="it" href="https://www.airbnb.it/"/>
<link rel="alternate" hrefLang="es-ES" href="https://www.airbnb.es/"/>
<link rel="alternate" hrefLang="fr" href="https://www.airbnb.fr/"/>
<link rel="alternate" hrefLang="pt" href="https://www.airbnb.com.br/"/>
<link rel="alternate" hrefLang="da" href="https://www.airbnb.dk/"/>
<link rel="alternate" hrefLang="en-GB" href="https://www.airbnb.co.uk/"/>
<link rel="alternate" hrefLang="ru" href="https://www.airbnb.ru/"/>
<link rel="alternate" hrefLang="pl" href="https://www.airbnb.pl/"/>
<link rel="alternate" hrefLang="ko" href="https://www.airbnb.co.kr/"/>

<!-- ... -->
```

## 사이트맵

`rel="canonical"`에 비해 검색엔진에 약하게 영향을 준다.
