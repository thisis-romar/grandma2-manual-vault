---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Using DHCP in MA devices"
slug: "key_network_dhcp"
url: "https://help.malighting.com/grandMA2/en/help/key_network_dhcp.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[Sections/Networking](../../Sections/Networking.md)"
prev_page: "[Pages/Networking/Set the IP address in the onPC](Set%20the%20IP%20address%20in%20the%20onPC.md)"
next_page: "[Pages/Networking/Session control](Session%20control.md)"
depth: 2
tags:
  - "type/page"
  - "section/network"
summary: "The grandMA2 supports the use of DHCP (Dynamic Host Configuration Protocol)."
---

# Using DHCP in MA devices

> [!source]- Source
> [MA Lighting Help – Using DHCP in MA devices](https://help.malighting.com/grandMA2/en/help/key_network_dhcp.html)

Version 3.9

# Using DHCP in MA devices

The grandMA2 supports the use of DHCP (Dynamic Host Configuration Protocol). Use the normal procedure for setting static IP addresses in your devices, if you do not know what DHCP is.

DHCP is enabled as a default when you do a full install. It can also be enabled on Consoles, NPU, and DMX Nodes from the Setup->Network->MA Network Configuration. Read more about this in the [Adding devices to your session topic](Adding%20devices%20to%20the%20session.md).

The device will look for a DHCP server in the network during the boot process. If a DHCP server is not found, then the device will assign an IP address in the APIPA (Automatic Private IP Addressing) range. This address will begin with 169.254.x.y.

DHCP can also be used to define a gateway address. This can also be done with static address, but only when using the [SetIP keyword](../../Keywords/SetIP.md) in the command line.

← [Set the IP address in the onPC](Set%20the%20IP%20address%20in%20the%20onPC.md) | [Session control](Session%20control.md) →

Part of [Networking](../../Sections/Networking.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
