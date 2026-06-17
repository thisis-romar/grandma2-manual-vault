---
type: "page"
title_str: "Enable DHCP client for the MA Network Switch"
slug: "key_control_ma_switch_dhcp"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_dhcp.html"
section: "Control MA Network Switch"
section_ref: "[[Sections/Control MA Network Switch]]"
prev_page: "[[Pages/Control MA Network Switch/Change IP address]]"
next_page: "[[Pages/Control MA Network Switch/Change hostname]]"
tags:
  - "type/page"
  - "section/control"
---

# Enable DHCP client for the MA Network Switch

> [!source]- Source
> [MA Lighting Help – Enable DHCP client for the MA Network Switch](https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_dhcp.html)

Version 3.9

# Enable DHCP client for the MA Network Switch

If the network is equipped with a DHCP server enable the DHCP client of the switch for it to receive automatically an IP address from the DHCP server.

The previous assigned IP address will be used if there is no DHCP server available.

**Requirement:** [Added MA Network Switch to the network configuration](key_control_ma_switch_add.html).

1.  Open the MA Network Configuration.  
    \- Press Setup, and tap under **Network** MA Network Configuration.  
    The MA Network Configuration window opens.
2.  Tap at Network Switch.

![](../../img/menu_ma-network-configuration_network-switch_v3_2.png)

_MA Network Configuration - Network Switch_

3.  Tap and hold the cell in the column DHCP client enabled until **Yes** is displayed.

The DHCP client is enabled. The DHCP settings are saved in the startup configuration.

![](../../img/menu_ma-network-configuration_network-switch_dhcp-yes_v3_3.png)

_MA Network Configuration - Network Switch - DHCP yes_

The column IP ETHERCON 1(ETH0) displays the used DHCP IP address. The column IP ETHERCON 1(ETHO.1) displays the default IP address of the MA Network Switch.

If DHCP is on, the MA Network Switch is reachable only with the DHCP IP address.

**Hint:**  
You can also enable the DHCP client by using the command line.  
\- Change the destination of the command line to NetConfig/Network Switch 8. For more information see [ChangeDest keyword](key_keyword_changedest.html).  
\- Type in the command line Assign 1 / DHCPclientenabled = "Yes".  
The DHCP client of the NetworkSwitch 1 is enabled.

← [[Pages/Control MA Network Switch/Change IP address]] | [[Pages/Control MA Network Switch/Change hostname]] →

Part of [[Sections/Control MA Network Switch]] · [[000 Map of Content]]
