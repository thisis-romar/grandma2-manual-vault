---
type: "keyword"
keyword: "AddVar"
slug: "key_keyword_addvar"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_addvar.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# AddVar

> [!source]- Source
> [MA Lighting Help – AddVar](https://help.malighting.com/grandMA2/en/help/key_keyword_addvar.html)

Version 3.9

# AddVar Keyword

To get the AddVar keyword in the command line type **AddVar** or the shortcut **Ad** in the command line.

## Description

AddVar is a function keyword to change or extend content of show specific variables.

## Syntax

AddVar $variablename = numericvalue

AddVar $variablename = "text"

## Examples

\[Channel\]> SetVar $myname = "John"

 - Sets the variable $myname to John

\[Channel\]> AddVar $myname = " Doe"

 - Sets the variable $myname to John Doe

\[Channel\]> SetVar $mycounter = 5

 - Sets the variable $mycounter to 5

\[Channel\]> AddVar $mycounter = 6

 - Sets the variable $mycounter to 11

Part of [[000 Keyword Index]] · [[000 Map of Content]]
