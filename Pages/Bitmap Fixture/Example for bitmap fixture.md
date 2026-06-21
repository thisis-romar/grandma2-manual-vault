---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Example for bitmap fixture"
slug: "key_bitmapfixture_example"
url: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_example.html"
section: "Bitmap Fixture"
ma2_section: "key_bitmapfixture"
section_ref: "[Sections/Bitmap Fixture](../../Sections/Bitmap%20Fixture.md)"
prev_page: "[Pages/Bitmap Fixture/Edit bitmap fixture](Edit%20bitmap%20fixture.md)"
next_page: "[Pages/Bitmap Fixture/Priorities for bitmap effects](Priorities%20for%20bitmap%20effects.md)"
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

This example requires a few basic functions, like [storing cues](../../Sections/Cues%20and%20Sequences.md), [create presets](../Presets/Create%20Presets.md), and [assign effects](../Effects/Assign%20effect%20to%20executor.md). If you are not familiar with these functions, read the manual for these functions first.

**Initial situation:**  
A stage with many fixtures. The task is to create a pan tilt effect for these fixtures.

![](../../img/window_stage_v3-2.png)

_Stage view_

**Requirement:**

*   [An imported bitmap fixture](Import%20bitmap%20fixture.md).
*   [A created layout including the fixtures for using the bitmap fixture](Apply%20bitmap%20fixture%20in%20the%20layout%20view.md).

**Important:**  
Position presets have to have the values of pan tilt, since the values X, Y and Z are not supported. 

1.  Select all the fixtures in the fixture sheet for the pan tilt effect, press At 100 Please, and then Store and press the executor.
2.  Draw a **rectangle** around the fixtures in the layout. The **Edit Layout Element** pop-up opens. Tap under Visualization Bitmap.
3.  Import an image, which only displays a white bar, in the image pool.
    
    ![](../../img/image_white-bar_v3-2.png)
    
    _Image white bar_
    
    **Note:**  
    It is possible to use predefined images and videos also. For more information on how to import predefined images and videos see [Import an image](../Image%20Pool/Import%20Images%20and%20Videos.md).
    
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

← [Edit bitmap fixture](Edit%20bitmap%20fixture.md) | [Priorities for bitmap effects](Priorities%20for%20bitmap%20effects.md) →

Part of [Bitmap Fixture](../../Sections/Bitmap%20Fixture.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
