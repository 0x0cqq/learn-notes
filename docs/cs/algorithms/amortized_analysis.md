# 摊还分析(Amortized analysis)

摊还分析是指，我们使用 每个操作 的平均时间（当存在足够多的操作）作为操作的时间复杂度。

!!!warning
    这种讨论并不涉及到“期望”“概率”。它可以保证最坏情况下每个操作的**平均**性能。（平均的语义）。

三种主流方法：

+ 聚合分析（Aggregate analysis）
+ 核算法（Accounting Method）
+ 势能法（Potential Method）

## 聚合分析（Aggregate analysis）

加入对 $n$ 来说，$n$ 个可能发生的操作序列最坏情况下花费的总时间为 $T(n)$；

那么每个操作所用的平均时间/摊还时间为 $T(n)/n$ 。

### 二进制计数器

对于第 $i$ 位，从 $0$ 加到 $n$ 的过程中会被翻转 $\lfloor n / 2^i \rfloor$ 次；

所有位被翻转的总次数为 

$$
T(n) = \sum_{i=0}^{\lfloor\lg n\rfloor} \lfloor \frac{n}{2^i}\rfloor \leq n \sum_{i=0}^{+\infty}{\frac{1}{2^i}} = 2n
$$

每次操作的摊还时间是 $O(1)$ 。

## 核算法（Accounting Method）

赋予每**种**操作以不同的摊还代价(Amortized cost)。

记第 $i$ 个操作的摊还代价为 $\hat c_i$，真实代价为 $c_i$ 。

要求对所有的 $n$ 有：

$$
\sum_{i=1}^n \hat c_i \geq \sum_{i=1}^n c_i
$$


### 动态表

对每个 push 操作收 3 块钱。

1. 第一块钱用来往里存
2. 剩下两块钱用在倍增的时候使用

## 势能法（Potential Method）

本质上是核算法（Accounting）的推广，当数据结构变得很复杂，我们只能对数据结构的内部基本操作进行刻画，而不能轻易地对每个用户输入的“操作”进行刻画的时候。

1. 对数据结构定义势能函数：$\Phi: \mathcal D \to \mathbb R$；

2. 进行第 $i$ 个操作之后的数据结构为 $D_i$，定义摊还代价为：$\hat c_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$

> 只要势能函数满足 $\Phi(D_i) \geq \Phi(D_0) = 0$，那么 $\sum \hat c_i$ 就是 $\sum c_i$ 的上界。
