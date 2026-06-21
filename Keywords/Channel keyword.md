---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Channel keyword"
slug: "key_keyword_channel"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_channel.html"
keyword_type: "unknown"
related_key: "[Keys/Channel Key](../Keys/Channel%20Key.md)"
tags:
  - "type/keyword"
summary: "Channel is an object type used to access fixtures with a Channel ID."
---

# Channel keyword

> [!source]- Source
> [MA Lighting Help – Channel keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_channel.html)

Version 3.9

# Channel keyword

Channel is an object type used to access fixtures with a Channel ID.

To execute this keyword type **Channel** or the shortcut **C** into the command line. 

## Syntax

Channel \[ID\]

Channel \[ID\].\[Sub-ID\]

The default function for channel objects is SelFix. This means that entering channels without any specific function will select the channels in programmer.

For more information on default function for channel objects see [SelFix](SelFix.md). 

## Examples

\[Channel\]> ​Channel 34

Selects Channel 34.

\[Channel\]> ​Channel 11.5

Selects the fifth subfixture of the fixture Channel 11.

\[Channel\]> ​Channel 11

Selects all subfixtures of the fixture Channel 11.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
