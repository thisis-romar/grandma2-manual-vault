---
type: "keyword"
keyword: "LoadPrev keyword"
slug: "key_keyword_loadprev"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_loadprev.html"
keyword_type: "unknown"
related_key: "[[Keys/LoadPrev keyword]]"
tags:
  - "type/keyword"
---

# LoadPrev keyword

> [!source]- Source
> [MA Lighting Help – LoadPrev keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_loadprev.html)

Version 3.9

# LoadPrev keyword

To execute the keyword LoadPrev, type **LoadPrev** or the shortcut **LoadP** into the command line.

## Description

LoadPrev is a function keyword. If an executor stands in a cue, LoadPrev loads the previous cue.

If a cue was already loaded, LoadPrev loads the preceding cue of the one that was already loaded.  

## Syntax

LoadPrev

## Examples

\[Channel\]> LoadPrev Executor 2

If the executor 2 stands in cue 5, LoadPrev loads cue 4. "Loaded 4" starts flashing in red at the bottom of the mini executor.

If cue 4 was loaded on the executor 2, LoadPrev loads cue 3. "Loaded 3" starts flashing in red at the bottom of the mini executor.

For more information see the [keyword Load](key_keyword_load.html) and the [keyword LoadNext](key_keyword_loadnext.html).

Part of [[000 Keyword Index]] · [[000 Map of Content]]
