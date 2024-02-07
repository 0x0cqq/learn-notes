# 概率不等式

## Markov 不等式

如果随机变量 $Y \geq 0$，则对于 $\forall a > 0$ 有 :

$$
P(Y \geq a) <= \frac{E(Y)}{a}
$$

或者 没有 $Y \geq 0$ 条件，则有

$$
P(|Y| \geq a) \leq \frac{E(|Y|)}{a}
$$

## ChebyShev 不等式

若 $Var(Y)$ 存在，则 $\forall a > 0$ 有：

$$
P(|Y-E(Y)| \geq a) \leq \frac{Var(Y)}{a^2}
$$

## Chernoff 不等式

$\forall a > 0, \forall t > 0$，有

$$
P(Y \geq a) \leq \frac{E(e^{tY})}{e^{ta}}
$$

（$E(e^{tY})$ 需要存在）

