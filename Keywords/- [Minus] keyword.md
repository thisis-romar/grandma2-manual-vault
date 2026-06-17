---
type: "keyword"
keyword: "- [Minus] keyword"
slug: "key_keyword_minus"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_minus.html"
keyword_type: "unknown"
related_key: "[[Keys/- [Minus] keyword]]"
tags:
  - "type/keyword"
---

# - [Minus] keyword

> [!source]- Source
> [MA Lighting Help – - [Minus] keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_minus.html)

Version 3.9

# \- \[Minus\] keyword

 - \[Minus\] is a helping keyword with various functions.

To execute the keyword **\- \[Minus\]** type **\-** into the command line. 

## Syntax:

\- \[Minus\] is used to remove objects from a list or to indicate a negative value. When used as a relative indicator, with no value given, the value of 1 will be used.

When used to indicate a value it can indicate an absolute or relative value. Adding a space between - \[Minus\] and the value makes it relative. No space makes it an absolute value.

E.g., giving a Pan attribute a value of \- 10 subtracts 10 degrees from the current location. Giving the Pan attribute a value of \-10 sets the pan at -10 degrees.  See the difference between adding and not adding a space.

Using the numeric keys automatically adds the space.

If used as a starting keyword, - \[Minus\] creates a selection list, which is removed from the current selection. 

## Example:

\[Channel\]> Group 5 - Channel 2

 Selects group 5 but not channel 2.

\[Channel\]> At - 10

 Subtracts 10% from the current dimmer value of the selected fixtures.

\[Channel\]> - 5 Thru 7

 Removes channel 5, 6 and 7 from the current selection.

\[Channel\]> Page -

 Same as Page - 1, which calls previous page.

**Hint:**  
To execute this function you can also use the key \- on the console. 

For more information see the key [\-](key_key_minus.html).

Part of [[000 Keyword Index]] · [[000 Map of Content]]
