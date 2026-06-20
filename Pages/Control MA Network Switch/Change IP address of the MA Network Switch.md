---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Change IP address of the MA Network Switch"
slug: "key_control_ma_switch_ip_address"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_ip_address.html"
section: "Control MA Network Switch"
ma2_section: "key_control_ma_switch"
section_ref: "[[Sections/Control MA Network Switch]]"
prev_page: "[[Pages/Control MA Network Switch/Add the MA Network Switch to the network configuration]]"
next_page: "[[Pages/Control MA Network Switch/Enable DHCP client for the MA Network Switch]]"
depth: 2
tags:
  - "type/page"
  - "section/control"
summary: "You can change the IP address of the MA Network Switch from a connected grandMA2 console or a connected grandMA2 onPC."
---

# Change IP address of the MA Network Switch

> [!source]- Source
> [MA Lighting Help – Change IP address of the MA Network Switch](https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_ip_address.html)

Version 3.9

# Change IP address of the MA Network Switch

You can change the IP address of the MA Network Switch from a connected grandMA2 console or a connected grandMA2 onPC.  
The IP address will be used to reach the web interface and to reach the connected grandMA2 console or the connected grandMA2 onPC.  
The current IP address is displayed in the IP ETHERCON 1(ETH0) or in the IP ETHERCON 1(ETH0.1) column, depending on the used Ethernet connector.

**Important:**  
If you change the IP address and the new IP address is within another subnet, it is necessary to set the IP address on your computer or grandMA2 console to connect to the web interface. For more information about how to change the IP address see [[Sections/Networking|Networking]].  
If the computer or the grandMA2 console and the switch are in different subnet, the connection is not possible.

**Important:**  
Make sure that every device in the network has its unique IP address. If two devices have the same IP address in a network the devices might not be reachable.

**Requirement:** [[Pages/Control MA Network Switch/Add the MA Network Switch to the network configuration|Added MA Network Switch in the network configuration]].

1.   Open the MA Network Configuration.  
    \- Press Setup, and tap under **Network** MA Network Configuration.  
    The MA Network Configuration window opens.
2.  Tap at Network Switch.
    
    ![](../../img/menu_ma-network-configuration_network-switch_v3_2.png)
    
    _MA Network Configuration - Network Switch_
    
3.  Navigate to the cell with the IP address you like to change and press the screen encoder or tap and hold in the cell.  
    The **Edit IP ETHERCON 1 pop-up** opens.
4.  Type the new IP address in the green edit line. Tap at the **plus** ![](../../img/icon_plus_small_v3-2.png) to open the virtual keyboard.
5.  Press Please.

The IP address is changed and saved in the startup configuration.

← [[Pages/Control MA Network Switch/Add the MA Network Switch to the network configuration|Add the MA Network Switch to the network configuration]] | [[Pages/Control MA Network Switch/Enable DHCP client for the MA Network Switch|Enable DHCP client for the MA Network Switch]] →

Part of [[Sections/Control MA Network Switch|Control MA Network Switch]] · [[000 Map of Content]]
