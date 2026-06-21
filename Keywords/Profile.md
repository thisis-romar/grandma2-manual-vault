---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Profile"
slug: "key_keyword_profile"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_profile.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The Profile keyword is an object keyword to access DMX profiles and DMX profiles points."
---

# Profile

> [!source]- Source
> [MA Lighting Help – Profile](https://help.malighting.com/grandMA2/en/help/key_keyword_profile.html)

Version 3.9

# Profile Keyword

To get the Profile keyword in the command line, type **Profile** or the shortcut **Pro** in the command line.

## Description

The Profile keyword is an object keyword to access DMX profiles and DMX profiles points. For more information, see [DMX profiles](../Sections/DMX%20Profiles.md).

## Syntax

\[Function\] Profile \[DMX Profile ID\].\[DMX Profile Point ID\]

Assign Profile \[DMX Profile ID\].\[DMX Profile Point ID\] /\[Parameter\]=\[Parameter Value\]

## Parameter

The following table displays the assignable parameter for **DMX profiles** via command line.

Parameter

Parameter Value

Description

Name

"80%"

Name of the DMX profile.

The following table displays the assignable parameter for **DMX profile points** via command line.

Parameter

Parameter Value

Description

X

0...1

Assign the x position in physical values of the point.

Y

0...1

Assign the y position in physical values of the point.

## Example

To export DMX profile 1 from the grandMA2 onPC to the folder C:\\ProgramData\\MA Lighting Technologies\\grandma\\gma2\_V\_3.1\\importexport:

1\. Type in the command line:

\[Channel\]> Export Profile 1

2\. Press Please.

The DMX profile 1 is exported as a .xml file.

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
