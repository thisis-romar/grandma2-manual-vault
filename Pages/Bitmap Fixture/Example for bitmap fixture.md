---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Example for bitmap fixture"
slug: "key_bitmapfixture_example"
url: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_example.html"
section: "Bitmap Fixture"
ma2_section: "key_bitmapfixture"
section_ref: "[[Sections/Bitmap Fixture]]"
prev_page: "[[Pages/Bitmap Fixture/Edit bitmap fixture]]"
next_page: "[[Pages/Bitmap Fixture/Priorities for bitmap effects]]"
depth: 2
tags:
  - "type/page"
  - "section/bitmapfixture"
summary: "This topic describes the bitmap fixtures on an example."
---

# Example for bitmap fixture

> [!source]- Source
> [MA Lighting Help – Example for bitmap fixture](https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_example.html)

Version 3.9

# Example for bitmap fixture

This topic describes the bitmap fixtures on an example.

This example requires a few basic functions, like [[Sections/Cues and Sequences|storing cues]], [[Pages/Presets/Create Presets|create presets]], and [[Pages/Effects/Assign effect to executor|assign effects]]. If you are not familiar with these functions, read the manual for these functions first.

**Initial situation:**  
A stage with many fixtures. The task is to create a pan tilt effect for these fixtures.

![](../../img/window_stage_v3-2.png)

_Stage view_

**Requirement:**

*   [[Pages/Bitmap Fixture/Import bitmap fixture|An imported bitmap fixture]].
*   [[Pages/Bitmap Fixture/Apply bitmap fixture in the layout view|A created layout including the fixtures for using the bitmap fixture]].

**Important:**  
Position presets have to have the values of pan tilt, since the values X, Y and Z are not supported. 

1.  Select all the fixtures in the fixture sheet for the pan tilt effect, press At 100 Please, and then Store and press the executor.
2.  Draw a **rectangle** around the fixtures in the layout. The **Edit Layout Element** pop-up opens. Tap under Visualization Bitmap.
3.  Import an image, which only displays a white bar, in the image pool.
    
    ![](../../img/image_white-bar_v3-2.png)
    
    _Image white bar_
    
    **Note:**  
    It is possible to use predefined images and videos also. For more information on how to import predefined images and videos see [[Pages/Image Pool/Import Images and Videos|Import an image]].
    
4.  Create two position presets in the position preset pool, the first with the lowest pan 0 and tilt 30, the second position preset with pan 0 and tilt -5.
5.  Program the bitmap fixture in the programmer with the following values:  
    \- **Dimmer**: 100  
    \- **Images**: The white bar image from the image pool, e.g., 15.  
    \- **Output**: The layout including the bitmap fixture visualization, e.g., Layout 1.  
    \- **Mode**: Position Preset  
    \- **VP1**: Select position preset with low value  
    \- **VP2**: Select position preset with high value
6.  Tap in the encoder bar effect layer, tap **VPos** (= Video Position) in the fixture sheet, turn the encoder for the x value and select Ramp Plus 10.
7.  To store a sequence with the bitmap fixture, press Store and then another executor button than before.
8.  Start both playbacks.

You have a pan tilt effect by using the bitmap fixture.

![](../../img/window_stage-running-bitmap_v3-2.png)

_Stage view with running bitmap fixture_

← [[Pages/Bitmap Fixture/Edit bitmap fixture|Edit bitmap fixture]] | [[Pages/Bitmap Fixture/Priorities for bitmap effects|Priorities for bitmap effects]] →

Part of [[Sections/Bitmap Fixture|Bitmap Fixture]] · [[000 Map of Content]]
