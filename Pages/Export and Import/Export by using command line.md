---
type: "page"
title_str: "Export by using command line"
slug: "key_ei_export_commandline"
url: "https://help.malighting.com/grandMA2/en/help/key_ei_export_commandline.html"
section: "Export and Import"
ma2_section: "key_export_and_import"
section_ref: "[[Sections/Export and Import]]"
next_page: "[[Pages/Export and Import/Export by using user interface]]"
depth: 2
tags:
  - "type/page"
  - "section/ei"
---

# Export by using command line

> [!source]- Source
> [MA Lighting Help – Export by using command line](https://help.malighting.com/grandMA2/en/help/key_ei_export_commandline.html)

Version 3.9

# Export by using command line

It is possible to use the **Command Line** to export all objects. For more information about the keyword and syntax, see the [Export keyword](key_keyword_export.html) topic.

## Example 1

The **Command Line** syntax to export group 1 thru 4 to a file named Front\_groups.xml

\[Channel\]> Export Group 1  Thru 4 "Front\_groups"

## Example 2

The **Command Line** syntax to export a User Profile named Designer and overwrite the existing Designer.xml file

\[Channel\]> Export UserProfile "Designer" /Overwrite

## Export objects to a USB stick

To export objects to a USB stick, in this example a color,  a USB stick has to be plugged in the console or onPC. A Command Line Feedback window has to be open.

### Steps:

1.  To find the drive to export the objects to, type "SelectDrive" in the Command Line. The Command Line Feedback displays a list of the available  drives.
2.  \[Channel\]> SelectDrive
3.  Select the USB stick (it might be number four), typing "SelectDrive 4". Drive number 4 is now the default drive.
4.  \[Channel\]> SelectDrive 4
5.  Export the color named cyan.
6.  \[Channel\]> export preset 4 "Cyan"

[[Pages/Export and Import/Export by using user interface]] →

Part of [[Sections/Export and Import]] · [[000 Map of Content]]
