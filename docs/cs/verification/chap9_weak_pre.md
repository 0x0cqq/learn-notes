# 第九讲 最弱前置条件

$$
\newcommand{\while}[2]{\mathbf{while}\ (#1)\ \{#2\}}\newcommand{\if}[2]{\mathbf{if}\ (#1)\ \{#2\}}\newcommand{\else}[1]{\mathbf{else}\ \{#1\}}\newcommand{\true}{\mathbf{true}}\newcommand{\false}{\mathbf{false}}\newcommand{\skip}{\mathbf{skip}}\newcommand{\meaning}[1]{\llbracket #1 \rrbracket}\newcommand{\hoare}[3]{\{#1\}\ #2 \ \{#3\}}
$$

!!!definition "定义：谓词变换（Predicate Transformer）"
    给定一条断言和一条程序语句，通过变换得到另一条断言


!!!definition "定义：最弱前置条件（Weakest precondition）$wp(st, \psi)$"
    假设语句执行后满足 $\psi$，则在执行前必须满足的条件
    
    1. $\hoare{wp(st, \psi)}{st}{\psi}$ 是有效式
    2. $\hoare{\varphi}{st}{\psi}$ 是有效式 $\implies$ $\varphi \Rightarrow wp(s,\psi)$

    !!!note 近似最弱前置条件
        需要保证有效，但不能保证**最**弱

!!!definition "定义：验证条件(verification conditions)"
    给定程序 $st$ 和规约 $(\varphi, \psi)$，验证条件是一组一阶逻辑公式，满足**所有验证条件有效** $\implies$ **程序满足规约**

    !!!note 生成规约的方法
        1. 从程序规约的后置条件 $\psi$ 开始
        2. 由后向前地计算程序的最弱前置条件 $wp(st, \psi)$
        3. 验证 $\varphi \to wp(st, \psi)$ 是否为有效式

## 基于最弱前置条件的程序验证

对 $st \models (\varphi, \psi)$ ：

1. 计算最弱前置条件 $\varphi' = wp(st, \psi)$，验证 $\varphi \to \varphi'$ 为有效式
2. 计算额外验证条件 $VC(st, \psi)$，是否都是有效式

以上两种统称为验证条件 Verification Condition

## 常见的最弱前置条件

$$
\begin{aligned}
wp(\skip, \varphi) &=& \varphi\\
wp(x:=e, \varphi) &=& \varphi[x \mapsto e]\\
wp(a[e_1] = e_2, \varphi) &=& \varphi[a \mapsto a \langle e_1 \triangleleft e_2 \rangle]\\
wp(st_1;st_2, \varphi) &=& wp(st_1, wp(st_2, \varphi))\\
wp(\if{p}{st_1}\ \else{st_2}, \varphi) &=& (p \mapsto wp(st_1, \varphi)) \land (\lnot p \mapsto wp(st_2, \varphi))\\
wp(\while{p}{st}, \varphi) &=& I
\end{aligned}
$$

## 额外验证条件的计算

$$
\begin{aligned}
VC(x:=a, \psi) &= \emptyset\\
VC(st_1; st_2, \psi) &= VC(st_1, wp(st_2, \psi)) \cup VC(st_2,\psi)\\
VC(\if{p}{st_1} \else{st_2}, \psi) &= VC(st_1, \psi) \cup VC(st_2, \psi)\\
VC(\while{p}{st}, \psi) &= \left\{\begin{aligned} I \land \lnot p \to \psi \\ I \land p \to wp(st, I) \end{aligned}\right\}
\end{aligned}
$$