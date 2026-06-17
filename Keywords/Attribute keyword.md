---
type: "keyword"
keyword: "Attribute keyword"
slug: "key_keyword_attribute"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_attribute.html"
keyword_type: "unknown"
related_key: "[[Keys/Attribute keyword]]"
tags:
  - "type/keyword"
---

# Attribute keyword

> [!source]- Source
> [MA Lighting Help – Attribute keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_attribute.html)

Version 3.9

# Attribute keyword

Attribute is an object type used as reference attributes of a fixture.

To execute this keyword type **Attribute** or the shortcut **Att** into the command line. 

## Syntax

Attribute "Name"

Attribute \[number\]

The default function for attributes is Call. Calling attributes will bring them to the encoder and select them in the fixture sheet (blue column header).

Pressing the button Preset twice takes over Attributes into the command line. 

Attributes are organized by Features, which in turn are organized by PresetType. This means that you can also call attributes with the Feature and PresetType keyword using numbers separated by a dot.

**Important:**  
The attribute number may change when new fixtures and attributes are added to the show file. We recommend you use the unique attribute library name in e.g., macros.

**Note:**  
By typing "List Attribute" into the command line presents you a list of attributes with their corresponding names and numbers used in the show file. 

## Examples

\[Channel\]> ​Off Attribute 1

Knocks out first attribute (Dim) for current selection.

\[Channel\]> ​Attribute "pan" At 120

Sets attribute "pan" to 120 degrees for the current selection.

\[Channel\]> Feature 3.1

Calls the first Attribute of the third Feature.

\[Channel\]> Feature $feature.1 At + 1

Increments the value of the first attribute of the current feature for the current selection.

\[Channel\]> ​PresetType 3.2.1

Calls the first Attribute of the second feature of the third preset type.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
