---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Executor List"
slug: "key_cs_executor_list"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_executor_list.html"
section: "Command Syntax and Keywords"
ma2_section: "key_command_syntax_and_keywords"
section_ref: "[Sections/Command Syntax and Keywords](../../Sections/Command%20Syntax%20and%20Keywords.md)"
prev_page: "[Pages/Command Syntax and Keywords/Selection List](Selection%20List.md)"
next_page: "[Pages/Command Syntax and Keywords/Attribute List](Attribute%20List.md)"
depth: 3
tags:
  - "type/page"
  - "section/cs"
summary: "An executor list is an object list of executors."
---

# Executor List

> [!source]- Source
> [MA Lighting Help – Executor List](https://help.malighting.com/grandMA2/en/help/key_cs_executor_list.html)

Version 3.9

# Executor List

An executor list is an object list of executors. 

### Syntax

Executor \[list\]

Page \[list\]

FaderPage \[list\]

ButtonPage \[list\]

**Important:**  
An executor list has the same syntax as an object list. Each object type is broken down to executor objects. These executor objects form the executor list. 

### Example:

\[Channel\]> **Pause Page** 1 **Thru** 3

Pauses executors on pages 1, 2, and 3.

\[Channel\]> Delete Executor 10 Thru 13

Deletes executors 10 through 13 of the current page.

← [Selection List](Selection%20List.md) | [Attribute List](Attribute%20List.md) →

Part of [Command Syntax and Keywords](../../Sections/Command%20Syntax%20and%20Keywords.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
