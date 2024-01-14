---
title: '맥에서 Apache 설치와 사용 방법'
description: '맥에서 Apache를 설치하고 사용하는 방법에 대해서 다룬다.'
thumbnail: 'apache'
tag: 'apache'
createdAt: '2024-01-14'
---

# 맥에서 Apache 설치와 사용 방법

맥에서 Apache를 설치하고 사용하는 방법에 대해서 다룬다.

## 설치

### Prerequisites

[brew](https://brew.sh)가 설치되어 있어야 한다.

### 1. Brew 업데이트

```
brew update
```

```
brew upgrade
```

### 2. Brew를 이용해서 apache2 설치

```
brew install apache2
```

### 3. Apache 실행

```
apachectl start
```

실행시 아래와 같은 오류가 발생한다면 `/opt/homebrew/etc/httpd/httpd.conf` 파일의 설정을 수정해야 한다.

```
httpd: Could not reliably determine the server's fully qualified domain name, using gimgiwon-ui-MacBookPro.local. Set the 'ServerName' directive globally to suppress this message
```

vim을 이용해서 `ServerName localhost`를 추가한다.\
또는 주석 처리 되어 있는 부분을 바꾼다.

필자의 경우에는 아래의 `#ServerName localhost`를 `ServerName localhost`로 바꿔줬다.

```
#
# ServerName gives the name and port that the server uses to identify itself.
# This can often be determined automatically, but we recommend you specify
# it explicitly to prevent problems during startup.
#
# If your host doesn't have a registered DNS name, enter its IP address here.
#
#ServerName localhost
```

https://stackoverflow.com/questions/43559201/could-not-reliably-determine-the-servers-fully-qualified-domain-name-for-macboo

실행에 성공했다면 browser의 url에 `http://localhost:8080`을 입력해서 접근하면\
`It works!`라는 텍스트를 확인할 수 있다.

참고로 `8080` 포트는 apche2 설치 도중에 확인할 수 있는 정보이고 httpd.conf의 `Listen 8080`을 수정해서 바꿀 수 있다.

```
#
# Listen: Allows you to bind Apache to specific IP addresses and/or
# ports, instead of the default. See also the <VirtualHost>
# directive.
#
# Change this to Listen on specific IP addresses as shown below to
# prevent Apache from glomming onto all bound IP addresses.
#
#Listen 12.34.56.78:80
Listen 8080
```

### 4. Apache 종료

```
apacheclt stop
```

## 루트 경로 변경

`It works!`는 `/opt/homebrew/var/www/index.html` 파일의 내용이다.\
다른 것으로 변경하려면 파일 내용을 수정하거나 `httpd.conf` 파일의 `DocumentRoot`의 경로를 수정한다.

```
#
# DocumentRoot: The directory out of which you will serve your
# documents. By default, all requests are taken from this directory, but
# symbolic links and aliases may be used to point to other locations.
#
DocumentRoot "/opt/homebrew/var/www"
<Directory "/opt/homebrew/var/www">
```

예를 들어 `/opt/homebrew/var/www`을 `/Users/socratone/Desktop/www`로 수정한다.\
물론 `www` 디렉토리 안에는 접근시 보여줄 `index.html`이 있어야 한다.\
`<Directory "/opt/homebrew/var/www">`도 수정해야 접근 불가 에러가 발생하지 않는다.

https://mytory.net/archives/3143

이 방법보다는 아래 방법을 많이 사용할 것 같다.

## Nodejs 서버와 연결

apache를 이용해서 react dev server나 express server에 연결할 수도 있다.\
3000 포트가 열려 있다면 `httpd.conf` 파일에서 아래를 추가한다.\
제일 아래쪽에 추가하자.

```
<VirtualHost *:8080>
  ProxyPass / http://localhost:3000/
</VirtualHost>
```

이제 `8080` 포트로 들어오는 모든 요청은 `3000` 포트로 향하게 된다.

위의 코드가 정상 작동하려면 `proxy`와 `proxy_http` 모듈이 활성화 되어야 한다.\
이를 위해서 `httpd.conf` 파일 내용 중 아래 두 부분을 수정한다.

- `#LoadModule proxy_module lib/httpd/modules/mod_proxy.so`에서 `#`을 삭제한다.
- `#LoadModule proxy_http_module lib/httpd/modules/mod_proxy_http.so`에서 `#`을 삭제한다.

https://blog.logrocket.com/configuring-apache-node-js

## References

- https://www.javatpoint.com/how-to-install-apache-on-mac
