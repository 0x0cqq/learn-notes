# Search II

## Constraint Satisfaction Problems

A special subset of search problems.

### Property

State is structured.

Goal Test is a set of constraints 

### Formal Definition

$P(X,D,C)$

variablex $X = \{X_1, \cdots, X_n\}$

domain $D = \{D_1, \cdots, D_N\}$ ，其中 $D_i = \{v_1, \cdots, v_k\}$ 是 $X_i$ 的取值。

An assignment of values $\{X_i = v_i, X_j = v_j, \cdots\}$

complete assignment: every variable is assigned.

solution = consistent & complete assignment

### Constraint Graphs 

Nodes are variables, arcs show constraints