---
title: '정규 표현식'
description: '정규 표현식을 이용하면 별다른 알고리즘 없이도 문자를 손쉽게 다룰 수 있다.'
thumbnail: 'regex'
---

# 정규 표현식

정규 표현식을 이용하면 별다른 알고리즘 없이도 문자를 손쉽게 다룰 수 있다.

## 문법으로 쓰이는 문자들

정규 표현식에서 예약어로 쓰이는 문자들이 있다.\
다음과 같다.\
`/ ? * . { } [ ] ( ) ^ $`\
때문에 본래의 문자로 쓰려면 escape 처리를 해야 한다.\
각 문자 앞에 `\` 를 붙이면 된다.\
예를 들어 `.`을 찾고 싶다면 `\.`\
예외적으로 `[]` 안에서는 `?` 에 escape 처리를 하지 않아도 된다.

## 문법

### /

정규 표현식의 시작과 끝에 쓴다.

### ?

0번 또는 1번만 나온다.

- `a?` - a가 한 번 나오거나 안 나옴

### +

1번 이상 나온다.

- `a+` - `a`, `aa`, `aaa`, ... 가 가능

### \*

0번 또는 1번 이상

### { }

- `{1,3}` - 1 ~ 3번
- `{3}` - 3번
- `{3,}` - 3번 이상

### [ ]

- `[ab]` - a 또는 b
- `[ab]+` - a 또는 b가 반복해서 올 수 있음
- `[a-f]` - a에서 f까지
- `[^ab]` - a와 b는 아님

### \

- `\t` - tab character
- `\n` - new line
- `\r` - carriage return
- `\f` - line feed
- `\v` - vertical tab

### .

모든 글자

### ^

정규 표현식 조건을 첫 번째 글자에 고정한다.

- `^[A-Z]` - 대문자 알파벳으로 시작

### $

정규 표현식 조건을 끝 글자에 고정한다.

- `[\.!?]$` - `. ! ?` 셋 중 하나로 끝남

### \s

모든 공백 문자

### \S

공백 문자가 아닌 모든 문자

### \d

모든 숫자\
`[0-9]` 와 동일

### \w

단어 글자\
`[0-9A-Za-z_]` 와 동일

### \b

특이한 케이스로 다른 것들과 달리 글자를 의미하지 않는다.\
`비단어` 글자와 `글자`가 맞닿아 있는지 여부를 판단하는 역할일 뿐이다.\
`\babc\b` 로 썼을 경우 abc의 양쪽 옆에는 단어 글자(`\w`)가 아닌 문자가 와야 한다.\
`\babc` 로 썼을 경우 abc 왼쪽에는 비단어 글자가 와야 한다.

### \B

위와 반대로 단어 글자가 옆에 와야 한다.

## 플래그

환경에 따라 사용할 수 없는 것도 있다.

### g (global)

가능한 모든 경우를 매치 (기본값은 하나만 매치)

### m (multi line)

`^` 과 `$` 를 각 라인(multi line)의 시작과 끝으로 함 (기본값은 new line에 상관없이 제일 처음과 끝임)

### i (case insensitive)

대소문자를 구분하지 않음

### s (single line)

`.` 을 사용할 경우 new line 글자를 포함하여 모든 문자들이 매치 (new line을 문자로 취급하는 것임)

## Tools

- [regex101.com](https://regex101.com/) - 정규표현식을 테스트해볼 수 있다.

## References

- [ko.javascript.info/regexp-introduction](https://ko.javascript.info/regexp-introduction) - 패턴과 플래그