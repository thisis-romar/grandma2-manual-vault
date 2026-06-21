---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What is networking"
slug: "key_network_what_is_network"
url: "https://help.malighting.com/grandMA2/en/help/key_network_what_is_network.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[Sections/Networking](../../Sections/Networking.md)"
next_page: "[Pages/Networking/Set the IP address in the console](Set%20the%20IP%20address%20in%20the%20console.md)"
depth: 2
tags:
  - "type/page"
  - "section/network"
summary: "Networking in grandMA2 can be a lot of things."
---

# What is networking

> [!source]- Source
> [MA Lighting Help – What is networking](https://help.malighting.com/grandMA2/en/help/key_network_what_is_network.html)

Version 3.9

# What is networking

Networking in grandMA2 can be a lot of things. Generally when we talk about network, we are talking about the Ethernet connections on the consoles and devices.

To make any connections, the devices will need an IP addresses and physically connection using good Ethernet switches.

## Expand the system by adding more MA devices

MA devices can be connected to expand the system. This allows for:

*   more synchronized DMX ports to the system
*   more parameters allowing control of more lights
*   create backed up systems that ensures a running show
*   controlling MA VPU media server giving output to big or small screens incl. sound output
*   and much more

### Sessions

When moving beyond the standalone console, sessions are needed. A session is like a chat room for MA devices. A device can be added to a session and then the device is a part of that system. It is possible to create 31 different sessions in one Ethernet network. One session can handle a maximum of 65 536 parameters (read more about parameters vs. DMX channels following [this link](../System%20Overview/Parameters%20vs.%20DMX%20channels.md)). The network limit in a Gigabit network is currently 3 maxed out session in one network.

### Connect to third party hardware

You can also use the network to communicate with third party equipment. grandMA2 support many of the industry standard network protocols for sending (and in some instances receive) DMX data using the Ethernet network.

They include Art-Net III, sACN, Pathport, ETC-Net2, Shownet, and Kinet.

grandMA2 also supports CITP and PSN. CITP is used for streaming video and image exchange over network. PSN is a 3D position protocol capable of exchanging real world position values from tracking systems.

[Set the IP address in the console](Set%20the%20IP%20address%20in%20the%20console.md) →

Part of [Networking](../../Sections/Networking.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
