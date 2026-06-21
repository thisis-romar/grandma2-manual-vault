---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ChangeDest keyword"
slug: "key_keyword_changedest"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_changedest.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "ChangeDest is a function used to change the destination of your command line."
---

# ChangeDest keyword

> [!source]- Source
> [MA Lighting Help – ChangeDest keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_changedest.html)

Version 3.9

# ChangeDest keyword

To execute this keyword type **ChangeDest** or one of the shortcuts – **CD** or **Chang** – into the command line.

## Description

**ChangeDest** is a function used to change the destination of your command line.

## Syntax

CD \[Element-index\]

CD "Element name"

CD \[Object-type\] \[Object-ID\]

CD ..

CD /

Changing the destination is done by drilling down through a tree-structured database. To display the elements at a given destination use the function List.

For more information on the function List see [List](List.md). 

## Example:

\[Channel\] > ​CD 3

Enters the 3rd element of the current destination:

Settings 3 >

\[Channel\] > CD "Edit Setup"

Enters the element of the current destination named "Edit Setup":

Edit Setup >

\[Channel\] > CD Group

Enters the predefined destination Groups:

Groups/Global >

Edit Setup/Universes > CD ..

Exits one level up in the tree structure:

Edit Setup >

Edit Setup/Universes > CD /

Exits all levels up the root (no destination):

\[Channel\] >

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
