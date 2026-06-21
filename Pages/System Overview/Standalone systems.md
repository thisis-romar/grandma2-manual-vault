---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Standalone systems"
slug: "key_so_standalone_systems"
url: "https://help.malighting.com/grandMA2/en/help/key_so_standalone_systems.html"
section: "System Overview"
ma2_section: "key_so_system_overview"
section_ref: "[Sections/System Overview](../../Sections/System%20Overview.md)"
next_page: "[Pages/System Overview/Network systems](Network%20systems.md)"
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

If the console is in a session and you want to set it to Standalone mode, then you can leave the session. This can be done using the [GUI](../Networking/How%20to%20end%20or%20leave%20a%20session.md) or the command line ([LeaveSession](../../Keywords/LeaveSession.md)).

In the Standalone mode the console is limited to only controlling the amount of [parameters](Parameters%20vs.%20DMX%20channels.md) the console / onPC unlocks.

You can only use the DMX ports on the console / wings.

If DMX is output via an Ethernet connection, then the console needs to be in a session. Enable the Network DMX if Alone button in the Setup->Network->Network Protocols. Even though not connected to anything else, it still needs to run an active session.

For more about setting up DMX ports, please have a look at the [Configure the DMX ports on MA devices](../Networking/Setting%20up%20DMX%20ports%20on%20MA%20devices.md) topic.

[Network systems](Network%20systems.md) →

Part of [System Overview](../../Sections/System%20Overview.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
