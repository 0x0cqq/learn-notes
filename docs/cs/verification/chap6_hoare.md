# 霍尔证明系统

$$
\newcommand{\while}[2]{\mathbf{while}\ (#1)\ \{#2\}}\newcommand{\if}[2]{\mathbf{if}\ (#1)\ \{#2\}}\newcommand{\else}[1]{\mathbf{else}\ \{#1\}}\newcommand{\true}{\mathbf{true}}\newcommand{\false}{\mathbf{false}}\newcommand{\skip}{\mathbf{skip}}\newcommand{\meaning}[1]{\llbracket #1 \rrbracket}\newcommand{\hoare}[3]{\{#1\}\ #2 \ \{#3\}}
$$


## 霍尔三元组

!!!definition "霍尔三元组"
    形如 $\{\varphi\}\ st\ \{\psi\}$ ，其中 $\varphi, \psi$ 是逻辑公式，$st$ 是程序。

    从任何满足 $\varphi$ 的前状态出发执行 $st$，如果 $st$ 终止，那么后状态必定满足 $\psi$。

    !!!note
        * $\varphi$：前置条件
        * $\psi$: 后置条件
        * 不包括不终止的程序行为

**断言**：$\varphi, \psi$ 都是某个一阶理论的 $\Sigma_T$ 公式，称为**断言**。

断言中的变元分为三类：

* 程序变元
* 通过量词引入的约束变元
* 其他逻辑变元；$LVar$ 为断言中出现的**其他逻辑变元**的集合。

**状态集合**：

$$
\{\varphi\} := \{s \mid \meaning{\varphi}_{\mathcal M, s} = true \}
$$

其中 $\mathcal M$ 由一阶理论决定，常常可以忽略。

### 有效的霍尔三元组

$$
post(\{ \varphi\}, \meaning{st}) \subseteq \{\psi\}
$$

成立:

1. 则称程序 $st$ 满足规约 $(\varphi, \psi)$ ，记作 $st \models (\varphi, \psi)$ ；
2. 也称霍尔三元组 $\{\varphi\}\ st\ \{\psi\}$ 是有效式，记作 $\models \{\varphi\}\ st\ \{\psi\}$

### 霍尔证明系统

$$
(\text{空语句})\cfrac{}{\hoare{\varphi}{\skip}{\varphi}}
$$

!!!theorem "空语句规则可靠性"
    $\hoare{\varphi}{\skip}{\varphi}$ 是有效式。

    显然成立。

$$
(\text{赋值})\cfrac{}{\hoare{\varphi[x \mapsto e]}{x:= e}{\varphi}}
$$

!!!note
    这里的顺序比较迷惑。为什么赋值不在三元组的后置条件呢？

    因为只有在前面确认赋值操作（或者可以说，替换操作？）之后 $\varphi$ 成立，赋值语句执行后 $\varphi$ 成立。

!!!theorem "赋值规则的可靠性"
    $\forall s \in \{\varph[x\mapsto e]\}$, 设 $(s,s') \in \meaning{x:=e}$ ($s$ 得到 $s'$). 根据赋值语句的语义：$s' = s[x \mapsto \meaning{e}_s]$，则 $\meaning{\varphi}_s' = true$, 即 $s' \in \{\varphi\}$

    !!!note "引理"
        若 $\rho_2 = \rho_1[x \mapsto \meaning{e}_{\rho_1}]$, 则 $\meaning{\varphi[x \mapsto e]_{\rho_1}} = \meaning{\varphi}_{\rho_2}$

$$
(\text{前提加强})\cfrac{\hoare{\varphi'}{st}{\psi}}{\hoare{\varphi}{st}{\psi}} \text{如果 } \varphi \models \varphi' 
$$

$$
(\text{结论弱化}) \cfrac{\hoare{\varphi}{st}{\psi'}}{\hoare{\varphi}{st}{\psi}} \text{如果 } \psi' \models \psi
$$

$$
(\text{分支}) \cfrac
{\hoare{\varphi \wedge p}{st_1}{\psi}\quad \hoare{\varphi \wedge \lnot p}{st_2}{\psi}}
{\hoare{\varphi}{\if{p}{st_1}\ \else{st_2}}{\psi}}
$$

!!!theorem "分支规则的可靠性"
    任取 $s \in \{\varphi\}$, 设 $(s,s') \in \meaning{\if{p}{st_1}\ \else{st_2}}$，需要证明 $s' \in \{\psi\}$.

    此时根据分支语句的语义，分两种情况讨论：

    1. $\meaning{p}_s = true, (s,s') \in \meaning{st_1}$: 根据 $\hoare{\varphi \wedge p}{st_1}{\psi}$ 有效，$s' \in \{\psi\}$
    2. $\meaning{p}_s = false, (s,s') \in \meaning{st_2}$: 根据 $\hoare{\varphi \wedge \lnot p}{st_2}{\psi}$ 有效，$s' \in \{\psi\}$

$$
(\text{顺序})\cfrac{\hoare{\varphi_1}{st_1}{\varphi_2} \hoare{\varphi_2}{st_2}{\varphi_3}}{\hoare{\varphi_1}{st_1;st_2}{\varphi_3}}
$$

!!!theorem "顺序规则的可靠性"
    

$$
(\text{循环})\cfrac{\hoare{\varphi \wedge p}{st}{\varphi}}{\hoare{\varphi}{\while{p}{st}}{\varphi \wedge \lnot p}}
$$

!!!note 
    上面 $\varphi$ 就是循环不变式，循环会在满足 $p$ 是不断运行，并且在不满足 $p$ 时退出


!!!theorem "循环规则的可靠性"

### 推导树

!!!definition "定义：推导树"
    推导树(derivation tree) 满足：

    * 每个节点对应一个霍尔三元组，树叶代表空
    * 每个中间节点是某条规则的结论，子节点是该规则的前提

!!!theorem "定理：可推导"
    存在一颗 $\hoare{\varphi}{st}{\psi}$ 为根节点的推导树，则称该三元组可推导

    !!!note
        记作：$\vdash\hoare{\varphi}{st}{\psi}$

### 霍尔证明系统

!!!theorem "定理：霍尔证明系统的可靠性"


!!!theorem "定理：霍尔证明系统的完备性"
    相对完备的(relatively complete)：如果存在一个一阶逻辑判定工具，则通过该系统可以推导出 IMP 语言中所有有效的霍尔三元组。