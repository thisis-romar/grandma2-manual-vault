---
type: "page"
title_str: "Using DHCP in MA devices"
slug: "key_network_dhcp"
url: "https://help.malighting.com/grandMA2/en/help/key_network_dhcp.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[[Sections/Networking]]"
prev_page: "[[Pages/Networking/Set the IP address in the onPC]]"
next_page: "[[Pages/Networking/Session control]]"
depth: 2
tags:
  - "type/page"
  - "section/network"
---

# Using DHCP in MA devices

> [!source]- Source
> [MA Lighting Help – Using DHCP in MA devices](https://help.malighting.com/grandMA2/en/help/key_network_dhcp.html)

Version 3.9

# Using DHCP in MA devices

The grandMA2 supports the use of DHCP (Dynamic Host Configuration Protocol). Use the normal procedure for setting static IP addresses in your devices, if you do not know what DHCP is.

DHCP is enabled as a default when you do a full install. It can also be enabled on Consoles, NPU, and DMX Nodes from the Setup->Network->MA Network Configuration. Read more about this in the [Adding devices to your session topic](key_network_session_add_device.html).

The device will look for a DHCP server in the network during the boot process. If a DHCP server is not found, then the device will assign an IP address in the APIPA (Automatic Private IP Addressing) range. This address will begin with 169.254.x.y.

DHCP can also be used to define a gateway address. This can also be done with static address, but only when using the [SetIP keyword](key_keyword_setip.html) in the command line.

← [[Pages/Networking/Set the IP address in the onPC]] | [[Pages/Networking/Session control]] →

Part of [[Sections/Networking]] · [[000 Map of Content]]
