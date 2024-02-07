# Stream Cipher 

Key Idea: use pseudorandom keys in "one-time pad"

## PRBG: pseudorandom bit generator

* Deterministic algorithm
    * input a seed
    * output a "much longer" "pseudo random" bit sequences

![image-20221020223152468](CO487%20notes.assets/image-20221020223152468.png)

### Requirements

* Indistinguishability: "enough" random
* unpredictability: different parts of the sequence should be independent (cannot know any information)

### Design constraints

* Efficiency: speed, delay
* Implementation: footprint, memory, power
* Maintaining Synchronization: (between encryption and decryption)

### 1 input(key) vs 2 inputs (key & IV)

|            | 1 Input                                                      | 2 Inputs                                                     |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Images** | ![image-20221020224204478](CO487%20notes.assets/image-20221020224204478.png) | ![image-20221020224211207](CO487%20notes.assets/image-20221020224211207.png) |
| Pros       | same length!                                                 | can reuse the key with different IV<br />(enable frame-based encryption)<br />prevent sync problems |
| Cons       | one-to-one, key and keystream<br />cannot use same key again (chunks of big files?) | need to transmit IV (constant overhead)                      |

## LFSR: Linear Feedback Shift Registers

### Definition

Given a linear recurrence relation: $s_{t+n} = c_{n-1}s_{t+n-1} \oplus \cdots \oplus c_1s_{t+1}\oplus c_0 s_t$, and $c_i$ are binary constants

Given a initialization vector $(s_0, \dots,s_{n-1})$

### Diagram

![image-20221020224904863](CO487%20notes.assets/image-20221020224904863.png)

**Period:** $s(t+p) = s(t)$ for all $t$, minimal $p$

* Period should be much more longer than $|m|$

### Non-linearity

1. Multiple outputs of the sequence can be sampled by a non-linear filter
2. Multiple LFSRs can be advanced separately using an irregular clock
3. Multiple LFSRs can be combined by a non-linear combiner

### A5/1

Used in GSM mobile telephones.

Three LFSR combined.

Each LFSR has a clocking bit(orange), and it updates only if **its own bit is in majority agreement**.

![image-20221020232528693](CO487%20notes.assets/image-20221020232528693.png)

### RC4

## Case study: wireless security

IEEE 802.11 standard introduced **WEP(Wired Equivalent Privacy)**, aiming to **protect link-level data** during wireless transmission between mobile devices and access points

1. Confidentiality: RC4 is used to encrypt.
2. Data Integrity: checksum
3. Access Control: discard all packets not encrypted using WEP.

### Description of WEP protocol

1. secret key $k$ 
2. each packet has a 24 bits IV (random or counter)
3. send packet:
    1. select 24bit IV $v$
    2. compute a 32-bit checksum $S=CRC(m)$
    3. compute $c = (m\|S) \oplus \text{RC4}(v \|k)$ 
    4. send $(v,c)$
4. receive packet:
    1. compute $(m\|S) = c \oplus \text{RC4}(v \|k)$
    2. compute $S'=CRC(m)$; reject if $S' \neq S$

### Attack

Borisov, Goldberg and Wagner's attacks.

Problem1: **IV collision.** $v = v'$ $\implies$ $c \oplus c' = (m\|S) \oplus (m' \|S')$ . Use a birthday paradox attack

Problem2: **Linear Checksum.** $m' = m \oplus \Delta$, then $c'=c\oplus (\Delta \|CRC(\Delta))$

Problem3: **Integrity function is Unkeyed.** ANY $m, (v,c)$ pair is known, them $RC4(v\|k)$ stream can be computed. Then for any $m'$, $c' = RC4(v\|k) \oplus (m' \| CRC(m'))$

Attack on RC4: A passive adversary who can collect about 5,000,000 encrypted packets can very easily recover k (and thus totally break the system). [Fluhrer, Mantin, and Shamir's attacks]

## Summary: Lesson learned