---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Mirror Ports of the MA Network Switch"
slug: "key_control_ma_switch_mirror_ports"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_mirror_ports.html"
section: "Control MA Network Switch"
ma2_section: "key_control_ma_switch"
section_ref: "[Sections/Control MA Network Switch](../../Sections/Control%20MA%20Network%20Switch.md)"
prev_page: "[Pages/Control MA Network Switch/Edit Link Aggregation Groups of the MA Network Switch](Edit%20Link%20Aggregation%20Groups%20of%20the%20MA%20Network%20Switch.md)"
next_page: "[Pages/Control MA Network Switch/Work with the switch configuration](Work%20with%20the%20switch%20configuration.md)"
depth: 2
tags:
  - "type/page"
  - "section/control"
summary: "In port mirroring, the entire traffic that arrives at a port is mirrored onto a mirror port of the MA Network Switch."
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

*   [Add MA Network Switch to the network configuration](Add%20the%20MA%20Network%20Switch%20to%20the%20network%20configuration.md)​

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

← [Edit Link Aggregation Groups of the MA Network Switch](Edit%20Link%20Aggregation%20Groups%20of%20the%20MA%20Network%20Switch.md) | [Work with the switch configuration](Work%20with%20the%20switch%20configuration.md) →

Part of [Control MA Network Switch](../../Sections/Control%20MA%20Network%20Switch.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
