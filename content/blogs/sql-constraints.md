---
title: 'SQL 제약 조건 (Constraints)'
description: '입력할 수 있는 데이터에 제약 조건을 넣을 수 있다.'
thumbnail: 'sql'
tag: 'sql'
createdAt: '2023-12-20'
---

# SQL 제약 조건 (Constraints)

입력할 수 있는 데이터에 제약 조건을 넣을 수 있다.

## `UNIQUE`

`UNIQUE`를 넣으면 column에 중복된 값을 넣을 수 없음 (에러 발생)

```sql
-- 'phone' 칼럼은 unique한 값이 보장됨
CREATE TABLE users (
  phone VARCHAR(15) NOT NULL UNIQUE
);
```

## `CHECK`

`CHECK`를 이용해서 넣을 수 있는 값의 조건을 설정할 수 있음

```sql
CREATE TABLE users (
  age INT CHECK (age >= 0)
);
```

## `CONSTRAINT`

아래에 별도의 `CONSTRAINT`를 넣어서 조건이 불일치할 경우 에러 메시지를 보여줄 수 있음

```sql
-- 에러 발생시 'age_not_negative'를 표시
CREATE TABLE users (
  age INT,
  CONSTRAINT age_is_negative CHECK (age >= 0)
);
```

두 column을 묶어서 검사할 수도 있음

```sql
-- 'name'과 'address'를 봤을 때 unique해야 함
CREATE TABLE companies (
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    CONSTRAINT duplicate_name_address UNIQUE (name, address)
);

-- 'sale_price'는 'purchase_price' 이상이어야 함
CREATE TABLE houses (
  purchase_price INT NOT NULL,
  sale_price INT NOT NULL,
  CONSTRAINT sale_price_under_purchase_price CHECK(sale_price >= purchase_price)
);
```
