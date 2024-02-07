# 随机变量的数字特征

## 期望

!!! definition
    $$
    E(X) = 
    \left\{
    \begin{aligned}
    \sum_{x \in \mathbb R} x f(x)\\
    \int_{-\infty}^{+\infty} x f(x) \text dx
    \end{aligned}
    \right.
    $$

### 期望的性质

!!! theorem "线性性质"
    $$
    E(c_1X_1+c_2X_2) = c_1 E(X_1) + c_2 E(X_2)
    $$

!!! theorem "独立(不相关)可乘"
    $$
        E(X_1X_2 \cdots X_n) = E(X_1) \cdot E(X_2) \cdot \cdots \cdot E(X_n)
    $$

!!! theorem "Cauchy 公式"
    $$
        E^2(UV) \leq E(U^2) E(V^2)
    $$

    证明思路：构造 $E((U-t_0V)^2)$ ，取等当且仅当 $U = t_0V + t_1$ 。

## 方差

$$
Var(X) = E\left[(X-E(X))^2\right] 
$$

!!! note "计算"
    实际计算过程中： $Var(X) = E(X^2) - E^2(X)$

$$
SD(X) = \sqrt{Var(X)}
$$

### 性质

!!! theorem "基本性质"
    1. $Var(c) \equiv 0$
    2. $Var(X+c) = Var(X)$
    3. $Var(cX) = c^2Var(X)$
    4. $Var(X+Y) = Var(X) + Var(X+Y) + 2 Cov(X,Y)$

## 协方差、相关系数

$$
Cov(X,Y) = E\left[(X-\mu_1)(Y-\mu_2)\right]
$$

$$
Corr(X,Y) = \frac{Cov(X,Y)}{\sigma_1\sigma_2} := \rho
$$

### 性质

!!! theorem "基本性质"
    1. $Cov(c,X) = 0$
    2. $Cov(X,Y) = Cov(Y,X)$
    3. $Cov(X,X) = Var(X)$

!!! theorem "双线性"
    协方差具有双线性

$-1 \leq Corr(X,Y) \leq 1$

## 矩

矩：$E\left[(X-c)^k\right]$

原点矩： $c = 0$

中心矩： $c = E(X)$

标准矩： $E \left[(\frac{x-c}{\sigma})^k\right]$


## 矩母函数

$$
M_X(t) = E [e^{tX}]
$$

### 性质

!!! theorem 
    若 $Y = aX + b$ ，则 $M_Y(t) = e^{tb}M_X(ta)$

### 应用

!!! theorem "确定矩"
    $E(X^n) = {M_X}^{(n)}(0)$

!!! theorem "推断独立变量的和的分布"
    若 $X,Y$ 独立， 则$M_{X+Y}(t) = M_X(t) \cdot M_Y(t)$ 。


## 条件期望


$$
E(Y \mid \mathbf X) \triangleq E(Y \mid \mathbf X = \bm x) = m(\mathbf X)
$$

!!! example "二元正态中的条件期望"
    若 $X,Y \sim N(\mu_1,\mu_2,\sigma_1,\sigma_2,\rho)$ ，则 $E(Y \mid X) = \mu_2 + \rho \frac{\sigma_2}{\sigma_1}(X-\mu_1)$

重期望公式：

$$
E(E(X \mid Y)) = E(X)
$$

全方差公式：

$$
Var(X) = Var(E(X \mid Y)) + E(Var(X \mid Y))
$$



## 均方误差

!!!definition 
    $E((Y-g(X))^2)$ 称为在预测 $g$ 下的均方误差。

!!!theorem
    最小的均方误差为 $E((Y - E(Y \mid X))^2)$

但是一般常常采用线性的拟合方法，也就是 $g(X) = aX+b$。