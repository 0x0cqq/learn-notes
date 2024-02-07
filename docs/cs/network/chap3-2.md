# Network layer: Control plane

**How to initiate/manage forwarding table?**

Traditional / per-router: individual routing algorithm components in each and every router interact 

SDN(Software Defined Networking) / *logically* centralized control: Remote controller computes, installs forwarding tables in routers

* control agent

## Routing algorithm/protocol

### Classification

![image-20221206011312784](cs456%20notes.assets/image-20221206011312784.png)

Third way: load-sensitive / load-insensittive

### Dijkstra / link state

(for node u)

![image-20221206011403488](cs456%20notes.assets/image-20221206011403488.png)

Algorithm complexity: $O(n^2)$ or $O(n \log n)$

Message complexity: $O(n^2)$ if a broadcast is only $O(n)$

### Bellman-Ford / Distance Vector

Bellman-Ford Equation: $d_x(y) = \min_v\{c(x,v) + d_v(y)\}$

![image-20221206011616206](cs456%20notes.assets/image-20221206011616206.png)

can have problem: after link cost change, bad message spread slow(maybe lots of iteration)

> Solution: adding Poisoned Reverse
>
> * Tell small little white lie to avoid attempting looping in the network

converge slowly

errors can diffuse in whole network

## Intra-ISP routing: OSPF

* scale

* administrative autonomy

==> Autonomous systems (ASs)

Open: indicates that the routing protocol specification is publicly available

link-state protocol

Advances:

1. security
2. multiple same-cost paths
3. integrated support for unicast and multicast routing
4. support for hierarchy within a single AS.

## Routing among ISPs: BGP

glues thousands of  ISPs in the Internet together

![image-20221209161852026](cs456%20notes.assets/image-20221209161852026.png)

Basics

![image-20221209184241447](cs456%20notes.assets/image-20221209184241447.png)

![image-20221209184516285](cs456%20notes.assets/image-20221209184516285.png)

### Advertisement

![image-20221209184416098](cs456%20notes.assets/image-20221209184416098.png)

### Messages

![image-20221209184602337](cs456%20notes.assets/image-20221209184602337.png)

### Hot-potato routing

choose local gateway that has least intra-domain cost

### Route Selection

Router may learn about more than one route to destination AS, selects route based on:

1. local preference  value attribute: policy decision
2. shortest AS-PATH
3. closest NEXT-HOP router: hot potato routing
4. additional criteria

## SDN control plane

Characteristics:

* Flow-based forwarding
* Separation of data plane and control plane
* Network control functions: external to data-plane switches
* Programmable

Logically centralized control plane

* easy management
    * avoid router misconfiguations
    * greater flexibility of traffic flows
* centralize programming is easier
* open implementation of control plane

Solve problems:

* prefer route
* load balancing

![image-20221124001811346](cs456%20notes.assets/image-20221124001811346.png)

![image-20221124001952684](cs456%20notes.assets/image-20221124001952684.png)

![image-20221209163223957](cs456%20notes.assets/image-20221209163223957.png)

### Data-plane switches

API for table-based switch control (e.g. Openflow)

physical machine

### SDN controller(network OS)

maintain network state information

interacts with 

* **network control applications** "above" via northbound API

* **network switches** "below" via southbound API

implemented as distributed system for 

* performance
* scalability
* fault-tolerance
* robustness

### Network-control apps

"brains" of control: implement control functions using lower level services 

### Problems

harden the control plane 

internet scaling can be hard

5G cellular networks

## OpenFlow

### Protocol

operates between controller and switch, over TCP, default port 6653 

three types of messages

* controller-to-switch
    * configuration
    * read-state: query [feature]
    * modify-state: in flow table
    * send-packet

* switch-to-controller (asynchronous)
    * packet-in
    * flow-removed: flow table entry deleted
    * port-status: change in port status

## ICMP(Internet Control Message Protocol) 

Communicate network-level information

network-layer "above" IP

![image-20221209164034124](cs456%20notes.assets/image-20221209164034124.png)

used by trace route

## Network management

> Network management includes:
>
> * deployment
>
> * integration
>
> * coordination 
>
> of 
>
> * hardware
> * software
> * human elements 
>
> to 
>
> * monitor
> * test
> * poll
> * configure
> * analyze
> * evaluate
> * control 
>
> the network and element resources to meet:
>
> * real-time
> * operational performance
> * Quality of Service requirements 
>
> at a reasonable cost.

### Components

![image-20221209172500964](cs456%20notes.assets/image-20221209172500964.png)

CLI: 

SNMP/MIB: operator queries/sets devices data(MIB) using SNMP

NETCONF/YANG: 

* more abstract, network-wide, holistic

* emphasis on multi-device configuration management
* YANG: Data modeling language
* NETCONF: communicate Yang-compatible actions/data to/from/among remote devices

### SNMP

Application Layer protocol

convey network-management **control** and **information** messages

* request-response mode: get data/return data
* trap mode: inform manager of exceptional event

Message format:

![image-20221209175426798](cs456%20notes.assets/image-20221209175426798.png)

MIB: managed device's operational (and config) data

* Language: SMI(Structure of Management Information)

![image-20221209175702198](cs456%20notes.assets/image-20221209175702198.png)

### NETCONF

actively manage/**configure** devices network-wide, operates between managing *server* and managed network *devices*

* Actions: retrieve, set, modify, activate configurations
* Atomic-commit actions over multiple devices
* query operational data and statisitics
* subscribe to notifications from devices

RPC paradigm

* messages are encoded in XML
* tunnels are secure, reliable transport (e.g. TLS) protocol

Operations:

![image-20221209181110713](cs456%20notes.assets/image-20221209181110713.png)

### Yang

data modeling language used to specify structure syntax, semantics of NETCONF network management data