---
title: 'TSconfig.json'
description: 'tsconfig.json 파일이 있다는 것은 이 디렉토리가 typescript나 javascript 프로젝트의 root 디렉토리라는 것을 의미한다. tsconfig.json 설정에 따라서 타입스크립트의 동작 방식이 결정되기 때문에 각 옵션에 대해서 정리해둘 필요가 있다.'
thumbnail: 'typescript'
tag: 'typescript'
createdAt: '2024-05-06'
---

# TSconfig.json

tsconfig.json 파일이 있다는 것은 이 디렉토리가 typescript나 javascript 프로젝트의 root 디렉토리라는 것을 의미한다.\
tsconfig.json 설정에 따라서 타입스크립트의 동작 방식이 결정되기 때문에 각 옵션에 대해서 정리해둘 필요가 있다.\
모든 것을 다룰 수는 없고 주요 옵션들만 기록한다.\
나머지 스펙은 아래 링크에서 확인할 수 있다.

https://www.typescriptlang.org/tsconfig/

## Root Fields

### files

glob 패턴 등을 사용할 필요 없이 적은 수의 타입스크립트 파일을 처리해야할 때 유용하다.\
리스트된 파일만 js 파일로 변환한다.\
명시한 파일이 존재하지 않을 경우 에러가 발생한다.

```json
{
  "files": ["parser.ts", "utilities.ts"]
}
```

### extends

다른 tsconfig.json의 설정을 상속할 때 사용한다.\
상속해서 가져온 base 파일의 값을 먼저 적용한 뒤 현재 파일(tsconfig.json)의 값으로 덮어 씌운다.

```json
// ./config/base.json
{
  "compilerOptions": {
    "allowUnreachableCode": true
  }
}

// tsconfig.json
{
  "extends": "./configs/base.json",
  "compilerOptions": {
    "allowUnreachableCode": false
  }
}

// 결국 다음으로 적용됨
// "allowUnreachableCode": false
```

- 그러므로 상속해서 가져온 files, include, exclude 값이 현재 파일(tsconfig.json)의 속성으로 인해 적용되지 않을 수 있다는 점을 유의해야 한다.
- 상속해서 가져온 값 중 경로의 경우 그 파일(base.json)의 위치를 기준으로 정의된다.
- 다음 명령어를 입력해서 최종적으로 적용된 tsconfig.json이 어떻게 출력되는지 확인할 수 있다.

```json
tsc --showConfig
```

### include

files와 달리 처리해야할 타입스크립트 파일들의 패턴을 명시한다.

```json
{
  "include": ["src/**/*", "tests/**/*"]
}

// src/와 tests/ 이하의 모든 타입스크립트 파일
```

### exclude

include 설정에 들어간 타입스크립트 파일 중 제외할 파일 리스트를 명시한다.\
파일이름과 패턴으로 값을 넣을 수 있다.

```json
{
  "exclude": ["node_modules"]
}
```

## Compiler Options

대부분 매뉴얼을 찾아 확인하게 될 옵션들로, 타입스크립트 언어가 동작하는 규칙들을 미세하게 정할 수 있다.\
너무 많은 옵션들이 있기 때문에 default로 두고 중요한 옵션들만 정리해 두는 게 좋겠다.

https://www.typescriptlang.org/tsconfig/#compiler-options

### baseUrl

import from을 쓸 때의 기준 path를 정해주는 옵션이다.\
이에 따라 import from 뒤의 path를 간략하게 할 수 있다.

```
src
├── ex.ts
├── hello
│   └── world.ts
└── tsconfig.json
```

```
{
  "compilerOptions": {
    "baseUrl": "./"
  }
}
```

```javascript
import { helloWorld } from 'hello/world';
```

https://www.typescriptlang.org/tsconfig/#baseUrl

### module

자바스크립트에는 다양한 모듈이 있다.\
역사의 흐름에 따라 nodejs도 등장하고 필요에 따라 다양한 버전이 생기게 됐다.

여러 모듈 중 ECMAScript(ESM) 모듈과 CommonJS(CJS) 모듈은 알아둬야 한다.\
ESM 모듈은 최신 브라우저와 node 12 이상에서 지원되고,\
CJS 모듈은 node에서 지원된다.

타입스크립트는 어떤 환경에서 코드가 실행될지 모르기 때문에 module과 같은 옵션을 통해서 명시해줘야 한다.\
이 옵션을 통해서 어떤 모듈 형식을 사용할 것인지 정할 수 있다.\
넣을 수 있는 값은 다음과 같다.

- `node16`: nodejs 16이상을 의미하고, ES 모듈과 CJS 모듈을 둘 다 지원한다.
- `nodenext`: node16과 동일하지만 최신 노드 모듈 스펙이 업데이트 되면 이를 따라가게 된다.
- `es2015`: ES2015 스펙을 따르는 모듈을 지원한다.
- `es2022`: ES2022 스펙에 따라 top level await를 지원한다.
- `esnext`: es2022와 동일하지만 최신 모듈 스펙이 업데이트 되면 이를 따라가게 된다.

일반적으로 nodejs는 ES 모듈과 CJS 모듈을 알아서 구별하고 아래의 경우에만 예외적으로 작용한다.

- package.json의 type이 module이라고 명시된 경우에만 ES 모듈로 해석되고 나머지는 CJS 모듈로 해석된다.
- 다만 .mjs와 .cjs는 언제나 각각 ES 모듈과 CJS 모듈로 해석된다.

### moduleResolution

resolution은 결정이라는 의미가 있다.\
import 문 등으로 가져오는 모듈을 불러오는 방식에 대해서 결정한다.

예를 들어 resolution 알고리즘 규칙을 조작할 수 있다면 아래와 같은 방식으로도 불러올 수 있을 것이다.

```javascript
import monkey from '🐒';
```

설정에 따라서 아래와 같은 동일한 문법을 사용하더라도 파일을 불러오지 못할 수 있다.

```javascript
import { useInView } from 'framer-motion';
```

이전 버전의 모듈을 가져올 때 moduleResolution을 NodeNext로 설정했다면 declaration 파일을 가져올 수 없다는 에러가 나타나는 것으로 보인다.

### target

어떤 버전의 자바스크립트로 변환해줄 것인지를 정한다.\
예를 들어 es5로 설정하면 화살표 함수가 일반 함수로 변한다.

https://www.typescriptlang.org/tsconfig/#target
