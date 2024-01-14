---
title: '맥에서 Apache를 설치하는 방법'
description: '맥에서 Apache를 설치하는 방법에 대해서 다룬다.'
thumbnail: 'apache'
tag: 'apache'
createdAt: '2024-01-14'
---

# 맥에서 Apache를 설치하는 방법

맥에서 Apache를 설치하는 방법에 대해서 다룬다.

## Prerequisites

[brew](https://brew.sh)가 설치되어 있어야 한다.

## 1. Brew 업데이트

```
brew update
```

```
brew upgrade
```

## 2. Brew를 이용해서 apache2 설치

```
brew install apache2
```

## 3. Apache 실행

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

## 4. Apache 종료

```
apacheclt stop
```

## References

- https://www.javatpoint.com/how-to-install-apache-on-mac
