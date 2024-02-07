# 一阶理论

受到限制的一阶逻辑，同时有些是**可判定的**

## 一阶理论的定义

!!!definition "定义：一阶理论 (first-order theory)"
    一阶理论 $T = (\Sigma, \mathcal A)$,

    * 非逻辑符号集 $\Sigma$ (签名 signature)
        * 有限的非逻辑符号, 比一阶逻辑更强的限定
    * 闭公式 [ 没有自由变元 ] 集合 $\mathcal A$ (公理集 axioms) 
        * 规定非逻辑符号的含义

    $\Sigma$-公式: 只由逻辑符号(变元, 联结词, 量词) 和 $\Sigma$ 中非逻辑符号组成的一阶逻辑公式

    !!!tip 一阶理论片段
        进一步引入限制, 如不允许量词出现 (不可判定的一阶理论, 可以通过对语法进行限制得到可判定的理论片段)
    
## 等式理论 $\mathcal T_E$
    
!!!definition "定义: 等式理论 $\mathcal T_E$"
    * 签名 $\Sigma_E: \{=, a,b,c, \dots, f,g,h, \dots, p, q, r, \dots\}$
        * 引入了 $=$
    * 公理集 $\mathcal A_E$, 定义 $=$ 的含义
        * 自反/对称/传递/函数同余/谓词同余

$\mathcal T_E$ **不可判定**, $\mathcal T_E$ 的**无量词片段**是**可判定**的(且有研究价值)

## 算数理论

### Peano 算术 $\mathcal T_{PA}$

!!!definition "定义: Peano 算术 ($\mathcal T_{PA}$)"
    * 签名 $\Sigma_{PA}: \{0,1,+, \times, =\}$
        * $0, 1$ 为常元
        * $+, \times$ 为二元函数, $=$ 为二元谓词
    * 公理集 $\mathcal A_{PA}$:
        1. 等式
        2. 零元
        3. 后继
        4. 加 0
        5. 加法后继
        6. 乘 0
        7. 乘法后继
        8. 归纳公理
    
    !!!tip $\mathcal T_{PA}$ 的语法糖
        * 任意自然数可以表示为多个 1 相加
        * 关系式转换为等式: 用一个额外的自然数变量转换
        * 严格关系式:上面的额外的自然数变量不为 0

$\mathcal T_{PA}$ 是不可判定的; $\mathcal T_{PA}$ 的无量词片段仍然不可判定.

> 乘法会让推理变得复杂

### Presburger 算数 $\mathcal T_\mathbb N$

!!!definition "定义: Presburger 算术 $\mathcal T_\mathbb N$"
    * 签名 $\Sigma_{\mathbb N} : \{ 0,1, +, =\}$
    * 公理集 $\mathcal A_N$:
        1. 等式的公理: 自反/对称/传递/同余
        2. 零元
        3. 后继
        4. 与 0 加法
        5. 加法后继
        6. 归纳

    !!!tip "$\mathcal T_\mathbb N$ 的表达能力"
        可以表达任意整数的加/减/**数**乘/关系运算

$\mathcal T_\mathbb N$ 是可判定的;

$\mathcal T_\mathbb N$ 允许量词消去, 对任意 $\mathcal T_\mathbb N$ 公式 $\varphi$, 存在一个等价的无量词公式 $\varphi'$

$\mathcal T_\mathbb N$ 的无量词片段也是可判定的, 判定复杂度为 coNP-完全

### 线性整数算术理论: $\mathcal T_\mathbb Z$

签名 $\Sigma _\mathbb Z: \{\dots, -2, -1, 0, 1, 2, \dots, -3 \times, -2 \times, 2 \times, 3 \times, \dots, + , - , =, > \}$


$\mathcal T_\mathbb Z$ 可以归约到 $\mathcal T_\mathbb N$