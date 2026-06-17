---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "RdmInfo"
slug: "key_keyword_rdminfo"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdminfo.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# RdmInfo

> [!source]- Source
> [MA Lighting Help – RdmInfo](https://help.malighting.com/grandMA2/en/help/key_keyword_rdminfo.html)

Version 3.9

# RdmInfo Keyword

To get the RdmInfo keyword in the command line, type **RdmInfo** or the shortcut **RdmI** in the command line.

## Description

The RdmInfo keyword opens the RDM info pop-up with the actual RDM information to the entered fixture or channel.

The RdmInfo keyword is a function keyword.

For more information, see [RDM](key_rdm.html).

## Syntax

RdmInfo \[Channel / Fixture\] \[ID\]

RdmInfo \[Channel / Fixture\] \[ID\] / \[screen\] \[ID\]

## Examples

To open the RDM Info pop-up for fixture 3, type in the command line:

\[Channel\]> RDMInfo Fixture 3

 The RDM Info pop-up opens.

![](../../img/popup_rdm-info_v3-2.png)

_RDM Info pop-up_

* * *

To open the RDM Info pop-up for fixture 3 on screen 3:

1\. Type in the command line:

\[Channel\]> RDMInfo Fixture 3/screen = 3

 2. Press Please.

The RDM Info pop-up opens on screen 3.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
