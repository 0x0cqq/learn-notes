# Application Layer

## Principles of Network Applications

Writing programs that:

* run on different end systems
* communicate with each other over network

No need to write software that runs on network-core devices.(routers, link-layer switches)

* Actually, those network-core devices cannot run user applications

### Network applications Architecture

On how the application is structured over the various end systems.

#### Client-server Paradigm

Server: always on host, permanent IP address, and located in data centers

Client: contact with servers, dynamic IP address

#### Peer2Peer(P2P) Architecture

minimal reliance on dedicated servers.

Self scalability: new peers bring new service capacity, as well as new service demands

### Processes Communicating Interfaces: Socket

analogue to "door"

assume that transport infrastructure on the other side of the "door"

Two sockets: one on sender side, and one on receiver side

### Addressing System

IP address to identify the "host"(32 bits)

port number to identify the "application"

### Transport-layer services expected/Required

* reliable data transfer
* throughput
* timing
* security

![image-20221026160016185](cs456%20notes.assets/image-20221026160016185.png)

(TCP services, UDP services)

(TLS services)

## Application-Layer Protocol

Defines:

1. **type of messages exchanged:** e.g. request & response
2. **message syntax:** what fields are in message
3. **message semantic:** meaning of information in fields
4. **rules:** for when & how processes send

![image-20221026160307191](cs456%20notes.assets/image-20221026160307191.png)

## Web and HTTP

### Web Page

Object: file;

Web page: several objects, (may on different server)

* base HTML file
* several referenced objects, addressed by a url
    * student.cs.uwaterloo.ca[host name]/~cs251/F22/a1.pdf[path name]

### HTTP overview

define how Web clients **request** web pages and how servers transfer Web pages(**response**) to clients

* Web client: web browsers

* Web server: house server objects.

Stateless protocol: maintain no information about the clients

### Transport Layer

TCP, port (usually) 80

| Non-persistent                                               | Persistent                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="cs456%20notes.assets/image-20221026202711915.png" alt="image-20221026202711915" style="zoom: 50%;" /><img src="cs456%20notes.assets/image-20221026202806150.png" alt="image-20221026202806150" style="zoom: 50%;" /> | HTTP/1.1<br />server leaves the connection open after sending response<br />subsequent HTTP messages between same client/server sent over open connection<br />client sends requests as soon as it encounters a referenced object<br />close connection when not use for certain time. |
| ![image-20221026221638411](cs456%20notes.assets/image-20221026221638411.png)<br />2RTT + file transmission time (per object) | one RTT for all referenced objects                           |
| overhead for each TCP connection                             | occupancy issue                                              |

### HTTP Message Format

Request:

![image-20221026222349084](cs456%20notes.assets/image-20221026222349084.png)

Methods:

* POST method: input/form
* HEAD method: response will only include a header (of GET method)
* GET method: get objects
    * can send parameters/data in url: `?asdasd=1131&asdasd=13&`
* PUT method: uploads new file(object) to server

Response:

![image-20221026224123484](cs456%20notes.assets/image-20221026224123484.png)

Status code:

* 200 OK
* 301 Moved permanently
* 400 Bad Request
* 404 Not Found
* 595 HTTP Version Not Supported

### States in HTTP: cookies

System:

1. cookie header line of HTTP **response** message
2. cookie header line in **next HTTP request** message
3. cookie file kept on **host/client**, managed by browser
4. **back-end database** at Web site

Application:

* authorization
* shopping cart
* recommendations
* user session state

### Web Caching

**Proxy server:** keep copies of recently requested objects in its storage

**Why**: reduce response time, reduce traffic of access link

Purchased and installed by ISP

!!!note 
    Calculation: the performance of a "cache"

    reduce the "access link" delay (extremely high if utilization is high)

Conditional GET:

`If-Modified-Since:` header line

if cache is up-to-date: return `HTTP/1.0 304 Not Modified`

### HTTP/2

Goal:  reduce latency by enabling multiplexing over a single TCP connection

Key points:

* Not modified: methods, status codes, most header fields
* Modified parts:
    * transmission order can base on client-specified object priority (not necessarily FCFS)
    * push unrequested objects to the client(not only send when request)
    * divide objects into frames, schedule frames to mitigate HOL(Head of line. a big files in the start of data) blocking [instead of multi-tcp connection]

HTTP/3:

* add security
* per object error- and congestion control over UDP

## Email, SMTP, IMAP

Three major components: user agents, mail servers, Simple Mail Transfer Protocol.

User Agents: mail reader

Mail server: mailbox, message queue

SMTP: client & server

### SMTP

(Use TCP, port 25)

Process:

1. construct TCP connection
2. application-layer handshaking
    1. indicate sender's address
3. send message
    1. `MAIL FROM: <cqqqwq@outlook.com>`
    2. `RCPT TO: <cqqthu20@mails.tsinghua.edu.cn>`
    3. `DATA`
    4. data lines
    5. `.`
    6. `QUIT`

Message itself: in data lines

* Header lines
    * To:
    * From:
    * Subject:
    * ...
* BLANK LINE
* Body: 

### Mail Access Protocols

Two ways to retrieve emails:

* IMAP: Internet Mail Access Protocol, provide retrieval, deletion, folders of stored messages on server 
* HTTP: Gmail, Hotmail...'s web-based interfaces

## DNS

DNS system:

* A distributed database implementation in a hierarchy of DNS servers.
    * Root server: contact-of-last resort
    * Top Level Domain: `.com/.ca/.uk`
    * Authoritative: organizations
    * Local DNS server: 
        * belongs to ISP, the target of user DNS query
        * has local cache, act as proxy
    * Reason: 
        * avoid single point of failure
* an application-layer protocol that allows hosts to query the distributed database

Runs over UDP, use port 53

Service:

* a map from hostname to IP address(host)
* host aliasing
* Mail server aliasing
* load distribution

### DNS Record & Message

format: (name, value, type, ttl)

Type:

* A: `name` -> hostname, `value` -> IP address
* NS: `name` ->  domain(foo.com), `value` -> hostname of authoritative name server for this domain
* NAME `name` -> alias name for some canonical(real) name, `value` -> canonical name
* MX: `value`-> the mail server associated with `name`

Message contain several records

![image-20221027234648058](cs456%20notes.assets/image-20221027234648058.png)

### DNS caching & name resolution method

Recursive Query: root asks its son, and so on.

Iterative Query: I don't know this name, but ask this server

### Create DNS server

add a NS record to DNS hostname

add a A record to find DNS authoritative server

## Peer to Peer Architecture

Definition: Peers request service from other peers, and provide service in return to other peers

* Self-scalability: new peers bring new service capacity, and new service demands

### Example -- File distribution

Time to distribute F to N clients using client-server approach:
$$
D_{\text{c-s}} \geq \max\{\frac{NF}{u_s}, \frac{F}{d_{\min}}\}
$$
$NF$ increases linearly in $N$, the scale of the system

Time to distribute $F$ to $N$ clients using P2P approach:
$$
D_{\text{P2P}}\geq \max\{\frac{F}{u_s},\frac{F}{d_{\min}},\frac{NF}{u_s+\sum u_i}\}
$$
chunks

sending chunks: tit-for-tat---sends chunks to those four peers currently sending her chunks *at highest rate*

every 10 seconds reevaluate

every 30 seconds randomly select another peer, starts sending chunks

## Video Streaming and CDNs

Challenge: scale, heterogeneity

Solution: distributed, application-level infrastructure

### DASH

Dynamic, Adaptive Streaming over HTTP

Server:

* chunks(different part, different rate)
* manifest file: provides URLs for different chunks

Client:

* periodically measures server-to-client bandwidth
* request maximum coding rate (chunk), that is sustainable given current bandwidth

intelligent client: can choose when/what rate/where to request

**encoding + DASH + playout buffering**

### Content Distribution Networks

Store/serve multiple copies of videos at multiple geographically distributed sites

enter deep: push CDN servers deep into many access networks (close to users)

bring home: smaller number (10) of larger clusters in POPs near(but not within) access networks

Example: a `CNAME` record for the resources

