---
type: "keyword"
keyword: "DisconnectStation keyword"
slug: "key_keyword_disconnectstation"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_disconnectstation.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# DisconnectStation keyword

> [!source]- Source
> [MA Lighting Help – DisconnectStation keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_disconnectstation.html)

Version 3.9

# DisconnectStation keyword

**DisconnectStation** is a function used to throw stations out of your session.

To execute this keyword type **DisconnectStation** or the shortcuts – **DS** or **Di** – into the command line. 

## Syntax

DisconnectStation \[Station-list\]

## Options

To get a list of all options available for the keyword **DisconnectStation** in the command line feedback window type into the command line:

\[Channel\]> DisconnectStation /?

The keyword **DisconnectStation** has the following option:

Option

Shortcut

Option value

Description

noconfirm

nc

no option value

Suppresses confirmation pop-up. 

## Example:

\[Channel\]> ​DisconnectStation 192.168.0.10

Disconnects station with IP address 192.168.0.10.

\[Channel\]> ​DisconnectStation 10

Disconnects station with host ID 10 on your Network.

\[Channel\]> ​DisconnectStation Thru

Disconnects all stations on your subnet.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
