# 软件分析与验证

清华大学软件学院，2023年春季学期。

## 程序漏洞

**心跳流血漏洞**：OpenSSL 在执行 heartbeat 的 echo 指令的时候没有进行边界检查，可能会导致隐私泄露

* 1996, 欧洲阿丽亚娜5型火箭发射失败
* 2000-2010, 丰田“加速门”事件
* 2012, Knight Capital 在30分钟内损失4.4亿美元
* 2016, the DAO 智能合约被攻击，损失6000万美元

## 课程主要内容 

> 程序的行为是否符合预期？

!!!example "二分查找"
	`(low+high)/2` 的溢出

!!!hint 
	正确的算法实现的代码也不一定正确
	

## 程序验证

以一种数学的、严格的方式证明或证伪程序满足给定的规约

$$
程序 \models 规约
$$

程序验证能够提供**最高程度**（数学）的正确性保证

## 历史

[Floyd 1967] Assigning meaning to programs: program is proved correct by reasoning about assertation

* Connecting the logic and the program

[Hoare, 1969] An axiomatic basis for computer programming: Hoare Triple, Hoare Logic

[Dijkstra, 1976] Guarded commands, non-determinacy and formal derivation of programs

* $P \Rightarrow wp(S, Q)$
* Predicate transformer

!!!theorem "Rice Theorem(H.G. Rice, 1953)"
	递归可枚举语言的所有非平凡性质都是不可判定的。

## 程序验证的内容

传统程序验证：需要用户提供断言，需要用户进行问题分解，难以自动化

自动程序验证：

* 如何刻画程序规约？
* 如何理解程序行为？
* 如何进行自动推理？

验证器：

* 输入：程序+规约
* 输出：是/证明；否/反例

!!!notes
	希望算法对于我们遇到的大部分情况都能够使用
	
## 课程内容设计

数理逻辑 --> 判定过程 --> 程序验证

* 数理逻辑：基于程序特点对一阶逻辑进行限制
* 判定过程：逻辑系统中的计算问题
* 程序验证：基于逻辑理解程序的行为和语义