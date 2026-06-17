---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "How to end or leave a session"
slug: "key_network_session_end_leave"
url: "https://help.malighting.com/grandMA2/en/help/key_network_session_end_leave.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[[Sections/Networking]]"
prev_page: "[[Pages/Networking/Adding devices to the session]]"
next_page: "[[Pages/Networking/Session Collision]]"
depth: 3
tags:
  - "type/page"
  - "section/network"
---

# How to end or leave a session

> [!source]- Source
> [MA Lighting Help – How to end or leave a session](https://help.malighting.com/grandMA2/en/help/key_network_session_end_leave.html)

Version 3.9

# How to end or leave a session

 A single station can be removed from a session or the entire session can be ended.

## Leave a session

Leaving the session can be done using the [LeaveSession command](key_keyword_leavesession.html). This will remove the station, where the command is executed, from the session.

You can also open the **MA Network Control** (in Setup) and tap the Leave Session button.

This only takes one console out of the session - the one you are operating. If there are other stations in the session, then the session will continue. If your station was the last one, then the session will end.

## Disconnect / Dismiss a station

A station can be removed from the session by using the [DisconnectStation command](key_keyword_disconnectstation.html).

You can also open the **MA Network Control** (in Setup) select the station you want to remove and tap the Dismiss Session button.

This will take the selected station out of the session.

## End Session

You can end the session your are a part of using the [EndSession command](key_keyword_endsession.html).

You can also open the **MA Network Control** (in Setup) and tap the End Session button.

Ending a session will dismiss all stations and the session is no longer running.

← [[Pages/Networking/Adding devices to the session]] | [[Pages/Networking/Session Collision]] →

Part of [[Sections/Networking]] · [[000 Map of Content]]
