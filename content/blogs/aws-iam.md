---
title: 'AWS IAM 정리'
description: 'AWS 서비스에서 사용자와 서비스의 권한을 설정할 수 있는 IAM에 대해서 다룬다.'
thumbnail: 'aws'
tag: 'aws'
createdAt: '2024-01-22'
---

# AWS IAM 정리

AWS 계정을 만들면 루트 계정이 생성되고 이 계정 아래에 다양한 사용자를 추가할 수 있다.\
회사에서 AWS를 이용하여 거대한 서비스를 만든다고 하면 각 기능들에 다양한 사람들이 접근할 수 있어야 한다.\
만약 루트 계정을 돌려 사용한다면 보안에 문제가 생기기 때문에 각 사용자마다 권한이 다른 계정을 제공해야할 필요가 있다.\
IAM을 이용해서 이를 해낼 수 있다.

## 계정 설정

`계정 설정` 메뉴에서 `암호 정책` 섹션을 보면 `편집`을 클릭할 수 있다.\
여기서 비밀번호 조건 등을 설정해서 보안에 신경쓸 수 있다.

https://us-east-1.console.aws.amazon.com/iam/home?region=ap-southeast-2#/account_settings

## 사용자

`사용자` 메뉴에서 루트 계정 사용자를 생성할 수 있다.

https://us-east-1.console.aws.amazon.com/iam/home#/users

## 사용자 그룹 권한

`사용자 그룹` 메뉴에서 설정한다.\
`그룹 생성` 버튼을 클릭해서 그룹을 생성할 수 있다.\
이 때 그룹에 `권한 정책 연결`을 설정하면 그룹으로 권한을 관리할 수 있다.\
사용자를 그룹에 배정하면 그룹에 해당하는 권한 정책이 적용된다.

https://us-east-1.console.aws.amazon.com/iam/home?region=ap-southeast-2#/groups

## MFA 인증

우측 상단의 사용자 이름 드롭다운 버튼을 클릭하고 `보안 자격 증명`을 클릭하면 `멀태 팩터 인증(MFA)` 섹션을 볼 수 있다.\
루트 계정에서만 접근할 수 있다.\
MFA 인증을 설정하면 사용자의 스마트폰에서 한 번 더 인증을 거치게 되므로 보안에 유리해진다.\
등록할 때와 로그인을 할 때 스마트폰에서 Authy와 같은 MFA 앱을 이용하게 된다.\
`MFA 디바이스 할당` 버튼을 클릭해서 생성할 수 있다.\
생성 도중에 QR 코드가 나오면 MFA 앱으로 찍고 앱에서 보여주는 토큰을 입력해서 등록한다.\
등록할 때에는 토큰을 두 번 입력하게 된다.\
루트 계정의 경우 꼭 설정하자.

https://us-east-1.console.aws.amazon.com/iam/home#/security_credentials

## Access 키를 이용한 접근 방법

AWS 서비스에 접근하는 방법에는 3가지가 있다.

- AWS Management Console (웹페이지)
- CLI (터미널)
- SDK (앱 내에서 접근하는 방식)

CLI와 SDK는 로그인 대신에 access 키를 이용해서 접근할 수 있다.\
이를 위해서 먼저 사용자를 위한 access 키를 발급 받아야 한다.

`사용자` 메뉴를 클릭 후 테이블에서 원하는 사용자를 선택한다.\
`보안 자격 증명` 탭에서 `액세스 키` 섹션을 보면 `액세스 키 만들기` 버튼을 클릭할 수 있다.\
`Command Line Interface`(CLI)를 선택하고 다음으로 넘어가면 `access key id`와 `secret access key`를 얻을 수 있다.\
잘 저장해 두자.\
이 두 토큰을 이용하여 로컬 터미널에서 AWS에 접근할 수 있다.

그러려면 AWS CLI를 설치해야 한다.\
설치 방법은 아래 링크를 참고하자.

https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html

제대로 설치했다면 터미널에서 `aws`로 시작하는 명령어를 사용할 수 있다.\
`aws configure`를 입력하여 `access key id`와 `secret access key`를 설정할 수 있다.\
이어서 `Default region name`은 한국 지역을 의미하는 `ap-northeast-2`로 한다.\
`Default output format`은 빈 값으로 둬도 된다.

```
aws configure

AWS Access Key ID [None]: ???????
AWS Secret Access Key [None]: ???????????????????????
Default region name [None]: ap-northeast-2
Default output format [None]:
```

이제 AWS CLI를 이용해서 해당 사용자에게 권한이 부여된 작업들을 할 수 있다.

## 역할

사용자가 아닌 AWS 서비스가 AWS에 접근하는 권한을 설정한다.\
`역할` 메뉴에서 `역할 생성`을 클릭해서 설정할 수 있다.\
`IAMReadOnlyAccess` 프리셋을 활용해보자.

https://us-east-1.console.aws.amazon.com/iam/home#/roles
