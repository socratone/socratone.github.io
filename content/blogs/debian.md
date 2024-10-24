---
title: 'Debian OS CLI'
description: 'Debian OS를 CLI로 다루기 위한 방법들을 적어둔다.'
thumbnail: 'debian'
tag: 'linux'
createdAt: '2024-10-25'
---

# Debian OS CLI

Debian OS를 CLI로 다루기 위한 방법들을 적어둔다.

## 사용자 전환

- 루트로 전환

```
su -
```

- 특정 사용자로 전환

```
su - <사용자이름>
```

## 시스템 종료

```
systemctl poweroff
```

https://www.debian.org/releases/stable/amd64/ch08s01.en.html

## docker 명령어 권한 주기

특정 사용자가 docker 명령어를 사용할 수 있도록 한다.

```
sudo usermod -aG docker <사용자이름>
```

세션을 갱신한다.

```
newgrp docker
```

## sudo 사용하기

루트 계정에서 apt를 이용해서 sudo를 설치한다.

```
apt update
apt install sudo
```

사용자 이름을 sudo 그룹에 추가한다.

```
usermod -aG sudo <사용자이름>
```

sudo 명령어 입력시 비밀번호를 요구하는데 이 과정을 생략하려면 다음을 따른다.

먼저 루트 계정으로 변경한다.

```
su -
```

다음을 입력해서 sudoers 파일을 연다.

```
visudo
```

visudo 편집기가 열리면 제일 아래에 다음을 추가한다.

```
<사용자이름> ALL=(ALL) NOPASSWD:ALL
```

저장하고 종료한다.

## 맥주소 확인

```
ip link show
```

아래와 같은 형식으로 표시되고 `link/ether` 옆에 있는 값이 맥주소다.

```
3: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 62:1a:bf:22:1d:54 brd ff:ff:ff:ff:ff:ff
```

## Nginx

nginx.conf가 위치한 파일 경로

```
/etc/nginx/nginx.conf
```

### 명령어

테스트를 위해서 쓸 일이 있지 docker를 이용하는 게 유지보수에 더 좋다.

- Nginx 서버 실행

```
systemctl start nginx
```

- 서버가 실행 중인지 확인

```
systemctl status nginx
```

- 설정 변경 후 재시작

```
sudo systemctl restart nginx
```

- 서버 종료

```
sudo systemctl stop nginx
```

## SSH로 서버에 파일 옮기기

```
scp /path/to/local/file username@remote_host:/path/to/remote/directory
```
