---
title: 'Yalc 사용 방법'
description: 'yalc를 이용하면 npm에 publish 하지 않고도 local에서 라이브러리를 수정해 확인할 수 있다.'
thumbnail: 'npm'
tag: 'npm'
createdAt: '2023-06-27'
---

# Yalc 사용 방법

yalc를 이용하면 npm에 publish 하지 않고도 local에서 라이브러리를 수정해 확인할 수 있다.\
배포하기 전에 확인하는 용도로 사용한다.

- 먼저 수정하기를 원하는 프로젝트로 이동한다. 여기서는 lodash를 예로 든다.
- lodash 코드를 수정한다.
- `yarn build` 로 lodash 프로젝트를 build 한다.
- package.json에서 version을 수정한다.
- `yalc publish` 로 수정된 lodash를 local에 publish 한다.
  - version을 5.0.1로 했다면 다음과 같은 결과 값이 출력된다.\
    `lodash@5.0.1 published in store`
- 위 라이브러리를 사용하는 (또는 사용하기 원하는) project로 이동한다.
- 출력된 버전을 copy해서 `yalc add` 명령어와 함께 입력한다. package.json의 라이브러리를 local로 대체하게 된다.
  - `yalc add lodash@5.0.1`
  - 다음과 같은 결과 값이 출력된다.\
    `Package lodash@5.0.1 added ==> /Users/socratone/Desktop/my-app/node_modules/lodash`
- package.json의 해당 dependency를 보면 local 경로로 바뀌어 있는 것을 볼 수 있다.
  - `"lodash": "file:.yalc/lodash",`
  - `/.yalc` 경로를 보면 yalc publish로 store에 저장됐던 build된 파일들이 복사되어 있는 것을 볼 수 있다.
- `yarn install` 로 변경된 dependency를 설치한다.
- 이후 lodash 코드를 수정 후 업데이트 하려면 다시 `yarn build && yalc publish` 를 하고 `yalc update` 로 local store에 저장된 파일들을 프로젝트에서 update한다.
  - `yalc update lodash@5.0.1`

## References

- https://github.com/wclr/yalc
