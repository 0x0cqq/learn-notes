# 第一章：基本概念

## 例子：简单的 GCD 程序

```cpp
int fGCD(int m, int n) {
    int a = m;
    int b = n;
    while (b != 0) {
        int tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
```

1. “正确”的标准来自于我们所需要 **“规约”（specification）**
    * 返回 $m$ 和 $n$ 的最大公约数（最小公倍数？）
2. 如何精确无歧义地表示程序规约
    * **前置条件(requires ...):** 执行代码之前必须满足的条件
        * $m \geq n \text{ and } n > 0$
    * **后置条件(ensures ...):** 执行代码之后必须满足的条件
        * $a = \gcd(m,n)$
    * **在符合前置条件的情况下，执行代码的结果，符合后置条件**
3. 位置更灵活的 **断言(assertation)**:
    * 在程序某个位置必须成立的 **逻辑表达式**
    * 后置条件可以视作放在程序末尾的断言
4. 因此程序规约就是：
    * 程序行为是否符合规约？即，从满足前置条件的任何状态出发，执行到指定位置是否满足断言，执行后是否满足后置条件？
    * 一些问题：如何处理循环/递归...？
5. 起点：数学定理 （辗转相除法）
6. 如何处理循环？循环会进行多少次？循环会不会无法结束？
    * **循环不变式(loop invariant):** 在循环头位置（无论第几次到达）永远成立的逻辑表达式
        * 例：$a \geq b \text{ and } b \geq 0 \text{ and } \gcd(a,b) == \gcd(m,n)$ 
        * 第一次成立；根据欧几里得，这次成立，下次也成立；最后一次也成立
        * `true` 也是循环不变式，但并没有用：需要**有用的循环不变式**
    * **秩函数(loop variant):** 定义在程序变量上的一个算术表达式
        * 例：$a + b$
        * 该表达式的值随着循环迭代次数增加严格递减，且有下界
        * 如果找到秩函数，那么程序一定是能终止的