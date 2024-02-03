---
title: '도커 명령어'
description: '도커에서 많이 사용하는 명령어를 정리한다.'
thumbnail: 'docker'
tag: 'docker'
createdAt: '2023-11-09'
---

# 도커 명령어

도커에서 많이 사용하는 명령어를 정리한다.

## 기본 명령어

### `docker images`

생성한 모든 이미지 보기

### `docker build <Dockerfile 위치>`

Dockerfile에서 설정한 대로 이미지를 빌드하는 명령어

- `-t` 또는 `--tag`
  - 태그 옵션을 넣어서 이름으로 구분할 수 있다.
  - `docker build -t <태그이름> .`

https://docs.docker.com/engine/reference/commandline/image_build/

### `docker ps`

실행 중인 콘테이너 보기

- `-a` 옵션을 붙이면 모든 콘테이너

### `docker run <이미지이름>`

콘테이너 실행하기

- `-p` 또는 `--publish`
  - `docker run -p 80:3000`
  - 80 포트로 접근하면 3000 포트로 연결된다.
  - `http://localhost:80`으로 접근했을 때 콘테이너 내부에서 3000 포트로 실행 중인 서버가 있다면 여기로 요청이 간다.
- `-d`
  - 백그라운드에서 실행돼서 터미널을 계속 쓸 수 있다.
- `--name`
  - 옵션을 붙이면 콘테이너에 특정이름을 명명할 수 있다.
- `-rm`
  - 콘테이너를 멈출 때 자동으로 콘테이너를 삭제한다.

https://docs.docker.com/engine/reference/commandline/container_run/

### `docker logs <콘테이너아이디>`

로그를 보여준다.

- `-f` 옵션을 붙이면 서버를 실행한 것처럼 터미널이 log를 왓칭하는 상태로 변한다.

### `docker exec`

docker run은 새로운 콘테이너를 생성하지만\
docker exec은 실행되고 있는 콘테이너를 실행한다.\
`docker exec -it <콘테이너아이디> sh`

### `docker stop <콘테이너아이디>`

docker 콘테이너의 실행을 멈춘다.

### `docker start <콘테이너아이디>`

멈춰 놓았던 docker 콘테이너를 다시 시작한다.\
(run은 새로 생성하는 것임)

### `docker rm <콘테이너아이디>`

실행이 멈췄을 때 지울 수 있다.

### `docker rmi <이미지아이디>`

이미지 아이디를 지운다.

## 사용하지 않는 이미지를 지우는 명령어

### `docker container prune`

멈춰있는 상태의 콘테이너를 지운다.

### `docker image prune`

그러고 나서 사용하지 않는 이미지를 지운다.
