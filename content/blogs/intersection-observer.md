---
title: 'Intersection Observer API 사용 방법'
description: 'Intersection Observer API를 쉽게 사용할 수 있도록 정리한다.'
thumbnail: 'browser'
tag: 'browser-api'
createdAt: '2024-01-10'
---

# Intersection Observer API 사용 방법

`IntersectionObserver`를 이용하면 element가 viewport에 보이는지 안 보이는지에 따라 이벤트를 동작하도록 할 수 있다.

## 단독 Element 관찰

```javascript
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      // viewport에 보일 때
      if (entry.isIntersecting) {
        // backgroundColor를 바꾼다.
        entry.target.style.backgroundColor = 'tomato';
      }
    });
  },
  {
    // element가 반절 보일 때 동작한다.
    // 기본값은 0이고 이때에는 조금이라도 보이면 동작한다.
    threshold: 0.5,
  }
);

const target = document.querySelector('#item'); // 이벤트를 적용할 element
observer.observe(target);
```

https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API

## 여러 Element 관찰

```javascript
// IntersectionObserver 등록
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // element가 viewport 안으로 들어오면 active 클래스 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
    }
    // 아니면 active 클래스 제거
    else {
      entry.target.classList.remove('active');
    }
  });
});

// 관찰 대상 element
const boxElements = document.querySelectorAll('.box');
// 관찰 시작
boxElements.forEach(element => {
  observer.observe(element);
});
```

https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/observe#%EC%98%88%EC%A0%9C

## 관찰 해제

```javascript
const observer = new IntersectionObserver(callback);
observer.observe(document.getElementById('elementToObserve'));

// ...

observer.unobserve(document.getElementById('elementToObserve'));
```

https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver/unobserve#%EC%98%88%EC%A0%9C

## rootMargin

- css margin과 유사한 스펙
- 반드시 px이나 %를 단위로 사용
- root에 아무런 설정을 하지 않아서 뷰포트가 root인 경우 뷰포트 보다 좁은 영역에서 observing이 이뤄지게 하려면 아래처럼 음수를 사용한다.

```javascript
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      // ...
    });
  },
  {
    // 뷰포트의 top에서부터 50px까지의 영역은 제외된다.
    // 순서대로 top, right, bottom, left
    rootMargin: '-50px 0px 0px 0px',
  }
);
```

https://heropy.blog/2019/10/27/intersection-observer/
