---
type: "keyword"
keyword: "EndIf"
slug: "key_keyword_endif"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_endif.html"
keyword_type: "unknown"
related_key: "[[Keys/EndIf]]"
tags:
  - "type/keyword"
---

# EndIf

> [!source]- Source
> [MA Lighting Help – EndIf](https://help.malighting.com/grandMA2/en/help/key_keyword_endif.html)

Version 3.9

# EndIf Keyword

To get the EndIf keyword in the command line type **EndIf** or the shorcut **En** in the command line.

## Description

EndIf is a helping keyword to indicate the end of an If statement. For more information see [If keyword](key_keyword_if.html).

The EndIf keyword enables If statements to be entered in the middle of a syntax. Upon processing, the If statement is moved to the end of the syntax, and is used as a filter/condition. This enables If syntax to be used in conjunction with pool items.

## Syntax

\[function\] If \[object condition/filter\] EndIf \[object\]

## Example

*   To create preset 1.1 only for group 5 type in the command line:

Store If Group 5 EndIf Preset 1.1

Store Preset 1.1 If Group 5

Part of [[000 Keyword Index]] · [[000 Map of Content]]
