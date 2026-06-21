---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "With"
slug: "key_keyword_with"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_with.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The With keyword is necessary for the replace function."
---

# With

> [!source]- Source
> [MA Lighting Help – With](https://help.malighting.com/grandMA2/en/help/key_keyword_with.html)

Version 3.9

# With Keyword

To go to the With keyword, press Move Move (= Replace), enter search for object values, press Move (= With) again.

You can also type **With** in the command line or use the shortcut **Wi**.

## Description

The With keyword is necessary for the replace function.

The With keyword is a helping keyword.

## Syntax

With replace\_with\_objects \[IF search\_in\_objects\]

## Example

1\. Add 10 degrees to all pan values for all cues and presets.

\[Channel\]> Replace Attribute "Pan" At - 270 Thru 270 With - 260 Thru 280

2\. Replace dimmer value 50 by dimmer value 55 in the programmer, in all sequences, and cues.

\[Channel\]> Replace PresetType 1 At 50 With 55

3\. Replace dimmer value 50 by dimmer value 55 only in the programmer.

**Information:**  
This command structure works only, if you type the command by using the keyboard.  
If you type the command by using the command keys, the At key will interrupt the replace command.

\[Channel\]> Replace At 50 With 55 If Programmer

## Related Links

*   [[Sections/Search and Replace|Search and Replace]]
*   [[Keywords/Replace|Replace Keyword]]
*   [[Keys/Move Key|Move Key]]

Part of [[000 Keyword Index]] · [[000 Map of Content]]
