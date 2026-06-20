---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "MAtricksInterleave"
slug: "key_keyword_matricksinterleave"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_matricksinterleave.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "MatricksInterleave is a function keyword to create a virtual array of the fixture selection."
---

# MAtricksInterleave

> [!source]- Source
> [MA Lighting Help – MAtricksInterleave](https://help.malighting.com/grandMA2/en/help/key_keyword_matricksinterleave.html)

Version 3.9

# MAtricksInterleave Keyword

To get the MAtricksInterleave keyword in the command line type **MAtricksInterleave** or one of the shortcuts **MI** or **MAtricksI** in the command line.

## Description

MatricksInterleave is a function keyword to create a virtual array of the fixture selection.

With the function MatricksInterleave the selection is wrapped onto a new row for every n'th fixture, creating a virtual array.

For more information see [[Sections/MAtricks|MAtricks]].

## Syntax

MatricksInterleave \[array width\]

MatricksInterleave \[column\].\[array width\]

MatricksInterleave + | -

MatricksInterleave Off

## Examples

*   To select the first column of a 2 column wide array = first of every second fixture = "Odd" type in the command line:
    

\[Channel\]> MatricksInterleave 1.2

*   To increase the array width type in the command line:

\[Channel\]> MatricksInterleave +

Part of [[000 Keyword Index]] · [[000 Map of Content]]
