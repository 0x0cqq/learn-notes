# 事务(Transaction)

Jim Gray

## 一些问题场景

1. 掉电/写丢失
2. 读未提交/不可重复读
3. 幻影读

两类核心问题：

1. 在系统失效的时候，如何保证系统仍然有效
2. 多个用户并发执行的时候，如何保证......

## 定义

!!!definition "定义：事务(Transaction)"
    A **transaction** is a unit of program execution that accesses and possibly updates various data items.

## 性质

ACID

### 原子性（Atomicity）

### 持久性（Durability）

### 一致性（Consistency）

满足表的约束

### 隔离性（Isolation）

这个表只为我服务

## Storage Structure

稳定存储

## Transaction State

+ Active 
+ Partially committed
+ Failed
+ Aborted
+ Committed

事务一般是进程是线程的。

## Concurrent Executions

control schemes are needed to achieve isolation.

### Schedule

a sequence of instructions that specify the chronological order in which instructions of concurrent transactions are executed. 

a **committed** instruction is at last

failed transaction will have an abort instruction as the last statement.

1. 第一种串行调度
2. 第二种串行调度
3. 与串行调度等价的调度
4. 出问题的调度

### Serializability

冲突：有两个指令对于同样一个地址进行了大于等于 1 次的写入（write）

冲突等价（Conflict Equivalent）：$S$ 可以变成 $S'$，交换非冲突的指令。

冲突可串行化（Conflict Serializable）：和某种序列化的方式冲突等级啊

事务的先序图（Precedence Graph），可以用来判断是否是冲突可串行化的，用边来表示冲突关系，指向冲突的发生方


视图等价（View Equivalent）：对于 read 和 write 的先后（？）、结果都是一样的。

视图可串行化：（View Serializable）:

blind write 会导致不可试图可串行化，但是冲突可串行化

视图可串行化的检验是 NP-complete 的

## 可恢复性（Recoverability）

将 Commit 和 Rollback 考虑进来

### 可恢复的调度（Recoverable schedule）

### 级联回滚（Cascading Rollback）

一个事务的 failure 会导致一系列的事务的回滚。

### Cascadelesss Schedules

$T_j$ 度过 $T_i$ 写过的数据，那么 $T_i$ 的 Commit 必须要在 $T_j$ 的 Read 操作之前。

## Isolation Level

数据库需要提供：

1. Conflict Serializable
2. Recoverable and preferably cascadeless

The system needs to tradeoff between:

+ the amount of concurrency they allow
+ the amount of overhead they incur
 