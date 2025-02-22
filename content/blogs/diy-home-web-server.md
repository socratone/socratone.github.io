---
title: '홈 웹서버 구축하기'
description: '집에 서버를 구축해서 앱 서비스를 배포해보자. 이를 위한 문제 해결 과정을 글로 써나가려고 한다.'
thumbnail: 'debian'
tag: 'linux'
createdAt: '2024-06-17'
---

# 홈 웹서버 구축하기

집에 서버를 구축해서 앱 서비스를 배포해보자.\
이를 위한 문제 해결 과정을 글로 써나가려고 한다.

## 웹서버

웹서버라는 말은 여러가지로 혼용되는 것처럼 보인다.\
보통 웹서버라하면 인터넷에 연결돼서 다른 기기들이 데이터 등을 요청할 때 전달해주는 역할을 해주는 컴퓨터라 할 수 있겠다.\
이 웹서버를 AWS와 같은 클라우드가 아닌 가정에 구축해볼까한다.\
클라우드를 사용하지 않는 이유는 비용도 비용이지만 처음부터 거대한 서비스를 고려한 인프라를 구축할 필요가 없고 서버 로그라든지 hook과 같은 설정을 내 마음대로 할 수 있어서다.

## 웹서버 소프트웨어

웹서버를 위한 장치로 컴퓨터와 라우터가 이미 있기 때문에 먼저 컴퓨터를 이용해서 웹서버를 띄우는 방법을 알아본다.\
일반 컴퓨터가 서버 역할을 할 수 있도록 하려면 웹서버 소프트웨어가 필요하다.\
웹서버 소프트웨어로는 보통 아파치와 Nginx가 많이 입에 오르내리는데 일단 기술은 많은 사람들이 쓰는 것이 정보를 얻기도 좋고 유지보수 등의 강점이 많기 때문에 이 둘 중에 하나를 선택해야겠다.

챗지피티에 물어보니 성능을 추구한다면 Nginx, 다양한 기능을 추구한다면 아파치라고 한다.\
아파치는 사용해본 경험도 있고 설정하기 쉽다고 하니 아파치로 먼저 웹서버를 띄워보는 게 좋겠다.

사실 노드 express 등을 사용하면 손쉽게 서버를 띄울 수 있지만 다양한 타입의 요청을 리버스 프록시 서버로서 분기처리를 해주려면 네임드 웹서버를 사용해야할 것 같다.

## 도커

서버를 구축하기 위해 필요한 프로그램을 일일이 설치하는 것은 실수하기도 쉽고 노가다다.\
코드베이스로 관리하는 것이 여러모로 장점이 있다.\
또한 컴퓨터에 상관없이 서버를 돌리는 데 적합한 리눅스 OS 환경을 쓸 수 있다는 점이 가장 큰 장점이다.\
아파치도 도커를 적용할 수 있다는 생각이 들었다.\
도커는 이미 맥북에 설치되어 있으니 다른 컴퓨터에 설치하는 방법 등은 나중에 생각하고 도커를 이용해서 아파치 서버를 동작하게 해봐야겠다.

## 아파치

도커의 아파치 이미지를 이용하려면 아래 링크에서 확인할 수 있다.

https://hub.docker.com/_/httpd

문서에서 안내하는 대로 도커 설정을 했다.

### 도커를 이용한 간단한 아파치 서버

- 파일 구조

```
public-html/
└── index.html
docker-compose.yml
Dockerfile
```

- docker-compose.yml

```yaml
# Docker Compose 파일의 버전을 지정합니다.
version: '3.8'

# 여러 개의 서비스를 정의하는 섹션입니다.
services:
  # apache라는 이름의 서비스를 정의합니다.
  apache:
    # Dockerfile이 위치한 경로를 지정합니다.
    build: .
    # 호스트의 포트 80을 컨테이너의 포트 80과 연결(바인딩)합니다.
    ports:
      - '80:80'
```

- Dockerfile

```
FROM httpd:2.4
COPY ./public-html/ /usr/local/apache2/htdocs/
```

아래 명령어를 입력하면 브라우저에서 `http://localhost:80` 을 요청했을 때 index.html의 내용을 볼 수 있다.

```
# 웬만하면 --build 옵션을 붙여서 수정된 코드가 반영되도록 한다.
docker-compose up --build
```

### 사설 네트워크 상에서 아파치 서버에 접근하는 방법

다른 기계에서 접근하려면 localhost가 아닌 IP 주소가 필요하다.\
서버 PC에 할당된 사설 IP가 무엇인지 확인하려면 맥 터미널에서 ifconfig를 입력한다.

```
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	...
	inet 192.168.200.118 netmask 0xffffff00 broadcast 192.168.200.255
	...
```

en0의 inet 옆의 숫자가 IP다.\
같은 네트워크를 공유하고 있는 다른 기기의 브라우저에 `http://192.168.200.118` 을 입력해서 접근하면\
기본 포트인 80 포트로 연결되고 위에서 생성한 index.html 파일이 열린다.\
아파치가 기본적으로 80 포트를 읽기 때문에 그러한데 만약 포트를 바꾸고 싶다면\
도커 컨테이너 내 `/usr/local/apache2/conf/httpd.conf` 에서 `Listen 80`을 다른 것으로 변경한다.

## 공유기

인터넷의 데이터들은 여러 라우터를 거쳐 사용자의 디바이스로 전송된다.\
가정에서는 공유기가 라우터의 기능을 갖고 있다.\
클라이언트로서 공유기를 통해 인터넷의 데이터에 접근할 수 있는 것처럼\
서버로서 외부로부터 들어온 요청을 제어할 수도 있다.\
공유기에서 포트 포워딩 기능을 지원하면 된다.

### 포트 포워딩 설정

포트 포워딩은 외부로부터 들어오는 공인 IP와 port를 어떤 사설 IP와 port로 연결해줄지를 정해주는 게 전부다.\
포트 포워딩을 설정하려면 공유기의 뒷면 또는 매뉴얼에 나와 있는 IP 주소로 브라우저를 이용해 접속한다.\
다만 필자의 경우 무선이 아닌 유선 연결로만 접근이 가능했다.

공유기마다 다르겠지만 예를 들어 `방화벽 > 포트 포워딩`과 같은 페이지에서 설정할 수 있다.\
서비스 포트(외부로부터 들어오는 포트), 내부 IP 주소(연결할 사설 IP), 포트(연결할 포트)를 설정한다.

외부 IP는 ISP(Internet Service Provider)에서 제공해주므로 이미 정해져 있다.\
이를 알아내려면 맥 터미널에서 아래 명령어를 입력한다.

```
curl ifconfig.me
```

네이버에서 `IP 주소 조회` 라고 검색해도 외부 IP 정보를 알 수 있다.\
내부 IP 주소는 위에서 이미 언급한 대로 `ifconfig` 명령어를 활용한다.

외부 IP가 `123.123.123.123`, 외부로부터 들어오는 포트를 `3000`으로 설정하고, 내부 IP 주소는 `192.192.192.192`, 포트는 `5500`으로 설정했다면\
핸드폰을 LTE로 연결하고 브라우저의 URL 인풋에 `http://123.123.123.123:3000`를 입력해서 접근할 수 있다.\
물론 `localhost:5500`에 서버를 띄워 놓아야 한다.

## Debian

이제 방법을 알았으니 실제로 서버를 설치해야한다.\
집에 있는 컴퓨터 아무거나 쓸 생각이기 때문에 상세한 스팩은 넘어간다.\
서버 컴퓨터의 운영체제를 골라야 하는데 무겁고 유료인 Windows 보다는 서버용으로 많이 쓴다는 Linux 계열의 Debian을 쓰는 것이 좋아 보인다.

### Debian 설치 USB

USB를 이용하면 Debian을 손쉽게 설치할 수 있다.\
1GB 이상의 USB 하나를 준비한다.

- 먼저 설치 파일 이미지가 필요하다.
- 아래 링크에서 `debian-12.5.0-amd64-netinst.iso`를 다운받는다. (현재 12버전)\
  https://www.debian.org/download.ko.html
- rufus라는 앱을 이용해서 이 이미지를 Debian 설치 USB로 바꾼다. (exe 파일이기 때문에 윈도우에서 작동)
- 아래 링크에서 다운 받을 수 있다.\
  https://rufus.ie/ko

### USB로 부팅하기

부팅하자마자 `Delete` 키나 `F2` 키 등을 눌러 BIOS에 들어가 USB로 부팅할 수 있도록 설정한다.

### Debian 설치

처음에 `Graphical install`을 선택했다.\
그냥 `Install`과 아무런 차이가 없기 때문이다.\
아래는 이후 기록해야할만한 선택사항들을 적어둔다.

- `Korean` 선택
- 호스트 이름 설정: `debian`
- 각종 이름과 암호 설정
- 디스크 파티션하기
  - `수동으로` 선택
  - 두 파티션으로 나눔
    - EFI(Extensible Firmware Interface) 파티션
      - 파티션의 용도: `EFI 시스템 파티션`
      - 주파티션
      - 250MB정도 할당
    - Debian을 설치할 파티션
      - 파티션의 용도: `ext4 저널링 파일 시스템`\
        https://www.debian.org/releases/stable/s390x/apcs03.ko.html
  - 스왑 파티션
    - 메모리가 부족할 때를 대비한 파티션
    - 일단은 설정하지 않음
- 소프트웨어 선택
  - GUI 등은 필요 없기 때문에 `SSH server`와 `표준 시스템 유틸리티`만 체크

## SSH 접속

SSH가 제대로 작동하는지 확인하기 위해 debian에서 아래 명령어를 입력한다.

```
sudo systemctl status ssh
```

debian의 ip를 확인하려면 아래 명령어를 입력한다.

```
ip a
```

맥에서 any라는 사용자로 접속을 하고 싶다면 터미널에 다음과 같이 입력한다.

```
# <사용자이름>@<내부ip>
ssh any@192.123.123.123
```

https://phoenixnap.com/kb/how-to-enable-ssh-on-debian

이후부터는 SSH를 이용해서 설정하는 것이 편하다.

## Docker 설치

모든 앱을 컨테이너로 관리하기 위해 docker를 설치한다.

### 패키지 삭제

충돌이 있을 수 있는 아래 패키지를 삭제한다.

- `docker.io`
- `docker-compose`
- `docker-doc`
- `podman-docker`
- `containerd`
- `runc`

삭제 명령어는 다음과 같다.

```
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

계정이 sudoers 파일에 없다는 오류 메시지가 나오면 `su` 명령어를 입력해서 root 계정으로 전환한다.

### `apt` repository를 이용한 설치

#### 1. apt repository 설정

```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

#### 2. docker 패키지 설치

최신 버전의 docker를 설치한다.

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

https://docs.docker.com/engine/install/debian/

이제 서버를 띄운 다음 테스트 해보고 https를 적용하면 되겠다.
