---
type: "keyword"
keyword: "Unblock"
slug: "key_keyword_unblock"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_unblock.html"
keyword_type: "unknown"
related_key: "[[Keys/Unblock]]"
tags:
  - "type/keyword"
---

# Unblock

> [!source]- Source
> [MA Lighting Help – Unblock](https://help.malighting.com/grandMA2/en/help/key_keyword_unblock.html)

Version 3.9

# Unblock Keyword

To go to the Unblock keyword, type **Unblock** in the command line or use the shortcut **UB** / **Unb**.

## Description

The unblock keyword convert blocked values in cues (displayed white) into tracking values (displayed magenta).

If the selected executor is on, the unblock keyword will be applied for the current cue of selected executor.  
If the selected executor is off, the unblock keyword will be applied for all cues of the selected executor.

If unblock does not contain any selection-list, all fixtures will be used.

If unblock does not contain any attribute-list, all attributes will be used.

Unblock is a function keyword.

## Syntax

Unblock \[Object-list\] If \[Selection-list\] If \[Attribute-list\] / \[Option\]

## Options

The following table displays the available Unblock options.

Option

Shortcut

Description

defaultvalues

dv

Removes the default values.

## Examples

*   Unblock all values after programming from the selected executor. The selected executor is off.

\[Channel\]> Unblock

*   Unblock all values from the current cue. The selected executor is on.

\[Channel\]> Unblock

*   Unblock all values from feature position, fixture 1 in cue 3.

\[Channel\]> Unblock Cue 3 If Fixture 1 If Feature "Position"

*   Unblock all default values from sequence 1.

\[Channel\]> Unblock Sequ 1 /dv

Part of [[000 Keyword Index]] · [[000 Map of Content]]
