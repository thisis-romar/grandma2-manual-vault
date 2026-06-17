---
type: "page"
title_str: "Station List"
slug: "key_cs_station_list"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_station_list.html"
section: "Command Syntax and Keywords"
ma2_section: "key_command_syntax_and_keywords"
section_ref: "[[Sections/Command Syntax and Keywords]]"
prev_page: "[[Pages/Command Syntax and Keywords/Attribute List]]"
depth: 3
tags:
  - "type/page"
  - "section/cs"
---

# Station List

> [!source]- Source
> [MA Lighting Help – Station List](https://help.malighting.com/grandMA2/en/help/key_cs_station_list.html)

Version 3.9

# Station List

Syntax

\[IP-address\]

\[IP-address\] Thru \[IP-address\]

\[Host-ID\]

\[Host-ID\] Thru \[Host-ID\]

**Important:**  
The **IP address** is a 32-bit dotted decimal notation consisting of four numbers ranging from 0 to 255 and separated by dots, for example 192.168.0.101.

*   The **host ID** is a unique part of the IP address within a network. The host ID usually comprises the last three decimal numbers of the IP address. The host ID of the IP address 192.168.0.101 is 101 and the network ID is 192.168.0. 
*   If the beginning or the end of the command **Thru** is missing, the first or the last occurrence will be used. 

### Example:

\[Channel\]> SetIP ethO **192.168.0.101**

Sets the IP address. 

 \[Channel\]> **Shutdown** 1 **Thru** 4

 Shuts down all the devices with the host IDs 1, 2, 3, and 4. 

For more information on how to set the IP address see [SetIP](key_keyword_setip.html).

← [[Pages/Command Syntax and Keywords/Attribute List]]

Part of [[Sections/Command Syntax and Keywords]] · [[000 Map of Content]]
