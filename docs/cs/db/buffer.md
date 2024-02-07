# 数据库存储管理

## Buffer

因为 Disk 会比 Memory 慢很多，所以我们要在内存中有一些 buffer ！。

Buffer 在内存中，有一些 frame ，frame 里面可以放 Page 的拷贝。

Page Table 在内存中。会跟踪内存中的 Page ，维护 page_id 到 frame 的映射。同时维护 Metadata 包括

+ dirty flag（是否被修改过）
+ pin/reference counter(现在在使用的个数，用于移出的判断）

## Buffer Optimzations

### Multiple Buffer Pools

可以改善并发性能

实现方法：使用 hash 映射，或者维护 object id （？）

### Pre-Fetching 预取

改善连续读取性能。如果已经读了 0 和 1，就接着把 2 读进来

### Scan Sharing

同一个 Scan 可以被多个 Query 复用

### Buffer Pool Bypass

按照顺序遍历的不在 buffer 中保留，减少拷贝的 overhead 。

## Buffer Replacement

和 OS 的很类似。

LRU(Least Recently Used)

CLOCK

LRU-k: 维护每个页的最近 k 次访问，用这个来估计下一次访问。

## 和 OS 的关系

因为 OS 在管理存储，Database 的瓶颈也在于磁盘 IO，所以 Database 和 OS 之间的关系需要保持好，不能让 OS 插手太多 Database 的工作。

### 使用 OS 的存储

如果使用 `mmap` 沟通内存和磁盘，在缓存和 page fault 等方面可能会出问题。

可以使用以下系统调用修补。

+ `madvise`: 告诉 OS 计划访问的内存范围
+ `mlock`: 告诉 OS 不要将这部分虚拟内存 swap 掉。
+ `msync`: 告诉 OS 把 mmap 映射内存的内容 flush 到 disk 中。

对于 Buffer 来说（？），会绕过 OS 的缓存。采用直接的 I/O，使用 open 函数的时候加入 `O_DIRECT` 命令。

[Rust 语言的对应](https://doc.rust-lang.org/std/os/unix/fs/trait.OpenOptionsExt.html)
