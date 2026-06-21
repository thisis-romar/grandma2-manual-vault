---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ToFull"
slug: "key_keyword_tofull"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_tofull.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The ToFull keyword sets the masterlevel of objects to 100 %."
---

# ToFull

> [!source]- Source
> [MA Lighting Help – ToFull](https://help.malighting.com/grandMA2/en/help/key_keyword_tofull.html)

Version 3.9

# ToFull Keyword

To get the ToFull keyword in the command line, press \>>> \>>> \>>> (= ToFull).  
You can also type **ToFull** or the shortcut **ToF** in the command line.

## Description

The ToFull keyword sets the masterlevel of objects to 100 %.

ToFull is a function keyword.

**Important:**  
ToFull adjusts only masterlevels to 100 % and NOT e.g. speedmaster or crossfader.  
To set all faders to 100 %, use the [[Keywords/At keyword|At keyword]].

## Syntax

ToFull \[Executor-list\] / \[Option\] = \[Option Value\]

ToFull SpecialMaster \[ID\] / \[Option\] = \[Option Value\]

## Examples

*   Sets the masterlevel of executor 1 to 100 %.

\[Channel\]> ToFull Executor 1

*   Sets the grandmaster to full.

\[Channel\]> ToFull SpecialMaster "grandmaster" . "grand"

*   \- or -

\[Channel\]> ToFull SpecialMaster 2.1

*    Sets the fader of executor 1 with cue mode assert to full.

\[Channel\]> ToFull Executor 1 / cm = A

Part of [[000 Keyword Index]] · [[000 Map of Content]]
