# Query Optimization

(From JianMin Wang's slides)

## Introduction

We have so many alternative ways of evaluating a given query:

+ Equivalent expressions
+ Different algorithms for each operation

## Evaluation Plan

Defines exactly what algorithm is used for each operation, and how the execution of the operations is coordinated.

## Query Optimization based on cost estimation 

choose the cheapest **plan** based on the estimated cost.

The estimation is based on:

+ Statistical information about relations(size, unique values)
+ Statistics estimation for intermediate results
+ The cost to compute these statistics.

## Transformation of Relational Expression

Transform through equivalence relational algebra expressions.

### Equivalent rules

1. $\sigma_{\theta_1 \wedge \theta_2} = \sigma_{\theta_1} \circ \sigma_{\theta_2} = \sigma_{\theta_2} \circ \sigma_{\theta_1}$

2. $\prod_{L_1}(\prod_{L_2}( \cdots(\prod_{L_n}(E)))) = \prod_{L_1}(E)$

3. $\sigma_{\theta}(E_1 \times E_2) = E_1 \Join_\theta E_2$

4. $\sigma_{\theta_1}(E_1 \Join_{\theta_2}E_2) = E_1 \Join_{\theta_1 \wedge \theta_2} E_2$

5. $E_1 \Join_{\theta} E_2 = E_2 \Join_{\theta} E_1$

6. $(E_1 \Join E_2) \Join E_3 = E_1 \Join (E_2 \Join E_3)$

7. $(E_1 \Join_{\theta_1} E_2) \Join_{\theta_2 \wedge \theta_3} E_3 = E_1 \Join_{\theta_1 \wedge \theta_3} (E_2 \Join_{\theta_2} E_3)$

8. $\sigma_{\theta_0}(E_1 \Join_{\theta} E_2) = (\sigma_{\theta_0}(E_1)) \Join_{\theta} E_2$

9. $\sigma_{\theta_1 \wedge \theta_2}(E_1 \Join_{\theta} E_2) = (\sigma_{\theta_1}(E_1)) \Join_{\theta}(\sigma_{\theta_2}(E_2))$

10. $\prod_{L_1 \cup L_2}(E_1 \Join_{\theta} E_2) = (\prod_{L_1}(E_1)) \Join_{\theta}(\prod_{L_2}(E_2))$

11. $\prod_{L_1 \cup L_2}(E_1 \Join_{\theta} E_2) = \prod_{L_1 \cup L_2} ((\prod_{L_1 \cup L_3}(E_1)) \Join_\theta (\prod_{L_2 \cup L_4}(E_2)))$ (pushdown production)

12. set operations

13. $\sigma_{\theta}({}_G \gamma_A(E)) = {}_G\gamma_A(\sigma_\theta(E))$

14. full outer join is commutative

Usually used ones: 

pushdown something, reduce size earlier 

## Estimation of Costs

### Selection cost estimation

Assume that data are uniform distribution in $[\min(A,r), \max(A,r)]$

Selectivity $s_r$ under these operation can be calculated by simple production rule.

1. 合取（$\wedge$）
2. 析取（$\vee$）

### Join operation cost estimation

$V(A,r)$ is count of distinct values in attribute A of r 

1. $R \cap S = \emptyset$ : 直接乘起来就行
2. $R \cap S$ is a super key of $R$($S$) : then the maximum number of join is just the size of $S$($R$)
3. $R \cap S$ is not any key for $R$ or $S$, we use ,the estimation of $\frac{n_r \times n_s}{\max{(V(A,s), V(A,r))}}$


### Other Operation

+ Production & Aggregate: V
+ Outer Join: $s(n_r \Join n_s) + n_r + n_s$

### Attributes scale estimation

## Plan choose

### Dynamic Programming Algorithm

Use Dynamic Programming to minimum join operation's cost (like matrix chain multiply)

### Heuristic optimization

Rules:

+ Perform selection **early** (reduces the number of tuples)
+ Perform projection **early** (reduces the number of attributes)
+ Perform most restrictive selection and join operations (i.e. with smallest result size) **before** other similar operations.