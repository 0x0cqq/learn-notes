# Zero knowledge

Peggey wants to prove that she knows **"something"** to Victor, but without disclosing any information of **"something"** to him.

## Graph Isomorphism

!!!definition "Definition: Graph isomorphism"
    Let $G_1$ and $G_2$ be graphs. An **isomorphism** $\phi: G_1 \to G_2$ is a relabeliling (permutation) of the vertices of $G_1$ that yields the graph $G_2$.

Peggy wants to prove to Victor that she knows **an isomorphism $\phi$** between two public graphs $G_0$ & $G_1$, with out disclosing any information about **the isomorphism $\phi$** to Victor.

### Commitment-Challenge-Response scheme

1. Peggy generates a <span style="color:blue"> commitment</span> and send it to Victor
    * generates Random secret permutation $\psi$ and computes $H = \psi(G_1)$
    * ${\color{blue}H}$ is the commitment
2. Victor generates a <span style="color:red">challenge</span> and sends it to Peggy
    * pick a random bit $b \in_R \{0,1\}$;
    * ${\color{red}b}$ is the challenge
3. Peggy generates a <span style="color:blue">response</span> and sends it to Victor
    * Peggy's response will be the isomorphism between $G_{\color{red}b}$ and ${\color{blue}H}$:
        * if $b=0$: Response is ${\color{red}\chi} = \psi \circ \phi$
        * if $b=1$: Response if ${\color{red}\chi} 
         = \psi$
    * Note: No one can fully control, both red and blue in the challenge!
4. Victor will do the <span style="color:red"> verification</span>
    * Victor checks that ${\color{red}\chi}(G_{\color{red}b}) = {\color{blue}H}$


!!!note "Completeness"
    * If Peggy knowns the thing being proved, and Peggy and Victor follow the protocol, then Victor accepts with probability 1

!!!note "Soundness"
    * If Peggy does not knoww the thing being proved, then, no matter what Peggy does, Victor rejcts with at least constant probaility
        * repeat many times can make the probability much higher!
        * She will only have 50% of probaility to get the answer right

### Zero knowledge

Victor **"learns nothing"** about Peggy's value, other than the fact that Peggy knows some valid value.

!!!definition "Definition: learn nothing?"
    Victor learns nothings if he could have generated all of the value he receives **on his own**.

    Actually same "distribution"!

    !!!hint
        Can be generated in different order!

        What may happen in simulator:
        
        1. pick challenge: random $b \in_R \{0,1\}$
        2. generate response: random permutation $\chi$
        3. retroactively compute commitment: $H = \chi(G_b)$
        
        This transcript $(H,b,\chi)$ has **the same distribution** as real transcript.

        So he actually is not learning any "information"/"knowledge" new!

    !!!hint
        But Peggy cannot forge the transcript too.

        Peggy has to make sure commitment $H$ will work for any challenge.
        
        Because the order of operations in the **protocol** is defined, and it does matter! 

## Schnorr's Identification scheme

Peggy wants to prove to Victor that she knows the **secret key** behind a public key. 

Let $G$ be a group of prime order $q$ with generator $g$

* secret key is $x \in_R \mathbb Z_q$
* public key is $y = g^x$

<span style="color:blue">Commitment:</span>

* Random $k \in_R \mathbb Z_q; {\color{blue}r} \gets g^k$
* ${\color{blue}r}$ is commitment

> like another part of the "public key?"
> 
> use the public key to hide the information

<span style="color:red">Challenge:</span>

* ${\color{red}e} \in_R \mathbb Z_q$; 

<span style="color:blue">Response:</span>

* ${\color{blue}s} \gets k + x{\color{red}e} \bmod q$

<span style="color:red">Verification:</span>

* Check $g^{\color{blue}s}y^{-{\color{red}e}} = r$

!!!notes "Completeness"
    Obvious.

!!!notes "Soundness"
    Peggy don't know x, then guessing $x$ is at most $1/q$ probaility

### Zero Knowledge

1. pick $e$
2. pick $s$
3. compute $r = g^sy^{-e}$


## Non-interactive proofs

Make prover compute everything!

Idea: challenge = hash of the commitment, cannot cheat by postpone the "commitment"

Called the Fiat-Shamir transform!

### Proof of discrete logarithm

Peggy wants to prove to Victor that $\text{DLOG}_g(y_1) = \text{DLOG}_h(y_2)$

<span style="color:blue">Commitment:</span> Random $k \in_R \mathbb Z_q; {\color{blue}r_1,r_2} \gets g^k, h^k$

<span style="color:red">Challenge:</span> ${\color{red}e} \in_R \mathbb Z_q$; 

<span style="color:blue">Response:</span> ${\color{blue}s} \gets k - x{\color{red}e} \bmod q$

<span style="color:red">Verification:</span> Check $g^{\color{blue}s}y_1^{-{\color{red}e}} = {\color{blue}r_1}$ and $h^{\color{blue}s}y_2^{-{\color{red}e}} = {\color{blue}r_2}$

### Proof of arbitrary linear relations in discrete logarithm

same

### Proof of pre-image of a group homomorphism

$G_1$ and $G_2$ be finite abelian groups, and let $\psi: G_1 \to G_2$ be a group homomorphism.

Scenario: Peggy has $x \in G_1$ and wants to prove to Victor that it knows $x$ such that $\psi(x) = y$

!!!note
    Generation!

<span style="color:blue">Commitment:</span> Random $k \in_R \mathcal G_1$; ${\color{blue}r} \gets \psi(k)$

<span style="color:red">Challenge:</span> ${\color{red}e} \in_R \mathbb Z_q$; 

<span style="color:blue">Response:</span> ${\color{blue}s} \gets k + x{\color{red}e} \in \mathcal G_1$

<span style="color:red">Verification:</span> Check ${\color{blue}e}y^{{\color{red}e}} = {\color{blue}\psi(s)}$
