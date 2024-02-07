# 第十三讲 程序的自动机表示

$$
\newcommand{\while}[2]{\mathbf{while}\ (#1)\ \{#2\}}\newcommand{\if}[2]{\mathbf{if}\ (#1)\ \{#2\}}\newcommand{\else}[1]{\mathbf{else}\ \{#1\}}\newcommand{\true}{\mathbf{true}}\newcommand{\false}{\mathbf{false}}\newcommand{\skip}{\mathbf{skip}}\newcommand{\assert}{\mathbf{assert}}\newcommand{\assume}{\mathbf{assume}}\newcommand{havoc}{\mathbf{havoc}}\newcommand{\meaning}[1]{\llbracket #1 \rrbracket}\newcommand{\hoare}[3]{\{#1\}\ #2 \ \{#3\}}
$$

不借助循环不变式证明程序正确性

## havoc 语句：建模不确定性


$$
\llbracket \havoc x \rrbracket = \{(s,s') \mid s' = s[x \to *]\}
$$

最弱前置条件：

$$
wp(\llbracket \havoc x \rrbracket, \psi) = \forall x. \psi
$$

## 控制流自动机

> 提供程序执行位置的信息（pc）

四元组 $G = (Loc, \Delta, l_{in}, l_{ex})$, 其中：

* $Loc$: 程序位置的有限集合
* $\Delta$ 是三元组 $(l, st, l')$ 组成的集合
    * $l, l' \in Loc$ 是位置
    * $st$ 是基本语句：赋值、数组赋值、havoc、assume
* $l_{in}$ 进入位置，$l_{out}$ 退出位置，$l_{in} \neq l_{out}$

## 自动机的格局与执行

> 加入变量取值

!!!definition "定义：格局(configuration)"
    是一个有序对 $(l \in Loc,s \in State)$

!!!definition "定义：执行（execution）"
    格局序列 $(l_0, s_0), \dots, (l_n,s_n)$ 满足：存在语句序列 $st_1, \dots, st_n$，使得 $\forall i \in \{0, \dots, n-1\}$ 有：

    * $(l_i, st_{i+1}, l_{i+1}) \in \Delta$ (程序在自动机上)
    * $(s_i, s_{i+1}) \in \meaning{st_{i+1}}$ (状态在序列上)

$(\varphi_{pre}, \varphi_{post})$ 为程序 $P$ 的前置-后置条件对（语义？），$(l,s)$ 为 $P$ 的格局：

* 初始格局：$l = l_{in}$ 且 $s \models \varphi_{pre}$
* 错误格局：$l = l_{ex}$ 且 $s \not\models \varphi_{post}$

!!!theorem "定理：基于执行的正确性证明"
    程序 $P$ 满足前置-后置对 $(\varphi_{pre}, \varphi_{post})$ 的约束 $\iff$  程序 $P$ 不存在 (初始格局 -> 错误格局) 的执行 

## 可达格局

!!!definition "定义：可达格局（reachable configuration）"
    格局 $(l,s)$ 可达 $\Longleftarrow$ 存在一条执行 $(l_0,s_0), \dots, (l_n, s_n)$，起点 $(l_0, s_0)$ 为初始格局，终点 $(l_n, s_n) = (l,s)$.

    !!!note
        所有可达格局为的集合 $C_R$

!!!theorem "定理：基于可达格局的正确性证明"
    程序 $P$ 满足前置-后置对 $(\varphi_{pre}, \varphi_{post})$ 的约束 $\iff$ 集合 $C_R$ 不含错误格局


!!!theorem
    可达集合 $C_R$ 可以如下构造：

    1. 初始条件：初始格局是 $C_R$ 中的元素
    2. 递归条件：$(l,s) \in C_R, (l,st,l') \in \Delta, (s,s') \in \llbracket st \rrbracket \implies (l', s') \in C_R$ （满足控制流和状态变化）

!!!definition "定义：可达图（reachability graph）"
    点集为 $C_R$，边集合为 $((l,s), st, (l',s')) \in T$

    * 边集合需要满足 $(l, st, l') \in \Delta \wedge (s,s') \in \meaning{st}$

!!!warning
    上述两个构造可达集合和可达图的过程不保证有限/能中止