---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "AddUserVar keyword"
slug: "key_keyword_adduservar"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_adduservar.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "AddUserVar is a function used to change/extend content of user specific variables."
---

# AddUserVar keyword

> [!source]- Source
> [MA Lighting Help – AddUserVar keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_adduservar.html)

Version 3.9

# AddUserVar keyword

AddUserVar is a function used to change/extend content of user specific variables.

To execute the keyword AddUserVar type **AddUserVar** or the shortcut **AddU** into the command line. 

## Syntax:

AddUserVar $variablename = numericvalue

AddUserVar $variablename = "text"

## Example:

\[Channel\]> SetUserVar $myname = "John"

 Sets the variable $myname to **John.**

\[Channel\]> AddUserVar $myname = " Doe"

 Sets the variable $myname to **John Doe.**

\[Channel\]> SetUserVar $mycounter = 5

 Sets the variable $mycounter to 5.

\[Channel\]> AddUserVar $mycounter = 6

 Sets the variable $mycounter to 11.

For more information see the following links:

$ \[Dollar-sign\]

ListUserVar Keyword

ListVar Keyword

SetVar Keyword

SetUserVar Keyword

AddVar Keyword

AddUserVar Keyword

\[ \] \[Square Brackets\]

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
