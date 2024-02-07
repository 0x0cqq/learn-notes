# 第二章：命题逻辑


!!!notes
    参见[离散数学笔记](../../math/logic/proposition.md)。

## 语法

### 符号体系

命题逻辑的 **符号集(alphabet)** 包括：

* 真值符号 $\top$ (true) 和 $\bot$ (false)

* 命题变元

* 逻辑连结词 $\lnot, \wedge, \vee, \rightarrow, \leftrightarrow$ 

真值符号和命题变元统称为**原子命题**

### 构造规则

!!!definition "合式公式(well-formed formula)"
	递归定义：
	
	1.  原子命题是
	2.  如果 $F$ 是，那么 $\lnot F$ 是
	3.  如果 $F,G$ 是，那么 $F \wedge G, ...$ 是

* 原子命题也称原子公式
* 原子公式和原子公式的非称为文字（literal）

!!!note "一些约定："
	* 以小写字母 $p, q, r$ 表示命题变元
	* 以大写字母 $F, G$ 表示命题逻辑公式
	* 逻辑联结词的优先级：$\lnot$, $\wedge$, $\vee$, $\rightarrow$, $\leftrightarrow$
	* $\wedge$ 和 $\vee$ 是左结合的，$\rightarrow$ 和 $\leftrightarrow$ 是右结合的

可将公式转换成只包含 $\bot,\lnot,\wedge$ 及命题变元：

* $\top := \lnot \bot$
* $F_1 \vee F_2 := \lnot (\lnot F_1 \wedge \lnot F_2)$
* $F_1 \leftarrow F_2 := \lnot F_1 \vee F_2$
* $F_1 \leftrightarrow F_2 := (F_1 \leftarrow F_2) \wedge (F_2 \leftarrow F_1)$

## 语义

### 赋值

!!!definition 
    令 $\mathcal V(F)$ 为公式 $F$ 中出现的变元集合，$\rho: \mathcal V(F) \to \{ false, true\}$ 为 $F$ 的一个**赋值(assignment)**。

!!!theorem 命题公式的语义
    $F$ 在 $\rho$ 下的取值(evaluation) $\llbracket F \rrbracket_\rho$ 递归定义如下：

    1. $\llbracket \bot \rrbracket_\rho = false$
    2. $\llbracket p \rrbracket_\rho = \rho(p)$, $p$ 是 $F$ 中变元
    3. $\llbracket \lnot F \rrbracket_\rho = \left\{\begin{aligned}true, 如果 \llbracket F \rrbracket_\rho = false\\ false, 如果\llbracket F \rrbracket_\rho = false\end{aligned}\right.$
    4. $\llbracket F \wedge G \rrbracket_\rho = \left\{\begin{aligned}true,& 如果 \llbracket F \rrbracket_\rho = true 而且 \llbracket G \rrbracket_\rho = true\\ false,& 否则\end{aligned}\right.$

    !!!note
        在latex中的打法是 `\llbracket` 和 `\rrbracket`

### 可满足性

* 可满足式（satisfiable），当且仅当**存在**一个赋值 $\rho$ 使得$\llbracket F \rrbracket_\rho$ 为真；
* 有效式（或永真式）（valid），当且仅当**对任意**赋值 $\rho$，$\llbracket F \rrbracket_\rho$ 都为真；
* 不可满足式（或永假式）（unsatisfiable），当且仅当**对任意**赋值$\rho$, $\llbracket F \rrbracket_\rho$ 都为假。

!!!note
    永真式记作 $\models F$ 

### 语义蕴含

!!!definition "语义蕴含"
    给定两个公式 $F$ 和 $G$，如果对任意赋值 $\rho$，只要 $\llbracket F \rrbracket_\rho$ 为真，$\llbracket G \rrbracket_\rho$ 就必为真，就称 $F$ <u>语义</u>蕴涵（implies）$G$，或称 $G$ 是 $F$ 的有效推论（consequence），记为 $F \models G$。

!!!definition "语义等价"
    给定两个公式 $F$ 和 $G$，如果 $F \models G$ 且 $G \models F$，就称 $F$ 和 $G$ 语义等价（equivalent），记作$F \Leftrightarrow G$。

!!!note
    $F$ 与 $G$ 语义等价的充要条件是在任意赋值 $ρ$ 下它们的取值都相同，即 $\llbracket F \rrbracket_\rho = \llbracket G \rrbracket_\rho$

!!!warning 
    不要与 $\rightarrow$ / $\leftrightarrow$ 混淆.  

证明 $F \models G$ 的方法：

1. 证明 $F \to G$ 是永真式（比如真值表法）
2. 基于一个演绎系统进行推理（即将讨论）
3. 证明: $\lnot (F \to G)$ 是不可满足式（可借助 SAT/SMT 求解器进行）

## 证明系统

### 相继式演算系统 $S_{PL}$

!!!definition "定义：相继式(sequent)"
    形如：

    $$
    F_1, \dots, F_m \vdash G_1, \dots, G_n
    $$

    其中 $F_1, \dots, F_m$ 称为**前件**，$G_1, \dots, G_n$ 称为**后件**

    !!!warning 
        $\vdash$ 和 $\models$ 不一样 

!!!note
    相继式前件的合取可看作假设，后件的析取是我们希望证明的推论。

    相继式的语义等价于 $F_1 \wedge \cdots \wedge F_m \to G_1 \vee \cdots \vee G_n $ 。相继式是有效式当且仅当上式是有效式。

#### 推理规则

$$
(规则名)\frac{\Gamma_1 \vdash \Delta_1 \dots \Gamma_n \vdash \Delta_n}{\Gamma_{n+1} \vdash \Delta_{n+1}}
$$

其中 $\Gamma_i$ 和 $\Delta_i$ 是公式的集合

> 结论往前提减少一个逻辑连接词

左

$$
(左合取)\frac{\Gamma, P, Q \vdash \Delta}{\Gamma, P \wedge Q \vdash \Delta}
$$

$$
(左析取)\frac{\Gamma, P \vdash \Delta \quad\Gamma,Q \vdash \Delta}{\Gamma, P \vee Q \vdash \Delta}
$$

$$
(左否定)\frac{\Gamma \vdash P, \Delta}{\Gamma, \lnot P  \vdash \Delta}
$$

$$
(左蕴含)\frac{\Gamma \vdash P, \Delta \quad \Gamma,Q \vdash \Delta}{\Gamma, P \to Q \vdash \Delta}
$$

右

$$
(右合取)\frac{\Gamma, P \vdash \Delta \quad \Gamma, Q \vdash \Delta}{\Gamma \vdash P \wedge Q, \Delta}
$$

$$
(左析取)\frac{\Gamma \vdash P, Q,\Delta}{\Gamma \vdash  P \vee Q, \Delta}
$$

$$
(右否定)\frac{\Gamma, P \vdash \Delta}{\Gamma \vdash  \lnot P, \Delta}
$$

$$
(右蕴含)\frac{\Gamma, P \vdash Q, \Delta}{\Gamma \vdash P \to Q, \Delta}
$$


$$
(包含)\frac{}{\Gamma, P \vdash P, \Delta}
$$

!!!notes
    公理，没有前提，可以用来终结一个推导过程。

$$
(切)\frac{\Gamma \vdash C, \Delta \quad \Gamma, C \vdash \Delta}{\Gamma \vdash \Delta}
$$

!!!notes
    多余，但方便


#### 推导

!!!definition "定义：推导树"
    推导树（derivation tree）是一颗满足下列条件的树：
    
    * 每个节点对应一个相继式，树叶对应空；
    * 每个中间节点是某规则的结论，而它的子节点是该规则的前提。

!!!definition "定义：可推导"
    如果存在一棵以相继式 $F$ 为根节点的推导树，就说 $F$ 可推导。

!!!example
    证明：$\vdash p \wedge q \to p  \vee \lnot q$

    先消去蕴含，再消去左侧的合取，再消去右侧的析取。

#### 性质

对于

$$
(规则)\frac{\Gamma_1 \vdash \Delta_1 \dots \Gamma_n \vdash \Delta_n}{\Gamma_{n+1} \vdash \Delta_{n+1}}
$$


如果其所有前提都是可靠式，那么其结论就是有效式；称该<u>规则</u>为**可靠的(sound)**。

!!!theorem
    $S_{PL}$ 的所有推理规则都是可靠的。

**演算系统**的性质：

* $S_{PL}$ 是**可靠的（sound）**，即通过该演算系统推导出的所有结论都是永真式。
* $S_{PL}$ 是**完备的（complete）**，即通过该演算系统可以推导出命题逻辑的所有永真式。

**命题逻辑的可靠性与完备性**：

$F$ 为任意命题逻辑公式，如果存在一棵以 $\vdash F$ 为根节点的推导树，则 $F$ 必然是永真式。反之亦然。

**命题逻辑的可判定性**:

命题逻辑是**可判定的（decidable）**，即存在一个算法，对任意给定的命题逻辑表达式，能够在有限时间内正确地判定出该表达式是否是一致式。

!!!note 
    没有考虑复杂度