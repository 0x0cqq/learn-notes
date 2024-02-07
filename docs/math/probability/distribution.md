# 常见分布



## 离散分布

### 伯努利分布

$X \sim B(p)$

### 二项分布

$X \sim B(n,p)$


### 泊松分布

$X \sim P(\lambda)$

近似 $B(n,p) \sim P(np)$

#### 失效率、危险率

$$
\begin{aligned}
P(x < X < x + \mathrm dx \mid X > x) &= \frac{P(x < X < x + \mathrm dx , X > x)}{P(X > x)} \\
&= \frac{P(x < X < x + \mathrm dx)}{P(X > x)} \\
&\approx \frac{F'(x)}{1-F(x)} \mathrm dx
\end{aligned}
$$

令 $\lambda(t) = \frac{F'(x)}{1-F(x)}$，则 $F(x) = 1 - e^{-\int_{0}^x \lambda(t) \mathrm dt}$ 。

## 连续分布

### 均匀分布

$X$

### 指数分布

### 正态分布

