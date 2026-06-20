---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ToZero"
slug: "key_keyword_tozero"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_tozero.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The ToZero keyword sets the masterlevel of objects to zero."
---

# ToZero

> [!source]- Source
> [MA Lighting Help – ToZero](https://help.malighting.com/grandMA2/en/help/key_keyword_tozero.html)

Version 3.9

# ToZero Keyword

To go to the ToZero keyword, press <<< <<< <<< (= ToZero).

You can also use the command line and type **ToZero** or use the shortcut **ToZ**.

## Description

The ToZero keyword sets the masterlevel of objects to zero.

ToZero is a function keyword.

**Important:**  
ToZero sets only masterlevels to zero and NOT e.g. speedmaster or crossfader.  
To set all faders to zero, use the [[Keywords/At keyword|At keyword]].

## Syntax

ToZero \[Executor-list\] / \[Option\] = \[Option Value\]

ToZero SpecialMaster \[ID\] / \[Option\] = \[Option Value\]

## Examples

*   Sets the masterlevel of executor 1 to zero.

\[Channel\]> ToZero Executor 1

*   Sets the grandmaster to zero.

\[Channel\]> ToZero SpecialMaster "grandmaster" . "grand"

\- or -

\[Channel\]> ToZero SpecialMaster 2.1

*   Sets the fader of executor 1 with cue mode assert to zero.

\[Channel\]> ToZero Executor 1 / cm = A

Part of [[000 Keyword Index]] · [[000 Map of Content]]
