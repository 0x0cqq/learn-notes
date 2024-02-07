# Transport Layer

## Multiplexing & Demultiplexing

**Multiplexing** at *sender*: handle data from multiple sockets, add transport header

**Demultiplexing** at *receiver*: use "header" info to deliver received segments to correct socket

Demultiplexing method:

* for UDP: use destination ports in segments
* for TCP: user (source IP address, source port, dest. IP address, dest port number)

## UDP - Connectionless

Application-layer: streaming multimedia apps, DNS, SNMP, HTTP/3

Segment Format:

![image-20221028121016290](cs456%20notes.assets/image-20221028121016290.png)

Checksum: 16 bits integer summation, wrap overflow bits to back

| Cons                                            | Pros                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| May lost segments<br />only best effort service | No setup/handshaking needed(no RTT incurred)<br />can function when network service is compromised<br />helps with reliability(checksum)<br />little header overhead |

## Road to Reliable Data Transfer

### FSM representation of protocols

![image-20221028122130889](cs456%20notes.assets/image-20221028122130889.png)

### rdt1.0 - reliable transfer over reliable channel

![image-20221028122220310](cs456%20notes.assets/image-20221028122220310.png)

### rdt2.0 - channel with bit errors

Stop & wait.

Add "ACK" & "NAK" mechanism.

| ![image-20221028122356998](cs456%20notes.assets/image-20221028122356998.png) | <img src="cs456%20notes.assets/image-20221028122527327.png" alt="image-20221028122527327" style="zoom: 67%;" /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |

### rdt2.1 - handling ACK/NAK corruption & duplicate

Stop & wait.

add sequence no.  (only 1-bit is enough because of stop & wait strategies)

![image-20221028123053366](cs456%20notes.assets/image-20221028123053366.png)

![image-20221028123157984](cs456%20notes.assets/image-20221028123157984.png)

### rdt2.2 - NAK free

receiver sends ACK for last packet received OK (explicitly include a sequence no. #)

### rdt3.0 - channels with errors and *loss*

add a reasonable timeout, retransmit package if timeout

pipelining:

### Go-Back-N

size-n window

sender:

* most N packets on the fly

* cumulative ACK
* if timeout, resend whole window

receiver:

* ACK-only: always send ACK for currently received "highest" in-order seq #

### Selective Repeat

sender & receiver has separate window.

Sender:

* Most N package on the fly

* only retransmit unACKed package
    * timer is maintain for each packet
* forward send-window only when receive the smallest unACKed packet

Receiver:

* receive packet in the receiver-window: send ACK(n)
    * Buffer!
* move the window if receive the smallest unreceived packet

Problems: ACK message may out of order, so the asynchronous between sender/receiver's window could lead to collision in seq #

Solution: seq  should double the  windows size(or even larger than that) 

## TCP - Reliable

* Point-to-Point: one sender and one receiver
* reliable, in-order byte stream: no "boundaries"
* full duplex data: bi-directional data flow in same connection
* cumulative ACKs
* pipelining
* connection-oriented
* flow controlled: sender will not overwhelm receiver

### Segment Structure

![image-20221028135440203](cs456%20notes.assets/image-20221028135440203.png)

### Sequence numbers and ACK schemes

Sequence numbers: byte stream "number" of **first bytes** in the segment's data

Acknowledgements: seq  of next byte expected from other side, *cumulative*

### RTT/Timeout Guessing

Sampling RTT.

`EstimatedRTT = (1-a) * EstimatedRTT + a * SampleRTT`,  typical `a=0.125`

EWMA(Exponential weighted moving average),

DevRTT: "error" of Estimated RTT (deviation)

`DevRTT=(1-b) * DevRTT + b * |SampleRTT - EstimateRTT|` , typical `b=0.25`

then: `TiemoutInterval = EstimatedRTT + 4 * DevRTT`

### Fast Retransmit

if sender receives 3 additional ACKs for same data,

resend unACKed segment (with smallest seq #) (don't wait for timeout).

### Flow Control

Definition: Receiver controls sender, so sender won't overflow receiver's buffer

Receiver will tell the sender how many bytes of buffer is free, and sender will control the window size (control in-flight data/unACKed data).

### Connection Management(Handshake)

* Agree to **establish connection**
* Agree on connection parameters(e.g. starting seq. #s)

Problems with two way handshake:

* retransmit `req_conn(x)` will cause "half open connection", without client (open arrive again previous terminate)
* retransmit of `req_conn(x)` and `data` simultaneously can cause dup data accepted

TCP 3-Way handshake mechanism:

![image-20221110012252580](cs456%20notes.assets/image-20221110012252580.png)

Closing a TCP connection

* send TCP segment with FIN bit = 1
* respond FIN segment with ACK
* wait for several seconds for out of order packets

### Congestion Control Principles

* Not receiver side, but **network's** ability to handle data
* Manifestations
    * Long delay
    * Packet loss
* Cost of congestion:
    * more work(retransmission) for given receiver throughput
    * unneeded retransmission: link carries multiple copies of a packet(due to delay)
        * decreasing maximum achievable throughput, waste some capacity
    * upstream transmission capacity/buffering wasted got packets lost downstream

End-to-end congestion control:

* No explicit feedback from network
* congestion inferred from observed loss delay

Network-assisted congestion control:

* router provide *direct* feedback to sending/receiving hosts

### TCP congestion control

TCP rate = (cwnd)/RTT bytes/sec

(LastByteSent - LastByteAcked <= cwnd)

AIMD = Additive Increase & Multiplicative Decrease

* *Increase* sending rate by 1 maximum segment size every RTT until loss
* *Multiplicative* cut sending rate in half at each lossus event
    * Cut in half on loss detected by triple duplicate ACK(TCP reno)
    * Cut to 1 MSS(maximum segment size) when loss detected by timeout(TCP Tahoe)

Slow start:

* When connection begins, increate rate exponentially until first loss event
* exponential increase switch to linear: when reach `ssthreash`
    * on lose event, `ssthreash` is set to 1/2 of `cwnd` just before loss event

CUBIC:

* use a "cubic" like function to faster reach W_max, and stay for a little longer time

Delay-based TCP congestion

* RTT_min: minimum observed RTT
* close to RTT_min: increase `cwnd` linearly
* much higher than RTT_min: decrease `cwnd` linearly

Explicit congestion notification(ECN)

*  two bits in IP header marked by network router to indicate congestion
    * IP header ECN bit marking and TCP header C,E bit marking

### TCP fairness goal

### Other issue

QUIC: Quick UDP Internet Connections

reliability, congestion control, authentication, crypto state