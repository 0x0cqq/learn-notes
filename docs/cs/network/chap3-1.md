
# Network layer: Data plane

## Service Model

Defines the characteristics of end-to-end delivery of packets

* Individual packet:
    * Guaranteed delivery
    * Guaranteed delivery with bounded delay
    * security
* Datagram flow:
    * in-order datagram delivery
    * guaranteed minimum bandwidth flow
    * restrictions on changes in inter-packet spacing

**Best effort service** model with *Internet*: No guarantee on *anything.*

Pro:

* simplicity --> widely deployed/adopted
* with sufficient bandwidth, can provide real-time/band-comsuming services

Success!

## Router

### Generic architecture

![image-20221123202055824](cs456%20notes.assets/image-20221123202055824.png)

### Input port functions

![image-20221123202520898](cs456%20notes.assets/image-20221123202520898.png)

## Destination-based Forwarding

* based only on destination IP address(traditional)
* Multiple Matching: *longest prefix matching*
    * look up devices: TCAMs(Ternary content addressable memories)
        * address --> content in 1 clock cycle

### Switching

| Memory                                                       | Bus                                                          | Interconnection Network                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="cs456%20notes.assets/image-20221123204007019.png" alt="image-20221123204007019" style="zoom:80%;" /> | ![image-20221123204016207](cs456%20notes.assets/image-20221123204016207.png) | <img src="cs456%20notes.assets/image-20221123204022170.png" alt="image-20221123204022170" style="zoom: 50%;" /> |

Memory: Can utilize at most half of the memory bandwidth

Bus: all output port can receive the packet; only one packet can transmitted on the bus

![image-20221209132018652](cs456%20notes.assets/image-20221209132018652.png)

Multistage switch: 

* build big switcher from small ones
* enable parallelism by multiple switching planes

### Queuing

Input port: switch fabric slower than input ports combined --> queuing delay & loss of packet

Head-of-the-line(HOL) blocking: queued datagram at front of the queue prevents others in queue from moving forward (even output port is free at that time)

Output port queuing: when arriving speed is faster than link transmission rate, need a *scheduling discipline* chooses among queued datagrams for transmission(may have priority)

### Buffer

$N$ independent TCP flows, buffering equals to $B = \frac{\text{RTT}\cdot C}{\sqrt N}$

### Packet Scheduling

* Drop
* Marking (Congestion signal)

Packet scheduling: which queued packets are transmitted to output port

* FCFS: First-come-first-served
* Priority: FCFS with multiple priority level
* Round robin: queuing by class
* weighted fair queuing: Generalized Round robin



## IP: the Internet Protocol

### Datagram Format

![image-20221123220348454](cs456%20notes.assets/image-20221123220348454.png)

### IP address

32-bit identifier associated with each host or router's **interfaces**

> "Interfaces": the boundary between the host and the physical link
>
> * router can have multiple interfaces
> * host typically have one or two interfaces
>     * Wireless
>     * wired ethernet

Dotted-decimal notation: `233.233.233.233`

### Subnet

the part of internet that can physically reach each other *without passing a router*

Detach interface from hosts/routers, create isolated subnet

### CIDR: Classless Interdomain Routing

or subnet mask

a.b.c.d/x : *leftmost* $x$ bits are network part(network prefix) of IP address

broadcast IP: 255.255.255.255, send to all host in subnet

> Classful addressing: subnet can only have 8-, 16- or 24- bit subnet address, known as class A, B and C network 

## DHCP(Dynamic Host Configuration Protocol)

Goal:

* zero configuration/plug-and-play
* renew its lease on address in use
* allow reuse of addresses
* support for mobile users

client-server protocol

DHCP server or DHCP relay agent needed(router)

UDP port 67 & 68

Process (suppose that server is in subnet):

1. host broadcasts: **DHCP discover msg**[optional]
    1. destination: 255.255.255.255
    2. this host: 0.0.0.0

2. DHCP server responds with **DHCP offer msg**[optional]
    1. broadcast
    2. use transaction ID to distinguish different client
    3. have an IP address valid(lease) time

3. host request IP address: **DHCP request msg**
4. DHCP server sends address: **DHCP ack msg**

Other function of DHCP:

1. address of first-hop router for client
2. name & IP address of DNS server
3. network mask

## ICANN & IP allocation

## NAT

all devices in local network share just **one** IPv4 address to outside

> leave local network with **same source address**, different **port number**

10/8, 172.16/12, 192.168/16 prefix are private networks

advantages:

* just need one public IP address
* can change local address/ISP without noticing other parts
* privacy

implementation: NAT router, maintain a NAT translation table

* assign port number for outgoing datagram

disadvantages: 

* violate end-to-end arguments
* need **NAT traversal** to connect a server behind NAT router

## IPv6

128-bit address

### Datagram Format

![image-20221123225602007](cs456%20notes.assets/image-20221123225602007.png)

* no checksum(end-to-end)
* no fragmentation/reassembly
* no options

Tunneling: IPv6 datagram carried as payload in IPv4 datagram

## Generalized Forwarding & SDN

Generalized Forwarding: based on any set of header field values

abstraction: match plus action(match bits in arriving packet, take action)

### Flow table

flow: header field values(in link-, network-, transport-layer fields)

![image-20221209150148072](cs456%20notes.assets/image-20221209150148072.png)

generalized forwarding: simple packet-handling rules

* match: pattern values in packet *header* fields
* actions: for matched packet
    * drop
    * forward
    * modify [change counter/address]
    * send to controller
* priority
* counters: #bytes, #packets and #time

Can be used as: router, firewall, switch, NAT

## Middleboxes

“any intermediary box performing functions apart from normal, standard functions of an IP router on the data path between a source host and destination host”

Three types of services performed by middleboxes:

* NAT Translation
* Security Services
* Performance Enhancement