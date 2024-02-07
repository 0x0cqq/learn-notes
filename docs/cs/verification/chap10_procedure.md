# 第十讲：过程

$$
\newcommand{\while}[2]{\mathbf{while}\ (#1)\ \{#2\}}\newcommand{\if}[2]{\mathbf{if}\ (#1)\ \{#2\}}\newcommand{\else}[1]{\mathbf{else}\ \{#1\}}\newcommand{\true}{\mathbf{true}}\newcommand{\false}{\mathbf{false}}\newcommand{\skip}{\mathbf{skip}}\newcommand{\assert}{\mathbf{assert}}\newcommand{\assume}{\mathbf{assume}}\newcommand{\meaning}[1]{\llbracket #1 \rrbracket}\newcommand{\hoare}[3]{\{#1\}\ #2 \ \{#3\}}
$$

## 语言扩展

### 断言语句

$$
\meaning{\assert p} = \{ (s,s) \mid \meaning{p}_s = true \} \cup \{ (s, \downarrow) \mid \meaning{p} = false\}
$$

* 表达式为真，断言成立，继续运行；
* 表达式为假，程序终止，进入一个特殊的**错误状态**（$\downarrow$）

### 假设语句

$$
\meaning{\assume p} = {(s,s) \mid \meaning{p}_s = true}
$$

$$
wp(\assume p, \psi) = p \to \psi 
$$


### 过程契约

* requires 标注前置条件
* ensures 标注后置条件

* 形参可以充当变元
* $rv$ 在后置条件中充当返回值


## 过程程序的验证

### 程序基本路径

1. 开始于：
    * 过程入口
    * 循环头
2. 终止于：
    * 循环头
    * 断言（对路径的剩余部分进行分析时可以假设 p 成立）
    * 过程出口
3. 只包含一条分支
    * 用 assume 语句来代替一个分支情况

!!!note
    基本路径只包括两种基本语句：

    1. 赋值语句
    2. 假设语句

### 验证方法

验证程序 -> 验证主过程 -> 验证主过程的每一条基本路径 -> ok
