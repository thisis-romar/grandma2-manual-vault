---
type: "keyword"
keyword: "Speed"
slug: "key_keyword_speed"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_speed.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Speed

> [!source]- Source
> [MA Lighting Help – Speed](https://help.malighting.com/grandMA2/en/help/key_keyword_speed.html)

Version 3.9

# Speed Keyword

To get the Speed keyword, type **Speed** or the shortcut **Spee** in the command line.

## Description

With the Speed keyword, you assign faders the function speed. Speed adjust the effect speed in the cues and the speed of a chasers for the selected executor.

The unit for the value is depending on the selected speed mode (BPM/Hz/Sec) in the **Setup I User I Settings I Speed Mode**.

For more information see [executors - assign a function](key_exec_assign.html).

The Speed keyword is a function keyword.

## Syntax

Assign Speed \[Executor-list\]

Speed \[Value**\] \[Executor-list\]**

## Examples

**Requirement:**

A sequence or a chaser is assigned to the executor 28. 

*   After executing this command you are able to control the speed of the sequence or the chaser with a fader.

\[Channel\]> Assign Speed Exec 28

**Requirement:**

A sequence or a chaser is assigned to the executor 3. 

*   Sets speed of the sequence or chaser to 120.

\[Channel\]> Speed 120 Executor 3

Part of [[000 Keyword Index]] · [[000 Map of Content]]
