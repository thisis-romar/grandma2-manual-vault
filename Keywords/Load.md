---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Load"
slug: "key_keyword_load"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_load.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Load

> [!source]- Source
> [MA Lighting Help – Load](https://help.malighting.com/grandMA2/en/help/key_keyword_load.html)

Version 3.9

# Load Keyword

To get the Load keyword into the command line, press Goto Goto or type **Load** in the command line.

## Description

The load keyword is a function keyword used to prepare an executor to jump to another cue rather than jumping to the next cue when a Go+ is performed on the executor. 

## Syntax

**Load**  **\[Cue object\] \[Executor object\]**

## Example

*   To load cue 3 on the selected executor, type in the command line:

\[Channel\]> Load Cue 3

Cue 3 is loaded. To indicate that a cue is loaded, a red **Loaded 3** (= Cue 3) starts flashing.

![](../../img/img_selected-executor_load_v3_2.png)

_Selected executor - cue 3 loaded_

*   To load cue 5 on executor 4, type in the command line:

\[Channel\]> Load Cue 5 Executor 4

*   To select from a list which cue to load on executor 3, type in the command line:

\[Channel\]> Load Executor 3

Part of [[000 Keyword Index]] · [[000 Map of Content]]
