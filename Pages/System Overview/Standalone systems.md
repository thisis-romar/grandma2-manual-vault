---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Standalone systems"
slug: "key_so_standalone_systems"
url: "https://help.malighting.com/grandMA2/en/help/key_so_standalone_systems.html"
section: "System Overview"
ma2_section: "key_so_system_overview"
section_ref: "[[Sections/System Overview]]"
next_page: "[[Pages/System Overview/Network systems]]"
depth: 2
tags:
  - "type/page"
  - "section/so"
summary: "If a console is not connected to anything, then it is a Standalone system."
---

# Standalone systems

> [!source]- Source
> [MA Lighting Help – Standalone systems](https://help.malighting.com/grandMA2/en/help/key_so_standalone_systems.html)

Version 3.9

# Standalone systems

If a console is not connected to anything, then it is a **Standalone** system. It is also a standalone system using a grandMA2 onPC with one or more grandMA2 onPC wings connected.

A console is in standalone mode when it is not a part of a session. So a console that is connected to network, but not in a running session is also considered as Standalone.

The current status can be seen in the Setup menu (press the Setup key). The right tab will display: **Network Standalone**.

If the console is in a session and you want to set it to Standalone mode, then you can leave the session. This can be done using the [[Pages/Networking/How to end or leave a session|GUI]] or the command line ([[Keywords/LeaveSession|LeaveSession]]).

In the Standalone mode the console is limited to only controlling the amount of [[Pages/System Overview/Parameters vs. DMX channels|parameters]] the console / onPC unlocks.

You can only use the DMX ports on the console / wings.

If DMX is output via an Ethernet connection, then the console needs to be in a session. Enable the Network DMX if Alone button in the Setup->Network->Network Protocols. Even though not connected to anything else, it still needs to run an active session.

For more about setting up DMX ports, please have a look at the [[Pages/Networking/Setting up DMX ports on MA devices|Configure the DMX ports on MA devices]] topic.

[[Pages/System Overview/Network systems|Network systems]] →

Part of [[Sections/System Overview|System Overview]] · [[000 Map of Content]]
