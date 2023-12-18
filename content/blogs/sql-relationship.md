---
title: 'SQL 관계 설정과 JOIN'
description: 'SQL에서 관계를 설정하는 방법과 JOIN 문법을 다룬다. JOIN을 이용해서 id로 연결된 둘 이상의 테이블을 결합해서 보여줄 수 있다.'
thumbnail: 'sql'
tag: 'sql'
createdAt: '2023-12-18'
---

# SQL 관계 설정과 JOIN

SQL에서 관계를 설정하는 방법과 JOIN 문법을 다룬다.\
JOIN을 이용해서 id로 연결된 둘 이상의 테이블을 결합해서 보여줄 수 있다.

## 1:1

두 테이블의 데이터를 1:1로 대응시킬 수 있다.

`users` 테이블과` userDetails`라는 테이블이 있다면 `users`에 사용자에 관한 기본 정보를 저장하고 `userDetails`에 세부적인 사항들을 저장해서 각 데이터를 1:1로 연결시킬 수 있겠다.\
1:1 관계는 많이 사용되지는 않는다.

## 1:N

고객과 고객의 주문 데이터를 각각 `customers`와 `orders`라는 테이블에 저장한다고 하자.
고객 한 명은 여러 주문을 할 수 있고 하나의 주문은 하나의 고객에만 연결될 수 있기 때문에 고객과 주문은 1:N 관계가 된다.

테이블과 칼럼을 아래와 같은 구조로 정의할 수 있다.

- customers
  - customer_id
  - name
  - email
- orders
  - order_id
  - order_date
  - price
  - customer_id

위처럼 정의하려면 아래와 같이 코드를 입력한다.

```sql
CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  order_date DATE,
  price INT,
  customer_id INT,
  -- customer_id는 foreign key이고 customers의 id를 참조한다.
  -- customers의 id에 없는 값을 넣으면 에러가 발생한다.
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

`orders`의 경우 `ON DELETE CASCADE`를 넣어서 데이터를 동기화 할 수 있다.

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  order_date DATE,
  price INT,
  customer_id INT,
  -- ON DELETE CASCADE를 넣었을 경우 customers의 데이터가 삭제되면
  -- customer_id와 연결된 orders의 데이터도 삭제된다.
  FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
);
```

### INNER JOIN

두 테이블의 데이터를 결합해서 조회하려면 JOIN을 사용한다.\
`JOIN`은 `INNER JOIN`과 같다.\
두 테이블에서 `customer_id`로 연결되는 모든 데이터를 보여준다.

`orders` 테이블의 데이터를 가져오는데 `orders`의 `customer_id`에 해당하는 데이터(customers의 id)를 `customers`에서 가져다가 붙여준다.

```sql
SELECT * FROM customers
JOIN orders ON orders.customer_id = customers.id;
```

`customers`와 `orders`의 순서는 바뀌어도 상관없다.

```sql
SELECT * FROM orders
JOIN customers ON orders.customer_id = customers.id;
```

### LEFT JOIN

왼쪽 테이블을 기준으로 결합하는데 오른쪽 테이블에서 JOIN 조건에 해당하는 데이터를 모두 가져오고 해당 사항이 없는 경우에는 `NULL`로 표시해준다.\
위의 INNER JOIN에서 `customer_id`로 연결되지 않는 `customers` 데이터도 `NULL`을 넣어서 가져오는 것이다.

```sql
SELECT * FROM customers
LEFT JOIN orders ON orders.customer_id = customers.id;
```

INNER JOIN에 비해서는 잘 사용되지 않는다.\
주문하지 않은 고객 리스트나 아래와 같이 모든 고객이 얼마만큼 지출했는지를 알고 싶을 때 등에 쓰인다.

```sql
SELECT name, IFNULL(SUM(amount), 0) AS money_spent FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
GROUP BY name;
```

### RIGHT JOIN

오른쪽 테이블을 기준으로 결합한다는 점말고는 LEFT JOIN과 동일하다.

## N:N
