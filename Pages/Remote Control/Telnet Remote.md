---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Telnet Remote"
slug: "key_remote_control_telnet"
url: "https://help.malighting.com/grandMA2/en/help/key_remote_control_telnet.html"
section: "Remote Control"
ma2_section: "key_remote_control"
section_ref: "[Sections/Remote Control](../../Sections/Remote%20Control.md)"
prev_page: "[Pages/Remote Control/Web Remote](Web%20Remote.md)"
next_page: "[Pages/Remote Control/Decimal – Hex Table](Decimal%20%E2%80%93%20Hex%20Table.md)"
depth: 2
tags:
  - "type/page"
  - "section/remote"
summary: "The grandMA2 can be remote controlled via Telnet."
---

# Telnet Remote

> [!source]- Source
> [MA Lighting Help – Telnet Remote](https://help.malighting.com/grandMA2/en/help/key_remote_control_telnet.html)

Version 3.9

# Telnet Remote

The grandMA2 can be remote controlled via Telnet.

This gives access to command line. Any command that can be executed locally in the command line on a station, can also be done using the Telnet connection.

It needs to be enabled in the Global Settings: **Setup -> Console -> Global Settings -> Telnet**

Here is a setting called "Telnet" with two options: **Login Disabled** and **Login Enabled**.

When it is enabled, then the station (Console or onPC) can be reached by its IP address and the IP port number 30000 - do not use the Telnet default IP port 23.

**Hint:**  
Using port 30001 gives read only access to the [System Monitor](../Other%20System%20Tools/System%20monitor.md).

Using this IP address and port number will give access to the command line.

Using a telnet program like PuTTy the feedback from the grandMA2 will look like this:

![](../../img/img_putty_v3-3.png)

_PuTTy Telnet feedback_

It is not actually logged in as the default **guest** user, even though the feedback writes it.

Before any commands can be sent to the system, there needs to be a [login command](../../Keywords/Login.md) for one of the users in the show.

**Hint:**  
In installations where Telnet is used to control a grandMA2 system, it might be a good idea to create a special user for the Telnet commands. Be aware that the telnet connection is case sensitive with the username and password.

After the login, any commands can be written to the system.

**Restriction:**  
Pay close attention when accessing the fixture setup and schedule from the telnet connection. It lock access for other users and there is no explaining warning.

← [Web Remote](Web%20Remote.md) | [Decimal – Hex Table](Decimal%20%E2%80%93%20Hex%20Table.md) →

Part of [Remote Control](../../Sections/Remote%20Control.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
