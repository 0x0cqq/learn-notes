# Lecture 2 2022.3.1

The definition of a intelligent agent

1. reflex agents

   percept $x$ --> $f$ --> single action $y$

2. planning agents

   precept $x$ --> $f$ --> action sequence ($a_1, \cdots$)

## Search and model

model is still a model, an **abstract mathematical description**

model is not real thing.

"all in simulation"

## Search Problems -- what are they

+ state space $S$
+ initial state $s_0 \in S$
+ action $A(s)$ in each case
+ Transition model $Result(s,a)$  
  + actually a successor function
+ goal test $G(s)$
+ action cost $c(s,a,s')$ 

Solution:  action sequence that reaches a goal status 

optimal solution: least cost 

### State Space

We cannot put the entire world into the model --- the world model ?

We need to **abstract away** less-relative details.

The number of state: could be really large

#### State Space Graph

It's a concept that helps us to think

+ Nodes are states(appear only once)
+ Arcs are transitions
+ the goal test is a set of goal nodes

#### Search Tree

Structure:

+ root node: start state
+ Children: successors
+ Nodes show states, but correspond to plans that achieve those states(path to the root node)

node(path to root node) is matched uniquely to the "plan"



#### General Tree/Graph Search

+ add a "explored/frontier/new" label
    + select an frontier node into the explored set
    + then add new frontier label

--> generate a tree 

## Uninformed search

Things that need to consider:

+ Complete
+ Optimal (least cost)
+ Time complexity
+ Space complexity

### DFS & BFS

|                  | DFS                                                | BFS                                         |
| ---------------- | -------------------------------------------------- | ------------------------------------------- |
| Strategy         | expand a deepest node first                        | expand a shallowest node first              |
| Implementation   | Frontier is a LIFO stack                           | frontier is a FIFO queue                    |
| Argument         | $b$ is the branch factor, $m$ is the maximum depth | $d$ is the depth of the shallowest solution |
| Time  complexity | $O(b^m)$ all nodes in the tree                     | $O(b^d)$                                    |
| Space complexity | $O(bm)$ a path to nodes                            | $O(b^d)$                                    |
| Completeness?    | NO(could be circles)                               | YES                                         |
| Optimal          | NO                                                 | YES                                         |

### High-level

both are complete & Optimal

#### Iterative Deepening Search

combining DFS and BFS

limit the depth when using DFS, then deepen the maximum depth by 1.

Time: $O(b^d)$ ，Space: $O(bd)$

#### Uniform Cost Search

like BFS.

Implementation of the frontier set:

use a priority queue whose key is the cost from node $n$ to root $g(n)$

Arguments: Solution cost $C^*$ ，minimum arcs cost $\varepsilon$

Time: $O(b^{C^*/\varepsilon})$ , Space: $O(b^{C^*/\varepsilon})$ 

## Informed (Heuristic) Search

"Which direction is **more likely** to be right?"

Heuristic: need a function to evaluate how close a state is to a goal(?)

### Greedy Search

Strategy: expand a node that you believe is the closest($h(n)$) one to the goal state

Implementation:

+ frontier is an ascending order priority queue by $h(n)$

Completeness: NO, Optimal: NO

### A* Search

[Hart/Nilsson/Raphael, 1968]

Combining UCS & Greedy Search

Sorted by $f(n) = g(n) + h(n)$ $g$ is the cost from root to $n$(backward), $h$ is the estimated cost from $n$ to the goal (forward)

Notice: we can only stop when we **dequeue** a goal node

#### Optimal?

estimations shouldn't have too much impact!

Admissible Heuristics: (可采纳条件)

$$
0 \leq h(n) \leq h^*(n) ,\;\; \text{where h* is the {\color\red{true}} cost to a {\color\red{nearest}} goal }
$$

We can prove that the optimal goal A with exit "frontier" node before suboptimal node B, with an admissible Heuristics.

???note "a short proof"
	all ancestor of A ($n$) will be expanded before B
	
	1. $f(n) \leq f(A)$, using that $f(n) = g(n) + h(n) \leq g(A) = f(A)$
	2. $f(A) < f(B)$, using that $f(A) = g(A) < g(B) = f(B)$
	3. $n$ expands before B, using that $f(n) \leq f(A) < f(B)$

#### Time Effiency?

!!!theorem
	A* will explore all states $s$ that satisfying $g(s) \leq g(s_\text{goal}) - h(s)$ 

So, larger $h(s)$ implies better performance

!!!note
	The Search Area of an A* Search is like a oval, while UCS is a perfect circle

#### How to create Heuristics?

!!!definition "Relaxed problems"
	Problem $P_2$ is a relaxed version of $P_1$ if $A_2(s) \supseteq A_1(s)$ for every $s$

!!!theorem
	$h_2^*(s) \leq h_1^*(s)$ for every $s$, so $h_2^*(s)$ is admissible for $P_1$
	
use a **easy** version of question, which is **easy to compute**, to get a heuristic

Example: 8 Puzzles, use the number of different tiles as a heuristic, use the distance of different tiles as a heuristic

!!!note
	There is a trade, in "how easy version" you choose

	Easier version is easier to **compute**, but has less **guiding** function
	
	You can also combine these several heuristic functions.

#### Application?

Computer Games, searching for paths

#### On Search Graph

More strict condition --- requiring a triangle inequality

Consistency: $h(n) \leq c(n,a,n') + h(n')$ 