---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Preset"
slug: "key_keyword_preset"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_preset.html"
keyword_type: "unknown"
related_key: "[[Keys/Preset Key]]"
tags:
  - "type/keyword"
summary: "With the Preset keyword you can:"
---

# Preset

> [!source]- Source
> [MA Lighting Help – Preset](https://help.malighting.com/grandMA2/en/help/key_keyword_preset.html)

Version 3.9

# Preset Keyword

To get the Preset keyword in the command line, press Preset.

You can also type **Preset** or the shortcut **Pres** in the command line.

## Description

With the Preset keyword you can:

*   Select the fixtures stored in a preset.
*   At a preset to the fixture or channel selection.

If no fixtures or channels are selected in the programmer, the default function is **SelFix**. For more information, see [[Keywords/SelFix|SelFix keyword]].  
If fixtures or channels are selected in the programmer, the default function is **At**. For more information, see [[Keywords/At keyword]].

## Syntax

**Preset** \[ID\]

**Preset** \[Preset-type\].\[ID\]

**Preset** "Name"

Assign **Preset** \[ID\] / \[Parameter\] = \[Parameter Value\]

## Parameter

The following table displays the assignable parameters via command line.

Parameter

Parameter Value

Description

Name

"PresetName"

Assign the preset pool name.

Special

"Normal", "Default", "Highlight", "Stage"

Assign the special mode. For more information, see [[Pages/Presets/What Are Special Modes-|What are special modes?]]

Info

"additional information"

Assign additional information. Assigned information are displayed in the [[Pages/Workspace/Info|info window]].

## Examples

*   Select the fixtures stored in preset 5 of the selected preset type, e.g. dimmer.

\[Channel\]> Preset 5

* * *

*   Sets current selection to the second preset of preset type 3 (gobo).

 \[Channel\]> At Preset 3.2

* * *

*   Select all fixtures stored in any preset with the label "DarkRed".

  \[Channel\]> Preset \*."DarkRed"

Part of [[000 Keyword Index]] · [[000 Map of Content]]
