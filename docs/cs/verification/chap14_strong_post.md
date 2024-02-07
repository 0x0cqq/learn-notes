# 第十四讲 最强后置条件

!!!definition "定义：最强后置条件（strongest post-condition）"
    给定一阶逻辑公式 $\varphi$，程序语句 $st$，则 $sp(\varphi, st) = post(\{\varphi\}, \llbracket st \rrbracket)$

    !!!note
        如果 $st$ 不终止，则 $\llbracket st \rrbracket = \emptyset$，则 $post(\varphi, st) = \emptyset$

!!!theorem "定理：基于最强后置条件的程序验证"
    如果 $sp(\{\varphi\}, \llbracket st \rrbracket) \Rightarrow \psi$, 那么 $\{\varphi\}\ st\ \{\psi\}$ 是有效的（符合规约）

## 量词消去

!!!theorem
    如果项 $t$ 中不含变量 $x$，则下面两个公式语义等价：

    $$
    (\exists x. \varphi \land (x = t) ) \Leftrightarrow \varphi[x \mapsto t]
    $$

    $$
    (\forall x. \varphi \lor (x \neq t)) \Leftrightarrow  \varphi[x \to t]
    $$

## 语句的最强后置条件的计算

$$
\begin{aligned}
sp(\varphi, x:=e) &\Leftrightarrow& \exists x_0. x = e[x \mapsto x_0] \land \varphi[x \mapsto x_0]\\
sp(\varphi, \mathbf{havoc}\ x) &\Leftrightarrow \exists x. \varphi\\
sp(\varphi, \mathbf{assume}\ x) &\Leftrightarrow& \varphi \land p\\
sp(\varphi, st_1;st_2) &\Leftrightarrow& sp(sp(\varphi, st_1), st_2)\\
sp(\varphi, \mathbf{if}\ (p) \{ st_1 \}\ \mathbf{else}\ \{ st_2 \}) &\Leftrightarrow& sp(\varphi \wedge p, st_1) \lor sp(\varphi \wedge \lnot p, st_2)\\
sp(\varphi, \mathbf{while}\ (p) \{ st \} ) &\Leftrightarrow& {\Huge\land}_{i \in \mathbb N} sp(sp^i(\varphi, \mathbf{assume}\ p; st), \mathbf{assume}\ \lnot p)
\end{aligned} 
$$