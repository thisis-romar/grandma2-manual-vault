---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Attribute List"
slug: "key_cs_attribute_list"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_attribute_list.html"
section: "Command Syntax and Keywords"
ma2_section: "key_command_syntax_and_keywords"
section_ref: "[Sections/Command Syntax and Keywords](../../Sections/Command%20Syntax%20and%20Keywords.md)"
prev_page: "[Pages/Command Syntax and Keywords/Executor List](Executor%20List.md)"
next_page: "[Pages/Command Syntax and Keywords/Station List](Station%20List.md)"
depth: 3
tags:
  - "type/page"
  - "section/cs"
summary: "An attribute list is an object list of attributes."
---

# Attribute List

> [!source]- Source
> [MA Lighting Help – Attribute List](https://help.malighting.com/grandMA2/en/help/key_cs_attribute_list.html)

Version 3.9

# Attribute List

An attribute list is an object list of attributes. 

### Syntax

**Attribute** \[list\]

Feature \[list\]

PresetType \[list\]

**Important:**  
An attribute list has the same syntax as an object list. Each object type is broken down to attribute objects. These attribute objects form the attribute list.

### Example:

\[Channel\]> **On Feature** "GOBO1"

Activates attributes in feature "GOBO1". 

\[Channel\]> **Off Attribute** 8.1.1 **Thru** 4

Knocks out the first 4 shaper attributes out of the programmer.

← [Executor List](Executor%20List.md) | [Station List](Station%20List.md) →

Part of [Command Syntax and Keywords](../../Sections/Command%20Syntax%20and%20Keywords.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
