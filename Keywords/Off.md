---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Off"
slug: "key_keyword_off"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_off.html"
keyword_type: "unknown"
related_key: "[[Keys/Off Key]]"
tags:
  - "type/keyword"
summary: "The Off keyword can be a function keyword or a helping keyword."
---

# Off

> [!source]- Source
> [MA Lighting Help – Off](https://help.malighting.com/grandMA2/en/help/key_keyword_off.html)

Version 3.9

# Off Keyword

To get the Off keyword into the command line, press Off.

You can also type **Off** or the shortcut **Of** in the command line.

## Description

The Off keyword can be a function keyword or a helping keyword.

With the Off keyword as a function keyword you can:

*   Stop an executor.
*   Knock out parameters of the programmer.
*   Knock out selections of the programmer.
*   Knock out active attributes of the programmer.

With the Off keyword as a helping keyword you indicate the end of a temporary function, or the disabled state of a toggling function.

## Syntax

**Off** \[Object-list\] (function keyword)

\[Function\] **Off** \[Object-list\] (helping keyword)

\[Function\] **Off** (helping keyword)

## Examples

*   To knockout the parameters of cue 1 of the selected executor from the programmer, type in the command line:

\[Channel\]> Off Cue 1

* * *

*   To knockout the parameters of fixture 1 and 3 from the programmer, type in the command line:

\[Channel\]> Off Fixture 1 + 3

* * *

*   To indicate a released flash executor 1.2.4, type in the command line:

\[Channel\]> Flash Off Executor 1.2.4

* * *

*   To turn off highlight, type in the command line:

\[Channel\]> Highlight Off

Part of [[000 Keyword Index]] · [[000 Map of Content]]
