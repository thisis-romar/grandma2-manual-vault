---
type: "page"
title_str: "Set the IP address in the onPC"
slug: "key_network_set_ip_onpc"
url: "https://help.malighting.com/grandMA2/en/help/key_network_set_ip_onpc.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[[Sections/Networking]]"
prev_page: "[[Pages/Networking/Set the IP address in the console]]"
next_page: "[[Pages/Networking/Using DHCP in MA devices]]"
depth: 2
tags:
  - "type/page"
  - "section/network"
---

# Set the IP address in the onPC

> [!source]- Source
> [MA Lighting Help – Set the IP address in the onPC](https://help.malighting.com/grandMA2/en/help/key_network_set_ip_onpc.html)

Version 3.9

# Set the IP address in the onPC

To change the IP address in the onPC, you first need to set the IP address in your computer.

You can only set the IP address equivalent to the Ethernet connector 1.

If you need the onPC to output or input Art-Net, then  it is not necessary to give the computer an IP address in the Art-Net range. MA onPC will automatically generate one.

If you create an IP address in the Art-Net range, then the onPC will not generate one, but use the one you have set. This can be done on an secondary Ethernet adaptor or the same.

The onPC will automatically use the adaptor with the Art-Net range to transmit the Art-Net data.

You need to set the IP address in the computer before opening the onPC program - or restart the program after the IP address have been changed in the computer.

If you are using DHCP, then you will need to make sure that the IP range is the same on all the MA devices that needs to be connected.

## Set the IP address using the command line

When you have set the IP address in the computer, then you can use the [SetIP command](key_keyword_setip.html) to set the IP address. It is important that you write the same IP address as the one set in the computer.

Follow the link to read more about using the [SetIP command](key_keyword_setip.html).

## Set the IP address using the GUI

You can select the IP address by pressing the Setup key and then MA Network Control.

Here you can only select the IP address when the onPC is **not** connected to a session. In the title bar of the menu you can see the current status of the onPC. If it says anything other than "Standalone", then tap Leave Session.

When the onPC is standalone, then you can open the drop down box next to "Station IP". Here you can select the IP address set in Windows. Remember that onPC needs to restart before it uses the selected IP address.

← [[Pages/Networking/Set the IP address in the console]] | [[Pages/Networking/Using DHCP in MA devices]] →

Part of [[Sections/Networking]] · [[000 Map of Content]]
