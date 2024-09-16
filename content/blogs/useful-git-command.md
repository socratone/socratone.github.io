---
title: '유용한 Git 명령어'
description: 'Git에서 알아두면 좋을 명령어들을 정리한다.'
thumbnail: 'git'
tag: 'git'
createdAt: '2023-01-24'
---

# 유용한 Git 명령어

Git에서 알아두면 좋을 명령어들을 정리한다.

## amend

### 이전 커밋 이름 수정

다음을 입력하면 최근 커밋 이름이 `edited commit message`로 바뀐다.

```
git commit --amend -m 'edited commit message'
```

### 이전 커밋에 내용 추가

최근 커밋의 이름을 바꾸지 않고 내용만 추가할 수도 있다.\
`git add`를 먼저 해야 한다.

```
git commit --amend --no-edit
```
