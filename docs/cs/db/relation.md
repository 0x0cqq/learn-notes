# 数据库的关系模型

## 关系

感性理解：

relation = table
tuple = row
attribute = column

schema = attribute list + field

## 表示

schema: $R(A_1, A_2, \cdots, A_n)$

relation instance $r(R)$

### 超码、候选码、主码

**超码(superkey)** 是 $K \subseteq R$，是属性的集合，可以在关系中唯一地标识元组，

**候选码(candidate key)** 是极小的超码，

**主码(primary key)** 是人为选出的一个候选码

### 外码 / 外键

$r_1$ 中任意一个元组对 $A$ 的取值，一定是 $r_2$ 某个元组对 $B$ 的取值

## 关系代数

大体和集合比较类似。

### Assignment

$\gets$

### Select

$\sigma_{\text{predicate}}(R)$ 就是根据 predicate 去 filter 整个的 relation ，取出一些行。

### Projection

$\prod_{A_1,A_2, \cdots, A_n}(R)$ 就是只取若干个 attribute（列） 。

#### Generalized Projection

可以在下标里进行运算

### (Natural)Join

$R \Join S$ ，就是在乘之后，只保留那些共同的 attribute 对应的值相同的行。

#### Outer Join 

把没有匹配上的也保留下来（左外就保留左边，右外就保留右边），然后剩下的填 null

### Union, Intersection, Difference, Product

这些都和集合一样，分别是 $\cup, \cap, -, \times$ 。

### Division

$r \div s = \{t \mid t \in \prod_{R-S}(r) \wedge (\forall u \in s)(tu \in r)\}$

是 R-S 的 schema。

保留某个，当对所有的 $s$ 都出现了

### Aggregate

有一些聚合函数 `avg, min, max, sum, count`

${}_{G_1,\cdots,G_n} {{g}}_{F_1(A_1), \cdots, F_m(A_m) [as \text{ name}]}(E)$

$G_1, \cdots, G_n$ 是用来区分 func 目标的

$F_i$ 是聚合函数

$A_i$ 是聚合目标属性

可以用 as 重新命名

### Rename

$\rho_X(E)$

$\rho_{X(A_1, \cdots , A_n)}(E)$

## 演算

### 元组关系演算

$\{t \mid P(t)\}$

e.g $\{t \mid t \in \text{loan} \wedge t[\text{amount}] > 1200\}$

e.g. $\{t \mid \exists s \in \text{loan} (t[\text{loan-number}] = s[\text{loan-number}]) \wedge s[\text{amount}] > 1200\}$

### 域关系演算

e.g. $\{\langle l, b, a \rangle \mid \langle l, b, a \rangle \in loan \wedge a > 1200\}$

e.g. $\{ \langle c\rangle \mid \exists  l, b, a (\langle l,b,a \rangle \in loan \wedge \langle c,l \rangle \in borrower \wedge a > 1200)\}$
