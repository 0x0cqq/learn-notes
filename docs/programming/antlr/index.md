# ANTLR

如何使用 ANTLR 写一个 cpp 的解析器呢？

~~如何用 ANTLR 写一个 ANTLR  的解析器呢~~

“最棘手的部分位于词法分析器中（当然，C++是一个例外）”

### 总体思路

`.g4` 语法文件 --> 目标语言代码（Java/Python/...） --> 组合程序为编译器

生成代码的时候会按照 名称生成代码。例如会有 XMLLexer 类，XMLParser 类，XMLBaseVisitor之类 。

### 如何设计语法？

自顶向下。

设计模式：

+ 序列模式
+ 选择分支
+ 词法符号依赖模式
+ 嵌套模式

左递归可以自行消除

优先级可以通过选择分支的先后明确

结合性通过 `<assoc=right>` 表明

文法在前，词法在后（ANTLR会重新排序词法规则并让它在语法规则之后发生。所以上面的语法与下面的变体是相同的：）

为字符串隐式生成的“词法”放在最前面

`fragment` 表示这个规则不会用在匹配上。

大写开头x的表示词法

小写开头的表示文法

EOF 可以用来指定一定要匹配到末尾。

### 语法文件里的操作

#### 语法导入

可以拆分。

```
lexer grammar CommonLexerRules;
...
```

```
grammar LibExpr;
import CommonLexerRules;
...
```

#### 标签

在每一条分支后面都有，用来生成访问器函数。

```
stat: expr NEWLINE 			# printExpr
	| ID '=' expr NEWLINE	# assign
```



### 如何扩展ANTLR

antlr 强大就在于，它给我们嵌入用户程序留下了很大的空间。

为了把应用逻辑和语法，和应用的语言解除耦合，我们把所有的逻辑代码从语法文件中分离开。

#### Visitor 机制

visit 是需要手动调用子树的。

但是可以返回...

有一个 context，叫做什么 `ExprParser.EContext ctx`

```java
public static class EvalVisitor extends LExprBaseVisitor<Integer>
public Integer visitMult(LExprParser.MultContext ctx) {
    return visit(ctx.e(0)) * visit(ctx.e(1));
}
```



#### Listener 机制

enter exit 则是会自动

但是没有返回值

可以用全局变量 + 栈来模拟返回值

#### Walker 机制



Context

### 定制语法分析过程

比如我们需要知道前面的一些信息之类。

#### 在语法文件里嵌入动作

`stat: e NEWLINE {System.out.println($e.v);}; `

`ID: [a-zA-Z]+ {if(...)setType(...);};`

1. 可以增加类构造器
2. 语法规则可以携带参数（？）
3. 可以利用动作改变语法分析过程（比如读到 n 就匹配 n 个）
4. 可以绑定在词法上

#### 模式

`... -> pushMode(INSIDE)`

`... -> popMode`

```
mode INSIDE;
CLOSE : '>' -> popMode;
```

#### 通道

`-> channel(HIDDEN)`

`-> skip `

 