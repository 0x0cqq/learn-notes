# 极限定理与估计

## 大数定律

## 中心极限定理（CLT）

!!!theorem
    $X_1, \cdots, X_n$ 独立同分布，$E(X_i) = \mu$ ， $Var(X_i) = \sigma^2 > 0$，则有：
    
    $$\lim_{n\to \infty}P(\frac{X_1+\cdots+X_n - n\mu}{\sqrt n \sigma} \leq x) = \Phi(x)$$

也就是说：
1. $X_1 + \cdots + X_n {\overset{近似 }{\sim}} N(n \mu, n \sigma^2)$
2. $\overline X { \overset{近似}{\sim}} N(n \mu,  \frac{\sigma^2}{n})$

也就是说，根据其应有的期望和方差称为正态分布。

### 应用：估计二项分布

若 $X_i \sim B(p)$， $\sum X_i \sim B(n,p)$，则：

$$P(t_1 \leq \sum_{i=1}^n X_i \leq t_2) \approx \Phi(y_2) - \Phi(y_1)$$

其中：

$$
\left\{
\begin{aligned}
y_1 = \frac{t_1-np{\color{ff0000}-1/2}}{\sqrt{np(1-p)}}\\
y_2 = \frac{t_2-np{\color{ff0000}+1/2}}{\sqrt{np(1-p)}}
\end{aligned}    
\right.
$$