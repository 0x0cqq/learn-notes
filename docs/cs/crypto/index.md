# Applied Cryptography

Fall 2022, University of Waterloo.

## Definition

Cryptography is about **securing communications** in the presence of **malicious adversaries**.

**Multi-disciplinary:**

* mathematics(design)
* computer science(protocols, attack)
* Engineering(implementation)

## Basic Goals

* **Confidentiality:** keep data secret
* **Data Integrity:** keep data not being altered (by unauthorized means)
* **Data Origin Authentication:** collaborating the source of the data
* **Non-repudiation:** Prevent from denying previous commitments

## States of Information (that can be attacked)

* Data at rest: disk
* Data at transit: internet, wireless 
* Data at processing: CPUs

There are different techniques to attack at all stages.

## Is TLS really safe?

Possible invisible security vulnerabilities:

1. weak crypto methods: (AES, HMAC, RSA)
2. Quantum attacks
3. weak random numbers
4. Fraudulent certificates
5. Software bugs
6. Phishing attacks(fake sites)
7. Only protect "transit" process (how and where they store those data?)
8. NSA(national Security Agency)