---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "View"
slug: "key_keyword_view"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_view.html"
keyword_type: "unknown"
related_key: "[Keys/View Key](../Keys/View%20Key.md)"
tags:
  - "type/keyword"
summary: "The view keyword calls views on a screen."
---

# View

> [!source]- Source
> [MA Lighting Help – View](https://help.malighting.com/grandMA2/en/help/key_keyword_view.html)

Version 3.9

# View Keyword

To get the View keyword in the command line, press View or type **View** in the command line.

## Description

The view keyword calls views on a screen.

With the option **/screen** you select

on which screen the view will be called

\- or -

which screens will be stored in a view.

## Syntax

View \[ID\]

View \[ID\] / screen = \[ID\]

View \[ID\] / \[option\] = \[option value\]

## Options

The following table displays the assignable options along with the [Assign keyword](Assign%20keyword.md).

Option

Option Value

Name

View name, e.g. "Stage Extern".

Info

Additional information to the view, e.g. "all I need".

## Examples

*   Call view 2 from the view pool on that screen where it is stores from.

\[Channel\]> View 2

*   Call view 5 on screen 2.

\[Channel\]> View 5 /screen = 2

*   Store the content of screen 2, 3, and 4 at view object 5.

\[Channel\]> Store View 5 /screen = 234

*   Assign view 2 the name Stage Extern.

\[Channel\]> Assign View 2/name = "Stage Extern"

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
