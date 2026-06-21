---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Edit groups of the MA Network Switch"
slug: "key_control_ma_switch_groups"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_groups.html"
section: "Control MA Network Switch"
ma2_section: "key_control_ma_switch"
section_ref: "[Sections/Control MA Network Switch](../../Sections/Control%20MA%20Network%20Switch.md)"
prev_page: "[Pages/Control MA Network Switch/Configure ports of the MA Network Switch](Configure%20ports%20of%20the%20MA%20Network%20Switch.md)"
next_page: "[Pages/Control MA Network Switch/Edit presets of the MA Network Switch](Edit%20presets%20of%20the%20MA%20Network%20Switch.md)"
depth: 2
tags:
  - "type/page"
  - "section/control"
summary: "This topic describes the different group settings and how to edit the groups."
---

# Edit groups of the MA Network Switch

> [!source]- Source
> [MA Lighting Help – Edit groups of the MA Network Switch](https://help.malighting.com/grandMA2/en/help/key_control_ma_switch_groups.html)

Version 3.9

# Edit groups of the MA Network Switch

This topic describes the different group settings and [how to edit the groups](<#Edit Groups>).

You can edit the following option:

*   [Group Name](<#Group Name>)
*   [IGMP Snooping](<#IGMP Snooping>)
*   [IGMP Querier](<#IGMP Querier>)
*   [Unknown Flooding](<#Unknown Flooding>)
*   [VLAN ID](<#VLAN ID>)

* * *

## Group Name

You can change the group name of every group except Trunk and Manage. For a better overview every group name is displayed in a different color.

**Important:**  
The group name is a label for better overview and does not affect the VLAN.

* * *

## IGMP Snooping

IGMP snooping avoids ports to be flooded with undesired multicast packets.  
It is a smart way to manage multicast packets, and forward them to the registered ports.

IGMP snooping is disabled by default.

**Hint:**  
To forward only known multicast network packets, enable IGMP Snooping and IGMP Querier. Disable unknown flooding.

* * *

## IGMP Querier

**Important:**  
IGMP snooping requires at least one switch in a group (VLAN) to act as a querier to ensure IGMP snooping functionality.

Querier register the multicast packets to the corresponding ports.  
If more than one querier is activated per group, the switch with the lowest IP address will be elected as querier.  
This election process is automated.

IGMP querier is disabled by default.

* * *

## Unknown Flooding

Unknown flooding is for multicasted frames destined for an address for which the switch has not seen a join.  
In that case the switch uses the flooding mask to forward that frame to every port.

Unknown flooding can be global enabled or disabled for all groups.  
By default, unknown flooding is enabled.

*   Yes = All unknown packages will be forwarded
*   No = All unknown packages will be dropped

**Hint:**  
To forward only known multicast network packets, enable IGMP Snooping and IGMP Querier. Disable unknown flooding.

* * *

## VLAN ID

All groups of the switch have a default VLAN ID, except Trunk.  
If you implement the switch in an existing network, it can be necessary to change the VLAN ID of the groups.  
You can change the VLAN ID of group 1 through group 6. The VLAN ID of group 8 (= manage group) is 1 and fixed.  
Possible VLAN IDs are from 1 to 4094.

Group

Default VLAN ID

1

100

2

200

3

300

4

400

5

500

6

600

**Important:**  
If you change the VLAN ID of a group, you need to change the VLAN ID of each switch using this group.  
The VLAN IDs of the groups which should communicate to each other, have to be the same.  
If the VLAN IDs of groups are not the same, they do not communicate with each other.

* * *

## Edit Groups

**Requirement:** [Added MA Network Switch to the network configuration](Add%20the%20MA%20Network%20Switch%20to%20the%20network%20configuration.md).

To edit groups:

1.   Open the MA Network Configuration.  
    \- Press Setup, and tap under **Network** MA Network Configuration.  
    The MA Network Configuration window opens.
2.  Tap at Network Switch.
    
    ![](../../img/menu_ma-network-configuration_network-switch_v3_2.png)
    
    _MA Network Configuration - Network Switch_
    
3.  Tap at a cell in the row of the MA Network Switch you like to edit and tap Edit Groups.  
    The **Configure Switch Groups pop-up** opens.
    
    ![](../../img/popup_configure-switch-groups_v3_2.png)
    
    _Configure Switch Groups pop-up_
    
4.  Tap and hold the cell you like to edit or tap in the cell and press the screen encoder.
5.  Edit the group and press Please or tap Please.

The groups are configured and the changes are saved in the startup configuration.

← [Configure ports of the MA Network Switch](Configure%20ports%20of%20the%20MA%20Network%20Switch.md) | [Edit presets of the MA Network Switch](Edit%20presets%20of%20the%20MA%20Network%20Switch.md) →

Part of [Control MA Network Switch](../../Sections/Control%20MA%20Network%20Switch.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
