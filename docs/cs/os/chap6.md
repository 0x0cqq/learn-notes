# 第六章 操作系统安全

!!! info
	这里似乎不考。

## 6.1 计算机安全概述

三个目标：

+ 数据的私密性：谁能看

+ 数据的完整性：谁能改

+ 系统的可用性：谁能用

不安全因素：

+ 恶意攻击：好奇心、利益、商业和军事间谍
+ 意外事件：天灾、硬件或软件错误、人祸

## 6.2 加密系统

### 6.2.1 私钥加密

加密和解密的密钥

+ 都是秘密的
+ 简单对应或完全相同

优点：简单、安全

缺点：密钥如何交换？

### 6.2.2 公钥加密

用户提供一个密码，系统自动生成两个密钥

两个密钥具有互反的性质，任意一个加密，另一个作为解密

缺点：效率低下

一般：使用非对称加密算法进行密钥分发协商，使用对称加密进行业务数据的加密和解密

### 6.2.3 数字签名

用一个 hash 算法对文件进行映射，然后放到文件末尾

> 例子：鲍勃有两把钥匙，一把是公钥，一把是私钥
>
> 他会把公钥公开出去
>
> 别人写信：
>
> > 用公钥加密；
> >
> > 鲍勃用私钥解密。
>
> 鲍勃回信：
>
> > 先用 hash 搞一个 digest
> >
> > 然后用私钥加密，生成 signature
> >
> > signature 附在信件下面，一起发给别人
> >
> > 别人可以用公钥解密，得到 digest
> >
> > 再用 hash 原文对照 digest
>
> 问题：无法确定自己的公钥是否被人换过，因此无法确定收到的信息是否来自 Bob
>
> 解决：
>
> > 要求 Bob 去找证书中心 CA 做公钥认证。
> >
> > 证书中心用自己的私钥，对鲍勃的公钥和一些相关信息一起加密，生成“数字证书”，一并发给别人
> >
> > 收到的人，用证书中心的公钥解密，拿到 Bob 真实的公钥，证明数字签名确实是 Bob 签的

## 6.3 用户认证

1. 基于密码
    1. 破解方法：穷举法、猜测密码
2. 基于物理对象，e.g. 卡
3. 基于生物特征 

## 6.4 系统内部攻击

1. 特洛伊木马：一个表面无害的程序内嵌了破坏性的代码
2. 登录欺骗：例如一个假的登录网站
3. 逻辑炸弹：我在，安好；我走，寄
4. 后门：`if(name == 'cqqqwq'): pass`
5. 缓冲区溢出攻击

### 6.5 系统外部攻击——病毒

1. 先复制传播

## 感染对象

1. 可执行文件
    1. 覆盖 or 寄生
2. 常驻内存病毒
    1. 常驻内存中，伺机而动
3. 宏病毒
    1. 文档中嵌入的一段代码
4. 网络蠕虫病
    1. 传播但不更改系统
    2. 传播方式是网络