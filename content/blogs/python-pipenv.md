---
title: 'pipenv를 이용한 python 개발환경 설정 (작성중)'
description: 'pipenv를 이용하면 nodejs의 package.json처럼 라이브러리를 관리할 수 있다.'
thumbnail: 'python'
tag: 'python'
createdAt: '2023-11-19'
---

# pipenv를 이용한 python 개발환경 설정

pipenv를 이용하면 nodejs의 `package.json`처럼 라이브러리를 관리할 수 있다.

## 1. pipenv 설치

pipenv를 설치한다.

```
sudo -H pip install -U pipenv
```

https://stackoverflow.com/questions/46391721/pipenv-command-not-found
https://pipenv.pypa.io/en/latest/#install-pipenv-today

## 2. 가상환경을 생성

가상 환경을 생성하기 위해 아래 명령어를 프로젝트 폴더에서 실행한다.

```
pipenv shell
```

nodejs의 `package.json`과 비슷한 `Pipfile`이 생성된다.

터미널에 아래와 같은 내용이 표시된다.\
여기서 Virtualenv location 경로에 포함된 `tfda3j2t`을 잘 기억해야 한다.

```
Creating a virtualenv for this project...

...

✔ Successfully created virtual environment!
Virtualenv location: /Users/kiwon/.local/share/virtualenvs/python-test-tfda3j2t
Creating a Pipfile for this project...
Launching subshell in virtual environment...
```

vscode에서 어떤 python interpreter를 사용할 것인지 설정해야 한다.\
`cmd + shift + p`를 누르고 `Python: Select Interpreter`를 선택한 다음 위에서 언급한 `tfda3j2t` 버전을 선택한다.\
그러고 python 파일 위의 `실행` 버튼을 누르면 설정한 경로의 python을 실행하는 것을 볼 수 있다.

<img alt="Run python file" src="/images/blog/python-pipenv/run-python-file.webp" width="278">

## 3. Third party package 설치

langchain을 설치하고 싶다면 다음 명령어를 입력한다.

```
pipenv install langchain
```

`Pipfile`의 packages 리스트에 `langchain이` 추가된다.

## References

- https://realpython.com/pipenv-guide/
