---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "SetNetworkSpeed"
slug: "key_keyword_setnetworkspeed"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_setnetworkspeed.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# SetNetworkSpeed

> [!source]- Source
> [MA Lighting Help – SetNetworkSpeed](https://help.malighting.com/grandMA2/en/help/key_keyword_setnetworkspeed.html)

Version 3.9

# SetNetworkSpeed Keyword

To go to the SetNetworkSpeed keyword, type **SetNetworkSpeed** in the command line or use the shortcut **SNS**.

## Description

The SetNetworkSpeed keyword, changes the port speed of the first network adapter of grandMA2 consoles and MA NPU.

It makes sense to reduce the port speed, if grandMA series 2 devices are together with grandMA series 1 devices.

**Important:**  
To apply the changed port speed by using the SetNetworkSpeed keyword, a restart is necessary. If you do not restart the device, the new port speed is not applied.

**Hint:**  
To double-check the link speed, use the [NetworkInfo keyword](key_keyword_networkinfo.html) or press Setup **I** **column Network I** **tap** MA Network Control **I column Link Speed.**

The SetNetworkSpeed keyword is a function keyword.

## Syntax

SetNetworkSpeed 100 \[IP address\]

SetNetworkSpeed 1000 \[IP address\]

## Example

Set the port speed of the first network adapter to 100 Mbit.

\[Channel\]> SetNetworkSpeed 100 192.168.0.32

Part of [[000 Keyword Index]] · [[000 Map of Content]]
