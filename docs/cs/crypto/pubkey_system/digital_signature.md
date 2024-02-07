# Digital Signature

The goals of cryptography:

1. Confidentiality
2. Data integrity
3. Data origin authentication
4. Non-repudiation

## Signature Schemes

### Definition

!!!definition "Definition: Digital signature scheme"
    * $M$ - the plaintext space, $S$ - the signature space
    * $K_{\text{pubkey}}$ - public keys space, $K_{\text{privkey}}$ - private keys space
    * Key-generation function: $\mathcal G: {1^l:l \in \mathbb N} \to K_{\text{pubkey}} \times K_{\text{privkey}}$
    * Signing: $\mathcal S: K_{\text{privkey}} \times M \to S$
    * Verification: $\mathcal V: K_{\text{pubkey}} \times M \times S \to \{\text{true, false}\}$
    
    !!!note
        * private key can make sure "non-repudiation"
        * public key can be used to do "origin authenticity"

### Correctness requirement

For given key pair $(k_{\text{pubkey}}, k_{\text{privkey}})$ produced by $\mathcal G$,

$$
\mathcal V(k_{\text{pubkey}}, m, \mathcal S(k_\text{privkey}, m)) = \textbf{true}
$$

for all $m \in M$

### Security

Base goals: 

* infeasible to deduce the private key from the public key
* infeasible to generate teh valid signatures without the private key

#### Goals of adversary

1. **Total break:** recover the private key, or a method for systematically forging arbitary signatures
2. **Selective forgery:** Given a message or a subset of messages, forge a signature for those messages
3. **Existential forgery:** Forge a signature for some message(possibly out of our control)

#### Attack model(interactions)

1. **Key-only attack:** only know the public key.
2. **Known-message attack:** Some messages and their valid signatures are known.
3. **Chosen-message attack:** The adversary may choose some message and obtain their signatures.

### General Security

Secure: 

+ existentially unforgeable
+ computationally bounded adversary
* chosen-message attack

named **EUF-CMA**!

!!!note
    The message $m$ that we forged cannot be ones that processed by oracle. 

## RSA Signature

### Scheme(Basic)

$pk = (n, e), sk = (n,d)$

Signature generate: To sign a message $m$

1. Compute (with *private key*) $s = m^d \bmod n$
2. Signature on $m$ is $s$.

Verification: To verify a signature $s$ on a message $m$

1. obtain an <u>authentic</u> copy of the *public key* $(n,e)$
2. Accept $(m,s)$ if and only if ${\color{red}s^e \bmod n} = m$

### Security(Basic)

!!!theorem
    A necessary condition for RSA signatures to be secure is that RSA problem must be intractable.

Proof:

Suppose the RSA problem is easy, then we can forge signatures as follows:

1. Let $m$ be any message (but we will take it as ciphertext in the following part)
2. Find $s$ such that $s^e \equiv m \pmod n$ (Decrypt)
3. Then $s$ is a valid signature for $m$

Insecurity!

*Existential forgery* under a **key-only attack**:

1. Select $s \in \mathbb Z_n$ with $\gcd(s,n) = 1$
2. Set $m = s^e \bmod n$
3. Then $s$ is a valid signature for $m$

> Use the result of verification process

*Selective forgery* under a **chosen message attack**:

Given $m \in \mathbb Z_n$ with $\gcd(m,n) = 1$,

1. Compute $m' = 2^e \cdot m \bmod n$
2. Request the signature $s'$ of $m'$ from oracle
3. Compute $s = s'/2 \bmod n$
4. Then $s$ is a valid signature for $m$

> Use the ["malleability" property](algorithms.md#malleable) of the basic RSA function! 


### Improvement: Full Domain hash RSA (RSA-FDH)

> Basic idea: use hash function to hide information of $m$

Hash function: $H: \{0,1\} \to \mathbb Z_n$

Key generation: same

Signing: $s = H(m)^d \bmod n$

Verifying:

1. Obtain an authentic copy of public key $(n,e)$
2. compute $s^e \bmod n$
3. Accept $(m,s)$ iff $s^e \bmod n = H(m)$

!!!theorem "Theorem: On RSA-FDH security"
    RSA problem intractable and $H$ is a random function $\implies$ RSA-FDH is a secure signature function

Necessary properties of RSA-FDH:

1. Preimage resistance: can existency forge message by get preimage
2. 2nd preimage resistance: can existency forge message by a known signature and the 2nd preimage
3. Collision resistance: can use the collision, send one message into oracle, and the other one is forgable.

## Diffie-Hellman based signature

### Digital Signature Algorithm (DSA)

Based on Diffie-Hellman and Elgamal.

**Setup:**

* A prime $p$
* A prime $q$ dividing $p-1$
* An element $g \in \mathbb Z_p^*$ of order $q$
* A hash function $H: \{0,1\}^* \to \mathbb Z_q$

**Key generation:**

* Choose $\alpha \in_R \mathbb Z_q^*$ at random.
* Return $(k_{\text{pubkey}}, k_{\text{privkey}}) = (g^\alpha \bmod p, \alpha)$

**Signing:** To sign a message $m \in \{0,1\}^*$

* Choose $k \in_R \mathbb Z_q^*$ at random
* Calculate $r = (g^k \bmod p) \bmod q$, and $s = \frac{H(m) + \alpha r}{k} \bmod q$
    * Understanding: $k$ is the "other" part of private key, and $r$ is corresponding public key
* Repeat if $k,r$ or $s$ are zero. Otherwise, return signature $\sigma = (r,s)$

**Verification:** Given $k_{\text{pubkey}} = g^\alpha$, $m$ and $\sigma = (r,s)$

* check $0 < r < q$ and $0 < s < q$ and $(g^{\frac{H(m)}{s}}(g^{\alpha})^{ \frac{r}{s}} \bmod p) \bmod q = r$

### Elliptic Curve Digital Signature Algorithm (ECDSA)

**Setup:**

* A prime $p$
* A prime $q$
* An elliptic curve $E$ over $\mathbb Z_p$ of cardinality $|E| = q$
* An <span style="color:red">generator</span> $P \in E/\mathbb Z_p^*$ of order $q$
* A hash function $H: \{0,1\}^* \to \mathbb Z_q$

**Key generation:**

* Choose $\alpha \in_R \mathbb Z_q^*$ at random.
* Return $(k_{\text{pubkey}}, k_{\text{privkey}}) = ({\color{red}{\alpha P}}, \alpha)$

**Signing:** To sign a message $m \in \{0,1\}^*$

* Choose $k \in_R \mathbb Z_q^*$ at random
* Calculate $r = {\color{red}{x_{kP}}}$, and $s = \frac{H(m) + \alpha r}{k} \bmod q$
* Repeat if $k,r$ or $s$ are zero. Otherwise, return signature $\sigma = (r,s)$

**Verification:** Given $k_{\text{pubkey}} = {\color{red}\alpha P}$, $m$ and $\sigma = (r,s)$

* check $0 < r < q$ and $0 < s < q$ and $\frac{H(m)}{s}{\color{red}P} +  \frac{r}{s} {\color{red}\alpha P}$ is congruent to $r$ modulo $q$
