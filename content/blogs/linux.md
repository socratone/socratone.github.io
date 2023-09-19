---
title: '리눅스 명령어'
description: '리눅스에서 많이 사용하는 명령어를 정리한다.'
thumbnail: 'linux'
createdAt: '2022-08-29'
---

# 리눅스 명령어

리눅스에서 많이 사용하는 명령어를 정리한다.

## 기본 정보를 위한 명령어

### `man <command>`

- 매뉴얼
- 매뉴얼 내부 단축키
  - space bar 또는 f - 한 페이지 이동
  - b - 한 페이지 위로 이동
  - /<검색하려는내용> - 해당 단어가 있는 곳으로 스크롤

### `help <command>`

- shell에 직접적으로 내장되어 있는 command라면 man 대신 help를 쓴다.

### `type <command>`

- 명령어의 위치 등 정보를 보여 줌

## 파일 시스템 탐색

- 유닉스 계열은 / 가 루트이고 여기에 모든 파일이 들어 있음
- /home 안에는 사용자 폴더가 있고 여기에 사용자가 만들거나 한 사용자 관련 파일들이 있음
  - `~`가 home을 가리킴

### `pwd`

- print working directory
- 현재 위치를 알려줌

### `ls`

- list
- options
  - -l
    - long
  - -a
    - all

### `cd`

- change directory

### 주요 폴더

- bin
  - pwd와 같은 여러 실행 파일들이 있음
- etc
  - 설정과 관련된 파일들

## 파일, 폴더 생성, 삭제, 이동

### `touch`

- 파일 생성

### `file`

- 파일 정보
- 리눅스에서 파일 정보는 확장자로 결정되지 않고 내용을 분석한다.
- 확장자를 쓰는 이유는 파일 이름만 보고 어떤 파일인지 알 수 있고, 어떤 확장자에 따라서 이에 해당하는 응용프로그램이 파일을 실행시키기 때문이다.

### `mkdir`

- 폴더 생성
- -p
  - /parent/new-folder
    - parent 폴더가 없으면 생성해준다. (-p가 없으면 parent가 없다는 에러)

### `rm`

- -d
  - 빈폴더를 지움 (rmdir 명령어와 동일)
- -r
  - 폴더 안에 있는 내용을 포함해서 삭제
- -ri
  - 폴더 내용물 하나하나 열거하며 정말로 삭제할 것이냐고 묻는다.

### `mv`

- 파일과 폴더를 이동 (source 다수 가능)
  - `mv <source…> <destination>`
- 파일 이름 수정도 가능 (source 하나만 가능)

### `cp`

- 파일을 복사
- 사용법은 mv와 유사
- -r을 넣으면 폴더 내용까지 복사 가능

## 파일 다루기

### `cat <filename…>`

- concatenates
- 파일 내용을 보여줌
- 여러 파일을 결합해서 보여줄 수도 있음

### `less`

- 파일 내용을 보여주나 man 페이지를 보는 것처럼 새로운 화면이 나오고 쉽게 페이지 이동을 할 수 있다.
- 긴 문서를 볼 때 유용하다.
- / 를 이용해서 검색할 수 있음

### `tac`

- cat과 동일하나 줄바꿈을 기준으로 거꾸로 출력

### `rev`

- tac이 수직으로 뒤집는 다면 rev는 수평으로 뒤집는다.
- 라인은 그대로이고 좌우로 reverse 된다.

### `head`, `tail`

- 앞에서부터 또는 뒤에서부터 10줄을 보여준다.
- head -3 <filename> 이런식으로 몇 줄(3)을 볼 것인지 정할 수도 있다.
- tail -f <filename> 새로운 화면이 뜨고 파일이 변경되면 내용을 업데이트한다. 로그를 실시간으로 볼 때 유용하다.

### `wc`

- 글자수와 관련된 정보들을 알려줌 (여러 정보가 나열되기 때문에 보통 옵션을 넣어서 사용)
- -l
  - 총 몇줄인지 알려줌
- -w
  - 단어수를 알려줌
- -m
  - 문자수를 알려줌
- -c
  - 바이트수를 알려줌

### `sort`

- 각 라인을 알파벳 순으로 정렬
- -r
  - 역순
- -n
  - 숫자를 string이 아닌 numeric으로 정렬
- -u
  - 중복된 값 빼고 보여줌 (unique)
- -k
  - column을 의미
  - 공백을으로 구분되는 데이터 테이블을 만들 수 있고
  - 테이블 각 칼럼을 기준으로 sort를 할 수 있다.
  - sort -k2 라하면 2번째 column을 기준으로 정렬함

## 리다이렉션

- 3 data stream
  - standard input (0)
  - standard output (1)
  - standard error (2)
- `ls > file.txt`
  - ls의 output을 file.txt에 저장
- `ls >> file.txt`
  - 위처럼 덮어쓰지 않고 새로운 라인에 output을 저장
- `cat < file.txt`
  - cat에 standard input(file.txt)을 전달
- `sort < values.txt > sorted.txt`
  - values.txt를 sort의 standard input으로 전달하고 여기서의 output을 sorted.txt에 저장
- `asdf 2> error.txt`
  - 에러값을 error.txt에 저장
  - 2는 standard error를 의미
- `cat values.txt > output.txt 2> error.txt`
  - 둘을 동시에 사용할 수 있음
- 이하 동일한 결과
  - `cat values.txt > output.txt 2> output.txt`
  - `cat values.txt > output.txt 2>&1`
  - `cat values.txt &> output.txt`
    - 최신 bash에서 가능
    - &>는 output과 error 둘을 의미

## 파이프

### `date | rev`

- date의 output을 rev의 input에 넣는다.
- 결과적으로 date에서 나온 string을 reverse한 값이 나온다.

### `tee`

- cat colors.txt words.txt | tee colorsAndWords.txt | wc
  - input으로 받은 내용을 파일로 만들면서 동시에 output으로도 넘긴다.
  - colors.txt와 words.txt 두 파일을 합친 파일을 하나 만들고 wc의 결과값을 보여준다.

## 확장

### `*`

- `echo p*`
  - p로 시작하는 모든 파일의 이름 출력

### `?`

- 하나의 문자
- echo app?.js
  - app1.js나 app2.js에 해당하는 파일 이름 출력

### `[]`

- [1-9]
  - 1에서 9까지의 숫자
- [123]
  - 1, 2, 3

### `^`

- [^1-9]
  - 1에서 9까지의 숫자가 아닌 모든 글자

### `{}`

- touch page{1,2,3}.txt
  - page1.txt, page2.txt, page3.txt
- touch page{1..3}.txt
  - same

### `“”`

- 내부에서 변수 등을 사용할 수 있음
- echo “today is $(date)”
  - date 부분이 계산됨

### `‘’`

- 위와 달리 모든 문자를 있는 그대로 출력

## Timestamps

- mtime (modification time)
  - 파일 내용이 마지막으로 바뀐 시간
  - ls -l을 입력했을 때 나타나는 시간
- ctime (change time)
  - 파일의 메타 데이터(이동, 이름 변경, 권한 변경)가 마지막으로 바뀐 시간
  - 파일 내용이 바뀔 때에도 변경 됨
  - ls -lc를 입력했을 때 나타나는 시간
- atime (access time)
  - 파일을 마지막으로 읽은 시간
  - ls -lu를 입력했을 때 나타나는 시간

## 찾기

### `locate`

- 별도의 데이터 베이스를 만들어 최신화를 하고 빠르게 검색할 수 있음
- -i
  - 대소문자 무시
- -e
  - 실제로 있는 것만 (데이터 업데이트가 안 되었을 때 없는 것을 보여줄 수 있음)

### `find`

- 현재 위치에서부터 모든 파일과 폴더를 출력
- -type f
  - 파일만
- -type d
  - 폴더만
- -name “\*.txt”
- -iname
  - 대소문자 구분 x
- -size +1G
  - 1G이상의 파일들을 출력
- -user john
  - john이라는 사용자의 파일을 검색
- -empty
  - 빈 파일이나 폴더를 출력
  - -type d 등을 사용해서 빈 폴더 검색 가능
- -mmin -10
  - 10분 안으로 modification된 파일들
- -mtime -5
  - 5일 안으로 modification된 파일들
- Logical Operators
  - -not
    - not 옵션 뒤에 오는 것은 제외
      - -not -name “\*.txt”
      - txt 파일을 제외하고 출력
    - -not 대신 !를 써도 됨
  - -and
    - 복잡하지 않은 경우 자동으로 적용됨
  - -or

## 그밖에 Mac 터미널에서 쓰기 유용한 명령어

### `json_pp`

- `curl https://api.cloudflare.com/client/v4/ | json_pp`
- response json의 indent가 정렬되어 나옴
