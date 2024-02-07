# Comuter Network

2022 Fall, University of Waterloo

## The computer networks and Internet

### Protocol

!!!definition "Protocol"
    A protocol defines :

    1. the **format** and the **order** of messages exchanged between two or more communicating entities
    2. the **actions** taken on the transmission and/or receipt of a message or other event.

### From edge to center of the Internet

#### End systems / hosts

* client(PC, mobile phones) 
* server

#### Access Network

from home/enterprise access

* Wireless local area networks, WLAN, (WiFi) 

* wide-area wireless access (3G, 4G, 5G)

#### Physical Medium

Two types: Guided media & unguided media

Guided media: the waves are guided along a solid medium

* Twisted Pair Copper Wire
* Coaxial Cable: can be shared
* Fiber Optics

Unguided media: waves propagate in the atmosphere and in outer space

* Terrestrial Radio Channels
* Satellite Radio Channels

#### Core

Packet & Packet switches (routers  / link-layer switches)

Store & forward Transmission: router

!!!note
    Circuit Switch vs Packet switch

    * Packet Switch more efficient
    * Circuit switch have limited concurrency(10 simultaneous user)

### Performance

#### Loss

happen when arriving rate is higher than processing rate

#### Delay

$d_{\text{nodal}} = d_{\text{proc}} + d_{\text{queue}} + d_{\text{prop}}$

* $d_{\text{proc}}$: nodal processing time, < msec

* $d_{\text{queue}}$: waiting for output link for transmission [when La/R -> 1, it will become extremely large]
* $d_{\text{trans}}$: transmission delay(time to put on the wire), $=L/R$
* $d_{\text{prop}}$ : propagation delay(time to go through the wire), $=d/s$

#### Throughput

Decided by the bottleneck

### Protocol Layers

A layered architecture allows us to discuss a well-defined, specific part of a large and complex system

Modularity makes it easier to update system components.

Drawback:

* one layer may duplicate lower-layer functionality
* functionality at one layer may need information that is present only in another layer
    * violates the goal of separation of layers

#### Encapsulation

#### Protocol Stack

application: supporting network applications

transport: process-process data transfer

network: routing datagrams from source to destination

link: data transfer between neighboring network elements

physical: bits "on the wire"

### Attack

DoS(denial-of-service) attack

Three categories:

1. Vulnerability attack
2. Bandwidth flooding
3. Connection flooding

DDoS: distributed DoS

### Summary

Internet: the network of network, ISPs must be connected.

Hierarchy of ISPs: (access ISP,) regional ISP, tier1-ISPs


