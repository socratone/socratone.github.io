---
title: '머신러닝'
description: '머신러닝'
thumbnail: 'machine-learning'
createdAt: '2023-10-18'
---

# 머신 러닝

## Data Preprocessing (데이터 전처리)

### 1. Importing the Libraries

라이브러리를 불러온다.

- numpy 배열을 다루는 라이브러리
- matplotlib 차트를 그려주는 라이브러리
- pandas는 dataset을 preprocess 해줌 (csv를 가져옴)

```py
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

### 2. Importing the Dataset

```py
dataset = pd.read_csv('Data.csv')
# 모든 행과 마지막을 제외한 열
x = dataset.iloc[:, :-1].values
# 모든 행과 마지막 열
y = dataset.iloc[:, -1].values
```
