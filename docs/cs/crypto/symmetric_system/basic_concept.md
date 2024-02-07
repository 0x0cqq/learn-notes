# Basic concepts

## Symmetric-key encryption scheme(SKES)


!!!definition "Definition: Symmetric-key encryption scheme(SKES)"
    Consist of:

    * Spaces:
        * $M$, plaintext space
        * $C$, ciphertext space
        * $K$, key space.
    * Functions:
        * Encryption functions: $E_k: M \to C, \forall k \in K$
        * Decryption functions: $D_k: C \to M, \forall k \in K$
        * Satisfy that: $D_k(E_k(m)) = m, \forall m \in M, k \in K$ 

How to ensure confidentiality:

1. Alice & Bob agree on a secret key $k$ through a "secure channel"
2. Alice compute $c = E_k(m)$ and send $c$ to Bob through a "unsecure  channel".
3. Bob receive $c$ and compute $m = D_k(c)$ to get plaintext $m$.

## Security & Attack method

Basic assumption: adversary knows everything, except the key $k$

### Perspective of Adversary's Goal

If the adversary can get:

|                   | key   | plaintext | partial information |
| ----------------- | ----- | --------- | ------------------- |
| Totally Insecure  | maybe | yes       | --                  |
| Semantic insecure | no    | no        | yes                 |

### Perspective of Adversary's Interation

* Passive attack
    * ciphertext-only
    * known-plaintext: know **some** of the plaintext and corresponding ciphertext
* Active attack:
    * chosen-plaintext: choose some plaintext and get corresponding ciphertext
    * chosen-ciphertext: choose some **ciphertext** and get corresponding **plaintext**.
        * Notice: stronger than chosen-plaintext.
* Other attack:
    * Side channel attack
    * Physical attacks

### Perspective of Adversary's power

* **Information-theoretic** security: Eve has infinite computational resources
* **Complexity-theoretic** security: Eve has a polynomial-time Turing machine. (super polynomial)
* **Computational** security: Eve is bounded by real world computers.

!!!note ""
    $2^{40}$ -- easy, $2^{64}$ -- feasible, $2^{128}$ nearly impossible.

### Definition of Secure

By three perspectives:

* **Interaction**: Chosen-plaintext Attack
* **Power**: computationally bounded
* **Goal**: Semantically secure(no any partial information exclude length)

**Break insecure ones:**

* ciphertext c
* can query plaintext, get corresponding ciphertext
* do feasible computation
* get the message $m$ or any partial information

**Security Level $l$:** 
* $2^l$ operations to attack on the scheme