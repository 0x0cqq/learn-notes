# 第三章：一阶逻辑

## 语法

!!!definition "定义：项(term)"
    递归定义如下：

    * **变元**和**常元**是项
    * 对每一个 $n$ 元函数 $f$, 如果 $t_1, \cdots, t_n$ 都是项，则 $f(t_1, \cdots, t_n)$ 也是项。

!!!definition "定义：原子公式(atomic formula)"
    递归定义如下：

    * $\top$ 和 $\bot$ 是原子公式
    * 对每一个 $n$ 元谓词 $p$，如果 $t_1, \cdots, t_n$ 都是项，则 $p(t_1, \cdots, t_n)$ 是原子公式

!!!theorem "定理：合式公式(well-formed formula)的构造规则"
    递归定义如下：

    * 原子公式是合式公式
    * 若 $\varphi$ 是，则 $\lnot \varphi$ 是
    * 若 $\varphi_1, \varphi_2$ 是，则 $\varphi_1 \wedge \varphi_2$ 是
    * 若 $\varphi$ 是，$x$ 是变元，则 $\exists x. \varphi$ 是合式公式


**原子公式**和**原子公式的非**统称为<u>文字（literal）</u>。

!!!note
    对量词 $\forall$ ，引入一条新规则：$\forall x. \varphi := \lnot \exists x. \lnot \varphi$

!!!note "符号上的约定"

## 语义

### （一阶逻辑的）解释

!!!definition "定义：一阶逻辑的解释（interpretation）"
    解释 $\mathcal M=(\mathcal D,\mathcal I)$ 中，论域 $\mathcal D$ 是希望讨论的元素，解释函数 $\mathcal I$ 满足下列要求：

    * 规定常元 $c$ $\mapsto$ $d \in \mathcal D$ ($\forall c \in \mathcal C$)
    * 规定 $n$ 元函数符号 $f$ 为 $f_{\mathcal I}: \mathcal D^n \mapsto \mathcal D$
    * 规定 $n$ 元谓词符号 $p$ 为 $p_{\mathcal I} \subseteq \mathcal D^n$

!!!definition "定义：赋值(assignment)"
    公式 $\varphi$ 的自由变元集合 $FVar(\varphi)$ ，赋值是 $\rho:FVar(\varphi) \to \mathcal D$【给自由变元赋值】

!!!definition "定义：取值"
    项 $t$, 解释 $\mathcal M$, 赋值 $\rho$，定义取值 $\llbracket t \rrbracket_{\mathcal M, \rho}$:

    1. 常元 $\llbracket c \rrbracket_{\mathcal M, \rho} = \mathcal I(c)$
    2. 变元 $\llbracket v \rrbracket_{\mathcal M, \rho} = \rho(v)$
    3. 函数项 $\llbracket f(t_1, \dots, t_n) \rrbracket_{\mathcal M, \rho} = \mathcal I(f)(\llbracket t_1 \rrbracket_{\mathcal M, \rho}, \dots, \llbracket t_n \rrbracket_{\mathcal M, \rho})$

    !!!tip
        变体：$\rho[x \to c]$ 代表 $x$ 的赋值为 $c$，其他变元的赋值不变

### 公式的求值

（简单的）

### 可满足性

* 可满足的: 存在解释 $\mathcal M$ 和 $\rho$, 使得 $\llbracket \varphi \rrbracket_{M,\rho}$ 为真

* 有效的: 对任意解释 $\mathcal M$ 和 $\rho$, 有 $\llbracket \varphi \rrbracket_{M,\rho}$ 为真 (记作 $\models \varphi$)

!!!definition "定义: 语义蕴含"
    $\forall (M, \rho). \llbracket \varphi \rrbracket_{\mathcal M, \rho} \to \llbracket \psi \rrbracket_{\mathcal M, \rho}$

    以上记作 $\varphi \Rightarrow \psi$

## 证明系统

记作 $S_{FOL}$

### 减少量词的规则

$$
(\text{左全称}) \cfrac{\Gamma,\varphi[x \mapsto t] \vdash \Delta}{\Gamma, \forall x.\varphi(x) \vdash \Delta}
$$

> 左边随便选择一个元素成立, 那么如果把前提加强到 $\forall$ 就也是成立的 [有比较大的损失]


$$
(\text{左存在}) \cfrac{\Gamma, \varphi(c) \vdash  \Delta}{\Gamma, \exists x.\varphi(x) \vdash \Delta}
$$

> $c$ 就是随便写的那个存在出来的元素

$$
(\text{右全称}) \cfrac{\Gamma \vdash \varphi(c), \Delta}{\Gamma \vdash \forall x.\varphi(x), \Delta}
$$


$$
(\text{右存在}) \cfrac{\Gamma \vdash  \varphi[x \mapsto t], \Delta}{\Gamma \vdash  \exists x.\varphi(x), \Delta}
$$

$$
(c \text{ 在 } \Gamma, \varphi(x), \Delta \text{ 中不出现, 新命名一个变量})
$$

$$
\varphi[x \mapsto t] \text{ 是用项 } t \text{ 同时替换 } x \text{ 在 } \varphi \text{ 所有自由出现得到的结果} 
$$

### 性质

$S_{FOL}$:

* 是可靠的, 所有结论都是有效式
* 是完备的, 所有一阶逻辑式都可以通过该盐酸系统推导出来
* 是半可判定的, 只有在该公式有效的时候, 保证在有限时间中止; 否则可能永远不中止