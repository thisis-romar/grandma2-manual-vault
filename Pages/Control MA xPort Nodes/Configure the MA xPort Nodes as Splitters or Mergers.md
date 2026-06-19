---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Configure the MA xPort Nodes as Splitters or Mergers"
slug: "key_control_ma_xport_node_configure_as_splitters_merg"
url: "https://help.malighting.com/grandMA2/en/help/key_control_ma_xport_node_configure_as_splitters_merg.html"
section: "Control MA xPort Nodes"
ma2_section: "key_control_ma_xport_node"
section_ref: "[[Sections/Control MA xPort Nodes]]"
prev_page: "[[Pages/Control MA xPort Nodes/Configure the MA xPort Nodes in a Browser]]"
next_page: "[[Pages/Control MA xPort Nodes/Delete the MA xPort Nodes in the Network Configuration]]"
depth: 2
tags:
  - "type/page"
  - "section/control"
summary: "It is possible to configure MA xPort Nodes as a splitter or a merger on one universe."
---

# Configure the MA xPort Nodes as Splitters or Mergers

> [!source]- Source
> [MA Lighting Help – Configure the MA xPort Nodes as Splitters or Mergers](https://help.malighting.com/grandMA2/en/help/key_control_ma_xport_node_configure_as_splitters_merg.html)

Version 3.9

# Configure the MA xPort Nodes as Splitters or Mergers

It is possible to configure MA xPort Nodes as a splitter or a merger on one universe. 

To do so:

*   Configure the node on the console or in a browser first. 

For information on how to configure nodes see [[Pages/Control MA xPort Nodes/Configure the MA xPort Nodes in the Console|Configure nodes on the console]] or [[Pages/Control MA xPort Nodes/Configure the MA xPort Nodes in a Browser|Configure nodes in a browser]]. 

The following example displays how to configure the nodes as splitters or mergers on a console. 

* * *

## Configure the Node as a Merger

If the node is used as a merger, it is possible to merge one or two DMX inputs into one universe. 

1.  To configure the node as a merger:  
    \-Add an MA xPort Node to the network configuration.  
     For more information see [[Pages/Networking/Adding devices to the session|Adding devices to your session]]. 
2.  Select the same universe for all ports in the pop-up **Configure DMX Port (MA-Net2 Mode)**.  
    For more information see [[Pages/Control MA xPort Nodes/Configure the MA xPort Nodes in the Console|Configure nodes on the console]].   
    \-Then, set a maximum of 2 ports to the port mode "IN" and 1 port to the port mode "OUT".

![](../../img/menu_configure-node-as-merger_v3-3.png)

_Configure node as a merger_

**Important:**  
If the xPort node is used as a merger, it must not be used in a session or connected to other xPort nodes via the network.

You have successfully configured the node as a merger.  

* * *

## Configure the Node as a Splitter 

1.  To configure the node as a splitter:  
    \-Add an MA xPort Node to the network configuration.  
    For more information see [[Pages/Networking/Adding devices to the session|Adding devices to your session]].
2.  Select the same universe for all ports in the pop-up **Configure DMX Port (MA-Net2 Mode)**.  
    For more information see [[Pages/Control MA xPort Nodes/Configure the MA xPort Nodes in the Console|Configure nodes on the console]].   
    \-Then, set at least 3 ports to the port mode "OUT" and 1 port to the port mode "IN". 

![](../../img/menu_configure-node-as-splitter_v3-3.png)

_Configure node as splitter_

You have successfully configured the node as a splitter.

← [[Pages/Control MA xPort Nodes/Configure the MA xPort Nodes in a Browser]] | [[Pages/Control MA xPort Nodes/Delete the MA xPort Nodes in the Network Configuration]] →

Part of [[Sections/Control MA xPort Nodes]] · [[000 Map of Content]]
