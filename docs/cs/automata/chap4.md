# Properities of Regular Language

## 基本问题

### 问题 1

判断字符串 $w$ 是否在正则语言 $L$ 中?

1. 如果我们有 $L$ 的 DFA 表示：$w \in L \Longleftrightarrow$ $w$ 被 DFA 接收。时间复杂度为 $O(|w|)$
2. 如果我们有 $L$ 的 NFA 表示：转化为等价的 DFA 之后，转化为问题 1。时间复杂度为 $O(|w| s^2)$ ，其中 $s$ 为 DFA 的状态数。
3. 如果我们有 $L$ 的正则语言表示：转换为等价的 NFA 之后，转化为问题 2 。

### 问题 2

如何判断一个正则语言 $L$ 是否为空？

1. 如果我们有 $L$ 的 DFA 表示：$L$ 非空 $\Longleftrightarrow$ *某一个*终态可达。判定复杂度为 $O(n^2)$ 。（事实上可以 naive 地优化到 $O(n)$）
2. 如果我们有 $L$ 的正则语言表示：使用归纳法。$L(\emptyset) = \emptyset, L(a) \neq \emptyset, L(\varepsilon) \neq \emptyset$，然后对运算 $R = R_1 + R_2$, $R = R_1R_2$, $R = R_1^*$, $R = (R_1)$ 进行归纳。

### 问题 3

如何判断两个正则语言 $L_1$ 和 $L_2$ 相等？

1. 将各种表示转化为 DFA，下面判断两个 DFA 是否等价。
2. 将两个 DFA 并起来，构造新的 DFA 。
3. 如果在两个 DFA 中初态不可区分，那么两个 DFA 就是等价的。


### 问题 4

如何判断一个正则语言 $L$ 是否是无限的。

1. 将各种表示转换为 DFA。
2. 自动机中初态和终态的路径上，有可达的环 $\Longleftrightarrow$ $L$ 是无限的。


## 正则语言的判定问题

!!!theorem "鸽巢原理"
    $n$ 只鸽子，$m$ 个鸽巢，若 $n > m$，则至少有一个鸽巢中有多只鸽子。

直觉：对于一个字符串 $|w|$ 来说，如果 $|w| > n$，其中 $n$ 为 DFA 的状态数，则 $w$ 的路径中，一定有重复出现的状态（顶点）。

### 泵引理

给定一个*无限*[^1]正则语言 $L$，存在正整数 $m$，使得 $\forall w \in L, |w| \geq m$，都存在字符串 $x,y,z$，满足$|xy| \leq m$ [^2] 且 $|y| \geq 1$，使得：

$$
w_i = xy^iz \in L \;\; , i = 0,1,2, \cdots
$$

[^1]: 有限语言一定是正则的。

[^2]: 这里我们仅考虑第一次出现重复的位置，因此有这样的式子。

形式化的表示：

$$
\exists m \forall w \exists (x,y,z) \forall k (w \in L \wedge |w| > m \to w = xyz \wedge y \neq \varepsilon \wedge |xy| \leq m \wedge (k \geq 0 \to (xy^kz \in L)))
$$

否定的形式化

$$
\forall m \exists w \forall(x,y,z) \exists k (w \in L \wedge |w| \geq m \wedge (w = xyz \wedge y \neq \varepsilon \wedge |xy| \leq m \to k \geq 0 \wedge xy^kz \notin L))
$$


### 应用

应用1：证明语言 $L$ 不是正则的。【对上述定理的否定的应用】

1. 对任意的 $m$：
    1. **找到**一个长度**至少**为 $m$ 的串 $w \in L$ 。
    2. **任意**分割 $w = xyz$，满足 $y \neq \varepsilon$ 且 $|xy| \leq m$ 。
    3. **找到**一个 $k \geq 0$，使得 $xy^kz \notin L$
 
!!!example "例1"
    证明 $L_{01} = \{0^n 1^n \mid n \geq 1\}$ 不是正则的。

!!!example "例2"
    证明 $L = \{v v^R \mid v \in \Sigma^{*}\}$ 不是正则的。

!!!example "例3"
    证明 $L = \{a^n b^l c^{n+l} \mid n,l \geq 0\}$ 不是正则的。

!!!example "例4"
    证明 $L = \{0^{n !} \mid n \geq 1\}$ 不是正则的。

!!!example "例5"
    证明 $L = \{0^p \mid p \text{ is a prime}\}$ 不是正则的。

!!!hint
    并非所有非正则语言都不满足泵引理。

    反例：

    $L = \{a^ib^jc^k \mid i,j,k \geq 0, \text{if } i = 1 \text{ then } j = k\}$

## Minify DFA & The Myhill-Nerode Theorem

### 等价关系和可区分

等价关系满足：

1. 自反性
2. 对称性
3. 传递性

等价关系可以构成等价类，等价类是对集合的划分。

在同一个等价类里的节点是不可区分的，否则是可区分的。

### 将 DFA 的节点化为等价类

!!!definition
    对 `DFA` $D=(Q, \Sigma, \delta, q_0, F)$ ，在集合 $Q$ 上定义关系 $R$：

    $$
    p R q \Longleftrightarrow \delta^*(p,w) \in F \leftrightarrow \delta^*(q,w) \in F , \forall p,q \in Q,w \in \Sigma^*
    $$

!!!theorem
    证明以上关系满足等价性。


### 等价类划分方法：填表法

我们首先假定 $p,q$ 都是不可区分的。

基于以下的递归算法：

1. 基础: $p \in F, q \notin F$，那么 $p,q$ 是可区分的。
2. 递归：若 $p,q$ 可区分，且 $\delta(r,a) = p, \delta(s,a) = q$，那么 $r,s$ 也是可区分的。

不可区分的两个状态之间有等价关系。

!!!theorem "定理：上述填表法是正确的"
    TBD 

### 根据等价类重新构造最优 DFA

可以将所有等价类合并到一起，成为单个状态。

!!!theorem "定理：上述构造的 `DFA` $M$ 是状态最少的。"
    反证法，假设有一个 `DFA` $N$ 拥有更少的状态。

    我们构造自动机的并，即 $M \cup N$。可以得出以下结论：
    
    1. $M$ 和 $N$ 的初态是不可区分的。
    2. 若 $p$ 和 $q$ 不可区分，则 $\delta(p,a)$ 和 $\delta(q,a)$ 也是不可区分的。
    3. $M$ 的任一状态至少与 $N$ 的一个状态是不可区分的。

    然而，因为有 $|Q_N| < |Q_M|$ ，所以（在 $M \cup N$ 中，原来属于） $M$ （的状态）中存在两个状态与 $N$ 中的同一个状态不可区分。根据传递性，这两个状态不可区分。这与 $M$ 的状态之间都可区分（构造的结果）矛盾。





https://www.cs.columbia.edu/~tal/3261/sp18/MyhillNerode.pdf






