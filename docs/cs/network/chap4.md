# Link Layer

## Introduction

### Terminology

nodes: hosts and routers

links: communication channels that connect adjacent nodes

frame: layer-2 packet, encapsulates datagram(layer-3 packet)

### Services

* framing:
    * encapsulate datagram into frame(adding header and trailer)
* link access:
    * MAC (medium access protocol) in frame identify src/dst
    * useful when multiple access are in the same medium (broadcast)
* reliable delivery:
    * used for high error links, e.g. wireless links
* error detection and correction
    * include error-detection bits in frame
* flow control
* half-duplex/full-duplex

### Implementation

in network interface controller(NIC), mainly in hardware

## Error detection & correction

Can exist undetected errors

### Parity checking

Single bit parity: xor all bits into 1 check bit

Two-dimensional bit parity: row and column parity, can correct at most single-bit error

![image-20221205181044883](cs456%20notes.assets/image-20221205181044883.png)

### Internet Checksum

Simple approach: 1's complement sum among all 16 bits integer

### CRC(Cyclic Redundancy Check)

polynomial code, view as polynomial with 0 & 1 (xor) coeffient 

Condition:

* $d$ bits data $D$

* $r+1$ bits negotiated generator(pattern) $G$ (leftmost bit should be 1)

Goal:

* find $r$ bits of CRC code
    * such that $D\|R$ can be exactly divisible by $G$ mod 2
* $R = \text{reminder}\frac{D \times 2^r}{G}$

Can detect all burst(consecutive) errors less than $r+1$ bits

> a burst of length greater than $r + 1$ bits is detected  with probability $1 - 0.5r$

Used:

* Ethernet
* 802.11 WiFi

## MAP(Multiple access protocols)

Types of link: 

* point-to-point link: single sender, single receiver
* broadcast link: multiple sender/receiver (each other nodes receive a copy)

protocols:

* distributed algorithm that regulate how nodes transmitted into the shared broadcast channel

Note: communication about the channel sharing must use channel itself!

Desirable characteristics:

* equally share
* fully utilize the bandwidth
* decentralized 
* simple

### Channel Partitioning Protocols

TDMA: time division multiple access

FDMA: frequency division multiple access

### Random access protocols

Pure ALOHA

* transmit immediately when frame arrive
* efficiency: 18% 1/(2e)

Slotted ALOHA

* node start to transmit only slot beginning
* node's time need to be synchronized
* retransmit after collision has a probability $p$
* efficiency: 37%

CSMA(Carrier sense multiple access) / CD(Collision detection)

* Carrier Sensing: Listen before speaking(transmitting)
* Collision detection: when detect collision, stop talking

| Without Collision Detection                                  | With Collision Detection                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20221205193257651](cs456%20notes.assets/image-20221205193257651.png) | ![image-20221205193248171](cs456%20notes.assets/image-20221205193248171.png) |

Ethernet CSMA/CD algorithm with **binary (exponential) backoff algorithm**

* listen then transmit
* if collision detected: (binary exponential backoff algorithm)
    * after $m$-th collision, chooses randomly in $K \in \{0,1,2,\dots,2^m-1\}$ , then wait $K \cdot 512$ bits times, then try to retransmit

### Taking turn MAC protocols

Polling protocol: the master node poll & invites other nodes to transmit in turn

Token Passing protocol: control token passed from one node to the next sequentially

> Drawbacks: delay, lack of robustness(master node, one node)

## LANs(Local Area Networks)

### Link Layer Addressing: MAC

48-bit, e.g. 1A:2F:BB:76:09:AD

function: to get frame from one interface to another physically-connected host

IEEE manage

flat structure (won't change anywhere)

Broadcast address: `FF:FF:FF:FF:FF:FF`

### ARP(Address Resolution Protocol)

translation between ip and mac address

**ARP Table:** each ip node(host/router) on LAN has table:  `<IP address; MAC address; TTL>`

* IP/MAC address mappings for some LAN nodes, and its TTL:

Steps (example, A wants to send datagram to B):

1. broadcasts ARP query, containing B's IP addr (FF:FF:FF:FF:FF:FF)
2. B replies to A with ARP response, giving its MAC address
3. A receives B's reply, adds B entry into its local ARP table

> ARP is protocol that straddles the boundary between the link and network layers

### Ethernet

'dominant' wired LAN technology

topology:

* bus
* switched: a link-layer 2 switch in center

frame structure:

![](cs456%20notes.assets/image-20221206003040090.png)

![image-20221206003141435](cs456%20notes.assets/image-20221206003141435.png)

Characteristics:

* connectionless
* unreliable
* MAC protocol: unslotted CSMA/CD with binary backoff

### Switch

Link-layer devices: takes an active role

Function:

* examine incoming frame's MAC address, *selectively* forward frame to one-or-more outgoing links
* CSMA/CD to access segment

Characteristic:

* Transparent: hosts unaware of  presence of switches
* plug-and-play, self-learning (do not need configured)

Multiple simultaneous transmission (without collision)

Switching forwarding table:`(MAC address of host, interface to reach host, time stamp)`

Self learning techniques: when packet received, learned the location of **sender**! (flood if it doesn't know)

### VLAN

switches supporting VLAN capabilities can define multiple virtual LANs over single devices

Ported-based VLAN

VLAN spanning

## Data Center Networking

challenges:

* great scale in applications/services/resources
* reliability
* managing/load balancing

Structure:

 ![image-20221206011025238](cs456%20notes.assets/image-20221206011025238.png)

Multipath

Application-layer routing: load balancer