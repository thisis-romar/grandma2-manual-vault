---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "CircularCopy keyword"
slug: "key_keyword_circularcopy"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_circularcopy.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# CircularCopy keyword

> [!source]- Source
> [MA Lighting Help – CircularCopy keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_circularcopy.html)

Version 3.9

# CircularCopy keyword

**CircularCopy** is a function used to move attribute values within your current selection.

To execute this keyword type **CircularCopy** or one of the shortcuts – **CC** or **Ci** – into the command line. 

## Syntax

CircularCopy \[offset\]

CircularCopy moves the attribute values within your currently selected fixtures in accordance with the selection order.

This function obeys the At filter.

For more information on how to use filters see [[Pages/Worlds Filters and Masks/What are filters]].

## Example:

\[Channel\]> ​CircularCopy 1

Fixture 1 copies its values to fixture 2, fixture 2 to fixture 3, and the last fixture copies its values back to fixture 1. 

\[Channel\]> ​CircularCopy -2

Fixture 4 copies its values to fixture 2, fixture 3 to fixture 1, and the last fixture copies its values back to fixture 4.

**Hint:**  
​-It is also possible to use the Circular Copy in the MAtricks toolbar. For more information see [[Pages/MAtricks/MAtricks Toolbar|MAtricks toolbar - Circular Copy]]​.  
​-To access the Circular Copy in a window, press Tools. For more Information see the [[Keys/Tools Key|Tools key]].

Part of [[000 Keyword Index]] · [[000 Map of Content]]
