# 基于控制流自动机的程序验证

## 抽象格局/执行

用逻辑公式（状态的集合）代替单一的状态

!!!definition "定义：抽象格局(abstract configuration)"
    $(l,\varphi)$, 其中 $l \in Loc$, $\varphi$ 是定义在程序变量上的**逻辑公式**

!!!definition "定义：抽象执行(abstract execution)"
    抽象格局序列 $(l_0, \varphi_0), \dots, (l_n, \varphi_n)$.

    存在语句序列 $st_1, \dots, st_n$ 使得 $\forall i \in \{0, \dots, n-1\}$：

    * $(l_i, st_i, l_{i+1}) \in \Delta$ （满足自动机控制流）
    * $sp(\varphi_i, st) \Rightarrow \varphi_{i+1}$

!!!note
    可达抽象格局 $C_R^\alpha$


## 抽象可达图

!!!definition "定义：抽象可达图(abstract reachability graph)"
    * 节点：$(l_in, \varphi_{pre}) \in C_R^\alpha$
    * 边：$\forall (l, \varphi) \in C_R^\alpha$, 若 $\varphi \neq \perp$ 且存在 $(l, st, l') \in \Delta$, 则一定存在另一个抽象格局 $(l', \varphi')$ 使得 $((l, \varphi), st, (l', \varphi')) \in T^\alpha$

!!!definition "定义：精确抽象可达图(precise abstract reachability graph)"
    满足下面条件：

    $$
    \forall((l, \varphi), st, (l', \varphi')) \in T^\alpha, sp(\varphi, st) \Leftrightarrow \varphi'
    $$

    !!!note ""
        精确抽象可达图中，抽象格局 $(l, \varphi)$ 关于语句 $st$ 的后继抽象格局唯一

    !!!note ""
        一个程序的精确抽象可达图仅有一个
    

!!!theorem
    程序滿足規約 $\Leftrightarrow$ $C_R$ 中不含错误格局 $\Leftrightarrow$ 程序精确抽象图中不含错误

## 模型检验

1. 可达图构造算法：宽度优先搜索，可能不中止
2. 精确抽象可达图的构造：符号执行，可能不中止

### 有界模型检验

在精确可达图的构建（Construct ARG）中，做以下修改：

* 添加 $(l', \varphi')$ 到圖中時，檢查其是否是錯誤抽象格局
* 如果 $(l', \varphi')$ 是錯誤抽象格局：
    * 返回從初始抽象格局到當前格局的語句序列

有界正確性（確保算法終止）：

* 規定深度不超過 $k$