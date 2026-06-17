---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "MAtricks Groups"
slug: "key_matricks_groups"
url: "https://help.malighting.com/grandMA2/en/help/key_matricks_groups.html"
section: "MAtricks"
ma2_section: "key_matricks"
section_ref: "[[Sections/MAtricks]]"
prev_page: "[[Pages/MAtricks/MAtricks Wings]]"
depth: 2
tags:
  - "type/page"
  - "section/matricks"
---

# MAtricks Groups

> [!source]- Source
> [MA Lighting Help – MAtricks Groups](https://help.malighting.com/grandMA2/en/help/key_matricks_groups.html)

Version 3.9

# MAtricks Groups

This topic illustrates how to use MAtricksGroups based on an example. 

For information on the keyword see [MAtricksGroups](key_keyword_matricksgroups.html). 

**Requirement:**

*   Fixtures are selected via the command line or keys. 

For more information on how to select fixtures for the usage of MAtricks see [MAtricks](key_matricks.html). 

### 1\. Example

*   Set the fan function in fixtures that are not grouped

1.  Use the command line as follows:

\[Channel\]> At 0 Thru 100

2.   Press Please.

**Result:**

The fan function is applied on the fixtures selected. 

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_10percent_v3-3.png)![](../../img/img_bulb_20percent_v3-3.png)![](../../img/img_bulb_40percent_v3-3.png)![](../../img/img_bulb_50percent_v3-3.png)![](../../img/img_bulb_60percent_v3-3.png)![](../../img/img_bulb_80percent_v3-3.png)![](../../img/img_bulb_on_v3-3.png)

### 2\. Example

*   Apply groups with 4 fixtures in each group and set the fan function. 

1.  To apply groups, use the command line as follows:

\[Channel\]> MAtricksGroups 4

2.  Press Please. 
3.  To set the fan function within the groups with 4 fixtures, use the command line as follows:

\[Channel\]> At 0 Thru 100 

4.  Press Please. 

**Result:**

The fan function is applied within the MAtricksGroups. 

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_40percent_v3-3.png)![](../../img/img_bulb_60percent_v3-3.png)![](../../img/img_bulb_on_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_40percent_v3-3.png)![](../../img/img_bulb_60percent_v3-3.png)![](../../img/img_bulb_on_v3-3.png)

### 3\. Example

*   Apply the MAtricksInterleave and use the fan function 

1.  To apply an interleave, for example of 4, use the command line as follows:

\[Channel\]> MAtricksInterleave 4

2.  Press Please. 

**Result:**

MAtricksInterleave of 4 is now applied. 

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)

3.  To apply the fan function within the MAtricksInterleave, use the command line as follows:

\[Channel\]> At 0 Thru 100

4.  Press Please.

**Result:**

The fan function starts in the upper corner on the left and fans out toward the lower corner on the right.

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_10percent_v3-3.png)![](../../img/img_bulb_20percent_v3-3.png)![](../../img/img_bulb_40percent_v3-3.png)

![](../../img/img_bulb_10percent_v3-3.png)![](../../img/img_bulb_20percent_v3-3.png)![](../../img/img_bulb_40percent_v3-3.png)![](../../img/img_bulb_60percent_v3-3.png)

![](../../img/img_bulb_20percent_v3-3.png)![](../../img/img_bulb_40percent_v3-3.png)![](../../img/img_bulb_60percent_v3-3.png)![](../../img/img_bulb_on_v3-3.png)

### 4\. Example 

*   Align groups with an interleave on the x or the y-axis using periods  

For the example on the alignment of the x-axis see the [example Align Group X in the MAtricks toolba](key_matricks_toolbar.html#align_x_axis)[r](key_matricks_toolbar.html#align_x_axis).

1.  To apply 3 groups on the y-axis and setting the fan function within this group, successively type the following into the command line:

\[Channel\]> MAtricksGroups 1.3

2.   Press Please. 

\[Channel\]> At 0 Thru 100

3.  Press Please.  

**Result:**

The fan starts in the first group and fans out toward the third group. 

![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)![](../../img/img_bulb_off_v3-3.png)

![](../../img/img_bulb_50percent_v3-3.png)![](../../img/img_bulb_50percent_v3-3.png)![](../../img/img_bulb_50percent_v3-3.png)![](../../img/img_bulb_50percent_v3-3.png)

![](../../img/img_bulb_on_v3-3.png)![](../../img/img_bulb_on_v3-3.png)![](../../img/img_bulb_on_v3-3.png)![](../../img/img_bulb_on_v3-3.png)

The fan function is set within the group.

← [[Pages/MAtricks/MAtricks Wings]]

Part of [[Sections/MAtricks]] · [[000 Map of Content]]
