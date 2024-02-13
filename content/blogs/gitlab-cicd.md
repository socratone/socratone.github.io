---
title: 'GitLab CICD 사용 방법'
description: 'GitLab CICD 사용 방법을 정리한다.'
thumbnail: 'git'
tag: 'git'
createdAt: '2024-02-13'
---

# GitLab CICD 사용 방법

gitlab에 리파지토리를 만들고 프로젝트에 `.gitlab-ci.yml` 파일을 생성해서 몇가지를 설정해주면 특정 리모트 브랜치에 커밋이 이뤄지는 등 어떤 액션이 이뤄질 때 배포와 같은 작업을 자동화할 수 있다.

## 개념

- job: 수행할 작업을 정의
- stage: 언제 job이 수행되는지를 정의
- pipeline
  - job과 stage로 구성되며 이들이 연결된 하나의 유의미한 작업
- runner
  - https://docs.gitlab.com/ee/ci/runners/index.html

## 기본 예제

프로젝트의 루트 경로에 `.gitlab-ci.yml` 파일을 생성하고 아래와 같은 형태로 yml 코드를 작성한다.

```yaml
build-job:
  stage: build
  script:
    - echo "Hello, $GITLAB_USER_LOGIN!"

test-job1:
  stage: test
  script:
    - echo "This job tests something"

test-job2:
  stage: test
  script:
    - echo "This job tests something, but takes more time than test-job1."
    - echo "After the echo commands complete, it runs the sleep command for 20 seconds"
    - echo "which simulates a test that runs 20 seconds longer than test-job1"
    - sleep 20 <<

deploy-prod:
  stage: deploy
  script:
    - echo "This job deploys something from the $CI_COMMIT_BRANCH branch."
  environment: production
```

기본적으로 stages 설정을 하지 않으면 build → test → deploy 순으로 작업이 이뤄진다.

위의 경우 stage 속성에 따라 build-job이 먼저 실행되고, test-job1과 test-job2가 동시에, deploy-prod가 제일 끝에 실행된다.

https://docs.gitlab.com/ee/ci/quick_start/#create-a-gitlab-ciyml-file

## 그밖의 다른 예제

- [기본](https://docs.gitlab.com/ee/ci/quick_start/tutorial.html)
- [e2e 테스트](https://docs.gitlab.com/ee/ci/examples/end_to_end_testing_webdriverio/)

## CICD 문법

### default:

모든 job에 공통으로 어떤 속성을 적용하고 싶을 때 사용한다.\
image는 동일한 것을 쓰는 게 보통이므로 다음과 같이 할 수 있다.

```yaml
default:
  image: node:20.5

test-job:
  # node:20.5 이미지 적용
  stage: test
  script:
    - yarn test

build-job:
  # node:20.5 이미지 적용
  stage: build
  script:
    - yarn build
```

https://docs.gitlab.com/ee/ci/yaml/#default

### needs:

stage 순서에 상관 없이 각 job의 작동 순서를 설정할 수 있다.

- 빈배열을 넣으면 파이프라인이 생성될 때 바로 작동시킬 수 있다.
- 배열에 특정 job 이름을 넣으면 이전 단계의 stage를 기다리지 않고 해당 job이 끝나자마자 실행된다.

https://docs.gitlab.com/ee/ci/yaml/index.html#needs

### artifacts:

job artifact는 작업 결과물을 의미한다.

**기본 동작**

- 기본적으로 모든 stage는 이전 stage에서 생성된 artifact를 다운로드한다.
  - [dependencies](https://docs.gitlab.com/ee/ci/yaml/index.html#dependencies)로 기본 설정을 변경할 수 있다.
- needs 설정을 했을 경우 needs에 포함된 job의 artifact만 다운로드한다.

https://docs.gitlab.com/ee/ci/yaml/index.html#artifacts

### artifacts:paths:

job은 리소스를 공유하지 않고, 한 job에서 생성된 파일을 공유하고 싶다면 먼저 artifact로 저장해야 한다.

이를 위해 `artifacts:paths:`를 써서 artifact를 생성한다.

```yaml
# List of stages for jobs and their order of execution
stages:
  - build
  - deploy

build-job:
  stage: build
  image: node
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      # 해당 경로의 파일들을 artifact로 생성
      - 'build/'

deploy-job:
  stage: deploy
  script:
    # 이전에 생성된 artifact에 접근 가능
    - mv build/ public/
```

### artifacts:exclude:

artifact에서 특정 파일이나 패턴을 제외시킬 수도 있다.

```yaml
artifacts:
  paths:
    - binaries/
  exclude:
    - binaries/**/*.o
```

https://docs.gitlab.com/ee/ci/yaml/index.html#artifactsexclude

### variables:

변수를 지정할 수 있다.

몇몇 예약어의 경우 runner의 config를 설정할 수 있기도 하다.

https://docs.gitlab.com/ee/ci/runners/configure_runners.html#configure-runner-behavior-with-variables

공개해서는 안 되는 민감한 변수는 다음을 이용한다.

- https://docs.gitlab.com/ee/ci/variables/index.html#protect-a-cicd-variable
- https://docs.gitlab.com/ee/ci/secrets/index.html

runner가 자동으로 생성하여 기본적으로 제공되는 변수도 있다.

https://docs.gitlab.com/ee/ci/variables/predefined_variables.html

### cache:

**특징**

- pipeline이나 job에서 서로 공유 가능
- artifacts 이전에 복구됨
- 4개까지 가능\
  https://docs.gitlab.com/ee/ci/caching/index.html#use-multiple-caches

**언제 cache를 써야 하나?**

- packages와 같이 인터넷에서 다운 받는 파일들은 cache에 저장한다.
- artifacts는 동일한 파이프라인 내에서만 공유됨

https://docs.gitlab.com/ee/ci/yaml/index.html#cache

### cache:paths:

cache할 파일과 폴더를 지정한다.

```yaml
rspec:
  script:
    - echo "This job uses a cache."
  cache:
    key: binaries-cache
    paths:
      - binaries/*.apk
      - .config
```

https://docs.gitlab.com/ee/ci/yaml/index.html#cachepaths

### cache:key:

cache를 구분할 수 있는 id를 부여한다.\
동일한 key가 보장되면 pipeline을 넘어서 같은 cache를 공유할 수 있다.

```yaml
cache-job:
  script:
    - echo "This job uses a cache."
  cache:
    key: binaries-cache-$CI_COMMIT_REF_SLUG
    paths:
      - binaries/
```

https://docs.gitlab.com/ee/ci/yaml/index.html#cachekey

### cache:key:files:

특정 file을 key(id)로 설정한다. (SHA 알고리즘을 이용)\
파일 변경이 이뤄지면 새로운 캐시가 생성된다.

```yaml
cache-job:
  script:
    - echo "This job uses a cache."
  cache:
    key:
      files:
        - Gemfile.lock
        - package.json
    paths:
      - vendor/ruby
      - node_modules
```

### cache:policy:

기본적으로 job이 시작될 때 cache를 다운 받고 job이 끝났을 때 cache에 변경사항을 업로드하는 방식이다.

- job이 시작될 때 다운로드만 동작하게 하려면 `pull`을 넣고,
- job이 끝났을 때 업로드만 동작하게 하려면 `push`를 넣는다.
- 아무것도 넣지 않으면 기본 동작인 `pull-push`가 설정된다.

https://docs.gitlab.com/ee/ci/yaml/index.html#cachepolicy

### dependecies

이전 stage에서 artifacts 옵션으로 생성된 artifact를 fetch할 것인지 말 것인지를 정할 수 있다.

https://docs.gitlab.com/ee/ci/yaml/index.html#dependencies

### rules:

job을 조건에 따라 pipeline에 추가하거나 제외시킬 수 있다.

맞는 조건이 나타날 때까지 위에서 아래로 순서대로 찾는다.

deprecated된 비슷한 옵션으로 only와 except이 있다.

rules와 같이 사용하면 에러가 발생한다.

https://docs.gitlab.com/ee/ci/yaml/index.html#only--except

### rules:if:

if 조건이 true인 경우 pipeline에 추가된다.

```yaml
rules:
  - if: true
```

if 조건이 true지만 뒤에 따라오는 when이 never라면 pipeline에 추가되지 않는다.

```yaml
rules:
  - if: true
  - when: never
```

if 조건에 맞는 경우가 없다면 pipeline에 추가되지 않는다.

https://docs.gitlab.com/ee/ci/yaml/index.html#rules
