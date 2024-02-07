# 随机过程习题选摘

## 作业9

### 3

计算机生成 Poisson 过程的方法：

1. 生成服从 $Exp(\lambda)$ 的随机变量序列 $T_i$
2. 令 $Y_j = T_1 + \cdots + T_j$ 表示每次到达的时刻。

## 作业10

### 2

Poisson 过程的合并：系数直接相加；

Poisson 过程的分裂：按照系数比例。

### 3

Poisson 过程是无记忆性的，意味着间隔时间是相互独立的。

这点可以用来求联合分布。

Poisson 过程的增量是独立的。

这意味着，当我们遇到 $N(t)N(s)$ 的东西的时候，可以拆成 $N(s)^2 + N(t)\big[N(t)(N(t)-N(s))\big]$ ，后面两个变量是相互独立的。

### 4

Poisson 过程的推导要点：

记 $P_n(t) = P(N(t+s) - N(s) = n)$

1. $P'_0(t) = -\lambda(t+s) \cdot P_0(t)$ ， $P_0(0) = 1$，通过微分方程知识解得 $P_0(t)$
2. $P'_n(t) = -\lambda(t+s)\cdot P_n(t) + \lambda(t+s) P_{n-1}(t)$，对目标进行数学归纳法

### 6

Poisson 过程的现实含义：

多次发生的小概率事件，但期望是一个较小的整数。

（似乎和 Poisson 变量的意义比较类似）

### 7

个数相互独立的独立变量之和也相互独立

全方差公式：

$$
Var(X) = E(Var(X \mid Y)) + Var(E(X \mid Y))
$$


### 12

购买人数为 $K$ 的情况下，卖出的披萨种类 $T$ 的期望是多少？也就是 $E(T \mid K)$ 是多少。

!!! info "解答"
    $$
    E(T \mid K = k) = n - \sum_{i = 1}^{n} (\frac{n-i}{n})^k 
    $$

    $$
    E(T \mid K) = n - \sum_{i=0}^{n-1}(\frac{i}{n})^K
    $$

    $$
    E(T) = E(E(T \mid K)) = n - \sum_{k=0}^{+ \infty} \frac{\lambda^k}{k!} e^{-\lambda} \sum_{i=0}^{n-1}(\frac{i}{n})^k\\
    = n - e^{-\lambda}\sum_{i = 0}^{n-1} \sum_{k=0}^{+\infty} \frac{1}{k!} (\frac{i\lambda}{n})^{k}\\
    =  n - e^{-\lambda} \cdot\sum_{i=0}^{n-1} e^{\frac{i \lambda}{n}} = n  - e^{-\lambda} \cdot \sum_{i=0}^{n-1}\left(e^{\lambda/n}\right)^i\\
    = n - e^{-\lambda}\frac{1-e^{\lambda/n}}{1-e^{\lambda}}
    $$

## 作业11


### 2 

... 是马尔可夫链吗？

证明是似乎很难，证明不是只要找出两个不同的概率即可。


### 4

判断常返与非常返：

+ 找到一条概率为正的回不来的路线，就是非常返

### 3

给出转移概率矩阵，画出转移概率图

### 4

给定转移矩阵矩阵，求 $E(X_3)$ 

$X_3 = X_0 P^{(3)}$ ，然后对这个向量求期望

### 6

若状态 $i$ 是常返的，且状态 $i$ 与状态 $j$ 不是互通的，则 $p_{ij} = 0$


<!-- !!! note "解答" -->
采用反证法。假设 $p_{ij} = w(w>0)$ ，则 因为 状态 $i$ 与状态 $j$ 之间不是互通的，所以 $p_{ji}^{(k)} = 0, \forall k$ 。

直观感受就是，到了 $j$ 就回不了 $i$ 了，因此至少有一个正概率回不到 $i$ ，因此是矛盾的。

这个理性咋写呢，可以用 $f_{ij}^{(n)}$ 始终比 $p_{ij}^{(n)}$ 小来给出一个上界。

## 作业12

### 1

简单随机游走，只有 $p = 0.5$ 时才是常返的，否则就是非常返的。

使用 Stirling 公式：$n! \sim \sqrt{2 \pi n} (\frac{n}{e})^n$

值得注意的是，二维随机游走仍然是常返的，但三维随机游走就不常返了。

### 2

证明常返 or 正常返 or 周期之类的，可以从他们是等价类性质入手证明。

### 3

证明：状态有限的 Markov 链必然至少有一个常返态

若无人常返，吾谁与归？

### 4

证明：若 $i \leftrightarrow j$ ，且为常返态；则 $i,j$ 同为正常返或同为零常返的。

反证。设 $i$ 正常返，$j$ 零常返。

因为 $i \leftrightarrow j$ ，所以存在 $a,b$ ，使得 $p_{ij}^{(a)} > 0, p_{ji}^{(b)} > 0$ 。

因此 $p_{jj}^{(a+b+n)} \geq p_{ji}^{(b)} \cdot p_{ii}^{(n)} \cdot p_{ij}^{(a)} = A  \cdot p_{ii}^n$，所以 $\lim\limits_{n\to\infty} p_{jj}^{(a+b+n)} \geq  A \cdot \lim\limits_{n\to\infty} p_{ii}^{(n)}$。

然而因为 $j$ 零常返，所以 $\lim\limits_{n\to\infty} p_{jj}^{(a+b+n)} = \lim\limits_{n\to\infty} p_{jj}^{(n)} = 0$，因此 $\lim\limits_{n\to\infty} p_{ii}^{(n)} = 0$ 。

因此 $i$ 也是零常返，矛盾。

### 5

证明：状态有限的 Markov 链不可能有零常返态。

反证。假设状态 $i$ 零常返，$A(i)$ 为 $i$ 的可达集；

1. $A(i)$ 中必然有正常返的状态 $x$，否则 $\lim\limits_{n \to \infty}\sum\limits_{j \in A(i)} p_{ij}^{(n)} \equiv 1$ 不成立。
2. 该正常返状态 $x$ 必然不可达 $i$ ，否则 $i$ 和 $x$ 互通，应该具有相同常返性；
3. 则 $i$ 不为常返态：可以以正概率从 $i$ 到达 $x$ ，然后以 1 的概率回不到 $i$ ；有正概率永远回不到 $i$ 。

矛盾的。

### 6

证明：对于不可约非周期 Markov 链，如果状态都是非常返的或者都是零常返的，则平稳分布不存在。

反证。假设存在平稳分布 $\vec \pi = (\pi_1, \pi_2, \cdots)$ 。

因为状态都是非/零常返的，因此 $\forall i,j \in S$，有 $\lim\limits_{n \rightarrow \infty} p_{ij}^{(n)} = 0$ 。

有 $\pi_{j} = \sum\limits_{i=0}^{\infty} \pi_i p_{ij}^{(n)}$，

拆开有限和无限项：$\pi_{j} = \sum\limits_{i=0}^{M} \pi_{i} p_{ij}^{(n)} + \sum\limits_{i = M+1}^{\infty} \pi_{i} p_{ij}^{(n)}$

对无限项放缩：$\pi_{j} \leq \sum\limits_{i=0}^{M} \pi_{i} p_{ij}^{(n)} + \sum\limits_{i = M+1}^{\infty} \pi_{i}$

因此可以对整个式子对 $n$ 取极限（并且可以交换）：$\pi_{j} \leq \sum\limits_{i=0}^{M} \pi_{i} \lim\limits_{n\rightarrow\infty}p_{ij}^{(n)} + \sum\limits_{i = M+1}^{\infty} \pi_{i}$

得到： $\pi_{j} \leq \sum\limits_{i=0}^{M} \pi_{i} \times 0 + \sum\limits_{i = M+1}^{\infty} \pi_{i} < \varepsilon$

因此 $\pi_j = 0,\forall j \in S$ ，然而 $\sum\limits_{j \in S} \pi_j \equiv 1$ 。

矛盾。

### 7

根据矩阵求 Markov 链的平稳分布

求特征向量就完事了。

注意需要横着求。

## 作业13 

### 2

证明是马尔可夫链：不太好形式化的表示出来。说明只与上一个状态有关即可。

证明...分布是 Markov 链的平稳分布：用可逆性条件

证明是唯一的平稳分布/求所有的平稳分布：周期为 1 + 所有正常返。

### 3

如何给出平稳分布的直观解释？

离开和进入的可能性相同。

## 作业 14

### 1

计算 $X(t) + X(s)$ 的分布 $(t \geq s)$。

!!! caution "注意"
    这两个并非独立的变量，不能直接使用矩母函数。

将 $X(t) - X(s)$ 和 $2X(s)$ 相加。

计算 $P(X(t) \leq 0,t = 0,1,2 )$ 。

!!! error "错误"
    这里是三个条件与的意思，而不是分别算三个的意思

$$
P(X(1) \leq 0 , X(2) \leq 0) = \int_{-\infty}^0 \int_{-\infty}^0 P(X(1) = x_1, X(2) = x_2) \text d x_1 \text d x_2
$$

$$
=\int_{-\infty}^{0} \int_{-\infty}^{-u} P(X(1) = u,X(2) - X(1) = v) \text d v \text du
$$

$$
=\int_{-\infty}^{0} \int_{-\infty}^{-u} \frac{1}{\sqrt {2\pi}} e^{-\frac{u^2}{2}} \frac{1}{\sqrt {2\pi}} e^{-\frac{v^2}{2}} \text dv \text du
$$

于是可以进行换元：

$$
\left\{
\begin{aligned}
u = r \cos \theta\\
v = r \sin \theta
\end{aligned}
\right.
$$

积分区域是，$r \in (0,+ \infty)$，$\theta \in (3\pi/4 ,3\pi/2)$

那么 $\text du \text dv = r \text dr \text d\theta$

代入：

$$
=\int_{0}^{+\infty} \int_{\frac{3\pi}{4}}^{\frac{3\pi}{2}} r \frac{1}{2\pi} e^{-\frac{r^2}{2}} \text d \theta \text d r =\frac{3\pi}{4} \cdot \frac{1}{2\pi} [-e^{-\frac{r^2}{2}}]_{r = 0}^{+\infty} = \frac{3}{8}
$$

### 4

关于首中时的期望（也不止是）： $E(T_a) = \int_{0}^{+\infty} P(T_a \geq t) \text dt$ 。

### 5

求 $P(T_1 < T_{-1} < T_2)$ 。

可以先考察六种相互顺序。不过我们简化一下。

$P(T_1 < T_{-1} < T_2) = P(T_1 < T_{-1} < T_2 \mid T_1 < T_{-1}) P(T_1 < T_{-1})$

$= \frac{1}{2} P(T_{-1} < T_2 \mid T_1 < T_{-1})$

$= \frac{1}{2} (1-P(T_{-1} > T_2 \mid T_1 < T_{-1}))$


下面考察 $P(T_{-1} > T_2 \mid T_{1} < T_{-1})$ 。

这个东西的意思是，已经知道了先到的 1 ，后到的 -1 ，这个时候，问 -1 在 2 后面到的概率。

这个问题，也就是：知道 1 最先到，现在问 2 在 -1 前面到的概率是多少，也就是 $P(T_{-2} > T_1)$，这个也就是 $P(T_2 > T_{-1})$，我们考察其反面。

$P(T_{-1} > T_{2}) = P(T_{-1} > T_{2} \mid T_{1} < T_{-1}) \cdot P(T_1 < T_{-1}) + P(T_{-1} > T_{2} \mid T_{1} < T_{-1}) \cdot P(T_1 < T_{-1})$

$=P(T_{-1} > T_{2} \mid T_{1} < T_{-1}) \cdot 1/2 + 0$

总结一下就是：$P(T_{-1} > T_{2} \mid T_{1} < T_{-1} ) =(1-\frac{1}{2} P(T_{-1} > T_{2} \mid T_{1} < T_{-1}))$，因此有 

$P(T_{-1} > T_{2} \mid T_{1} < T_{-1}) = \frac{2}{3}$

最后的答案是：

$P(T_1 < T_{-1} < T_2) = (1 - \frac{2}{3}) /2  = \frac{1}{6}$

!!!summary "总结"
    这个题使用了求反和对称性。
    
    运用很灵活是解出本题的关键，也是这个题目不好做的原因。

## 作业15

### 1

条件全期望公式:

$$
E(X \mid \mathbf U) = E(E(X \mid \mathbf Y, \mathbf U) \mid \mathbf U)
$$

### 3

停时要对于鞅而言，不是的要构造成符合鞅的均值条件的。

## 习题课5


### 2

TBD

### 3

给定一个条件的时候，求一个什么什么东西；大概率要用贝叶斯公式。

先算这个地方是季节 A 还是季节 B ，用贝叶斯：

$$
P(A \mid N(t) = n) = \frac{P(N(t) = n \mid A) P(A)}{P(N(t) = n \mid A)P(A)+P(N(t) = n \mid B)P(B)}
$$

然后再来算分布，用全概率：

$$
P(T = t) = P(T = t \mid B) P(B) + P(T = t \mid A) P(A)
$$

## 习题课6

### 2

也是利用 $\pi_j = \sum\limits_{i \in S} \pi_i p_{ij}^{(n)}$