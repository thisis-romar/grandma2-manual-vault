---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Change hostname of the MA Network Switch"
slug: "key_control_ma_switch_hostname"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_hostname.html"
section: "Control MA Network Switch"
ma2_section: "key_control_ma_switch"
section_ref: "[Sections/Control MA Network Switch](../../Sections/Control%20MA%20Network%20Switch.md)"
prev_page: "[Pages/Control MA Network Switch/Enable DHCP client for the MA Network Switch](Enable%20DHCP%20client%20for%20the%20MA%20Network%20Switch.md)"
next_page: "[Pages/Control MA Network Switch/Change switch ID](Change%20switch%20ID.md)"
depth: 2
tags:
  - "type/page"
  - "section/control"
summary: "You can change the name of the MA Network Switch."
---

# Change hostname of the MA Network Switch

> [!source]- Source
> [MA Lighting Help – Change hostname of the MA Network Switch](https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_hostname.html)

Version 3.9

# Change hostname of the MA Network Switch

You can change the name of the MA Network Switch.  
The name is displayed at the front end display and in the title bar of the web interface.

The maximum length of the name are 12 characters.  
The following characters are allowed.

*   Upper case letters A...Z
*   Lower case letters a...z
*   Numbers 0...9
*   Spaces, minus (-), plus (+), underscore (\_)

**Requirement:** [Added MA Network Switch in the network configuration](Add%20the%20MA%20Network%20Switch%20to%20the%20network%20configuration.md).

1.   Open the MA Network Configuration.  
    \- Press Setup, and tap under **Network** MA Network Configuration.  
    The MA Network Configuration window opens.
2.  Tap at Network Switch.
    
    ![](../../img/menu_ma-network-configuration_network-switch_v3_2.png)
    
    _MA Network Configuration - Network Switch_
    
3.  Tap and hold the cell in the column hostname or tap in the cell and press the screen encoder until the **Edit Hostname pop-up** opens.
4.  Enter the new name, e.g. Stage Left. Tap at the **plus** ![](../../img/icon_plus_small_v3-2.png) to open the virtual keyboard.
5.  Press Please.

The new name is applied and saved in the startup configuration.

The front end display of the MA Network Switch displays the new name.

**Hint:**  
You can change the hostname by using the command line.  
\- Change the destination of the command line to NetConfig/Network Switch 8. For more information see [ChangeDest keyword](../../Keywords/ChangeDest%20keyword.md).  
\- Type in the command line Assign 1 / Hostname = "Stage Left".  
The hostname of the NetworkSwitch 1 is changed.

← [Enable DHCP client for the MA Network Switch](Enable%20DHCP%20client%20for%20the%20MA%20Network%20Switch.md) | [Change switch ID](Change%20switch%20ID.md) →

Part of [Control MA Network Switch](../../Sections/Control%20MA%20Network%20Switch.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
