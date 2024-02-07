# 第十一讲：程序终止性

* 部分正确性：given that 程序会终止

* 完全正确性：需要讨论程序是否终止

> 程序终止性是不可判定问题

## 良基关系

!!!definition "定义：良基关系"
    集合 $S$ 上的二元关系 $\prec$，满足不存在无穷下降序列，即不存在 $s_1 \succ s_2 \succ \dots \succ s_n \succ \dots$

!!!definition "定义：字典序良基关系"
    字典序关系：$(s_1, \dots, s_n) \prec (t_1, \dots, t_n) \iff {\Large\lor}_{i=1}^n(s_i \prec t_i  \wedge {\Large\wedge}_{j=1}^{i-1} s_j = t_j)$

    各个构成关系是良基的 --> 字典序关系是良基的。


## 秩函数

$W$ 是某个数值集合；$S$ 是程序状态集；$\delta:  S \to W$. 

对于经过循环头（进入过程调用）时**相邻**状态 $s$ 和 $s'$ ， $(\delta(s'), \delta(s)) \in \prec$ （即状态的映射不存在无穷递降）

秩函数：

* 有下界
* 循环迭代，值严格下降
* 迭代次数有限

用 $\downarrow$ 标注秩函数；

$$
\begin{aligned}
\{\varphi\} \\
\downarrow \delta(x) \\
st_1;\\
\vdots \\
st_n; \\
\downarrow \delta(x)
\end{aligned}
$$

验证条件：

$$
\varphi \to wp(st_1;\dots;st_n, \delta(x) \prec \delta(x'))[x' \mapsto x]
$$

### 终止性

循环有秩函数 -> 循环终止

每个循环终止 -> 程序中止

1. 找个良基关系（可以用字典序辅助）
2. 找个秩函数
3. 证明秩函数在每个**基本路径**上下降


!!!note 更常用的良基关系
    $(\mathbb Z, <_\mathbb N)$, 其中 $x <_\mathbb N y$ 当且仅当 $x < y$ 且 $y \in \mathbb N$

    > 后半部分必须大于 0，但前面可以小于 0 （代表终止）
