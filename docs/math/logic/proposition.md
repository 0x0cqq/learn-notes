# 命题逻辑

## 第一章 命题逻辑的概念

### 命题 = 语句

命题：1 非真即假的 2 陈述句

简单命题：不含联结词的命题，不能被继续分割

复合命题：含有连接词的命题，包含一个或几个简单命题

#### “联结词”

本质：由简单命题真值到复杂命题真值的对应关系 / 真值表 / 函数

| 名称   | 记号         | 读法         | 备注                                                    |
| ------ | ------------ | ------------ | ------------------------------------------------------- |
| 否定   | $\lnot p$    | $非p$        |                                                         |
| 合取   | $p \wedge q$   | $p与q$       |                                                         |
| 析取   | $p \vee q$    | $p或q$       |                                                         |
| 蕴含   | $p \rightarrow q$  | $p蕴含q$     | $p$ 称为前件，$q$ 称为后件。<br/>【充分条件与必要条件】 |
| 双蕴含 | $p\leftrightarrow q$ | $p当且仅当q$ |                                                         |

!!!warning
	日常语言里“读作”连结词并不一定对应数理逻辑中的联结词。如 $我与你是朋友$  中的 $与$ 并不能对应合取。 

#### 命题的真值

真（T/1/$\top$）/ 假（F/0/$\bot$）：与事实相符，表达的判断正确/与事实不符，

!!!note
	需要明确讨论问题的范围。一个命题可能【目前】不能判断真假。

### 公式 = 命题形式表示法

#### 定义

命题常项：只能代表某一命题；有确定的真值

命题变项：可以代表任何一个命题；类比 variable，**只关心其真值**可以就看作真值

!!!note
	* 以上两项称为原子命题
	* 原子公式和原子公式的非称为文字（literal）

#### 合式公式 = 合理的公式 (Well-formed formula)

将命题变项和命题常项通过联结词联结起来

1. 原子命题是 （称为原子公式）
2. 如果 $A$ 是，那么 $\lnot A$ 是
3. 如果 $A,B$ 是，那么 $A \wedge B , A \vee B , A \rightarrow B, A \leftrightarrow B$ 是
4. 有限次运用 1 ～ 3 步骤得到的都是

#### 公式的赋值 = 变项值指定

公式 $A$ 中出现的命题变项 $p_1,p_2,\cdots , p_n$ 指定真值，构成一个确定的 $0/1$ 序列：$01\cdots0$

成真赋值：这组值使 $A$ 的值为 $1$ 

成假赋值：这组值使 $A$ 的值为 $0$ 

#### （公式的）真值表

对公式 $A$ 中出现的所有命题变项 $p_1,p_2, \cdots , p_n$ 【默认按字典序排序】

1. 列出 $2^n$ 个赋值【顺序 $00\cdots0 \overset{+1}{\longrightarrow} 11\cdots1$】
2. 按照运算顺序写出各子公式，并计算值；直到最后计算整个公式

#### 分类 = 根据真值表划分

重言式/永真式：在所有赋值下都为真 or 真值表的最后一列均是 1 

矛盾式/永假式：在所有赋值下都为假 or 真值表的最后一列均是 0

可满足式子：存在为真的赋值 or 真值表最后一列至少有一个 1

## 第二章 命题逻辑的推演

### （公式的）等值 

#### 定义

公式 $A$ 和 $B$ 的值在命题变项 $p_1,p_2,\cdots,p_n$ 的任一赋值下都相同

记作：$A = B$ ， $A \Leftrightarrow B$ 

#### 公式的等值与重言式的转化

$A = B$ 的充分必要条件是 $A \leftrightarrow B$ 为重言式

#### 基本的公式等值

双重否定律：消去否定符号
$\lnot\lnot P = P$

结合律： 调整？
$(P \vee Q) \vee R = P \vee (Q \vee R), (P \wedge Q) \wedge R = P \wedge (Q \wedge R),(P \leftrightarrow Q) \leftrightarrow R = P \leftrightarrow(Q \leftrightarrow R)$
$\color\red{(P \rightarrow Q) \rightarrow R \neq P \rightarrow (Q \rightarrow R)}$ 如何理解？

交换律：调整顺序
$P\wedge Q = Q \wedge P,P \vee Q = Q \vee P, P \leftrightarrow Q = Q\leftrightarrow P$
$\color\red{P\rightarrow Q \neq Q \rightarrow P}$

分配律：调整运算符与括号的位置
$\wedge \vee ,\vee \wedge , \rightarrow \rightarrow$ 有分配律
$\leftrightarrow,\leftrightarrow$ 没有分配律

等幂律：消去公式

吸收律：增加一个任意的公式
$P \vee (P \wedge Q) = P, P \wedge (P \vee Q) = P$ 

德摩根律：调整非和括号的位置

一律：变成P

零律：变成T/F

补余律： $P$ 和 $\lnot P$ 相遇

#### 常用的公式等值

蕴含拆分： $P\rightarrow Q = \lnot P \vee Q$

双蕴含拆分：$P \leftrightarrow Q = (P \rightarrow Q) \wedge (Q \rightarrow P)$ 【可以用取真或者取假来描述】

**前提合并与交换：$\color\red{P\rightarrow (Q\rightarrow R) = (P \wedge Q) \rightarrow R = Q\rightarrow(P \rightarrow R)}$**

逆否命题：$P \rightarrow Q = \lnot Q \rightarrow \lnot P, P \leftrightarrow Q = \lnot Q \leftrightarrow \lnot P$

反证法：$(P \rightarrow Q) \wedge (P \rightarrow \lnot Q) = \lnot P$

#### 真值函项：n元函数 = 联结词

对所有的含有 $n$ 个命题变项的公式加以分类，将等值的视为统一类，从中选取一个作代表称之为真值函项。真值函项就是 n 元函数，就是联结词。

n个命题变项可以定义出 $2^n$ 个真值函项/联结词/二值 $n$ 元函数。

##### 更多的命题/公式联结词

与非联结词：$P \uparrow Q = \lnot(P \wedge Q)$ 

或非联结词：$P \downarrow Q = \lnot(P \vee Q)$ 

异或联结词：$P \ \bar{\vee}\ Q = (\lnot P \wedge Q) \vee (P \wedge \lnot Q)$

##### 联结词的完备集

$C$ 是一个联结词的集合，任何 $n$ 元（$n \ge 1$）真值函项都可以由仅含 $C$ 中的联结词构成的公式等值

$\{\lnot,\wedge,\vee\}, \{\lnot,\wedge\},\{\lnot,\vee\},\{\lnot,\rightarrow\},\{\uparrow\},\{\downarrow\}$ 

注：用 与非 或 或非 表示 与或非

一般方法：

1. 先搞出来非
2. 再用 非 去搞 X非
3. 然后在用德摩根把 notX非搞出来

具体理论：

$\lnot P = P \uparrow P = P \downarrow P$

$P \wedge Q = (P \uparrow Q) \uparrow (P \uparrow Q) = (P \downarrow P) \downarrow (Q \downarrow Q)$

$P \vee Q = (P \uparrow P) \uparrow (Q \uparrow Q) = (P \downarrow Q) \downarrow (P \downarrow Q)$ 


### 等值演算

由已知的等值式推演出另外一些等值式的过程

方法：

1. 列真值表
2. 公式的等价【变换】？

#### 置换定律

$A$ 是一个公式， $X$ 是一个子公式；$X = Y$ ，那么拿 $Y$ 去替换 $X$ 得到 $B$ ，则 $A$ 和 $B$ 等值。



### 范式 = 公式的等值标准形

#### 范式

文字：命题变项 $p$  和其否定 $\lnot p$ 

合取/析取式：由文字的合取/析取组成的公式。【简单：仅有有限（$n$）个】

性质：简单析取式是重言式 $\Leftrightarrow$ 同时含 $p$ 和 $\lnot p$ ；简单合取式是矛盾式 $\Leftrightarrow$ 同时含有 $p$ 和 $\lnot p$

【对合取式取析取】析取范式： $A_1 \wedge A_2 \wedge \cdots \wedge A_m$ ，其中 $A_i$ 是简单合取式

【对析取式取合取】合取范式：$B_1 \vee B_2 \vee \cdots \vee B_m$ ，其中 $B_i$ 是简单析取式

##### 范式的构造

1. 替换 $\rightarrow$ 和 $\leftrightarrow$（要有技巧的替换，合取范式用 $\vee$，析取范式用 $\wedge$） ；
2. 德摩根，将 $\lnot$ 调整至最内层
3. 分配律，调整 $\wedge$ 和 $\vee$ 的运算顺序（可以画一棵树）

#### 主范式

**极小**项 = 简单**合取**式 + $p_i$ 和 $\lnot p_i$ 有且仅有一个出现 + 按照字典序排列【合取 $\approx$ $\min$，只在一个解释下为真】【$m_i$】 

**极大**项 = 简单**析取**式 + $p_i$ 和 $\lnot p_i$ 有且仅有一个出现 + 按照字典序排列【析取 $\approx$ $\max$，只在一个解释下为假】【$M_i$】

编号：按照 $x_1x_2\cdots x_n$ 排序的二进制数；否定作为 $0$ ，肯定作为 $1$

极大项与极小项的关系：$\lnot m_i = M_{(2^n - 1) - i} = M_{i补}$

主析取范式：析取范式（最小项），记作 $A = \bigvee_{x_1,x_2,\dots,x_i}$

主合取范式：合取范式（最大项），记作 $A = \bigwedge_{y_1,y_2,\cdots,y_m}$ 

主合取范式和主析取范式的转换：行反+行号反

注：永真式的主合取范式和矛盾式的主析取范式是**空公式**（如 $p \vee \lnot p$ 的主析取范式是其本身，主合取范式是空公式）

##### 主范式的构造

1. 构造对应的范式
2. 对不满的合取/析取式，补全。如 $p_1 \wedge p_3 = (p_1 \wedge p_2 \wedge p_3) \vee (p_1 \wedge \lnot p_2 \wedge p_3)$ ， $p_1 \vee p_3 = (p_1 \vee p_2 \vee p_3) \wedge (p_1 \vee p_2 \vee p_3)$ 

##### 主范式与真值表

主析取范式：从上往下数， 选取 $T$ 的行

主合取范式：从下往上数，选取 $F$ 的行

本质：真值表的严谨表述

### 推理形式 = 把蕴含的“状态”改为“过程”；或者将前提和结论分离

用 $\rightarrow$ 表示两个公式间的真值关系，前者为真，那么后者一定为真。

#### 重言蕴含

如果 $A$ 和 $B$ 是两个公式，那么 $A \rightarrow B$ 当且仅当  $A \rightarrow B$ 为重言式（或 $A \wedge \lnot B$ 为矛盾式）

注意：重言蕴含不是联结词，$A \rightarrow B$ 也不是公式！

##### 重言蕴含关系的性质

如果 $A \rightarrow B$ 且 $A$ 为重言式，那么 $B$ 也是重言式
如果 $A \rightarrow B$ 且 $B \rightarrow A$ ， 那么 $A  =  B$
如果 $A \rightarrow B$ 且 $B \rightarrow C$ ，那么 $A \rightarrow C$
如果 $A \rightarrow B$ 且 $A \rightarrow C$ ，那么 $A \rightarrow B \wedge C$
如果 $A \rightarrow C$ 且 $B \rightarrow C$ ，那么 $A \vee B \rightarrow C$

##### 证明重言蕴含的方法

定义：  $A \rightarrow B$ 为重言式或 $A \wedge \lnot B$ 为矛盾式

真值表： $A$ 为真的行 $B$ 也为真

反证法： $\lnot B \rightarrow \lnot A$

解释法：？

#### 推理形式 = 用重言蕴含建构推理；保证我们证明的正确性

##### 基本的推理形式

提取前提：$P \wedge Q \rightarrow P$

扩充结论：$P \rightarrow P \vee Q$

假言推理：$P , (P \rightarrow Q) \rightarrow Q$

三段论：$(P \rightarrow Q),(Q \rightarrow R) \rightarrow P \rightarrow R$

还有一些：（ppt里在谓词逻辑那里）

并发式：$P,Q \rightarrow P \wedge Q$

#### 推理演算 = 从一些前提到一个结论的过程

给出前提 $A_1,A_2,\cdots,A_n$ （都是公式） ，利用一些推理规则，得到一系列结论，最后得到目标结论 $B$ （公式）

也就是说，如果 $A_1,A_2,\cdots, A_n$ 都为真，那么 $B$ 为真。

##### 推理规则

前提引入规则：可随时引入前提

结论引入规则：中间结论可以作为后续推理形式的前提

代入规则：对重言式【？】中的命题变项可使用代入规则

置换规则：可以利用等值对前提的子公式进行替换，得到新的前提

【分离规则（假言推理）】：如果 $A \rightarrow B$ 和 $A$ 均为前提，那么 $B$ 也可以作为前提

条件证明规则：$A_1 \wedge A_2 \rightarrow B$ 与 $A_1 \rightarrow A_2 \rightarrow B$ 等价 （也就是说，结论里面的蕴含可以扔掉！）

## 第三章 命题逻辑的公理系统

### 公理系统

#### 概念

从一些公理出发，根据一些演绎规则得到另一些定理；是一种抽象的符号系统，也是一个形象系统。

#### 组成

初始符号：允许出现的符号集合

形成规则：哪些符号序列是合法的

公理，变形规则，建立定理

##### 命题逻辑的公理系统

从一些初始的重言式开始，应用明确规定的推理规则，推导出一些列重言式定理的演绎体系

与真值无关，但是和真值体系是一致的。

### 罗素公理系统

#### 组成

##### 初始符号

+ $A, B , C \cdots$  【对应命题】
+ $\lnot, \vee$ ：【对应联结词】
+ $()$ 【对应圆括号】
+ $\vdash$ 【表示一种“肯定”】

##### 形成规则

1. $\pi = A,B,C, \cdots$ 是
2. 如果 $A, B$ 是，那么 $(A \vee B)$ 是【注意括号】【注意大小写，这里应该和上面的命题区分开】
3. 如果 $A$ 是，那么 $\lnot A$ 是
4. 只有符合 $1,2,3$ 的规则的才是

额外的定义： $(A \rightarrow B) 定义为 (\lnot A \vee B)$ ，$(A \wedge B) 定义为 \lnot (\lnot A \vee \lnot B)$ ， $(A \leftrightarrow B) 定义为 ((A \rightarrow B) \wedge (B \rightarrow A))$

##### 公理

公理一： $\vdash((P \vee P)\rightarrow P)$ 【合并前提】

公理二： $\vdash (P \rightarrow (P \vee Q))$ 【扩充结论】

公理三： $\vdash((P \vee Q)\rightarrow (Q \vee P))$ 【析取的交换律】

公理四： $\vdash ((Q \rightarrow R) \rightarrow ((P \vee Q) \rightarrow (P \vee R)))$ 【用来推三段论，推出的可以替代“或”】

##### 规则

代入规则：如果 $\vdash A$ ，那么 $\vdash A,\frac{\pi}{B}$ （把一个符号 $\pi$ 处处用 $B$ 代替）【扩展公式】

分离规则：如果 $\vdash A$ ， $\vdash (A \rightarrow B)$ ，那么  $\vdash B$ 【拆开 $\rightarrow$】

置换规则：定义的两边可以相互替换，替换可以保持 $\vdash$ 

#### 基本定理及其推理过程

关键：逆着想，用基本工具拼出来，不要想得太细

##### 定理一：三段论

内容： $\vdash((Q \rightarrow R) \rightarrow ((P \rightarrow Q) \rightarrow (P \rightarrow R)))$

思路：从公理硬凑

证明过程：

1. 公理四： $\vdash((Q \rightarrow R)\rightarrow ((P \vee Q) \rightarrow (P \vee R)))$
2. $\frac{P}{\lnot P}$ ：$\vdash((Q \rightarrow R) \rightarrow ((\lnot P \vee Q ) \rightarrow (\lnot P \vee R)))$
3. 定义置换：$\vdash ((Q \rightarrow R) \rightarrow ((P \rightarrow Q) \rightarrow (P \rightarrow R)))$

##### 定理二：幂等律

内容：$\vdash (P \rightarrow P)$

思路： $P \rightarrow (P \vee P) \rightarrow P$

证明：

1. 公理二： $\vdash (P \rightarrow(P \rightarrow Q))$
2. $\frac{Q}{P}$： $\vdash (P \rightarrow (P \vee P))$ 
3. 公理一：$\vdash ((P \vee P) \rightarrow P)$
4. 定理一：$\vdash ((Q \rightarrow R ) \rightarrow((P \rightarrow Q) \rightarrow (P \rightarrow R)))$
5. $\frac{Q}{(P \vee P)}, \frac{R}{P}$ ： $\vdash(((P \vee P) \rightarrow P) \rightarrow ((P \rightarrow (P \vee P ))\rightarrow(P \rightarrow P)))$
6. 分离规则: $\vdash ((P \rightarrow (P\rightarrow P)) \rightarrow (P \rightarrow P))$
7. 分离规则: $\vdash (P \rightarrow P)$

##### 定理三

$\vdash(\lnot P \vee P)$

1. 定理二： $\vdash(P \rightarrow P)$
2. 定义置换: $\vdash(\lnot P \vee P))$

##### 定理四

$\vdash (P \vee \lnot P)$

1. 定理三： $\vdash(\lnot P \vee P)$
2. 公理三 $\vdash((P \vee Q) \rightarrow(Q \vee P))$
3. $\frac{P}{\lnot P}, \frac{Q}{P}$ : $\vdash((\lnot P \vee P) \rightarrow (P \vee \lnot P))$
4. 分离规则: $\vdash (P \vee \lnot P)$

##### 定理五

$\vdash(P \rightarrow \lnot\lnot P)$

1. 定理四： $\vdash(P \vee \lnot P)$
2. $\frac{P}{\lnot P}$: $\vdash(\lnot P \vee \lnot \lnot P)$
3. 定义置换: $\vdash(P \rightarrow \lnot\lnot P)$

##### 定理六

$\vdash(\lnot\lnot P \rightarrow P)$

1. 定理五： $\vdash(P \rightarrow \lnot\lnot P)$
2. $\frac{P}{\lnot P}$: $\color\red{\vdash (\lnot P \rightarrow \lnot \lnot\lnot P)}$
3. 定理四： $\color\red{\vdash(P \vee \lnot P)}$
4. 公理四： $\vdash((Q \rightarrow R) \rightarrow ((P \vee Q )\rightarrow (P \vee R)))$
5. $\frac{Q}{\lnot P},\frac{R}{\lnot\lnot\lnot P}$: $\vdash((\lnot P \rightarrow \lnot\lnot\lnot P) \rightarrow ((P \vee \lnot P) \rightarrow (P \vee \lnot\lnot\lnot P)))$
6. 分离规则: $\vdash((P \vee \lnot P) \rightarrow (P \vee \lnot\lnot\lnot P))$
7. 分离规则: $\color\red{\vdash ( P \vee \lnot\lnot\lnot P)}$
8. 公理三 $\vdash((P \vee Q) \rightarrow (Q \vee P))$
9. $\frac{P}{\lnot P}, \frac{Q}{\lnot\lnot\lnot P}$ : $\vdash ((P \vee \lnot\lnot\lnot P) \rightarrow (\lnot\lnot \lnot P \vee P))$
10. 分离规则: $\color\red{\vdash(\lnot\lnot\lnot P \vee P)}$
11. 定义置换: $\vdash(\lnot\lnot P \rightarrow P)$

##### 定理七

$\vdash((P \rightarrow Q) \rightarrow (\lnot Q \rightarrow \lnot P))$

1. 定理二： $\vdash(P \rightarrow P)$
2. $\frac{P}{(P \rightarrow Q)}$: $\vdash((P \rightarrow Q) \rightarrow (P \rightarrow Q))$
3. 定义置换: $\vdash((P \rightarrow Q) \rightarrow (\lnot P \vee Q))$
4. 定理五： $\vdash(P \rightarrow \lnot\lnot P)$
5. $\frac{P}{Q}$: $\vdash(Q \rightarrow \lnot \lnot Q)$
6. 公理四： $\vdash((Q \rightarrow R) \rightarrow ((P \vee Q) \rightarrow(P \vee R)))$
7. $\frac{P}{\lnot P},\frac{Q}{Q} ,\frac{R}{\lnot \lnot Q}$: $\vdash ((Q \rightarrow\lnot\lnot Q) \rightarrow ((\lnot P \vee Q) \rightarrow (\lnot P \vee \lnot\lnot Q)))$
8. 分离规则: $\vdash((\lnot P \vee Q) \rightarrow (\lnot P \vee \lnot\lnot Q))$
9. 公理三 $\vdash((P \vee Q) \rightarrow (Q \vee P))$
10. $\frac{P}{\lnot P}, \frac{Q}{\lnot\lnot Q}$: $\vdash((\lnot P \vee \lnot\lnot Q) \rightarrow (\lnot\lnot Q \rightarrow \lnot P))$
11. 定理一： $\vdash((Q \rightarrow R) \rightarrow ((P \rightarrow Q) \rightarrow(P \rightarrow R)))$
12. $\frac{P}{P \rightarrow Q},\frac{Q}{\lnot P \vee Q},\frac{R}{\lnot P \vee \lnot\lnot Q}$: $\vdash(((\lnot P \vee Q) \rightarrow (\lnot P \vee \lnot\lnot Q)) \rightarrow (((P \rightarrow Q) \rightarrow (\lnot P \vee Q)) \rightarrow((P \rightarrow Q) \rightarrow(\lnot P \vee\lnot\lnot Q))))$
13. $\frac{P}{P \rightarrow Q},\frac{Q}{\lnot P \vee \lnot\lnot Q},\frac{R}{ \lnot\lnot Q \vee \lnot P }$: $\vdash(((\lnot P \vee \lnot\lnot Q) \rightarrow (\lnot\lnot Q \vee \lnot P )) \rightarrow (((P \rightarrow Q) \rightarrow (\lnot P \vee \lnot\lnot Q)) \rightarrow((P \rightarrow Q) \rightarrow(\lnot\lnot Q \vee \lnot P ))))$
14. 分离规则: $\vdash (((P \rightarrow Q) \rightarrow (\lnot P \vee Q)) \rightarrow((P \rightarrow Q) \rightarrow(\lnot P \vee\lnot\lnot Q)))$
15. 分离规则: $\vdash((P \rightarrow Q) \rightarrow(\lnot P \vee\lnot\lnot Q))$
16. 分离规则: $\vdash (((P \rightarrow Q) \rightarrow (\lnot P \vee \lnot\lnot Q)) \rightarrow((P \rightarrow Q) \rightarrow(\lnot\lnot Q \vee \lnot P )))$
17. 分离规则: $\vdash((P \rightarrow Q) \rightarrow(\lnot\lnot Q \vee \lnot P ))$
18. 定义置换: $\vdash((P \rightarrow Q) \rightarrow(\lnot Q \rightarrow \lnot P ))$

## 附录

### 公式的表示法

#### 中缀表达式

自然表达法，需要括号，计算机需要反复扫描【狗屁，如果这样，那编译器完蛋了】

#### 前缀表达式（波兰表达式）

$P\vee((Q \vee R) \wedge S) = \vee P \wedge\vee QRS$

#### 后缀表达式（逆波兰表达式）

$P\vee((Q \vee R) \wedge S) = PQR \vee S \wedge \vee$

### 罗素公理系统的扩充

#### 推演规则的扩充

1. 析取交换：如果 $\vdash A \vee B$ ，那么 $\vdash B \vee A$ 
2. 析取附加：如果 $\vdash B \rightarrow C$ ， 那么 $\vdash A \vee B \rightarrow A \vee C$
3. 三段论：如果 $\vdash A \rightarrow B$ ， $\vdash B \rightarrow C$ ，那么 $\vdash A \rightarrow C$
4. 假言易位：如果 $\vdash A \rightarrow B$ ，那么 $\vdash \lnot B \rightarrow \lnot A$

#### 析取结合律的证明

出自《数理逻辑引论》，王宪钧，P58

##### 定理10 

$\vdash p \rightarrow q \vee p$

证明：
1. 公理二：$\vdash p \rightarrow p \vee q$
2. 公理三：$\vdash p \vee q \rightarrow q \vee p$
3. 三段论：$\vdash p \rightarrow q \vee p$

##### 定理16

$\vdash p \vee (q \vee r) \rightarrow q \vee (p \vee r)$

证明：
1. 定理10及代换： $\vdash p \rightarrow q \vee p, \color\red{\vdash r \rightarrow p \vee r}$
2. 连用两次附加前提： $\vdash q \vee r \rightarrow q \vee (p \vee r), \color\red{\vdash p \vee (q \vee r) \rightarrow p \vee (q \vee (p \vee r))}$
3. 交换律+三段论： $\vdash p \vee (q \vee (p \vee r)) \rightarrow  (q \vee (p \vee r)) \vee p, \color\red{\vdash p \vee (q \vee r) \rightarrow (q \vee (p \vee r )) \vee p}$
4. 定理10及代换：$\vdash p \rightarrow q \vee p, \color\red{\vdash p \vee r \rightarrow q \vee (p \vee r )}$
5. 公理2代换+三段论：$\vdash p \rightarrow p \vee r, \color\red{\vdash p \rightarrow q \vee (p \vee r)}$
6. 附加前提：$\color\red{\vdash (q \vee (p \vee r)) \vee p \rightarrow (q \vee (p \vee r)) \vee (q \vee (p \vee r))}$
7. 公理1代换：$\vdash p \vee p \rightarrow p,\color\red{\vdash (q \vee (p \vee r)) \vee (q \vee (p \vee r)) \rightarrow (q \vee (p \vee r))}$
8. 三段论：$\color\red{\vdash (q \vee (p \vee r)) \vee p \rightarrow q \vee (p \vee r)}$
9. 3和8三段论：$\color\red{\vdash p \vee (q \vee r) \rightarrow q \vee (p \vee r)}$

##### 定理17

$\vdash p \vee (q \vee r) \rightarrow (p \vee q ) \vee r$

证明：

1. 定理16及代换： $\vdash p \vee (r \vee q) \rightarrow r \vee (p \vee q)$
2. 交换律*2：$\vdash p \vee (q \vee r) \rightarrow (p \vee q )\vee r$

### 文氏图

将 $P$ 、 $Q$ 理解为某总体论域上的子集合，并规定 $P \wedge Q$ 为交集，$P \vee Q$ 为 并集；$\lnot P$ 为补集

### 对偶式与否定式 = 对形式上类似的公式的推论

本质上就是 De Morgan！

讨论仅包含 $\lnot , \wedge, \vee$ 的公式。

对偶式 $A^{*}$ ：对 A 进行替换 $\wedge 与\vee$ 互相替换， $T与F$ 互相替换

否定式 $A^{-}$： $A^{-} = A(\lnot p_1,\lnot p_2,\cdots,\lnot p_n)$

#### 一些等值式

$\lnot(A^*) = (\lnot A)^*, \lnot(A^-) = (\lnot A)^-$
$A^{**} = A,A^{--} = A$
$\color\red{\lnot A = A^{-*} = A^{*-}}$ 

若 $A=B$，则 $A^* = B^*$

若 $A\rightarrow B$ 永真，则 $B^* \rightarrow A^*$ 永真

$A$ 与 $A^{-}$ 同永真，同可满足； $\lnot A$ 与 $A^{*}$ 同永真，同可满足

### 归结法

目标：仅建立一条推理规则，便于机器证明与程序实现。

依据： $A \rightarrow B$ 成立，当且仅当 $A \wedge \lnot B$ 是矛盾式； $p \wedge \lnot p$ 是矛盾式；在两者之间进行转化！

规则：存在公式 $C_1 = L \wedge C_1',C_2 = \lnot L \wedge C_2'$ ，那么 $C_1 \wedge C_2 \rightarrow C_1' \wedge C_2'$ 

具体方法：

1. 将 $A \wedge \lnot B$ 化作合取范式 $C_1 \wedge C_2 \wedge \cdots \wedge C_n$ ，然后分离出前提集合 $C_1, C_2, \cdots, C_n$

2. 找互补对 $L, \lnot L$ ，把他们都划掉；同样的只保留一个： $C_i \wedge C_j = C_i' \vee C_j'$ 
3. 直到最后归结出【矛盾式或】空语句

注：如果归结不出来，并不一定推理就是错误的？可能只是人归结的不对

### 王浩算法

区别：

1. 联结词扩充： $\lnot \wedge \vee \rightarrow \leftrightarrow$
2. 引入概念“公式串”：$\alpha,\beta,\gamma$
3. 引入一种表达形式“相继式”。如果 $\alpha,\beta$ 是公式串，那么 $\alpha \overset{s}{\rightarrow} \beta$ 是相继式； 
4. $a \rightarrow b$ 化作 $\alpha \overset{s}{\rightarrow} \beta$ ：前/后件中分别用 $,$ 取代 $\wedge$ 和 $\vee$ 
5. 公理：如果公式串 $\alpha, \beta$ 都只是命题变项串，那么 $\alpha \overset{s}{\rightarrow}$ 当且仅当 $\alpha$ 和 $\beta$ 中至少有一个相同的命题变项。
6. 变形规则：10条，用来消去联结词，把含有联结词的公式串化成不含联结词的命题变项串
7. 证明流程：将要证明的定理，运用变形规则得到若干相继式，若每个相继式都是公理，则定理为真。

#### 变形规则：

1. $\lnot \rightarrow: \alpha,\beta \overset{s}{\rightarrow} X, \gamma \iff \alpha,\beta, \lnot X \overset{s}{\rightarrow} \gamma$
2. $\wedge \rightarrow: X,Y,\alpha,\beta \overset{s}{\rightarrow} \gamma \iff \alpha, X \wedge Y, \beta \overset{s}{\rightarrow} \gamma$
3. $\vee \rightarrow: X, \alpha , \beta \overset{s}{\rightarrow} \gamma 和 Y, \alpha,\beta \overset{s}{\rightarrow} \gamma \iff X \vee Y, \alpha,\beta \overset{s}{\rightarrow} \gamma$
4. $\rightarrow \rightarrow: Y, \alpha,\beta \overset{s}{\rightarrow} \gamma 和 \alpha , \beta \overset{s}{\rightarrow} X, \gamma \iff \alpha, X \rightarrow Y, \beta \overset{s}{\rightarrow} \gamma$
5. $\leftrightarrow \rightarrow: X,Y, \alpha,\beta \overset{s}{\rightarrow} \gamma 和 \alpha, \beta \overset{s}{\rightarrow} X,Y,\gamma \iff \alpha, X \leftrightarrow Y,\beta \overset{s}{\rightarrow} \gamma$
6. $\rightarrow \lnot : \alpha,X \overset{s}{\rightarrow}\beta, \gamma \iff \alpha \overset{s}{\rightarrow} \beta, \lnot X,\gamma$
7. $\rightarrow \wedge : \alpha \overset{s}{\rightarrow} X , \beta, \gamma 和 \alpha \overset{s}{\rightarrow} Y , \beta , \gamma \iff  \alpha \overset{s}{\rightarrow} X \wedge Y,\beta, \gamma$
8. $\rightarrow \vee : \alpha \overset{s}{\rightarrow} X,Y,\beta,\gamma \iff \alpha\overset{s}{\rightarrow}, X \vee Y, \beta,\gamma$
9. $\rightarrow \rightarrow : X, \alpha \overset{s}{\rightarrow} Y,\beta ,\gamma  \iff \alpha \overset{s}{\rightarrow} X \rightarrow Y, \beta,\gamma$
10. $\rightarrow \leftrightarrow : X,\alpha \overset{s}{\rightarrow} Y,\beta,\gamma 和 Y, \alpha \overset{s}{\rightarrow} X,\beta,\gamma \iff \alpha \overset{s}{\rightarrow} \beta,X \leftrightarrow Y,\gamma$

### 自然演绎系

