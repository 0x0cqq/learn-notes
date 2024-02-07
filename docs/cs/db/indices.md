# 数据库索引技术

## 简介

对于一个 Table ，维护一些额外的数据，加速查询。

当然会有 tradeoff ，时间、空间上。

## B+ Tree

最广泛使用的索引结构是 B+ Tree 。

B+ Tree 和 B-Tree 很类似，就是多(M)叉平衡树，唯一的区别就是 B+ Tree 只在叶节点存储 key-value 对。现代的 B+ Tree 还会引入 B_link Tree 中的技术，在每个节点中维护兄弟节点的指针。

正式的说，有以下三个特点（参数为 $M$）：

1. 完美平衡
2. 所有内部节点都有 $\frac{M}{2} - 1 \leq \text{ num of keys } \leq M - 1$
3. 所有内部节点，有 $k$ 个 key 就有 $k+1$ 个 children

每个节点都有一个 key/value 的 array，是排好序的。

对于内部节点，value 是 pointer；

对叶节点，value 要么是 record ID （类似一个指针），要么就是 Tuple 本身。

## Operation

### Selection

从上往下搜索、比较。

### Insertion

如果 key 太多可能需要 split，把一个节点变成两个，并且将中间的 entry 往上 push 一层。

### Deletion

如果 key 太少，先从 sibling 借，否则直接和 sibling 合并。

以上两个操作应该都需要递归处理

### Intra-Node Search

在节点内如何搜索到继续在哪里往下走？

1. Linear 线性
2. Binary 二分
3. Interpolation 插值

## Problems & Solutions

|       Problems       |                          Solutions                           |
| :------------------: | :----------------------------------------------------------: |
|    Duplicate Keys    | Append Record ID to make the uniqueness<br />Allow leaf node to spill into overflow nodes.(x) |
|  Clustered Indexes   | make a hidden row is as primary key if the table doesn't have one |
| Variable Length Keys | Store only pointers<br />store a fix-length prefix of key & the pointer to key/value pair |
|                      |                                                              |

## Design Choices

### Node size

根据介质决定。

+ HDD: 1MB
+ SSD: 10KB
+ In-memory: 512B

### Merge Threshold

有的时候会延后 merge，防止 merge 完又立刻 split 的情况。

## Optimizations

1. Prefix Compression
2. Deduplication
3. Bulk Insert: build from bottom to top to avoid unnecessary split

## Other Indexes

### Static Hashing / Dynamic Hashing

Static: fix numbers of buckets

Dynamic: 

### Bitmap Index

0/1 bitmap