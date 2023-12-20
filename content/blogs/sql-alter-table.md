---
title: 'SQL ALTER TABLE'
description: 'ALTER TABLE을 이용해서 테이블의 속성을 변경하는 방법에 대해서 다룬다.'
thumbnail: 'sql'
tag: 'sql'
createdAt: '2023-12-21'
---

# SQL ALTER TABLE

ALTER TABLE을 이용해서 테이블의 속성을 변경하는 방법에 대해서 다룬다.

## 테이블에 새로운 칼럼 추가

```sql
-- 없던 칼럼이 생긴 것이므로 기존 데이터의 phone은 NULL 값으로 초기화 됨
ALTER TABLE companies
ADD COLUMN phone VARCHAR(15);
```

```sql
-- NULL 값을 넣지 않고 초기값을 특정하고 싶다면 DEFAULTFMF 사용
ALTER TABLE companies
ADD COLUMN employee_count INT NOT NULL DEFAULT 1;
```

## 테이블 칼럼 삭제

```sql
-- 'phone' 칼럼 삭제
ALTER TABLE companies DROP COLUMN phone;
```

## 테이블 이름 변경

```sql
RENAME TABLE companies to new_companies;

-- or

ALTER TABLE companies RENAME TO new_companies;
```

## 칼럼 이름 변경

```sql
-- 'name'을 'new_name'으로 변경
ALTER TABLE companies
RENAME COLUMN name TO new_name;
```

## 칼럼 속성 변경

```sql
-- 'name' 칼럼의 속성을 변경
ALTER TABLE companies
MODIFY name VARCHAR(100) DEFAULT 'unknown';
```

## 칼럼 이름과 속성 변경

```sql
-- 'name'을 'new_name'으로 변경하고 칼럼의 속성도 변경
ALTER TABLE companies
CHANGE name new_name VARCHAR(50);
```

## 제약 조건(constraint) 추가

```sql
ALTER TABLE houses
ADD CONSTRAINT new_constraint CHECK (purchase_price >= 0);
```

## 제약 조건(constraint) 삭제

```sql
ALTER TABLE houses DROP CONSTRAINT new_constraint;
```
