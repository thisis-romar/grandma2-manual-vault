---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Flip"
slug: "key_keyword_flip"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_flip.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "Flip is a function keyword to access the different pan/tilt combinations that points a moving head in the same direction."
---

# Flip

> [!source]- Source
> [MA Lighting Help – Flip](https://help.malighting.com/grandMA2/en/help/key_keyword_flip.html)

Version 3.9

# Flip Keyword

To get the Flip keyword in the command line type **Flip** or the shortcut **Fl** in the command line.

## Description

Flip is a function keyword to access the different pan/tilt combinations that points a moving head in the same direction.

Flip adds 180 degrees to the pan value of the fixtures and inverts the tilt angle. If the fixture reaches its physical end stop, the pan and tilt value will be set to the smallest possible value. Flip points the fixture in the same direction but with another pan/tilt combination.

If no selection list is entered, Flip is applied to the fixture selection.

If no flip number is entered, the function toggles through the different possible combinations.

## Syntax

Flip \[flip number\] \[selection list\]

## Examples

*   To set the pan and tilt of the fixture selection to the next pan/tilt combination that points in the same direction, type in the command line:

\[Channel\]> Flip

*   To set the pan and tilt of group 7 to the second of the pan/tilt combination that points in the same direction, type in the command line:

\[Channel\]> Flip 2 Group 7

Part of [[000 Keyword Index]] · [[000 Map of Content]]
