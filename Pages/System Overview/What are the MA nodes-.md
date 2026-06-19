---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What are the MA nodes?"
slug: "key_so_what_are_the_ma_nodes"
url: "https://help.malighting.com/grandMA2/en/help/key_so_what_are_the_ma_nodes.html"
section: "System Overview"
ma2_section: "key_so_system_overview"
section_ref: "[[Sections/System Overview]]"
prev_page: "[[Pages/System Overview/What is MA 3D-]]"
depth: 3
tags:
  - "type/page"
  - "section/so"
summary: "The nodes from MA Lighting work as a translator between the network data and the DMX."
---

# What are the MA nodes?

> [!source]- Source
> [MA Lighting Help – What are the MA nodes?](https://help.malighting.com/grandMA2/en/help/key_so_what_are_the_ma_nodes.html)

Version 3.9

# What are the MA nodes?

The nodes from MA Lighting work as a translator between the network data and the DMX.

A node is connected to the network and it listens to the DMX data in the network. It is configured to handle some specific DMX universes.

It can be used to output a DMX universe. It will listen to the DMX data stream on the network and translate that information into a DMX512-A signal.

A node can also input a DMX signal into the network. Then it receives a DMX signal and translates it into a network data stream.

When nodes are used in a MA-Net2 system, then the advantage is that the DMX ports can be configured from the system and the DMX output is synchronized in the entire network.

Nodes can also work with other network protocols. They can run in Art-Net and sACN. Configuration is still done via the grandMA2 software (for example a computer running the grandMA2 onPC software) or from a browser.

The older MA nodes from grandMA1 can also run in MA-Net1 mode. Then they can talk with the grandMA1 systems.

The older NSPs can be used as a MA 4Port Node in a grandMA2 system.

The older NSPs and nodes from grandMA1 only have a 100Mbit/s network card. The new nodes use a Gigabit network adaptor.

There is no guarantee that the grandMA1 devices will continue to work with MA-Net2 in the future. They will however always be able to run Art-Net and sACN.

← [[Pages/System Overview/What is MA 3D-]]

Part of [[Sections/System Overview]] · [[000 Map of Content]]
