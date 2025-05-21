---
title: '모바일 브라우저에서 띄운 웹페이지를 개발자 도구로 보는 방법'
description: '모바일 환경에서 웹 페이지를 테스트하고 디버깅하는 방법'
thumbnail: 'browser'
tag: 'browser'
createdAt: '2024-10-16'
---

# 모바일 브라우저에서 띄운 웹페이지를 개발자 도구로 보는 방법

## 안드로이드

1. 안드로이드 폰 개발자 설정을 한다. `설정 > 개발자 옵션 > USB 디버깅`을 켠다.
2. 안드로이드 폰을 맥과 연결한다.
3. 맥에서 개발 서버를 실행시켜 `http://localhost:3000`으로 접근할 수 있도록 한다.
4. 크롬 브라우저의 주소창에 다음을 입력한다. `chrome://inspect`
5. DevTools 페이지에서 Remote Target 아래에 장치가 잘 연결됐는지 확인한다. 오프라인이거나 잘 되지 않는 경우 USB를 뺐다 껴볼 수 있다.
6. Port forwarding 버튼을 클릭해서 localhost:3000으로 들어오는 요청을 localhost:3000으로 들어올 수 있도록 Port에 `3000`, IP address and port에 `localhost:3000`을 입력한다.
7. Enable port forwarding을 체크하고 Done을 클릭한다.
8. 모바일 브라우저에서 `http://localhost:3000`에 접속한다.
9. 맥 DevTools에서 `http://localhost:3000` 항목이 나타난다면 inspect를 클릭한다.
10. 디버깅 화면이 나타난다.

<br>

9번에서 안 될 때가 더러 있으니 여러가지 시도를 해봐야한다.

- 모바일 브라우저 껐다 켜기
- 모바일 브라우저의 모든 탭 지우기
- 모바일 브라우저에 `localhost:3000` 다시 입력

등의 각종 초기화 시도

## 아이폰

아래 링크로 대체

[아이폰에서 모바일 웹(사파리) 개발자모드 실행 방법](https://always-hyeppy.tistory.com/entry/%EC%95%84%EC%9D%B4%ED%8F%B0%EC%97%90%EC%84%9C-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9%EC%82%AC%ED%8C%8C%EB%A6%AC-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%AA%A8%EB%93%9C-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0#google_vignette)
