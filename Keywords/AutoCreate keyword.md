---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "AutoCreate keyword"
slug: "key_keyword_autocreate"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_autocreate.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# AutoCreate keyword

> [!source]- Source
> [MA Lighting Help – AutoCreate keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_autocreate.html)

Version 3.9

# AutoCreate keyword

To execute the keyword AutoCreate, type **AutoCreate** or the shortcut **Au** into the command line. 

## Description

The keyword **AutoCreate** automatically creates preset objects. 

**Important:**  
To auto create presets, create preset reference first. 

For more information on AutoCreate in the Setup see [Auto create presets](key_presets_auto_create.html).

## Syntax

AutoCreate \[Object\]

## Options

To get a list of all options of the keyword AutoCreate, type the following into the command line:

\[Channel\]> AutoCreate /?

The keyword AutoCreate has the following options:

Option

Shortcut

Description

Add

No shortcut

Adds new objects.

Merge

m

Adds data to existing content. 

## Example

\[Channel\]> AutoCreate FixtureType 2. "PresetReferences"

Generates all presets with preset references of fixture type 2 and merges them with the existing presets.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
