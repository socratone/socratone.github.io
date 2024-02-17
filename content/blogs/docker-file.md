---
title: 'Dockerfile 설정 방법'
description: 'Dockerfile 설정을 통해 콘테이너에서 이용할 이미지를 정의할 수 있다. Dockerfile의 문법과 예제를 통해 어떻게 사용하는지 이해해보자.'
thumbnail: 'docker'
tag: 'docker'
createdAt: '2024-02-17'
---

# Dockerfile 설정 방법

Dockerfile 설정을 통해 콘테이너에서 이용할 이미지를 정의할 수 있다.\
`docker build` 명령어를 입력하면 이에 따라 이미지가 생성된다.\
Dockerfile의 문법과 예제를 통해 어떻게 사용하는지 이해해보자.

## 문법

### FROM

생성할 이미지의 토대가 되는 이미지를 설정한다.\
이미지 빌드시 없으면 도커가 알아서 다운로드한다.

### WORKDIR

명령어를 입력하는 기본 위치를 설정한다.\
이후부터 적용된다.

### COPY

프로젝트 폴더에서 필요한 파일들을 이미지로 복사한다.\
COPY 다음 첫 번째 arg가 프로젝트의 경로고 두 번째 arg가 이미지의 경로다.

### RUN

명령어를 실행해서 dependency 등을 미리 설치할 수 있다.

### CMD

콘테이너가 실행될 때 기본적으로 입력되는 명령어를 설정할 수 있다.

https://docs.docker.com/engine/reference/builder

## 기본 예제

```yaml
# 생성할 이미지의 토대가 되는 이미지를 설정한다.
# 이미지 빌드시 없으면 도커가 알아서 다운로드한다.
# node alpine 이미지를 불러왔다.
FROM node:14.16.0-alpine3.13

# 여기서부터 명령어를 입력하는 기본 위치를 /app으로 설정한다.
WORKDIR /app

# 프로젝트의 모든 파일을 /app으로 복사한다.
# 위에서 WORKDIR을 설정했기 때문에 'COPY . .'으로 해도 된다.
COPY . /app

# 아래 명령어로 dependency 설치까지 포함하여 이미지를 만든다.
RUN npm install

# 80 포트를 개방했음을 알린다. (Docs일 뿐 기능을 하지는 않는다.)
EXPOSE 80

# container에서 아래 명령어를 입력해 node server를 실행한다.
CMD ["node", "server.js"]
```

- 위에서 설정한 Dockerfile을 이용해서 이미지를 빌드한다.

```
docker build .
```

- 생성된 이미지를 이용해서 콘테이너를 실행한다.\
  (`-p` 옵션을 넣어서 3000 포트를 80 포트로 받게 했다.)

```
docker run -p 3000:80 <image-id>
```

## 캐싱을 고려한 예제

```yaml
FROM node:14.16.0-alpine3.13

WORKDIR /app

# package.json만 먼저 복사한다.
COPY package.json /app

# 여기까지를 레이어로 구분해서 dependency가 아닌 app code를 수정했을 때 cache되도록 한다.
RUN npm install

# app code를 수정하면 여기서부터 refresh된다.
COPY . /app

EXPOSE 80

CMD ["node", "server.js"]
```

- `COPY . /app`만을 사용하면 코드 한 줄만 바뀌어도 빌드할 때 캐싱을 하지 못하기 때문에
- package.json은 앞쪽에 따로 복사하고 `npm install`을 실행한 뒤 `COPY . /app`을 넣는다.
- 빌드할 때마다 node_modules를 다운 받도록 하지 않기 위해서다.
- Dockerfile에서 자주 바뀌지 않는 것들을 위로, 자주 바뀌는 것들을 아래로 둬야 캐싱 등이 돼서 효율적이다.
