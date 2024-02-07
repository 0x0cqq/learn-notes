# Foundations of Algorithm

## Algorithm

!!!definition "Definition: Algorithm"
    An algorithm is any well-defined computational procedure that:

    + takes some value or set of values as **input**
    + produces some value or set of values as **output**

!!!example "Example: Sorting Algorithm"

!!!definition "Definition: analysis of algorithms"
    The theoretical study of computer-program **performance** and **resource usage**.

What's more(?) important than performance & resource usage?

+ correctness
+ programmer time
+ maintainability
+ robustness
+ user-friendliness

## Computational model and complexity

We need a model to measure our "performace" and "resource usage".

## RAM (Random access machine) Model

+ No concurrent operations
+ Each instruction takes a constant amount of time
    + Instruction set includes only: arithmatic, data movement, control

> quite like real computer

## Asymptotic Analysis 

We always want to solve **large**(large enough) problem.

We only look at the "growth" of $T(n)$ (time usage/instruction count when the problem has a input size of $n$) as $n \to \infty$ (we want the problem to be large **enough**).

## $\Theta$-notation family

!!!definition "Definition: $\Theta$-notation"
    $\Theta(g(n)) = \{f(n) \mid \exists c_1,c_2,n_0 \in \mathbb R^+, s.t.\ \forall n \geq n_0, 0 \leq c_1g(n) \leq f(n) \leq c_2g(n)\}$

    **Asymptotically tight bound:** $g(n)$ is an asymtotically tight bound of $f(n)$.

    Denoted as $f(n) = \Theta(g(n))$ or $f(n) \in \Theta(g(n))$.

> Note that the Symbol here is not O, but big theta.

!!!definition "Definition: $O$-notation and $\Omega$-notation"
    $O(g(n)) = \{f(n) \mid \exists c,n_0 \in \mathbb R^+, s.t.\ \forall n \geq n_0, 0 \leq f(n) \leq cg(n)\}$
    
    > asymptotically upper bound 

    $\Omega(g(n)) = \{f(n) \mid \exists c,n_0 \in \mathbb R^+, s.t.\ \forall n \geq n_0, 0 \leq cg(n) \leq f(n) \}$

    > asymptotically lower bound 

!!!theorem 
    $f(n) = \Theta(g(n)) \iff f(n) = O(g(n)) \wedge f(n) = \Omega(g(n))$

    > This is used to prove $\Theta$ relationship.

!!!definition "Definition: $o$-notation and $\omega$-notation"
    $o(g(n)) = \{f(n) \mid {\color{red}\forall} c > 0, {\color{red}\exists} n_0 > 0 , s.t.\ \forall n \geq n_0, 0 \leq f(n) {\color{red}<} cg(n)\}$
    
    > asymptotically **not-tight** upper bound 

    $\omega(g(n)) = \{f(n) \mid {\color{red}\forall} c > 0, {\color{red}\exists} n_0 > 0 , s.t.\ \forall n \geq n_0, 0 \leq cg(n) {\color{red}<} f(n)\}$

    > asymptotically **not-tight** lower bound 


!!!theorem "Theorem: some properties"
    ...

    We can use real number to analogy:
    
    Asymptotic relation between functions| Relations between real numbers
    ---------|----------
    $f(n) = O(g(n))$ | $f \leq g$
    $f(n) = \Omega(g(n))$ | $f \geq g$
    $f(n) = \Theta(g(n))$ | $f = g$ 
    $f(n) = o(g(n))$ | $f < g$ 
    $f(n) = \omega(g(n))$ | $f > g$ 

    Then all transitivity, reflexitivity properities are trivial.

### Some (not) common function

#### Stirling Approximation

$$
n! = \sqrt{2\pi n }\left(\frac{n}{e}\right)^n \left(1 + \Theta(\frac{1}{n})\right)
$$

#### Iterated logarithm function 

$$
f^{(i)}(n) = \left\{\begin{aligned}n,i = 0\\f(f^{(i-1)}(n)), i > 0\end{aligned}\right.
$$

$$
\lg^* n = \min\{i \geq 0 \mid \lg^{(i)} n \leq 1\}
$$

e.g. $\lg^*2 = 1, \lg^*4 = 2, \lg^*16 = 3, \lg^*65536 = 4, \lg^*2^{65536} = 5$

> “叠罗汉”了几个 2，从上往下算