---
title: 'package.json'
description: 'package.json의 주요 key를 설명한다.'
thumbnail: 'npm'
createdAt: '2023-07-05'
---

# Package.json

package.json의 주요 key를 설명한다.

## name

- package를 publish 할 때 중요
- 식별하는 용도로 사용되기 때문

## description

- npm에서 검색시 표시됨

## keywords

- 검색에 도움이 되는 keyword

## homepage

- project의 홈페이지

```json
{
  "homepage": "https://github.com/owner/project#readme"
}
```

## bugs

- 버그를 리포트할 이슈 페이지 링크와 이메일

```json
{
  "url": "https://github.com/owner/project/issues",
  "email": "project@hostname.com"
}
```

## files

- 패키지가 dependency로 설치될 때 포함될 항목들을 설명하는 pattern array
- default는 `["*"]`

## main

- require('foo')로 불러올 때 entry로서 접근할 수 있는 모듈
- default는 `index.js`

## browser

- 모듈을 브라우저에 한정하여 사용할 경우 `main` 대신 설정한다.
- window와 같이 node module에서 사용할 수 없는 것들이 있다는 것을 알리는 역할도 한다.

## repository

- 코드가 있는 위치

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli.git"
  }
}
```

- package의 package.json이 루트에 있지 않은 경우 (mono repo 등) directory로 지정할 수 있다.

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

## scripts

- 배포되는 등의 cycle에서 실행되는 스크립트 설정\
  [https://docs.npmjs.com/cli/v9/using-npm/scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts)

- pre\*와 post\* 스크립트를 정의할 수 있음

```json
{
  "scripts": {
    "precompress": "{{ executes BEFORE the `compress` script }}",
    "compress": "{{ run command to compress files }}",
    "postcompress": "{{ executes AFTER `compress` script }}"
  }
}
```

## dependencies

- 버전 표시 방법\
  [https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies)

## devDependencies

- 다른 사람이 패키지를 사용할 때 불필요한 것들
- 테스트나 빌드 과정에서 사용되는 dependency는 필요 없음

## peerDependencies

- 어떤 프로젝트에서 이 패키지를 설치할 때 호환되는 패키지 버전을 알려줌
- 예를 들어 react component 라이브러리의 경우 react 18 버전을 peer dependency로 할 수 있음
- 이 라이브러리 사용시 react 18 버전 사용을 권장한다는 말과 같음

## peerDependenciesMeta

- peer dependency에 대한 정보 제공
- optional 등으로 설정할 수 있음

## overrides

- package 버전을 고정
- 자식까지도 고정할 수 있음

```json
{
  "overrides": {
    "foo": {
      ".": "1.0.0",
      "bar": "1.0.0"
    }
  }
}
```

- bar의 foo만 1.0.0으로 재정의

```json
{
  "overrides": {
    "bar": {
      "foo": "1.0.0"
    }
  }
}
```

## References

- [docs.npmjs.com/cli/v9/configuring-npm/package-json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
