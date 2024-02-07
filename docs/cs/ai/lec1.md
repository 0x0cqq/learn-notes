# Lecture 1 2022.2.22

## What is Artificial Intelligence？


### Brief History

总共有三种流派，反映了人们对于人工智能的艰辛的探索。也表现的是人们并不完全掌握对于“智能”的理解。

为什么会有人工智能的寒冬?

早期 AI  

1. 1952 lookahead search 
2. 1956 search tree & heuristics search

--> 通用人工智能的乐观氛围

### 1956, Dartmouth

十个人，开了两个月的会，提出了一个新的词：Artificial Intelligence 

> **Every aspect** of learning or **any other feature** of intelligence can in principle be so precisely described that a machine can be make to simulate it.

### First AI Winter

1966, ALPAC report cut off government funding for MT(machine learning)

Problems:

1. Limited computation: exponentially complexity in our method
2. Limited information: the problem of real world is too difficult(number of words, objects, information ...)

by-product: lisp & lisp machine

### Knowledge-based Systems

> Inspiration from Human Brain: learn from what you know

Giving rules -- from human

Examples:

+ DENDRAL(1960s): rules for guessing the property of unknown organic molecules

+ MYCIN(1970s): ～600 rules from human doctors; only can diagnose blood infections

--> problems: not general 

#### Expert System

Problems:

1. **Deterministic rules** could not handle the **uncertainty** of the real world
2. Rules can get too **complex** to create and maintain. 

Second AI Winter



### Neural Networks

simulate humans  neural

Minsky: cannot handle xor!

#### Convolutional Neural Network

1980, 一个神经元只能看到一部分(Receptive field)

1986, backpropagation(反向传播) algorithm is popular, training multi-layer networks

--> break the limitation of linear classifier

Application: 1989, Yann LeCun applied CNN to recognizing handwritten digits 

---> 从造人变成了造工具，可以认为是一个理念的转变

#### Deep Learning

AlexNet(2012): deep convolutional networks on ImageNet powered by GPU

AlphaGo(2016): deep reinforcement learning, MCTS

### Bayesian Networks

1985, use graph model for reasoning under uncertainty

实际问题变成**随机**变量之间的相关和因果关系；

point -- things

edge -- rule

#### Support Vector Machines

1995 maximize margin



总结：什么样的算法能火起来呢？刻上了时代的烙印...

什么样的需求？什么样的条件？

### Overview of AI knowledge structure

## Two Views of AI

### What are the two views?

+ Intelligent Agent: think & act like a human
  - six aspects: perception（感知）, robotics（执行）, language（语言）, knowledge（知识）, reasoning, learning（学习）
+ AI Tools: Do something that human cannot do
  
### Intelligence Agent

observe environment, perform activity

in six aspects

machine can only do narrow tasks, with millions of examples

### AI Tools

planning, scheduling, pattern recognition, web mining, prediction

We need to be rational: it is a better tool, but not a perfect tool

> AI + SCIENCE 

e.g. GPT-3, 175 billion, alike to neural cell's number in human mind

> Language Models are Few-Shot Learner
>
> 尤其是在中国大陆，最不健康的一股思潮：我的模型比你的大，我的参数比你的多！

500-word article writing: 看起来很好，似是而非，缺少精确性

e.g. BigGAN 无中生有的生成的图片，不受控制，不能精细化生产

e.g. MuZero, DeepMind 的下棋的问题，less prior knowledge， more tasks



### Question

+ Interpretation 
+ Security
+ Bias

## Course Overview

学习 AI 的精华

THIS IS A DEMANDING COURSE.
