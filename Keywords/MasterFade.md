---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "MasterFade"
slug: "key_keyword_masterfade"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_masterfade.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "MasterFade keyword is a function to adjust the on and off fade time of chasers and effects, and the off fade time for sequence executors."
---

# MasterFade

> [!source]- Source
> [MA Lighting Help – MasterFade](https://help.malighting.com/grandMA2/en/help/key_keyword_masterfade.html)

Version 3.9

# MasterFade Keyword

To get the MasterFade keyword in the command line, type **MasterFade** or the shortcut **MasterF** in the command line.

## Description

MasterFade keyword is a function to adjust the on and off fade time of chasers and effects, and the off fade time for sequence executors.

## Syntax

Assign Masterfade (At) \[Executor-list\]

**Masterfade** **\[value\] \[Executor-list\] (Fade \[seconds\])**

Set the Masterfade to a negative value, to link the Master fade to the default Off time

## Example

\[Channel\]> ​Assign Masterfade At Executor 1 Thru 5

Gives fader 1 thru 5 Masterfade functionality.

\[Channel\]> ​Masterfade 5 Executor 1

Sets the on and off fade time of executor 1 to 5 seconds.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
