---
type: "keyword"
keyword: "FixtureType"
slug: "key_keyword_fixturetype"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_fixturetype.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# FixtureType

> [!source]- Source
> [MA Lighting Help – FixtureType](https://help.malighting.com/grandMA2/en/help/key_keyword_fixturetype.html)

Version 3.9

# FixtureType Keyword

To execute the keyword FixtureType press ![ma](../../img/ma_1.png) and Fixture or type **FixtureType** or one of the shortcuts **FT** or **FixtureT** into the command line.

## Description

FixtureType is an object keyword for the fixture types in the show file. Fixture types also contain global data in presets. 

**Important:**  
Most edits and command line actions with the keyword FixtureType has to be done while in the Edit Setup mode. For more information, see [ChangeDest keyword](key_keyword_changedest.html).

**Hint:**  
Fixture types are displayed at the bottom of channel and fixture sheets.

## Syntax

FixtureType \[ID\]

## Examples

Edit Setup/Layers 4/Dimmer 2> Assign FixtureType 2 At 1 Thru 4

Assigns fixture type 2 to fixtures 1 through 4. 

\[Channel\]> Clone FixtureType 2 at 3 if Preset "Color".\*

Clones global color presets of fixture type 2 to fixture type 3.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
