---
title: 'IP - Protocol'
date: 2024-02-01
draft:  false   
featured: false  
description: "IP - Protocol"
thumbnail: "/posts/general/images/ip-protocol.png"
featureImage: "/posts/general/images/ip-address.jpg" 
shareImage: "/posts/general/images/ip-protocol.png"
author: "Anand Vyas"
tags:
    - IP - Protocol
categories:     
    - General
---

The Internet Protocol (IP) is the method or protocol by which data is sent from one computer to another on the Internet. Each computer (known as a host) on the Internet has at least one IP address that uniquely identifies it from all other computers on the Internet.

### Types of IP
The two most common versions of IP in use today are Internet Protocol version 4 (IPv4) and Internet Protocol version 6 (IPv6).

|	|IPv4|	IPv6|
|---|---|---|
|Size	|32-bits (2^32)|	128-bits (2^128)|
|IP Address|	4,294,967,296|	340,282,366,920,938,463,463,374,607,431,768,211,456|
|Sample|	192.168.0.100|	2001:db8:cd0f:421d:2209:bc:80ba:2095|

Each IP address includes a network ID and a host ID.

- The network ID (`also known as a network address`) identifies the systems that are located on the same physical network bounded by IP routers. All systems on the same physical network must have the same network ID. The network ID must be unique to the internetwork.

- The host ID (`also known as a host address`) identifies a workstation, server, router, or other TCP/IP host within a network. The host address must be unique to the network ID.

### IPv4 Address Syntax
An IP address consists of 32 bits. Instead of expressing IPv4 addresses 32 bits at a time using binary notation (Base2), it is standard practice to segment the 32 bits of an IPv4 address into four 8-bit fields called octets. Each octet is converted to a decimal number (base 10) from 0–255 and separated by a period (a dot). This format is called dotted decimal notation.

|Binary Format|	Dotted Decimal Notation|
|---|---|
|11000000 10101000 00000011 00011000|	192.168.3.24|

### IPv4 - Address Class
Internet Protocol hierarchy contains several classes of IP Addresses to be used efficiently in various situations as per the requirement of hosts per network. Broadly, the IPv4 Addressing system is divided into five classes of IP Addresses.

|Class	|Range	|SUM	|Network ID / Host ID	|128	|64	|32	|16	|8	|4	|2	|0|
|---|---|---|---|---|---|---|---|---|---|---|---|
|Class A	|1 - 127	|-	|N.H.H.H / 8	|0	|0	|0	|0	|0	|0	|0	|0|
|Class B	|128 - 191	|128	|N.N.H.H / 16	|1	|0	|0	|0	|0	|0	|0	|0|
|Class C	|192 - 223	|128 + 64	|N.N.N.H / 24	|1	|1	|0	|0	|0	|0	|0	|0|
|Class D	|224 - 239	|128 + 64 + 32	|-|	1	|1	|1	|0	|0	|0	|0	|0|
|Class E	|240 - 255	|128 + 64 + 32 + 16	|-|	1	|1	|1	|1	|0	|0	|0	|0|


### IPv4 - Numbers of IPs
> When calculating hosts’ IP addresses, 2 IP addresses are decreased because they cannot be assigned to hosts, i.e. the first IP of a network is network number and the last IP is reserved for Broadcast IP

- Class A => `N8.H8.H8.H8` => H(8 * 3 = 24) => 2^24 => 16,277,216 - 2 => 16,277,214
- Class B => `N8.N8.H8.H8` => H(8 * 2 = 16) => 2^16 => 65,536 - 2 => 65,534
- Class C => `N8.N8.N8.H8` => H(8 * 1 = 8) => 2^8 => 256 - 2 => 254
- Class D => Class D addresses are reserved for IPv4 multicast addresses. The four high-order bits in a class D address are always set to 1110, which makes the address prefix for all class D addresses 224.0.0.0/4 (or 224.0.0.0, 240.0.0.0).
- Class E => Class E addresses are reserved for experimental use. The high-order bits in a class E address are set to 1111, which makes the address prefix for all class E addresses 240.0.0.0/4 (or 240.0.0.0, 240.0.0.0)


