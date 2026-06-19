---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Delete Presets"
slug: "key_presets_delete"
url: "https://help.malighting.com/grandMA2/en/help/key_presets_delete.html"
section: "Presets"
ma2_section: "key_presets"
section_ref: "[[Sections/Presets]]"
prev_page: "[[Pages/Presets/Update Presets]]"
depth: 2
tags:
  - "type/page"
  - "section/presets"
summary: "It is possible to delete presets in three different ways."
---

# Delete Presets

> [!source]- Source
> [MA Lighting Help – Delete Presets](https://help.malighting.com/grandMA2/en/help/key_presets_delete.html)

Version 3.9

# Delete Presets

It is possible to delete presets in three different ways. Use either the keys of the console or the command line. 

1.  To delete single presets:

*   Press Del and then tap the preset you would like to delete. 

2.  To delete several presets, type into the command line:

\[Channel\]> Delete Preset 4.1 Thru 4.5

Deletes presets 1 to 5 in the preset pool **Color**.  

3.  To delete all presets in all pools, type into the command line:

\[Channel\]> Delete Preset \*.\*

Empties all pools completely. 

**Important:**  
If you store a preset in a sequence and then delete the preset, the link to the preset pool will be removed from the sequence. Instead, the actual values will be displayed in the sequence. Oopsing the action will recover the preset but not the link.

← [[Pages/Presets/Update Presets]]

Part of [[Sections/Presets]] · [[000 Map of Content]]
