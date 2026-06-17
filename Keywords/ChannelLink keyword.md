---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ChannelLink keyword"
slug: "key_keyword_channellink"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_channellink.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# ChannelLink keyword

> [!source]- Source
> [MA Lighting Help – ChannelLink keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_channellink.html)

Version 3.9

# ChannelLink keyword

**ChannelLink** is a function used to toggle the Channel faders to dynamic mode.

To execute this keyword type **ChannelLink** or the shortcut **ChannelL** into the command line. 

## Syntax

ChannelLink

ChannelLink On

ChannelLink Off

ChannelLink \[Attribute-List\]

If no attribute list is given, the ChannelLink mode will be Dimmer (fader controls the dimmer attributes of the current selection).

## Examples

\[Channel\]> ​ChannelLink

Toggles ChannelLink mode on or off.

\[Channel\]> ​ChannelLink PresetType "Position"

Toggles ChannelLink mode on for pan and tilt.

\[Channel\]> ​ChannelLink Attribute "Iris" + "Focus"

Toggles ChannelLink mode on for iris and focus.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
