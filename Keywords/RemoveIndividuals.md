---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "RemoveIndividuals"
slug: "key_keyword_removeindividuals"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_removeindividuals.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "RemoveIndividuals is a command used to delete individual values of effects and effect lines."
---

# RemoveIndividuals

> [!source]- Source
> [MA Lighting Help – RemoveIndividuals](https://help.malighting.com/grandMA2/en/help/key_keyword_removeindividuals.html)

Version 3.9

# RemoveIndividuals Keyword

To get the **RemoveIndividuals** keyword in the command line, type **RemoveIndividuals** or the shortcut **Removei** in the command line.

## Description

**RemoveIndividuals** is a command used to delete individual values of effects and effect lines. 

## Syntax

RemoveIndividuals \[Object-list\]

**Important:**  
If you type the command into the command line, a warning pop-up appears. Note that removing individual settings of an effect alters the effect altogether.

For more information see the example in [Use predefined effects](../Pages/Effects/Use%20Predefined%20Effects.md). 

## Example: 

\[Channel\]> RemoveIndividuals Effect 1 Thru 10

Removes the individual values in effect 1 through 10.

\[Channel\]> RemoveIndividuals Effect 1.11.2  /nc

Removes the individual values in the second effect line of the effect 11 without confirmation.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
