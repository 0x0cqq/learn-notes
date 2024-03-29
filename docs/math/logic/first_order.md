# 谓词逻辑

## 第四章 一阶谓词逻辑

深入到原子命题内部，探究“个体与总体”的内在联系

深入到“语言”的层次，探究“主谓宾”之间的关系

### 词 = 最小的语义单位

#### 个体词 = 可以独立存在的客体

个体常项：$a,b,c,...$ 不可变的

个体变项：$x,y,z,...$ 可以变的，只是个**占位符**；取值范围为 $D$ ，称为个体域或论域。【特殊的个体域：世间一切事物】

#### 谓词 = 刻画个体词性质或关系的词

注：输出真值。什么样是合法的谓词？**对于每一个个体词都可以确定真假。**换句话说，给定个体词常项之后就成为命题。

用大写字母 $P, Q, R$ 表示谓词，用小写字母表示在谓词中 $P(x),Q(x,y)$ ，可以看作 **个体域** 到 $\{1,0\}$ 上的一个映射；；

谓词常项，谓词变项：具体的某个谓词或者一个占位符

$n$ 元谓词：含有 $n$ 个个体变项的谓词

命题变项 = 零元谓词 

命题 = 零元谓词 + 谓词常项

#### 函数 = x 的 ？

注：输出个体

从一个个体域到另一个个体域的映射

如 $father(x) = y$ 是一个函数； $CLASSMATE(mother(x),father(x))$ 是谓词。

#### 量词 = 对个体变项在论域内限制（数量）的词

注：输出真值

全称量词： $(\forall x)$ 所有的 $x$

存在量词： $(\exists x)$ 存在一个 $x$

（量词的）辖域：量词约束的范围；处在对应变项辖域中的个体变项称为约束变项（元）；否则称为自由变项（元）

##### 量词易名规则

$(\forall x)(...) = (\forall y)(...)$ 

注意：不能重名！

一个谓词公式如果无自由变元，它就表示一个命题。 



### 一阶谓词逻辑公式

一阶谓词逻辑：量词仅能作用于个体词，而不能作用于命题变项和谓词变项

#### 符号集合

个体常项，个体变项；命题变项；谓词符号，函数符号；联结词符号；量词符号，括号与逗号

#### 构造方法

1. 命题常项，命题变项，原子谓词公式是。
2. 如果 $A$ 是，那么 $\lnot A$ 是
3. 如果 $A,B$ 都是，而且不存在个体词 $x$ 在 $A,B$ 中受约束状态不同；那么 $A \wedge B , A \vee B , A \rightarrow B, A \leftrightarrow B$ 都是
4. 若 $A$ 是，且 $x$ 在 $A$ 中存在且均为自由变元；那么 $(\forall x)A$ 是， $(\exists x)A$ 。
5. 只有有限次的运用才是

### 自然语言的形式化

#### 一元谓词：“是”

所有的 $A$ 是 $B$ ：$(\forall x)(A(x) \rightarrow B(x))$ 

有的 $A$ 是 $B$ ：$(\exists x) (A(x) \wedge B(x))$

没有 $A$ 是 $B$ ：$\lnot(\exists x)(A(x) \wedge B(x)) = (\forall x)(A(x) \rightarrow \lnot B(x))$

特定论域 $C$ 下讨论： 外面套一层“**特性谓词**”框定论域；全称用 $\forall ,\rightarrow$ ；特称用 $\exists, \wedge$

#### 多元谓词：“关系”

注：小心隐含关系，如“两只猫”就是两只不同的猫

有且仅有 = 至少存在一个，任意剩下的都跟找出来的这个相同

#### 注意：

##### 拆到最简

最简单：没有动宾结构，没有宾语

一元谓词到“是”

多元谓词到一个谓词

如：$R(x)$ 表示 $x$ 能抓住老鼠 不行！； $(\exists y)(R(y) \wedge C(x,y))$ 可以！

“或”：异或还是同或？

##### 多次量化

从右向左结合（量词的优先级要高于逻辑）

只有名称相同的谓词才能交换顺序

### 有限论域下，谓词公式向命题公式的转化

本质：全称量词是合取的推广，存在量词是析取的推广

方法：从左往右拆，一层一层套， $\forall \rightarrow \wedge,\exists \rightarrow \vee$ 

### 谓词公式的普遍有效性问题

#### “解释”&“赋值”

解释：包括“【个体域 $D$】 ，个体常项符号 $a$ ， 谓词符号 $P$ ，函数符号 $f$ ” 的意义

赋值：指定自由出现的个体常项的值

对谓词公式解释+赋值可以称为命题

普遍有效：任何解释下都为真

不可满足：在任何解释下都为假

可满足：存在一个解释为真

#### 有限域上的讨论 = 可满足与普遍有效只与个体数量有关

这是因为谓词是可以随便指定的，因此只与“问题本身”和“问题形式有关”

1. 若在某一 $k$ - 个体域普遍有效（可满足），则在任意 $k$ -个体域上普遍有效（可满足）
2. 【越小越普遍有效】若在某一 $k$ - 个体域普遍有效，则在任意 $k-1$ -个体域上普遍有效
3. 【越大越可满足】若在某一 $k$ - 个体域可满足，则在任意 $k+1$ -个体域上可满足

#### 可判定性

一般不可判定，可判定的类型：

1. 仅含一元谓词变项
2. 单一前束形式： $(\forall/\exists x_1)(\forall/\exists x_2) \cdots (\forall/\exists x_n)P(x_1,x_2,\cdots,x_n)$  同一种谓词， $P$ 中无量词和其他自由变项
3. 个体域有限

如果公式是普遍有效的或者不可满足的，那么可以在有限步以内完成判定；否则不一定。

## 第五章 谓词逻辑的等值和推理演算

本章只从语义描述，无形式化的证明

### 谓词公式的等值

#### 定义

$A \leftrightarrow B$ 普遍有效，记作 $A = B, A \Leftrightarrow B$ .

### 等值式

#### 命题公式的等值式

注意：$\rightarrow$ 不满足结合律与交换律； $\leftrightarrow$ 对 $\leftrightarrow$ 不满足分配律

#### 否定等值式 = 否定与量词的交换

$\lnot (\forall x)P(x) = (\exists x)\lnot P(x), \lnot (\exists x)P(x) = (\forall x) \lnot P(x)$

#### 分配等值式

##### 对公式的分配律

$p,q$ 代表的公式需要与前面的量词变元无关。

1. $(\forall x)(P(x) \vee q) = (\forall x)P(x) \vee q,\; (\exists x)(P(x) \vee q) = (\exists x)P(x) \vee q$ 
2. $(\forall x)(P(x) \wedge q) = (\forall x)P(x) \wedge q,\; (\exists x)(P(x) \wedge q) = (\exists x)P(x) \wedge q$ 
3. $(\forall x)(P(x) \rightarrow q) = \color\red{(\exists x)} P(x) \rightarrow q, (\exists x)(P(x) \rightarrow q) = \color\red{(\forall x)}  P(x) \rightarrow q$
4. $(\forall x)(p \rightarrow Q(x)) = p \rightarrow (\forall x) Q(x), (\exists x)(p \rightarrow Q(x)) = p \rightarrow (\exists x) \rightarrow Q(x)$

##### 对谓词公式的分配

$\forall$ 与 $\wedge$ 搭配（本质上都是 $\wedge$） ， $\exists$ 和 $\vee$ 搭配（本质上都是 $\vee$ ）

$(\forall x)(P(x) \wedge Q(x)) = (\forall x)P(x) \wedge (\forall x)Q(x)$
$(\exists x)(P(x) \vee Q(x)) = (\exists x) P(x) \vee (\exists x) Q(x)$

##### 变量不同名情况下的“分配”

$(\forall x) P(x) \vee (\forall y)Q(y) = (\forall x)(\forall y)(P(x) \vee Q(y))$
$(\exists x)P(x) \wedge (\exists y)Q(y) = (\exists x)(\exists y)(P(x) \wedge Q(y))$



### 等值演算

#### 演算规则

置换规则 = 与命题公式完全相同，换掉完整的一个公式

换名规则/代替规则 = 给约束变元换名字 / 给自由变元换名字【注意：不能出现重名】


### 范式

#### 前束范式

若 $A$ 为一阶谓词公式，且

1. 所有量词都位于该公式的最左侧
2. 所有量词前均不含否定词
3. 所有量词辖域均延伸到公式末端

则称 $A$ 为一阶谓词公式。

##### 一般形式

$(Q_1 x_1)(Q_2 x_2) \cdots (Q_n x_n) M(x_1,x_2,\cdots,x_n)$
称 $M$ 为基式或母式，不含任何量词 $Q_i$ 为 $\forall, \exists$。

##### 存在定理

等值的前束范式一定存在，但不一定唯一

##### 求前束范式的步骤

1. 消去 $\rightarrow, \leftrightarrow$ （用定义） 
2. 右移 $\lnot$ （用否定律和德摩根）
3. 左移 $\forall, \exists$ 利用量词分配 & 变量易名 

注意：不同时

情况1：

$(\forall x)P(x) \wedge (\exists y) Q(y)$

1.  $= (\forall x)(P(x) \wedge (\exists y)Q(y)) \\= (\forall x)(\exists y)(P(x) \wedge Q(y))$
2.  $= (\exists y)Q(y) \wedge (\forall x)P(x) \\= (\exists y)(Q(y) \wedge (\forall x)P(x)) \\=(\exists y)(\forall x)(Q(y) \wedge P(x)) \\= (\exists y)(\forall x)(P(x) \wedge Q(y))$

这两者是等价的，因为 $x,y$ 没有任何关系，两者是相互独立的变量。

情况2：

$(\forall x)(P(x) \wedge (\exists y)(Q(x,y)))$

1. $=(\forall x)(\exists y)(Q(x,y) \wedge P(x))$

情况3：

$(\forall x)(P(x) \wedge (\exists y)(Q(y)))$

注意：区分自由和约束，搞清楚约束的范围

#### SKOLEM 标准形

定义：仅保留全称量词的前束范式

等值性：不可满足意义下等值

方法：

1. 先化成前束范式
2. 然后把所有的存在量词全部作替换
   1. （最前面）无约束的的替换成客体变元 $a,b,c$ ，同时对后面进行替换
   2. 后面被约束的构造成所有约束的函数，如 $(\forall x)(\forall y)(\exists a) \cdots$ ，令 $a = f(x,y)$ ，同时对后面进行替换；
3. 最后再把所有的个体常项全藏起来，个体变项不变

### 谓词逻辑的推理

#### 推理形式

我们称前提 $A_1,A_2，\cdots, A_n$ 能够推出 结论 $B$ 当且仅当 $(A_1 \wedge A_2 \wedge \cdots \wedge A_n) \rightarrow B$ 为重言式

满足上述条件永真式的蕴含式为推理形式，也可以记作 $A_1 \wedge A_2 \wedge \cdots \wedge A_n \Rightarrow B$ .

#### 基本推理形式

1. 合取与析取： $(\forall x)P(x) \vee (\forall x)Q(x) \Rightarrow (\forall x)(P(x) \vee Q(x)),\;  (\exists x)(P(x) \vee Q(x)) \Rightarrow (\exists x)P(x) \wedge (\exists x)Q(x)$
2. 蕴含： $(\forall x)(P(x)\rightarrow Q(x)) \Rightarrow (\forall x)P(x) \rightarrow (\forall x)Q(x)$ ， $\cdots \Rightarrow (\exists x)P(x) \rightarrow (\exists x)Q(x)$
3. 双蕴含： $(\forall x)(P(x)\leftrightarrow Q(x)) \Rightarrow (\forall x)P(x) \leftrightarrow (\forall x)Q(x)$ ， $\cdots \Rightarrow (\exists x)P(x) \leftrightarrow (\exists x)Q(x)$
4. 三段论：$(\forall x)(P(x) \rightarrow Q(x)) \wedge (\forall x)(Q(x) \rightarrow R(x)) \Rightarrow (\forall x)(P(x) \rightarrow R(x))$  ， $(\forall x)(P(x) \rightarrow Q(x)) \wedge P(a) \Rightarrow Q(a)$
5. 万人迷： $(\forall x)(\forall y)P(x,y) \Rightarrow (\exists x)(\forall y)P(x,y)$ ， $(\exists x)(\forall y)P(x,y) \Rightarrow (\forall y)(\exists x) P(x,y)$

#### 对推理形式的证明【与命题逻辑完全相同】

证明 $A \Rightarrow B$ ：

1. $A \rightarrow B$ 为普遍有效

2. $A \wedge \lnot B$ 为不可满足
3. $\lnot B \rightarrow \lnot A$ 为普遍有效
4. 在任一解释下...

#### 推理规则

命题逻辑中也有的：前提引入\结论引入\代入规则\置换规则\分离规则\条件证明规则

谓词逻辑特有的：

1. 全称举例（UI）： $(\forall x)P(x) \Rightarrow P(c),\text{if } c \in U$ 
2. 全称推广（UG）： $P(c) \text{ for an arbitrary c} \in U \Rightarrow (\forall x)P(x)$
3. 存在举例（EI）： $(\exists x)P(x) \Rightarrow P(c), \text{ for some } c \in U$
4. 存在推广（EG）：$P(c) \text{ for some } c \in U \Rightarrow (\exists x)P(x)$

注：可以这么理解，当我们写 $P(c)$ 的时候，我们本质上在写一族的公式，这些公式并不一定相同。比如 $P(x) = (\exists z)(z < x)$  。



### 归结推理法

原理： $A_1 \wedge A_2 \wedge \cdots \wedge A_n \Rightarrow B$ 当且仅当 $G = A_1 \wedge A_2 \wedge \cdots \wedge A_n \wedge \lnot B$ 是矛盾式

方法：

1. 构建前束范式，消去 $\exists$ 量词（注意，这一过程是保持不可满足性的）
2. 扔掉全称量词，（化为合取范式）以 $\wedge$ 为分隔符，拆分为子句集 $S$
3. 作归结直到空公式

如何归结？
1. $C_1 = P(x) \vee Q(x),C_2 = \lnot P(a) \vee R(y)$ （两者无共同变元， $C_2$ 是 $\lnot P(x)$ 亦可，也就是说， $P(x)$ 是“包含着” $P(a)$ 的。）
2. 归结成 $Q(a) \vee R(y)$

注意，可以对 $A_i$ 分别标准化，然后其子句集的并就是最终的子句集

## 附录

### SKOLEM I 型