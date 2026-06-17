---
type: "keyword"
keyword: "ChangeDest keyword"
slug: "key_keyword_changedest"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_changedest.html"
keyword_type: "unknown"
related_key: "[[Keys/ChangeDest keyword]]"
tags:
  - "type/keyword"
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

For more information on the function List see [List](key_keyword_list.html). 

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

Part of [[000 Keyword Index]] · [[000 Map of Content]]
