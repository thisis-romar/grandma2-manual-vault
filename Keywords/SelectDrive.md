---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "SelectDrive"
slug: "key_keyword_selectdrive"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_selectdrive.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The SelectDrive keyword select the drive in the Backup Menu, for the following functions:"
---

# SelectDrive

> [!source]- Source
> [MA Lighting Help – SelectDrive](https://help.malighting.com/grandMA2/en/help/key_keyword_selectdrive.html)

Version 3.9

# SelectDrive Keyword

To get the SelectDrive keyword in the command line, type **SelectDrive** or the shortcut **SD** in the command line.

## Description

The SelectDrive keyword select the drive in the [Backup Menu](../Sections/Backup%20Menu.md), for the following functions:

*   [SaveShow](SaveShow.md)
*   [LoadShow](LoadShow.md)
*   [Import](Import.md)
*   [Export](Export.md)

If the SelectDrive keyword is executed standalone, the available showfile drives, mounted USB-sticks and earlier software installations will be listed along with their ID in the command line feedback window.

If a read only media (like older installations) is selected, write functions will change the selected drive to 1 (Internal).

The SelectDrive keyword is a function keyword.

## Syntax

SelectDrive \[ID\]

## Examples

*   Display all available drives in the command line feedback window.

\[Channel\]> SelectDrive

*   Load demoshow "demo dimmer and more".

\[Channel\]> SelectDrive 2; LoadShow "demo dimmer and more"

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
