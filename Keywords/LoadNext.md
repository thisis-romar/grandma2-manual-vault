---
type: "keyword"
keyword: "LoadNext"
slug: "key_keyword_loadnext"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_loadnext.html"
keyword_type: "unknown"
related_key: "[[Keys/LoadNext]]"
tags:
  - "type/keyword"
---

# LoadNext

> [!source]- Source
> [MA Lighting Help – LoadNext](https://help.malighting.com/grandMA2/en/help/key_keyword_loadnext.html)

Version 3.9

# LoadNext

To execute the keyword LoadNext, type **LoadNext** or the shortcut **LoadN** into the command line. 

## Description

LoadNext is a function keyword. If an executor stands in a cue, LoadNext loads the next cue.

If a cue was already loaded, LoadNext loads the subsequent cue of the cue that was already loaded.

## Syntax

LoadNext \[Executor object\]

## Example

\[Channel\]> LoadNext Executor 2

If executor 2 has loaded cue 5, LoadNext loads cue 6. "Loaded 6" starts flashing in red at the bottom of the sequence. 

For more information see the [keyword Load](key_keyword_load.html).

Part of [[000 Keyword Index]] · [[000 Map of Content]]
