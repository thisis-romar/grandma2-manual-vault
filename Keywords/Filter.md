---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Filter"
slug: "key_keyword_filter"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_filter.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "Filter is an object keyword representing attribute filter and layer filter from the filter pool."
---

# Filter

> [!source]- Source
> [MA Lighting Help – Filter](https://help.malighting.com/grandMA2/en/help/key_keyword_filter.html)

Version 3.9

# Filter Keyword

To execute the keyword Filter in the command line press Group Group Group (= Filter).

Another way is to type **Filter** or the shortcut **Fil** directly in the command line.

## Description

Filter is an object keyword representing attribute filter and layer filter from the filter pool.

The default function for this object is [Call](Call%20keyword.md). Calling a filter applies the filter temporary and limits the next programmer action.

Selecting a filter limits all programmer actions until filter 1 is selected.

For more information see [worlds, filters, and masks](../Sections/Worlds%20Filters%20and%20Masks.md).

## Syntax

Filter \[ID\]

## Examples

\[Channel\]> Filter 4

Calls filter 4 (next programmer action uses this filter).

\[Channel\]> Select Filter 5

Selects filter 5 (all programmer actions use this filter).

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
