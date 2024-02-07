# Context Free Grammar & Pushdown Automata

## 上下文无关文法（CFG）

!!!definition "定义：上下文无关文法"
    $G = (V,T,S,P)$
    
    * $V$ 是变量 / 非终结符
    * $T$ 是终结符
    * $S$ 是开始变量
    * $P$ 是产生式

    满足：$V \cap T = \emptyset, S \in V$ 。
     
    产生式形如 $A \rightarrow \alpha$，其中 $A \in V, \alpha \in (V \cup T)^*$ 。

!!!example "加法和乘法的 CFG"

如不特殊说明，引入的文法均记作 $G(V,T,S,P)$ 。


### 规约和推导

!!!inline end example "推导过程举例"

推导的定义：

+ 自推导树上而下，自产生式左侧而右侧


若 $A \rightarrow \gamma$ 为产生式，则 $\alpha A \beta \xRightarrow[G]{} \alpha \gamma \beta$ 为**推导关系**。$\alpha \xRightarrow[G]{*} \gamma$ 为**推导闭包**，也就是 零或多次 推导关系的复合。

!!!inline end example "规约过程举例"

规约的定义：

+ 自推导树下而上，自产生式右侧而左侧；

#### 最 [左 / 右] [推导 / 规约]

推导过程的每一步都对应着最左 / 右侧非终结符号。

### 语法分析树

1. 根节点是起始符号 $S$ 。
1. 内部节点由一个非终结符号标记，其子节点是这个非终结符号的某一产生式的右端排列，记作 $A \rightarrow X_1 \cdots X_k$。
3. 叶节点由一个变量（e.g. 数）或一个终结符标记（或 $\varepsilon$，但这要求 $k = 1$ ）。

### 推导、规约和语法分析树的等价关系

以下命题相互等价：

1. $w \in T^*$ 可以归约到非终结符 $A$
2. $A \xRightarrow[]{*} w$
3. $A \xRightarrow[lm]{*} w$
4. $A \xRightarrow[rm]{*} w$
5. 存在一棵根节点为 $A$ 的分析树，其产物为 $w$

证明思路：


## 上下文无关语言

对于上下文无关文法$G$，它对应的语言为

$$L(G) = \{w \mid w \in T^* , S \xRightarrow[G]{*} w\}$$

即为**上下文无关语言**。

## 下推自动机

### 形式化定义

### 推导

## 上下文无关文法与下推自动机的转换