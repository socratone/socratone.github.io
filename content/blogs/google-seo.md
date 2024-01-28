---
title: '구글 검색엔진 최적화'
description: '구글 검색엔진 최적화를 위한 모든 정보를 기록한다.'
thumbnail: 'browser'
tag: 'browser'
createdAt: '2024-01-27'
---

# 구글 검색엔진 최적화

구글 검색엔진 최적화를 위한 모든 정보를 기록한다.

## 검색엔진 등록 원리

구글 검색엔진에서 무엇인가를 검색하면 구글 검색엔진 데이터베이스에 저장된 데이터들을 가져와 보여주게 된다.\
어떻게 이 데이터베이스에 정보들이 기록되는지에 대해 알아야 한다.

### 1. 크롤링 (Crawling)

구글은 정보를 수집하기 위해 **Googlebot**을 이용해서 지속적으로 업데이트된 페이지와 새로 생긴 페이지를 파악한다. 이를 **크롤링**이라고 한다.\
새로 생긴 페이지는 기존에 저장해둔 페이지의 링크를 통해서 발견한다.\
또는 사이트 소유자가 제출한 사이트맵을 통해서도 파악할 수 있다.

그렇다고 모든 페이지를 다 등록하는 것은 아니다.\
robots.txt나 noindex 등의 설정에 따라서 등록하지 않는 경우도 있다.

사용자가 브라우저를 이용해서 페이지에 접근하는 것과 유사하게 크롤링 중에는 최신 버전의 크롬 브라우저를 이용하여 페이지를 렌더링하고 자바스크립트를 실행한다.\
따라서 클라이언트 사이드 렌더링의 내용도 크롤링에 어느정도 반영된다고 할 수는 있겠다.\
(그러나 가능하면 서버 사이드 렌더링으로 페이지를 찍어내는 게 SEO의 정석)

https://developers.google.com/search/docs/fundamentals/how-search-works?hl=ko#crawling

### 2. 색인 생성 (Indexing)

페이지를 크롤링한 이후 구글은 페이지의 내용이 무엇인지를 분석하는데 이를 **indexing**이라고 한다.\
이 과정에서 중복 페이지가 있는 경우 검색결과에 보여줄 대표 페이지(표준 페이지)를 선정한다.\
사이트 관리자 측에서 표준 페이지의 url을 명시할 수도 있다.

https://socratone.github.io/blogs/canonical

표준 페이지로 선정되지 않은 페이지는 모바일 장치와 같은 특별한 환경에서 대체해서 보여줄 수 있다.

https://developers.google.com/search/docs/fundamentals/how-search-works?hl=ko#indexing

### 3. 검색결과

사용자가 검색어를 입력하면 퀄리티가 좋고 사용자의 검색어와 가장 관련성이 높은 결과를 보여준다.\
사용자의 위치, 장치(데스크톱, 모바일) 등의 많은 요인으로 결정된다.

https://developers.google.com/search/docs/fundamentals/how-search-works?hl=ko#serving

## Title

- 각 페이지에 고유하고 정확한 제목을 넣어야 한다.

```xml
<title>Brandon's Baseball Cards - Buy Cards, Baseball News, Card Prices</title>
```

https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#uniquepagetitles

- 검색 결과에 제일 크게 나타나므로 사용자의 시선을 끌 수 있는 제목이어야 한다.\
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#goodtitlesandsnippets

- 짧으면서도 명확한 정보를 제공해야 한다.\
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#use-brief,-but-descriptive-title-elements

## Description

title과 마찬가지로 검색결과에 표시되기 때문에 중요하다.\
그러나 구글은 description 보다 더 적합한 내용이 있다고 판단될 경우 이를 보여주기도 한다.

https://developers.google.com/search/docs/appearance/snippet?hl=ko#meta-descriptions

- 사용자에게 정보를 잘 전달하고 흥미를 끌 수 있게 작성
- 검색결과에 꽉차게 표시될 정도의 길이로 작성

## Heading

- 꼭 필요한 부분에만 추가\
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#use-headings-sparingly-across-the-page

## 구조화된 데이터 (Structured Data)

구조화된 데이터를 이용하면 검색결과의 아이템 형태를 다르게 할 수 있다.\
텍스트 이외에 이미지 등을 넣을 수 있어 보다 이해하기 쉬운 정보를 제공할 수 있다.

https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=ko

- [리치 검색결과 테스트](https://search.google.com/test/rich-results?hl=ko)
- [데이터 하이라이터](https://www.google.com/webmasters/data-highlighter/sources?siteUrl=https://socratone.github.io/&hl=ko)
- [구조화된 데이터 마크업 도우미](https://www.google.com/webmasters/markup-helper/?hl=ko)

## 사이트 계층 구조

- url은 검색결과에 표시되기 때문에 간단하게 만드는 게 좋음\
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#urlsshowninsearchresults

https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#hierarchy

## Nofollow

기본적으로 링크를 넣은 사이트의 평판에 어느 정도 영향을 받기 때문에 이를 원하지 않는다면 **nofollow**를 추가해야 한다.\
사용자가 추가한 댓글에 링크가 오는 경우 넣을 수 있겠다.

https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko#linkwithcaution

## 이미지 사이트맵

https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps?hl=ko

## 콘텐츠

아무리 SEO 설정이 잘 되어 있다고 해도 콘텐츠가 부실하면 소용없다.\
아래 링크를 참고해서 페이지가 제공하는 콘텐츠를 점검해보자.

https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=ko
