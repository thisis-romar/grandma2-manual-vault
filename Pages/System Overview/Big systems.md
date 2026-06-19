---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Big systems"
slug: "key_so_big_systems"
url: "https://help.malighting.com/grandMA2/en/help/key_so_big_systems.html"
section: "System Overview"
ma2_section: "key_so_system_overview"
section_ref: "[[Sections/System Overview]]"
prev_page: "[[Pages/System Overview/Parameter expansion]]"
next_page: "[[Pages/System Overview/Media systems and CITP]]"
depth: 2
tags:
  - "type/page"
  - "section/so"
summary: "There are some limitation to consider when using the grandMA2 in big systems."
---

# Big systems

> [!source]- Source
> [MA Lighting Help – Big systems](https://help.malighting.com/grandMA2/en/help/key_so_big_systems.html)

Version 3.9

# Big systems

There are some limitation to consider when using the grandMA2 in big systems.

The following is exploring some of these limitations running one session in a good **Gigabit** network.

There is the general limitation regarding the parameter count: It can control a maximum of 65 536 parameters.

Then there is the limit of 256 DMX universes - It is only possible to patch your fixtures in a maximum of 256 universes.

The devices are separated into different classes. There is a limit of how many devices of each class can be in one session.

*   **Class A** are grandMA2 full-size, grandMA2 light, grandMA2 ultra-light, grandMA2 replay unit, grandMA2 onPC and MA NPU.  
    Maximum 31 Class A devices in a session. 8 of the 31 are reserved for **Stations** (grandMA2 consoles and grandMA2 onPC), the 23 remaining devices can be any Class A device.
*   **Class B** are MA VPU, MA 3D and MA NDP.  
    Maximum 64 Class B devices in a session.
*   **Class C** are MA Nodes and MA VPU in "Show mode".  
    Maximum 255 Class C devices in a session.

The amount of RAM or memory is important. It is recommended to have a minimum of 8GB in every class A device in the session. If one device has lower memory, then the entire system can only utilize the lowest amount of memory. For instance if one MA  NPU only has 4GB, then the entire session can only use 4GB.

Memory is related to the size of the show file. If the maximum amount of parameters is used, then the amount of cues that can be stored is lower. User Profiles, the amount of fixtures patched, 3D objects in the show file, bitmaps, and so on all affects the memory use. The current memory use and the free memory can be monitored in the [[Pages/Other System Tools/Desk status|Desk Status window]].

For big systems it is always recommended to have an entire system running minimum 1 Gbit/s speed. This goes for all devices including the DMX nodes. It is not recommended to use older nodes that only run 100Mbit/s or 10Mbit/s speed. For a synchronized real time DMX output only use MA Nodes.

If you are in a situation where you need to build a big system, it is a very good idea to have an experienced **MA System Specialist** involved in the design and implementation of the system and network. There are a lot of other considerations regarding building a network that can handle the traffic especially if there is a high demand for redundancy. A **MA System Specialist** has the required knowledge to help with all these considerations.

It is not recommended to run more than 3 (very) big sessions in one gigabit network. If more than that is needed, please contact our technical support or a **MA System Specialist**.

← [[Pages/System Overview/Parameter expansion]] | [[Pages/System Overview/Media systems and CITP]] →

Part of [[Sections/System Overview]] · [[000 Map of Content]]
