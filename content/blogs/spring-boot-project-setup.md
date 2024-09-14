---
title: '스프링 부트 프로젝트 설정'
description: '스프링 부트 프로젝트를 설정하는 방법에 대해서 다룬다.'
thumbnail: 'spring'
tag: 'spring'
createdAt: '2024-09-15'
---

# 스프링 부트 프로젝트 설정

스프링 부트 프로젝트를 설정하는 방법에 대해서 다룬다.

## 자바 개발 환경 설정

먼저 자바가 설치되어 있어야 한다.\
아래를 참고하자.

[/blogs/java-setup](/blogs/java-setup)

## 프로젝트 생성

아래 링크에서 스프링 프로젝트 코드를 손쉽게 생성할 수 있다.\
https://start.spring.io/

다음과 같이 설정하자.

- **Project**: `Maven`
- **Language**: `Java`
- **Spring Boot**: SNAPSHOT(개발 버전)이 아닌 최신 버전
- **Project Metadata**
  - Group: 그룹 아이디 설정 (예: `com.socratone`)
  - Artifact: 아티팩트 아이디 설정 (예: `spring-boot-restful-api`)
  - Java: 최소 17 버전 이상
- **Dependencies**
  - `Spring Web`
  - `Spring Data JPA`
  - `H2 Database`: 개발용으로 사용하기 편한 인메모리 데이터베이스
  - `Spring Boot DevTools`: live reload 등 개발에 편리한 기능들이 있음

설정이 끝났으면 Generate 버튼을 클릭해서 프로젝트를 다운 받는다.\
프로젝트를 IDE로 불러오면 필요한 dependency를 알아서 다운 받는다.

## 프로젝트 실행

아래 명령어를 입력해서 서버를 띄운다.

```
./mvnw spring-boot:run
```

## GET 요청 구현

`/src/main/java/com/socratone/spring_boot_restful_api/HelloWorldController.java`\
이 경로에 아래 코드를 추가한다.

```java
package com.socratone.spring_boot_restful_api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
}
```

브라우저에서 `http://localhost:8080/hello-world`로 접근하면 위의 `Hello Wolrd`라는 단어를 응답해준다.
