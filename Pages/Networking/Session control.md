---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Session control"
slug: "key_network_session"
url: "https://help.malighting.com/grandMA2/en/help/key_network_session.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[Sections/Networking](../../Sections/Networking.md)"
prev_page: "[Pages/Networking/Using DHCP in MA devices](Using%20DHCP%20in%20MA%20devices.md)"
next_page: "[Pages/Networking/Getting DMX in and out of the system](Getting%20DMX%20in%20and%20out%20of%20the%20system.md)"
depth: 2
tags:
  - "type/page"
  - "section/network"
summary: "To connect MA devices you need to create a session."
---

# Session control

> [!source]- Source
> [MA Lighting Help – Session control](https://help.malighting.com/grandMA2/en/help/key_network_session.html)

Version 3.9

# Session control

To connect MA devices you need to create a session.

## MA Network Control

Sessions and Stations (consoles and onPC) relation to sessions are controlled in **MA Network Control** found in the Setup menu.

It can be opened it by pressing Setup and then tap MA Network Control.

It could look like this:

![](../../img/menu_ma-network-control_v3-2.png)

_Menu MA-Net Control_

The left side of this menu displays the different sessions in the network.

There can be a maximum of 31 sessions. Each session needs a unique session number (between 1 and 31).

There is always a line in the session control that "holds" the stations that are not currently in a session. This line is called **Not connected**.

The right side of the menu lists the different stations that are in the session selected on the left side (including the "Not connected").

## Master and Connected

In a session there is always one station that have the **Master** role. If there is more stations in the session, then the others will have the **Connected** role.

The Master is the one that transmit DMX on the network. It is also the console that executes the commands that are triggered by the sequences. If you are using MIDI, then it is important to know that the Master is the one that will transmit the MIDI information, and the station that needs the MIDI signal.

The Master is also the one that will upload the show file to new devices added to the network.

The Master and the Connected stations are all equal members in the session any one can run cues and they share all the information. If you save the show on one station it is saved on all stations.

If one session member changes the show while in a session, then all members will get the new show.

## Station priorities

You can control what station gets the Master role using the **Station Priority** setting. If one station has the "High" priority, then this station will be the Master.

There are four different priorities:

*   **Never:**  
    A station with this priority will connect to a session, but it cannot create a session, and if it is the only station left then the session will end!
*   **Low:**  
    A station with this priority will connect to a session. It will only be the Master if there is no one else with a higher priority.
*   **Normal:**  
    This is the default priority.
*   **High:**  
    In the ideal system you will have one station that have the high priority.

It is only possible to change the priority when a station is not connected to a session.

## Speed and Link Speed

The session list will display the session number, name, IP address of the master and a **Speed**. This speed can be Fast or Slow.

A **Fast** session means that the session is running at maximum speed and data packets are sent as fast as possible and in burst.

A **Slow** session means that data packets are being cued up and sent at a slower rate. Then older hardware (grandMA1 era) - with slower network cards - have a chance to keep up.

The session speed is automatically changed if the master detects older hardware directly behind the network adapter and only when the station is switched on - when the first device is a gigabit switch, it is always fast. The only way to manually change the speed is to limit a Ethernet connection to 100Mbit in the switch or in the station.

Each station also have a Link Speed column. Here it shows directly the Mbit speed connection for the station. You can change what the network card in the console is set to using the [SetNetworkSpeed command](../../Keywords/SetNetworkSpeed.md).

Please read the following pages to learn about creating sessions and adding more devices to the session.

  

* * *

#### Sub topics

*   [How to create a session](How%20to%20create%20a%20session.md)
*   [Protecting the session and station](Protecting%20the%20session%20and%20station.md)
*   [Adding devices to the session](Adding%20devices%20to%20the%20session.md)
*   [How to end or leave a session](How%20to%20end%20or%20leave%20a%20session.md)
*   [Session collision](Session%20Collision.md)

← [Using DHCP in MA devices](Using%20DHCP%20in%20MA%20devices.md) | [Getting DMX in and out of the system](Getting%20DMX%20in%20and%20out%20of%20the%20system.md) →

Part of [Networking](../../Sections/Networking.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
