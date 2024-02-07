## 作业题选摘

### 作业1

#### 1.(2) 

证明：$P(A) + P(B) - 1 \leq P(AB) \leq P(A+B) \leq P(A) + P(B)$

$P(AB) = P(A) + P(B) - P(A+B)$，可以知道最右侧不等式和最左侧不等式。

$P(AB) \leq P(A) \leq P(A+B)$ 。

#### 10 

注意条件给出的话到底是什么意思。

把事件都设出来。

$P(BC \mid A) = P(C \mid BA) P(B \mid A) = \frac{P(ABC)}{P(AB)} \frac{P(AB)}{P(A)}$

#### 12

设其及其后代全部灭亡为事件 $A$

$P(A) = \frac{1}{3}\times1+\frac{1}{3}\times P(A) + \frac{1}{3} \times (P(A))^2$

### 作业2

#### 2 

复习概率的连续性。简单来说，就是集合的并/交的极限可以和概率交换位置。

使用的话，就要构造一个**单调的**集合序列。

#### 9

计算某分布的期望或方差时，要善用已经知道的分布的求和=1结果。

### 作业3

#### 4 

均值为 $\lambda$ 的指数分布是 $\mathrm{Exp}(\frac 1 \lambda)$

#### 5

以 95% 的把握不冤枉一个无罪的人

$P(判处无罪 \mid 事实上无罪) \geq 0.95$

#### 6

“各个年龄段的吸烟者的死亡率是非吸烟者的死亡率的 2 倍”

意味着是失效率，或者说危险率，就是在 $\mathrm{d}t$ 时间内的死亡的概率是两倍。

#### 7

积分变换

#### 8

Beta 分布

$f(x) = \frac{\Gamma(a+b)}{\Gamma(a)\Gamma(b)}x^{a-1}(1-x)^{b-1},(0 < x < 1)$

$E(X) = \frac{a}{a+b}$

$Var(X) = \frac{ab}{(a+b)^2(a+b+1)}$

#### 11 

要掌握硬变换的知识

### 作业4

#### 4，5

二元正态...

$X = [X_1,\cdots,X_n]^T$ ，联合分布： $f_X(\boldsymbol{x}) = \frac{1}{\sqrt{(2\pi)^n |\Sigma|}} \exp(-\frac{1}{2}(\boldsymbol x-\boldsymbol\mu)^T \Sigma^{-1}(\boldsymbol x - \boldsymbol \mu))$

其中 $\boldsymbol \mu$ 为均值向量，$\Sigma$ 为协方差方阵 $(Cov(X_i,X_j))_{(i,j)}$ 



计算的时候先标准化会方便很多。



#### 8

Coupla 函数。

构造指定分布的随机变量。

如果 $X \sim U(0,1)$ ，$F$ 为指定的随机变量的累计分布；那么 $F^{-1}(X)$ 的累计分布函数即为 $F$ 

二元的也是类似的。



$C(u,v)$ 是一个二元 Coupla 函数，边际分布均为 $U(0,1)$ 。

则 $X,Y \sim C(F(x),G(y))$ ，其边际分布分别为 $F(x), G(y)$ 

### 作业5

#### 2

简单的概率密度函数的积分变换。

$f(x,y)= g(u,v) \left|\frac{\partial(u,v)}{\partial(x,y)}\right|$

#### 3

超级麻烦的二元正态的代换。

#### 9 

对数正态分布的均值和方差

巧妙换元，借用分布函数积分为 $1$ 的结论

#### 10

样本方差是除以 $n-1$ ，期望也是 $\sigma^2$

#### 11

不相关和 $Corr(X,Y) = 0$ 和 $E(XY) = E(X)E(Y)$ 是等价的，而非独立。

#### 13

期望有线性性，可以设 $X_i$ 为第 $i$ 个人是否拿到了自己的帽子，$X = \sum_{i=1}^n X_i$  即为拿到帽子的人数的和。

#### 14 

期望的柯西不等式

$E^2(UV) \leq E(U^2)E(V^2)$ 。证明，构造方差 $Var(U-tV) \geq 0$ 。或者也可以用积分形式的柯西去理解。

#### 15

$Cov(X_i-\overline X, \overline X) = 0$ ，但两者只是线性不相关，并不独立。

### 作业6

#### 2

矩母函数

求 $n$ 次导，在 $0$ 点的取值是 $n$ 阶矩。求导不要忘记 $n$ 的系数。

标准矩拆开成零点矩来计算。



#### 3

常见的矩母函数一定要背熟orz

#### 4

正态的矩母函数取 $t=k$ 就是 对数正态的 $k$ 阶原点矩。

#### 8

$E(Y \mid X) = X$ 意味着什么？具有极强的协变性。

$Cov(X,Y) = Var(X)$ 

#### 9

独立 --> $E(Y \mid X) = E(Y)$

#### 10

条件方差

$Var(Y\mid X) = E((Y - E(Y\mid X))^2 \mid X)$

和方差没有本质区别：

$Var(Y|X) = E(Y^2\mid X) - E^2(Y \mid X)$

$Var(Y) = E(Var(Y \mid X)) + Var(E(Y \mid X))$ 可以视作，对于每一个 $X$，内部的方差，和不同的X之间的方差的求和。

#### 12

最优线性预测

用 $aX+b$ 去估计 $Y$

系数的选择： $a = \rho\frac{\sigma_2}{\sigma_1}, b = \mu_2 - \rho \frac{\sigma_2}{\sigma_1}\mu_1$

#### 13

随机个数（$N$）个随机变量的和，可以用矩母函数转成期望，然后用条件期望去把 $N$ 放进去。

### 作业7

#### 1

能用强大数的时候就用强大数。

概率为 1 也不能说“就是”。

#### 4

$S^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i-\overline{X})^2$ 依概率收敛到 $\sigma^2$ 


$$
S^2 = \frac{1}{n-1} \sum_{i=1}^n((X_i-\mu) - (\overline X - \mu))^2
$$

$$
= \frac{1}{n-1}\sum_{i=1}^n((X_i-\mu)^2 + (\overline X - \mu)^2 - 2 (X_i - \mu)(\overline X - \mu))
$$

$$
=\frac{1}{n-1}\left\{\sum_{i=1}^n(X_i-\mu)^2 + \sum_{i=1}^n(\overline X - \mu)^2 -2(\overline X - \mu)\sum_{i=1}^ n{(X_i-\mu)}\right\}
$$

$$
=\frac{1}{n-1}\left\{\sum_{i=1}^n(X_i-\mu)^2 + n(\overline X - \mu)^2 -2(\overline X - \mu)n(\overline X-\mu)\right\}
$$

$$
=\frac{1}{n-1}\sum_{i=1}^n(X_i-\mu)^2 - \frac{n}{n-1}(\overline X - \mu)^2
$$

依概率收敛 $\lim\limits_{n\rightarrow\infty} P(|X_n - \mu| \leq \varepsilon) = 1$

后面的依概率收敛到 0。前面的...我们视作一个各自独立的随机变量。那么这个就趋近于它的期望，也就是 $\sigma^2$ ？



#### 8

运用 CLT 估计的时候先标准化成标准正态再求分布



#### 9

算术平均值与真值之差的绝对值低于微小正数 $\varepsilon$ 的概率超过  $1-\alpha$ 的概率



也就是 $P(|\overline X - \mu| \leq \varepsilon) > 1-\alpha$  也就是说，$\frac{\overline X - \mu}{\frac{\sigma}{\sqrt n}} \leq \frac{\sqrt n}{\sigma}$ 。

