## Function of Network Layer

### Forwarding  

--> **Data plane**

!!!note ""
    Like getting through a interchange 

* *Local*, per-router function
* determine how datagram arriving on router input port is forwarded to output port
* take place fast, implemented in hardware

### Routing 

--> **Control plane**

!!!note ""
    Like the process of planning trip from source to destination

* global, *network-wide* logic
* determine how datagram is routed among routers along end-to-end path from source host to destination host
* take place slow(sec), and implemented in software

Forwarding Table