---
type: "keyword"
keyword: "Park"
slug: "key_keyword_park"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_park.html"
keyword_type: "unknown"
related_key: "[[Keys/Park]]"
tags:
  - "type/keyword"
---

# Park

> [!source]- Source
> [MA Lighting Help – Park](https://help.malighting.com/grandMA2/en/help/key_keyword_park.html)

Version 3.9

# Park Keyword

To get the Park keyword in the command line, press Pause Pause (= Park).

You can also type **Park** in the command line.

## Description

The Park keyword is a function keyword to lock DMX output values of attributes. You can also lock DMX output values of a fixture selection, or group of attributes for the current selection.

If no value is given, the attribute is parked at current value.

**Hint:**  
Parked DMX channels are indicated by a blue marker. For more information, see [marker colors](key_ws_colors_marker.html).

**Hint:**  
To unpark previous parked values, use the [Unpark keyword](key_keyword_unpark.html).

## Syntax

**Park** \[Selection-list\] (**At** \[Value\] )

**Park** \[Attribute-list\] (**At** \[Value\] )

**Park** **\[DMX-list\] (****At** **\[Value\] )**

## Examples

*   To park the current values of fixture 5, type in the command line:

\[Channel\]> Park Fixture 5

*   To park the pan attributes of the fixture selection, type in the command line:

\[Channel\]> Park Attribute "pan"

*   To park channel 1 through 10 at 100 %, type in the command line:

\[Channel\]> Park Channel 1 Thru 5 At 100

*   To park DMX channel 1.2 type in the command line:

\[Channel\]> Park DMX 1.2

Part of [[000 Keyword Index]] · [[000 Map of Content]]
