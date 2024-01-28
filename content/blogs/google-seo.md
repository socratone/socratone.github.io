---
title: '구글 검색엔진 최적화'
description: '구글 검색엔진 최적화를 위한 모든 정보를 기록한다.'
thumbnail: 'browser'
tag: 'browser'
createdAt: '2024-01-27'
---

# 구글 검색엔진 최적화

구글 검색엔진 최적화를 위한 모든 정보를 기록한다.

## 기술

### 검색엔진 등록 원리

구글 검색엔진에서 무엇인가를 검색하면 구글 검색엔진 데이터베이스에 저장된 데이터들을 가져와 보여주게 된다.\
어떻게 이 데이터베이스에 정보들이 기록되는지에 대해 알아야 한다.

#### 1. 크롤링 (Crawling)

구글은 정보를 수집하기 위해 `Googlebot`을 이용해서 지속적으로 업데이트된 페이지와 새로 생긴 페이지를 파악한다. 이를 크롤링이라고 한다.\
새로 생긴 페이지는 기존에 저장해둔 페이지의 링크를 통해서 발견한다.\
또는 사이트 소유자가 제출한 사이트맵을 통해서도 파악할 수 있다.

그렇다고 모든 페이지를 다 등록하는 것은 아니다.\
robots.txt나 noindex 등의 설정에 따라서 등록하지 않는 경우도 있다.

사용자가 브라우저를 이용해서 페이지에 접근하는 것과 유사하게 크롤링 중에는 최신 버전의 크롬 브라우저를 이용하여 페이지를 렌더링하고 자바스크립트를 실행한다.\
따라서 클라이언트 사이드 렌더링의 내용도 크롤링에 어느정도 반영된다고 할 수는 있겠다.\
(그러나 가능하면 서버 사이드 렌더링으로 페이지를 찍어내는 게 SEO의 정석)

https://developers.google.com/search/docs/fundamentals/how-search-works?hl=ko#crawling

#### 2. 색인 생성 (Indexing)

페이지를 크롤링한 이후 구글은 페이지의 내용이 무엇인지를 분석하는데 이를 `indexing`이라고 한다.\
이 과정에서 중복 페이지가 있는 경우 검색결과에 보여줄 대표 페이지(표준 페이지)를 선정한다.\
사이트 관리자 측에서 표준 페이지의 url을 명시할 수도 있다.

https://socratone.github.io/blogs/canonical

표준 페이지로 선정되지 않은 페이지는 모바일 장치와 같은 특별한 환경에서 대체해서 보여줄 수 있다.

https://developers.google.com/search/docs/fundamentals/how-search-works?hl=ko#indexing

#### 3. 검색결과

사용자가 검색어를 입력하면 퀄리티가 좋고 사용자의 검색어와 가장 관련성이 높은 결과를 보여준다.\
사용자의 위치, 장치(데스크톱, 모바일) 등의 많은 요인으로 결정된다.

https://developers.google.com/search/docs/fundamentals/how-search-works?hl=ko#serving

## 콘텐츠

아무리 SEO 설정이 잘 되어 있다고 해도 콘텐츠가 부실하면 소용없다.
