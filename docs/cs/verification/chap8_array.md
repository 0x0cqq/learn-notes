# 数组扩展

$$
\newcommand{\while}[2]{\mathbf{while}\ (#1)\ \{#2\}}\newcommand{\if}[2]{\mathbf{if}\ (#1)\ \{#2\}}\newcommand{\else}[1]{\mathbf{else}\ \{#1\}}\newcommand{\true}{\mathbf{true}}\newcommand{\false}{\mathbf{false}}\newcommand{\skip}{\mathbf{skip}}\newcommand{\meaning}[1]{\llbracket #1 \rrbracket}\newcommand{\hoare}[3]{\{#1\}\ #2 \ \{#3\}}
$$


使用一阶理论进行数组的扩展

## 数组理论

!!!note "回顾：一阶理论"
    $\mathcal T = (\Sigma, \mathcal A)$,

    1. $\Sigma$ 签名：有限的非逻辑符号集
    2. $\mathcal A$ 公理集：一组定义在 $\Sigma$ 上的闭公式


!!!definition "定义: （扩展）数组理论 (Array Theory) $\mathcal T_A^=$"
    签名 $\Sigma_A: \{=, \cdot[\cdot], \cdot\langle\cdot \triangleleft \cdot\rangle\}$
    
    * $a[i]$ 读取数组 $a$ 的第 $i$ 个元素；
    * $a\langle i \triangleleft v \rangle$ 表示将数组 $a$ 的第 $i$ 个元素更新为 $v$ 

    公理集 $\mathcal A_A$ 赋予两个数组操作含义
    
    1. 等式理论中关于等号的自反、对称、传递公理
    2. 数组同余：$\forall a, i, j. i = j \to a[i] = a[j]$
    3. 写后读(同一位置): $\forall a,v,i,j. i = j \to a \langle i \triangleleft v \rangle[j] = v$
    4. 写后读(不同位置): $\forall a,v,i,j. i \neq j \to a \langle i \triangleleft v \rangle[j] = a[j]$
    5. 数组扩展: $\forall a,b. (\forall i. a[i] = b[i]) \leftrightarrow a = b$


!!!note "一些约定"
    * $a, b, c$ 代表数组变元；$i,j,x,y,z$ 代表整数变元
    * $i,j,x,y,z \in \mathbb Z; a, b, c \in (\mathbb Z \to \mathbb Z)$
    * 数组的长度 $|\cdot|: (\mathbb Z \to \mathbb Z) \to \mathbb Z$

状态：对程序变元（整数变元和数组变元）的一组赋值

$$
State: Var \to \mathbb Z \cup (\mathbb Z \to \mathbb Z)
$$

## 数组扩展

$a[e] \in AExp$

$a[e_1] := e_2 \in Stmt$


### 数组操作的语义

$$
\meaning{a[e]}_s^A = s(a)(\meaning{e}_s^A)
$$

$$
\meaning{a[e_1] := e_2} = \{(s,s') = s[a \mapsto a \langle \meaning{e_1}_s^A \triangleleft \meaning{e_2}_s^A\rangle]\}
$$

### 数组操作的霍尔推理规则


$$
(\text{数组赋值}) \cfrac{}{\hoare{\varphi[a \mapsto a\langle e_1 \triangleleft e_2 \rangle]}{a[e_1] := e_2} {\varphi}}
$$

!!!theorem "定理：数组赋值规则的可靠性"
    与赋值规则可靠性类似。

!!!note "处理数组越界的版本"
    $$
    (\text{赋值}^*) \cfrac{}{\hoare{{\color{red}{0 \leq e \wedge e < |a|}} \wedge \varphi[x \mapsto a[e]]}{x := a[e]} {\varphi}}
    $$

    $$
    (\text{数组赋值}^*) \cfrac{}{\hoare{{\color{red}{0 \leq e_1 \wedge e_1 < |a|}} \wedge \varphi[a \mapsto a\langle e_1 \triangleleft e_2 \rangle]}{a[e_1] := e_2} {\varphi}}
    $$