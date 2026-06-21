---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "SpecialMaster"
slug: "key_keyword_specialmaster"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_specialmaster.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "Specialmaster is an object type that holds predefined objects for global control."
---

# SpecialMaster

> [!source]- Source
> [MA Lighting Help – SpecialMaster](https://help.malighting.com/grandMA2/en/help/key_keyword_specialmaster.html)

Version 3.9

# SpecialMaster Keyword

To enter the keyword SpecialMaster, press Exec Exec (= SpecialMaster). 

Type **SpecialMaster** into the command line or use the shortcut **SM**.

## Description

Specialmaster is an object type that holds predefined objects for global control.

For more information on the 5 special master groups see [Special masters](../Pages/Advanced%20Executor%20Functionality/Special%20Masters.md). 

## Syntax

**SpecialMaster** \[ID\]

**SpecialMaster** "GroupName" . "Name"

## Examples

\[Channel\]> SpecialMaster "grandmaster" . "grand" At 50

*   Sets the grand master level to 50 %.

\[Channel}> Assign SpecialMaster 2.4 At Executor 15

*   Tuns the executor 15 into a fader to control the volume of the sound output.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
