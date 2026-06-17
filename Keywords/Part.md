---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Part"
slug: "key_keyword_part"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_part.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Part

> [!source]- Source
> [MA Lighting Help – Part](https://help.malighting.com/grandMA2/en/help/key_keyword_part.html)

Version 3.9

# Part Keyword

To get the Part keyword in the command line, press Cue Cue (= Part).

You can also type **Part** or the shortcut **P** in the command line.

## Description

The Part keyword is an object keyword to segment cues in parts.

Parts are useful to assign and edit different timings of groups of fixture parameters.

## Syntax

**\[Function\] Part** \[ID\]

## Example

*   To create a second part of cue 3 for the selected executor, type in the command line:

\[Channel\]> Store Cue 3 Part 2

*   To move part 2 of cue 2 at part 3 of cue 2 for the selected executor, type in the command line:

\[Channel\]> Move Cue 2 Part 2 At Cue 2 Part 3

*   To delete part 2 of cue 1 for the selected executor, type in the command line:

\[Channel\]> Delete Cue 1 Part 2

          The choose delete cue part method pop-up opens.

![](../../img/popup_choose-delete-cue-part-method_v3-2.png)

_Choose delete cue part method pop-up_

To move the fixture or channel values to the main cue tap, move values to default cue part.  
Timings will be deleted.

To delete the part with all values tap, delete values of cue part.

The part is deleted.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
