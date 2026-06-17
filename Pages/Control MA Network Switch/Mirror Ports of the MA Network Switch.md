---
type: "page"
title_str: "Mirror Ports of the MA Network Switch"
slug: "key_control_ma_switch_mirror_ports"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_mirror_ports.html"
section: "Control MA Network Switch"
ma2_section: "key_control_ma_switch"
section_ref: "[[Sections/Control MA Network Switch]]"
prev_page: "[[Pages/Control MA Network Switch/Edit Link Aggregation Groups of the MA Network Switch]]"
next_page: "[[Pages/Control MA Network Switch/Work with the switch configuration]]"
depth: 2
tags:
  - "type/page"
  - "section/control"
---

# Mirror Ports of the MA Network Switch

> [!source]- Source
> [MA Lighting Help – Mirror Ports of the MA Network Switch](https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_mirror_ports.html)

Version 3.9

# Mirror Ports of the MA Network Switch

In port mirroring, the entire traffic that arrives at a port is mirrored onto a mirror port of the MA Network Switch. 

Port mirroring is most commonly used in debugging or for the analysis of the network traffic such as the network load. 

**Important:**  
The MA Network Switch mirrors several source ports to one destination port. Vice versa, it is possible to set a single destination port at a time. 

**Requirement:**

*   [Add MA Network Switch to the network configuration](key_control_ma_switch_add.html)​

To mirror ports:

1.  Open the **MA Network Configuration**:  
    \-Press Setup and tap **Network** MA Network Configuration.  
    \-The window **MA Network Configuration** opens.

![](../../img/menu_ma-network-configuration_network-switch_v3_2.png)

_MA Network Configuration – Network Switch_

2.  Tap Network Switch.
3.  Tap a cell in the row of the MA Network Switch you would like to edit and tap Port Mirror.  
    \-The **pop-up Configure MA Network Switch Port Mirrors** opens. 

![](../../img/popup_configure-ma-network-switch-port-mirrors_v3-3.png)

_Mirror ports_

4.  Select destination port:  
    \-Tap the button in the field **Destination Port** and select a port.
5.   Select source ports:  
    \-Check the checkboxes corresponding to the source ports.
6.  After checking one or several source ports tap Please.
7.  The ports are now mirrored. 

**Hint:**  
A port is never destination and source at the same time.

← [[Pages/Control MA Network Switch/Edit Link Aggregation Groups of the MA Network Switch]] | [[Pages/Control MA Network Switch/Work with the switch configuration]] →

Part of [[Sections/Control MA Network Switch]] · [[000 Map of Content]]
