---
type: "keyword"
keyword: "Fader"
slug: "key_keyword_fader"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_fader.html"
keyword_type: "unknown"
related_key: "[[Keys/Fader]]"
tags:
  - "type/keyword"
---

# Fader

> [!source]- Source
> [MA Lighting Help – Fader](https://help.malighting.com/grandMA2/en/help/key_keyword_fader.html)

Version 3.9

# Fader Keyword

To get the Fader keyword in the command line type **Fader** in the command line.

## Description

Fader is an object keyword representing the fader of an executor.

If you apply a function or reference a property not supported by the fader object, the command will be passed on to the parent executor object.

**Hint:**  
Even though button executors do not have a physical fader, they still have a virtual fader assigned as a master.

## Syntax

Fader \[Executor\]

Fader \[Page\].\[Executor\]

Fader \[Pagepool\].\[Page\].\[Executor\]

## Examples

*   To assign the speed functionality to the fader of executor 5 type in the command line:

\[Channel\]> Assign Speed At Fader 5

*   To set the level/position of fader of executor 5 to 50 % type in the command line:

\[Channel\]> Fader 5 At 50

Part of [[000 Keyword Index]] · [[000 Map of Content]]
