---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ChannelFader keyword"
slug: "key_keyword_channelfader"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_channelfader.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "ChannelFader is an object type representing a fader of the ChannelPages."
---

# ChannelFader keyword

> [!source]- Source
> [MA Lighting Help – ChannelFader keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_channelfader.html)

Version 3.9

# ChannelFader keyword

**ChannelFader** is an object type representing a fader of the ChannelPages.

To execute this keyword type ChannelFader or one of the shortcuts – **CF** or **ChannelF** – into the command line.

## Syntax

ChannelFader \[ID\]

**Important:**  
To use ChannelFader create a ChannelPage first. For more information on how to create a channel page see [ChannelPage](ChannelPage%20keyword.md).

The default function for ChannelFader is Call. Calling a ChannelFader will change the executor faders to Channel mode.

For more information on call see [Call](Call%20keyword.md). 

## Example:

\[Channel\]> ​Assign Fixture 301 At ChannelFader 5

Assigns the dimmer of fixture 301 to fader 5 of the current channel page.

\[Channel\]> ​Assign Channel 201 Thru 215 At ChannelFader 2.1

Assigns Channel 201 thru 215 to fader 1 thru 15 of channel page 2.

\[Channel\]> ​Assign Fixture 3.2.1 At ChannelFader 2.11

Assigns the first attribute of the second subfixture of Fixture 3 to fader 11 of channel page 2.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
