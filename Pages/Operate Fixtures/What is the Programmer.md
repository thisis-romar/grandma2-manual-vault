---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What is the Programmer"
slug: "key_of_what_is_the_programmer"
url: "https://help.malighting.com/grandMA2/en/help/key_of_what_is_the_programmer.html"
section: "Operate Fixtures"
ma2_section: "key_operate_fixtures"
section_ref: "[Sections/Operate Fixtures](../../Sections/Operate%20Fixtures.md)"
prev_page: "[Pages/Operate Fixtures/Layer in Sheets](Layer%20in%20Sheets.md)"
next_page: "[Pages/Operate Fixtures/Encoder Grouping](Encoder%20Grouping.md)"
depth: 2
tags:
  - "type/page"
  - "section/of"
summary: "The programmer is where all the active and nonactive values, which are not in the playbacks, are located."
---

# What is the Programmer

> [!source]- Source
> [MA Lighting Help – What is the Programmer](https://help.malighting.com/grandMA2/en/help/key_of_what_is_the_programmer.html)

Version 3.9

# What is the Programmer

The programmer is where all the active and nonactive values, which are not in the playbacks, are located. 

**Important:**  
Active values are storable values. 

* * *

### How to Take Attributes into the Programmer

1.  Open the fixture sheet first.  
    For more information on how to open the fixture sheet see [Fixture sheet](Fixture%20Sheet.md). 
2.  Select fixtures in the fixture or channel sheet.
3.   Change values of the fixtures.
4.  The fixtures with values, which have just changed, have red markers within the object in the sheet.

**Hint:**  
To activate all attributes in the selection, press Please Please.   
To deactivate all attributes in the selection, press Please Please Please.

### Example

\[Channel\]> Fixture 1 Thru 10 Full

Selects fixtures 1 through 10 and sets the dimmer to full.  

![](../../img/image_fixture-sheet-view_v3-3.png)

_Fixture Sheet_ 

The fixtures with the active values all have red markers, which means that they are actively in the programmer. The fixtures with nonactive values have white markers. 

For more information on the different colors of markers see [Marker](../Workspace/Marker%20Colors.md). 

* * *

### Layers

There are different Layers at the bottom of the fixture and the channel sheet. 

Active attributes also have color markers in layers.

![](../../img/img_layers-with-markers_v3-3.png)

_Layers With Markers_

For more details on layers see [Fixture sheet](Fixture%20Sheet.md). 

To see the active values only, tap the tab **Active Only** in the mask of the title bar in the fixture sheet.

![](../../img/image_programmer_active-values_v3-3.png)

_Programmer with Active Dimmer Values_

* * *

### How to Remove Attributes in the Programmer

To remove single attributes in the programmer, press Off and tap the attribute you would like to remove.

To remove all attributes from fixture 1 to 10 in the programmer, type the following command, which clears the  programmer, into the command line:

\[Channel\]> Off Fixture 1 Thru 10

**Hint:**  
To clear the entire programmer, press Clear for approximately 2 seconds. 

The programmer is now empty.

![](../../img/image_empty-programmer_v3-3.png)

_Empty Programmer_

← [Layer in Sheets](Layer%20in%20Sheets.md) | [Encoder Grouping](Encoder%20Grouping.md) →

Part of [Operate Fixtures](../../Sections/Operate%20Fixtures.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
