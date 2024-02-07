# Classical Ciphers

## Simple Substitution Cipher

!!!definition "Definition: Simple Substitution Cipher"
    $M,C$ == all English messages

    $K$ = all permutation of English characters

    $E_k$ apply that permutation $k$ , $D_k$ apply the inversed permutation $k^{-1}$

### Security

**Totally insecure.**

Attack with "Frequency analysis".

## Polyalphabetic Ciphers & Vigenere Cipher

Basic Idea: use several different alphabet permutations.

!!!definition "Definition: Polyalphabetic Cipher"
    $K$ = sequence of letters of length $l$ with <u>no repeated</u> letter.

    $E_k(m)$ : shift $i$-th letter of $m$ by $(i \bmod l)$-th letter of $k$

    $D_k(m)$: reverse shift $i$-th letter of $m$ by $(i \bmod l)$-th letter of $k$

### Security

**Totally insecure.**

Attack with **ciphertext only** attack:

1. guess length of the key, $l$
2. Check whether $l$ is right:
    1. Divide characters into $l$ group $G_0, \cdots, G_{l-1}$, $i$-th ciphertext --> $G_{i \bmod l}$
    2. Examine the frequency of letters of $G_0, ..., G_{l-1}$ , if they all look like "basic English", then guess is right.
3. Known $l$, then:
    1. every group $G_i$ was performed a cyclic shift.
    2. Use frequency to guess the "shift" gap

## One-time pad

Key is a random string. (same length of the plaintext)

Encryption process: Add and mod by 26. [binary message, mod 2 (xor) ]

**Security:**

* The key should never be reused!
* Perfect secrecy: totally secure against ciphertext-only(chosen-plaintext) attack, even with infinite computation resources.
    * However, $|K| \geq 2^m$ to be secure ($m$ is the length of plaintext)

!!!warning
    Not practical.

## Transposition Cipher

!!!definition "Definition: Transposition Cipher"
    length $l$, [columnar transposition cipher].

    $K$ = all permutation of $\{1, \cdots, l\}$

    $E_k$: in a length-$l$ group, rearrange position by permutation $k$

    $D_k$ : ... rearrange position by inversed permutation $k^{-1}$ 

**Security:**

1. guess the key-length
2. use "anagramming"(continuous letters frequency, usually two) to gradually improve the diagram, until English words appear.