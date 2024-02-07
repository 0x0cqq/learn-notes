# 上下文无关文法的性质

## 范式

这样的上下文无关文法称之为范式（Normal Form）：

1. 没有 **无用符号** （Useless Symbol），即不在任何从 $S$ 开始并结束的推导路径上可能出现的符号。
2. 没有 **$\epsilon$产生式**（$\epsilon$-productions），即形似 $A \to \epsilon$
3. 没有 **单位产生式**（Unit Productions），即形似 $A \to B$ 

### 消除无用符号

两种可以导出**有用**的性质（同时成立-->可达）：

1. 生成符号（Generating Symbol）： $X \xRightarrow[]{*} w$, $w$ 为终结符号串。
2. 可达符号（Reachable Symbol）：存在  $S \xRightarrow[]{*} \alpha X \beta$ 

计算方法：

1. 终结符号都是生成的；一个非终结符号 $A$ 是生成符号 if and only if 存在一个生成式 $A \to \alpha$，$\alpha$ 的每一个符号都是生成的。
2. 初始符号 $S$ 是可达的；一个非初始的符号 $A$ 是可达符号 if and only if 存在一个产生式，A 在右侧，且左侧符号是可达的。

消除方法：首先消除非生成符号，其次消除不可达符号。

!!!note
    顺序很重要。

### 消除 $\epsilon$-产生式

可空符号（nullable） ：拥有 $A \to \epsilon$  的符号，或者拥有一个产生式，右侧所有的符号都是可空符号。

消除方法：可空符号出现在右侧时，我们增加一个没有这个可空符号的产生式。同时删去所有 $A \to \epsilon$ 的产生式

!!!note
    得到的新语言不一定等价。$L(G') = L(G) - \{\epsilon\}$ ，可能最多相差一个空串。

### 消除单位产生式

构造单位对（Unit Pair） $(A,B)$；假如 $A \to B$ ，那么 $(A,B)$ 是；假如 $(A,B)$ 是，假如 $(B,C)$ 是，那么 $(A,C)$ 也是。

消除方法：非单位产生式 $B \to \alpha$，$(A,B)$ 是单位对，那么在新文法中加入 $A \to \alpha$。 

## 乔姆斯基范式（Chomsky Normal Formal）

直观：产生式是二叉树。

产生式必须是以下两种形式：

1. $A \to BC$
2. $A \to a$

产生方法：

首先把所有终结符号变成非终结符号+单独产生终结符号，随后再将右侧多于一个符号的产生式 break 开。