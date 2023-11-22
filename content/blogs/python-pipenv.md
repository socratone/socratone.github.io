---
title: 'pipenv를 이용한 python 개발환경 설정'
description: 'pipenv is a Python virtualenv management tool that supports a multitude of systems and nicely bridges the gaps between pip, python and virtualenv.'
thumbnail: 'python'
tag: 'python'
createdAt: '2023-11-19'
---

# pipenv를 이용한 python 개발환경 설정

## 1. pipenv를 설치한다.

```
sudo -H pip install -U pipenv
```

https://stackoverflow.com/questions/46391721/pipenv-command-not-found
https://pipenv.pypa.io/en/latest/#install-pipenv-today

## 2. 가상환경을 생성한다.

프로젝트 폴더 위치에서 실행한다.

```
pipenv shell
```

node의 `package.json`과 비슷한 `Pipfile`이 생성된다.

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

## 3. langchain 설치

```
pipenv install langchain
```

`Pipfile`의 packages 리스트에 `langchain이` 추가된다.
