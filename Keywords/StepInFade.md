---
type: "keyword"
keyword: "StepInFade"
slug: "key_keyword_stepinfade"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_stepinfade.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# StepInFade

> [!source]- Source
> [MA Lighting Help – StepInFade](https://help.malighting.com/grandMA2/en/help/key_keyword_stepinfade.html)

Version 3.9

# StepInFade Keyword

To get the StepInFade keyword, type **StepInFade** or the shortcut **StepI** in the command line.

## Description

The StepInFade keyword assigns executors as a step in fader. A step in fader controls the step in time of each step of a chaser.

For more information, see [executors - assign a function](key_exec_assign.html).

## Syntax

StepInFade \[Executor-list\]

StepInFade \[Percent\]

## Examples

*   Assign existing executor 28 as a step in fader.

\[Channel\]> Assign StepInFade Exec 28

*   Set the step in fade level to 50 % on executor 3.

\[Channel\]> StepInFade 50 Executor 3

Part of [[000 Keyword Index]] · [[000 Map of Content]]
