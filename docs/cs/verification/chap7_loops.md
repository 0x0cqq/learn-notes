# 没人理解循环

$$
\newcommand{\while}[2]{\mathbf{while}\ (#1)\ \{#2\}}\newcommand{\if}[2]{\mathbf{if}\ (#1)\ \{#2\}}\newcommand{\else}[1]{\mathbf{else}\ \{#1\}}\newcommand{\true}{\mathbf{true}}\newcommand{\false}{\mathbf{false}}\newcommand{\skip}{\mathbf{skip}}\newcommand{\meaning}[1]{\llbracket #1 \rrbracket}\newcommand{\hoare}[3]{\{#1\}\ #2 \ \{#3\}}
$$

## 循环展开规则

$$
\cfrac{\hoare{\varphi}{\if{p}{st;\while{p}{st}}\ \else{\skip}}{\psi}}{\hoare{\varphi}{\while{p}{st}}{\psi}}
$$

展开之后仍然含有循环，无法保证整个证明系统的终止性。

## 重复语句

$$
\meaning{st^*} = \left\{(s,s')\left| \begin{aligned}\text{存在一个整数 }n{ 和一组状态序列}\\t_0 = s,t_1, \dots,t_n = s'\text{ 使得 }\\ (t_i,t_{i+1}) \in \meaning{st}, \forall 0 \leq i < n \end{aligned}\right.\right\}
$$

同时，$\meaning{st^*}$ 也是 $\meaning{st}$ 的自反传递闭包：$\meaning{st^*} = \bigcup_{i \in \mathbb N} \meaning{st}^i$

### 归纳规则

$$
(\text{归纳}) \cfrac{\hoare{\varphi}{st}{\varphi}}{\hoare{\varphi}{st^*}{\varphi}}
$$

!!!theorem "归纳规则的可靠性"
    使用数学归纳法证明：$post(\{\varphi\}, \meaning{st^*}) \subseteq \{\varphi\}$

## 测试语句

$?p$ 表示测试 $p$ 在当前状态下是否成立：

1. 成立则继续执行；
2. 不成立则终止（无后状态）

语义：

$$
\meaning{?p} = \{(s,s) \mid s \models p\}
$$

### 测试规则

$$
(\text{测试})\cfrac{}{\hoare{\varphi}{?p}{\varphi \wedge p}}
$$

## 循环的另一种表示：使用重复、测试语句

$$
\while{p}{st} \equiv (?p; st)*; ?\lnot p
$$

!!!note
    这里虽然有点奇怪，但是闭包是可以取 0 的，所以可以避免被terminal的尴尬

!!!theorem "上面的表达式成立"
    使用 while 循环语义中的构造与重复语句的构造证明


### 循环规则

$$
(\text{循环}) \cfrac{\hoare{\varphi \wedge p}{st}{\varphi}}{\hoare{\varphi}{\while{p}{st}}{\varphi \wedge \lnot p}}
$$
