---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Default"
slug: "key_keyword_default"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_default.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Default

> [!source]- Source
> [MA Lighting Help – Default](https://help.malighting.com/grandMA2/en/help/key_keyword_default.html)

Version 3.9

# Default Keyword

To execute the keyword **Default** press and hold ![ma](../../img/ma_1.png) +  . .

You can also type **Default** or the shortcut **D** into the command line.

## Description

The Default keyword sets the given attributes for the fixture or channel selection to default values. If no attribute list is given, all attributes of fixture or channel selection will be set to their default values.

If **individual default values** for the fixture or channel are set in the edit menu, the individual default value will be used.  
If only **general default values** for the fixture or channel are set in the Patch and Fixture Schedule, the general default values will be used.

You can also use the Default Link in the calculator. For more information, see [[Pages/Workspace/Calculator]].

Default values are displayed in the fixture or channel sheet in brackets.

![](../../img/window_fixture-sheet-default-values_v3-2.png)

_Fixture sheet color default values_

## Syntax

Default

Fixture \[Fixture ID\] Default PresetType \[PresetType Number\]

Channel \[Channel ID\] Default PresetType "PresetType Name"

## Examples

*   Set pan and tilt of the fixture selection to their default values.

\[Channel\]> Default PresetType "Position"

* * *

*    Set all attributes of fixture 1 to their default values.

 \[Channel\]> Fixture 1 Default

Part of [[000 Keyword Index]] · [[000 Map of Content]]
