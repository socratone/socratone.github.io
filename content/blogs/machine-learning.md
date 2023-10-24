---
title: '머신러닝'
description: '머신러닝 기초를 다룬다.'
thumbnail: 'machine-learning'
tag: 'machine-learning'
createdAt: '2023-10-18'
---

# 머신 러닝

코랩을 이용하면 브라우저에서 파이썬 코드를 돌려 머신 러닝을 테스트해볼 수 있다.

## Data Preprocessing (데이터 전처리)

올바른 결과가 나오기 위해서 먼저 머신 러닝에 사용할 데이터를 다듬을 필요가 있다.

### 1. Importing the libraries

라이브러리를 불러온다.

- numpy 배열을 다루는 라이브러리
- matplotlib 차트를 그려주는 라이브러리
- pandas는 dataset을 preprocess 해줌 (csv를 가져옴)

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

### 2. Importing the dataset

csv 파일을 배열로 불러온다.

```python
dataset = pd.read_csv('Data.csv')
# 모든 행과 마지막을 제외한 열
x = dataset.iloc[:, :-1].values
# 모든 행과 마지막 열
y = dataset.iloc[:, -1].values
```

### 3. Taking care of missing data

누락된 값을 채워 넣는다.

```python
from sklearn.impute import SimpleImputer

# missing_values=np.nan은 숫자가 아닌 값을 누락된 값으로 여기겠다는 의미
# strategy='mean'은 평균으로 하겠다는 의미
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
# 모든 행과 숫자 데이터가 있는 2번, 3번 열을 평균값으로 계산
imputer.fit(x[:, 1:3])
# 계산된 값으로 대체한다.
x[:, 1:3] = imputer.transform(x[:, 1:3])
```

### 4. Encoding categorical data

`나이`나 `가격`처럼 숫자 값이 아니라 `나라`처럼 문자 값인 경우\
숫자로 변환해야 하는데 이때 데이터 간의 크고 작음이라는 관계가 형성되기 때문에\
column을 셋으로 쪼개서 0과 1로 각 데이터를 표시한다.\
이렇게 했을 때 숫자로 변환을 할 수 있으면서도 데이터 간에 관계성이 생기지 않는다.

```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

# transformers: 인코딩(encoder) 변환을 하겠다. OneHotEncoder를 이용해서, 0번째 column에
# remainder: 나머지 column은 변환시키지 않겠다.
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [0])], remainder='passthrough')
x = np.array(ct.fit_transform(x))
```

true, false 또는 yes, no와 같은 두 타입의 데이터가 오는 경우 0과 1로 바꿔줄 수 있다.

```python
from sklearn.preprocessing import LabelEncoder

le = LabelEncoder()
y = le.fit_transform(y)
```
