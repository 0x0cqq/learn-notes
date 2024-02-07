## DPDA，确定下推自动机

!!!definition "确定下推自动机"
    在任意时刻的转移没有选择，具体来说：

    1. $\delta(q,a,X)$ 最多只有一个元素
    2. 如果 $\delta(q,a,X)$ 为空，那么 $\delta(q, \epsilon,X)$ 也为空

### DPDA 的识别能力

!!!theorem "DPDA 接受的语言"
    DPDA 接受的语言介于正则语言（Regular Language）和上下文无关语言（Context Free Language）之间。

证明：

1. 对任何正则语言 $L$，存在 DPDA $P$，使得 $L = L(P)$ 。
    + 终态型 DPDA 可以模仿 DFA，我们忽略栈的存在即可。
2. 存在 DPDA $P$ 使得 $N(P) = L$，当且仅当语言 $L$具有前缀性质[^1]且存在 $DPDA$ $P'$ 满足 $L = L(P')$。
3. 存在上下文无关语言，无法被任何 DPDA 表示。
    + 例如 $ww^R$


[^1]: Prefix Property，即两个属于 $L$ 的字符串，不可能一个为另一个的前缀

!!!theorem "DPDA 与无二义性文法"
    如果对于语言 $L$，存在 DPDA $P$ 使得 $L = N(P)$（或 $L = L(P)$ ）那么 $L$ 存在一个无二义性的上下文无关文法。

证明：我们根据之前的构造方法构造出的 CFG 即满足如上的条件
