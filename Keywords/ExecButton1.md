---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ExecButton1"
slug: "key_keyword_execbutton1"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_execbutton1.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# ExecButton1

> [!source]- Source
> [MA Lighting Help – ExecButton1](https://help.malighting.com/grandMA2/en/help/key_keyword_execbutton1.html)

Version 3.9

# ExecButton1 Keyword

To get the ExecButton1 keyword in the command line type **ExecButton1** in the command line.

## Description

ExecButton1 is an object keyword for the first button of an executor.

If you apply a function or reference a property not supported by the ExecButton1 object, the command will be passed on to the parent Executor object.

**Hint:**  
For Fader Executors, the buttons are numbered from the bottom and upwards; 1 is right below fader, 2 is right above fader, 3 is on the top.

## Syntax

ExecButton1 \[Executor\]

ExecButton1 \[Page\].\[Executor\]

ExecButton1 \[Pagepool\].\[Page\].\[Executor\]

## Examples

*   To assign the toggle function to the first button of executor 5 type in the command line:

\[Channel\]> Assign Toggle At ExecButton1 5

*   To delete executor 5 type in the command line:

\[Channel\]> Delete ExecButton1 5

Part of [[000 Keyword Index]] · [[000 Map of Content]]
