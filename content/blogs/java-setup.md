---
title: '자바 개발 환경 설정'
description: '맥에서 자바 설치하는 방법을 다룬다.'
thumbnail: 'java'
tag: 'java'
createdAt: '2024-09-14'
---

# 자바 개발 환경 설정

맥에서 자바 설치하는 방법을 다룬다.

## JDK 설치

JDK란 Java Development Kit의 약자로 말 그대로 자바 개발에 필요한 도구다.\
아래 링크에서 다운 받을 수 있다.

https://www.oracle.com/kr/java/technologies/downloads/#jdk22-mac

링크로 들어가서 맥 사용자는 'Mac' 탭을 클릭하고,\
M칩인 경우 'ARM64 DMG Installer'를,\
인텔칩인 경우 'x64 DMG Installer'를 선택해서 설치한다.

설치가 제대로 됐는지를 확인하려면 아래 두 명령어를 입력해본다.

```
java -version
```

```
jshell -version
```

아래처럼 버전 정보가 나타나면 잘 설치된 것이다.

```
java version "22.0.2" 2024-07-16
Java(TM) SE Runtime Environment (build 22.0.2+9-70)
Java HotSpot(TM) 64-Bit Server VM (build 22.0.2+9-70, mixed mode, sharing)
```

## References

- [Java Downloads](https://www.oracle.com/kr/java/technologies/downloads/)
- [Getting Started with Java in VS Code](https://code.visualstudio.com/docs/java/java-tutorial)
