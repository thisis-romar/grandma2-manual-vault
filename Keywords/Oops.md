---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Oops"
slug: "key_keyword_oops"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_oops.html"
keyword_type: "unknown"
related_key: "[[Keys/Oops Key]]"
tags:
  - "type/keyword"
---

# Oops

> [!source]- Source
> [MA Lighting Help – Oops](https://help.malighting.com/grandMA2/en/help/key_keyword_oops.html)

Version 3.9

# Oops Keyword

To get the Oops keyword in the command line, type **Oops** or the shortcut **O** in it.

## Description

The Oops keyword is a function keyword to undo the last:

*   Command line actions
*   Fixture selections
*   Programmer actions

Oops can undo the last 100 actions.

For more information, see [[Pages/Workspace/Oops and undo]].

## Syntax

**Oops / \[Option\]**

## Options

To get a list of all available option to the Oops keyword, type in the command line:

\[Channel\]> Oops /?

Option

Option Shortcut

Description

noconfirm

nc

Suppress the confirm undo pop-up.

clear

c

Clears the oops list in the oops pop-up.

## Examples

*   To undo the recent done action, type in the command line:

\[Channel\]> Oops

The confirm undo pop-up opens.

![](../../img/popup_confirm-undo_v3-2.png)

_Confirm undo pop-up_

* * *

*   To undo the recent done action and suppress the confirm undo pop-up, type in the command line:

\[Channel\]> Oops /noconfirm

Part of [[000 Keyword Index]] · [[000 Map of Content]]
