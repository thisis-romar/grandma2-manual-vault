---
type: "keyword"
keyword: "StepOutFade"
slug: "key_keyword_stepoutfade"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_stepoutfade.html"
keyword_type: "unknown"
related_key: "[[Keys/StepOutFade]]"
tags:
  - "type/keyword"
---

# StepOutFade

> [!source]- Source
> [MA Lighting Help – StepOutFade](https://help.malighting.com/grandMA2/en/help/key_keyword_stepoutfade.html)

Version 3.9

# StepOutFade Keyword

To get the StepOutFade keyword, type **StepOutFade** or the shortcut **StepO** in the command line.

## Description

With the StepOutFade keyword, you assign executors as a step out fader. A step out fader controls the step out time of each step of a chaser.

For more information, see [executors - assign a function](key_exec_assign.html).

The StepOutFade keyword is a function keyword.

## Syntax

StepOutFade \[Executor-list\]

StepOutFade \[Percent\]

## Examples

*   Assign executor 28 as a step out fader.

\[Channel\]> Assign StepOutFade Exec 28

*   Set the step out fader level to 50 % on executor 3.

\[Channel\]> StepOutFade 50 Exec 3

Part of [[000 Keyword Index]] · [[000 Map of Content]]
