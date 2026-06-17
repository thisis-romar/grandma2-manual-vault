---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Session Collision"
slug: "key_network_session_collision"
url: "https://help.malighting.com/grandMA2/en/help/key_network_session_collision.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[[Sections/Networking]]"
prev_page: "[[Pages/Networking/How to end or leave a session]]"
depth: 3
tags:
  - "type/page"
  - "section/network"
---

# Session Collision

> [!source]- Source
> [MA Lighting Help – Session Collision](https://help.malighting.com/grandMA2/en/help/key_network_session_collision.html)

Version 3.9

# Session Collision

You might experience a Session Collision at some point. 

It is a situation that occurs when two stations believe that they are the master of the same session.

This can happen if you have a faulty network cable, a bad switch or someone who manually unplugs and re-plugs network cables.

When this happens, then the session is divided into two parts.

One of the stations that have left the original session, will become master - if it was not already.

The other part are the stations that are left in the original session. The session needs a master console, so if the station that left was the master, then one of the remaining stations will become the new master.

When the two parts are reconnected, then you have a situation with two stations that think they are the masters. The system cannot automatically decide what is the right thing to do in this situation.

So you get a big warning and are forced to make a decision. It could look like this:

![](../../img/popup_session-collision_v3-2.png)

_Session Collision pop-up_

It shows the session number and name, plus the IP address of the console you have session collision with and finally the session speed.

At the bottom of this pop-up you have three buttons:

*   **Join Other Session:**  
    Pressing this will throw away the show file in the part of the session you are in, and join the other part (thus getting their show file).
*   **Take Over Session:**  
    This will throw away the show file in the other part, and force the stations in that part to join your part (and getting your show file).
*   **Leave Session:**  
    This will make the stations in your part leave the session and the other part will continue the session with their show file. This can be useful if both parts have made something important. The part that left the session can store the show file. This stored show can then be the source for a partial show read or elements can be exported and later imported into the running show.

This big window will stay on all screens until someone presses one of the buttons.

If you are working in a multi user environment, it might be good idea to talk about what to do if a session collision should appear - before it happens!

← [[Pages/Networking/How to end or leave a session]]

Part of [[Sections/Networking]] · [[000 Map of Content]]
