---
title: '머신러닝'
description: '머신러닝 기초를 다룬다.'
thumbnail: 'machine-learning'
createdAt: '2023-10-18'
---

# 머신 러닝

코랩을 이용하면 브라우저에서 파이썬 코드를 돌려 머신 러닝을 테스트해볼 수 있다.

## Data Preprocessing (데이터 전처리)

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
