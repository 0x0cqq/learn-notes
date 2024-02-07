# Mode of operations (on block cipher)

How to encrypt arbitrary length of message with a block cipher?

## Padding

1. Add a single "1"
2. then add "0"s to complete the final block

## ECB(Electronic CookBook) mode 

Independently.

![image-20221021010409605](CO487%20notes.assets/image-20221021010409605.png)



TOTALLY INSECURE: like a great substitution cipher

## CBC(Cipher Block Chaining) mode

![image-20221021010547522](CO487%20notes.assets/image-20221021010547522.png)

![image-20221021010850901](CO487%20notes.assets/image-20221021010850901.png)

Generally secure.

## CFB(Cipher Feedback) Mode

![image-20221021010736352](CO487%20notes.assets/image-20221021010736352.png)

## OFB(Output Feedback) Mode

![](mode.assets/2022-12-20-00-41-12.png)

## CTR(counter) Mode

![image-20221021011207465](CO487%20notes.assets/image-20221021011207465.png)