---
title: 'SQL 기본 사용 방법'
description: 'SQL 언어를 이용해서 데이터베이스를 다루는 기본 방법에 대해 다룬다.'
thumbnail: 'sql'
tag: 'sql'
createdAt: '2023-12-16'
---

# SQL 기본 사용 방법

SQL 언어를 이용해서 데이터베이스를 다루는 기본 방법에 대해 다룬다.

## 데이터베이스 서버

SQL에는 여러가지가 있는데 MySQL을 설치했다고 해보자.\
이를 실행하면 데이터베이스 서버를 사용할 수 있다.\
서버에 접근하는 방법은 다양하다.\
터미널에서 cli로 접근할 수도 있고 [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)와 같은 앱을 이용해서도 할 수 있다.

<!-- cli를 이용한 접근 방법 소개 -->

## 데이터베이스 서버 구조

데이터베이스 서버는 다음과 같은 구조를 갖는다.

```
데이터베이스 서버 > 데이터베이스 > 테이블
```

데이터베이스 서버에 여러 데이터베이스를 생성할 수 있고,\
각 데이터베이스에서 여러 테이블을 생성할 수 있다.

## 데이터베이스 관련 명령어

- 어떤 데이터베이스가 있는지 확인

```sql
show databases;
```

- 데이터베이스 생성

```sql
create database <이름>;
```

- 데이터베이스 삭제

```sql
drop database <이름>;
```

- 사용하려는 데이터베이스를 선택

```sql
use database <이름>;
```

- 현재 선택된 데이터베이스가 무엇인지 알고 싶을 때

```sql
select database();
```

## 테이블 생성

데이터베이스를 선택했으면 값을 기록할 수 있는 테이블을 생성할 수 있다.

### 기본 생성

`name`, `age`라는 column이 있는 `cats` 테이블을 생성한다.\
`name`에는 문자 타입의 데이터를 넣을 수 있고 max length는 100이다.\
`age`에는 숫자 타입의 데이터를 넣을 수 있고 `-2,147,483,648`에서 `2,147,483,647`까지의 숫자를 넣을 수 있다.\
다른 타입은 [MySQL 공식 문서](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)를 참고하자.

```sql
CREATE TABLE cats (
  name VARCHAR(100),
  age  INT
);
```

### 값을 필수로 입력

`NOT NULL`을 넣어서 `NULL`을 넣을 수 없음을 명시한다.\
빈값을 넣을 수 없다.

```sql
CREATE TABLE cats2 (
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL
);
```

### 기본값

값이 제공되지 않은 경우 기본값을 넣도록 할 수 있다.

```sql
CREATE TABLE cats3  (
  name VARCHAR(20) DEFAULT '무명',
  age INT DEFAULT 5
);
```

그러나 명시적으로 `NULL`을 넣는 것은 가능하기 때문에 이를 원하지 않는다면 `NOT NULL`도 설정해야 한다.

```sql
CREATE TABLE cats4  (
  name VARCHAR(20) NOT NULL DEFAULT '무명',
  age INT NOT NULL DEFAULT 5
);
```

### PRIMARY KEY

`id`와 같이 각 데이터(row)를 구분해야 할 때 사용한다.\
이미 존재하는 `id` 값을 포함해서 insert하려고 하면 에러가 발생한다.\
`NOT NULL` 옵션을 명시적으로 넣지 않아도 자동으로 설정된다.

```sql
CREATE TABLE cats (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL
);
```

아래와 같이 할 수도 있다.

```sql
CREATE TABLE cats2 (
  id INT,
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL,
  PRIMARY KEY (id)
);
```

`AUTO_INCREMENT`를 이용해서 `id`를 명시적으로 넣지 않아도 자동으로 1씩 증가하게 할 수 있다.

```sql
CREATE TABLE cats3 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT NOT NULL,
);
```

## 테이블 생성 확인

```sql
DESC <이름>
```

## 테이블 제거

```sql
DROP TABLE <이름>
```

## 데이터 추가

테이블에 데이터를 추가한다.

```sql
INSERT INTO cats (name, age)
VALUES ('야옹1', 2);
```

여러 데이터를 추가할 수도 있다.

```sql
INSERT INTO cats (name, age)
VALUES ('야옹1', 5),
       ('야옹2', 4),
       ('야옹3', 12);
```

## 데이터 조회

- 테이블에 있는 모든 내용을 조회한다.

```sql
SELECT * FROM cats;
```

- 특정 column만 조회한다.

```sql
-- name과 age column만
SELECT name, age FROM cats;
```

- 조건을 추가할 경우 `WHERE`을 사용한다.

```sql
-- age가 4인 경우만
SELECT * FROM cats WHERE age=4;
```

- 출력되는 column의 이름을 바꾸고 싶다면 `AS`(alias)를 이용한다.

```sql
-- id가 cat_id로 표시된다.
SELECT id AS cat_id, name FROM cats;
```

## 데이터 업데이트

업데이트를 하거나 삭제할 때에는 의도치 않게 데이터를 망가뜨릴 수 있으므로 `WHERE` 구문이 제대로 쓰였는지를 확인하기 위해 동일한 조건의 `SELECT`를 먼저 실행해보는 게 좋다.

```sql
-- id가 1인 데이터의 age를 14로 업데이트
UPDATE cats SET age=14 WHERE id=1;
```

## 데이터 삭제

```sql
-- id가 1인 데이터를 삭제
DELETE FROM cats WHERE id=1;
```

```sql
-- cats 테이블의 모든 데이터를 삭제
DELETE FROM cats;
```
