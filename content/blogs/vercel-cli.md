---
title: 'Vercel CLI 사용 방법'
description: 'vercel cli를 이용해서 vercel project를 배포하는 방법에 대해서 다룬다.'
thumbnail: 'nextjs'
tag: 'nextjs'
createdAt: '2024-04-27'
---

# Nextjs 프로젝트에서 Vercel CLI 사용 방법

vercel cli를 이용해서 vercel project를 배포하는 방법에 대해서 다룬다.\
이를 이용해서 github이나 gitlab의 cicd에서 배포를 자동화 할 수 있다.

## 설치

vercel 명령어를 사용하기 위해서 npm이나 yarn을 이용해서 설치한다.

```
yarn global add vercel
```

https://vercel.com/docs/cli#installing-vercel-cli

## 로그인

vercel을 이용하는 주체가 누구인지를 알아야하기 때문에 로그인이 필요하다.\
이후 로그인 수순이 진행된다.

vercel 웹에서 토큰을 생성했다면 로그인 없이도 다음과 같이 사용할 수 있다.

```
vercel --token <token>
```

https://vercel.com/docs/cli/login

## Vercel 프로젝트 리스트 확인

아래 명령어를 입력해서 기존에 존재하는 프로젝트 리스트를 확인할 수 있다.

```
vercel project ls
```

## Vercel 프로젝트 생성

cli 상에서도 vercel에 프로젝트를 생성할 수 있다.

```
vercel project add <project-name>
```

https://vercel.com/docs/cli/project

## Vercel 프로젝트와 연결

생성된 프로젝트의 정보를 가져오기 위해서 아래 명령어를 입력한다.

```
vercel link -p <project-name> --yes
```

`.vercel` 폴더에 `project.json`이 생성되고 여기서 `projectId`와 `orgId`를 확인할 수 있다.

https://vercel.com/docs/cli/link

이후 vercel 명령어에서 어떤 프로젝트를 다뤄야 하는지를 구분할 수 있도록 다음과 같이 환경 변수로 설정한다.

```
export VERCEL_PROJECT_ID=prj_XkoK11g15pDUygEkEFzKkXQyhaeK
export VERCEL_ORG_ID=team_2A33P3Cqb1yPhsAxnEp2K7WV
```

https://vercel.com/guides/using-vercel-cli-for-custom-workflows

## Vercel.json 설정

vercel은 이 프로젝트가 nextjs임을 알지 못하기 때문에 루트에 `vercel.json`이라는 파일을 만들어서 아래와 같이 작성해야 한다.

```
{
  "framework": "nextjs"
}
```

이렇게 해야 제대로 된 output을 배포한다.\
명시해주지 않으면 public에 포함된 asset만 배포되는 문제를 겪을 수 있다.

https://vercel.com/docs/projects/project-configuration

## Vercel 배포

모든 설정이 끝났으면 아래 명령어를 입력해서 배포한다.

```
vercel deploy
```

만약 --prod 옵션을 붙이면 아래의 alias를 사용하지 않더라도 바로 production url에 반영된다.

https://vercel.com/docs/cli/deploy

## Url 변경

배포가 되면 preview url을 확인할 수 있고 다음 명령어를 입력해서 원하는 url로 변경할 수 있다.

```
vercel alias set <preview-url> <custom-domain>
```

custom domain의 경우 `any.vercel.app`과 같은 형태여야 한다.\
특별한 경우가 아니라면 `<project 이름>.vercel.app`으로 하자.\
만약 domain을 구입했다면 `any.com`과 같은 형태로 한다.

cicd에서 deploy와 alias를 사용한다면 다음과 같이 할 수 있다.

```
# vercel deploy에서 얻은 url을 변수에 저장
deployment_url=$(vercel deploy)
vercel alias set $deployment_url any.vercel.app
```

https://vercel.com/docs/cli/alias
