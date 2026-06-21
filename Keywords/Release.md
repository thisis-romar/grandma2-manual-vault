---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Release"
slug: "key_keyword_release"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_release.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The Release keyword enters release values in the programmer for attributes by the given object list, filtered by the current selection."
---

# Release

> [!source]- Source
> [MA Lighting Help – Release](https://help.malighting.com/grandMA2/en/help/key_keyword_release.html)

Version 3.9

# Release Keyword

To go to the Release keyword, press Delete Delete Delete (= Release).

You can also type **Release** in the command line or use the shortcut **Rel**.

## Description

The Release keyword enters release values in the programmer for attributes by the given object list, filtered by the current selection.

Release values used with a store merge, release previous tracked values from the tracking list and the fixtures uses their default values.

If you release an object, the release is applied to the value layer.  
If you release an effect, the release is applied to the effect layer for the running effect attributes. The effect form release is used.

## Syntax

Release \[Object-list\]

Release \[Effect-list\]

## Examples

*   Enter release values in the programmer for all attributes of the fixture selection in the value layer. A **(R)** is displayed in the value layer.

\[Channel\]> Release Selection

*   Enter release values in the programmer for pan and tilt attributes of the fixture selection.

\[Channel\]> Release PresetType "position"

*   Enter release values in the programmer for the running effect 4 .

\[Channel\]> Release Effect 4

**Hint:**  
To enter release values in the programmer for effects you could also type in the command line, At Form 2.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
