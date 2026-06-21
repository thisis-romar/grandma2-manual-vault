---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Control bitmap fixture"
slug: "key_bitmapfixture_control"
url: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_control.html"
section: "Bitmap Fixture"
ma2_section: "key_bitmapfixture"
section_ref: "[Sections/Bitmap Fixture](../../Sections/Bitmap%20Fixture.md)"
prev_page: "[Pages/Bitmap Fixture/Apply bitmap fixture in the layout view](Apply%20bitmap%20fixture%20in%20the%20layout%20view.md)"
next_page: "[Pages/Bitmap Fixture/Edit bitmap fixture](Edit%20bitmap%20fixture.md)"
depth: 2
tags:
  - "type/page"
  - "section/bitmapfixture"
summary: "After you imported a bitmap fixture in your show, you can control the bitmap fixture in the fixture sheet."
---

# Control bitmap fixture

> [!source]- Source
> [MA Lighting Help – Control bitmap fixture](https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_control.html)

Version 3.9

# Control bitmap fixture

After you imported a bitmap fixture in your show, you can control the bitmap fixture in the fixture sheet. For more information, see [fixture sheet](../Operate%20Fixtures/Fixture%20Sheet.md).

The following table describes the specific bitmap fixture attributes. For more basic information about control fixtures or channels, see [control channels and fixtures](../../Sections/Operate%20Fixtures.md).

Attribute

Description

Dimmer

Controls the dimmer intensity.

Mix Color (RGB)

Controls red, green, and blue.

HSB (Hue, Saturation, Brightness)

Controls hue shift, saturation, and brightness. HSB is a color correction of the selected RGB values.

VObj (= Video Object) Images

Select the image from the image pool, used for the bitmap fixture. For more information, see [import image](../Image%20Pool/Import%20Images%20and%20Videos.md).  
**Important:** By default are 100 images displayed, even if less images are in the image pool.

VObj Output

Select the layout from the layout pool, used for the bitmap fixture. For more information, see [layouts](../../Sections/Layouts.md).  
**Important:** By default are 100 layouts displayed, even if less layouts are in the layout pool.

VPos (= Video Position)

Moves the position of the image on a relative x, y, z axis in the layout view. If you have two images about each other, the one with the lower z axis value is in front.

VRot (= Video Rotation)

Rotates the images around the z axis. The combination between CX (= Center X) and CY (= Center Y) moves the rotation midpoint of the z axis relative in the layout view. 0 is the center of the z axis.

VImg (= Video Image)

Select the video image: (See screenshots below the table for better visualization).  
**Tile -:** Image will be added behind. Every second image is mirrored.  
**No Tile:** No image will be added.  
**Tile +:** Image will be added behind.

VPlayer (= Video Player) Play Mode

Select the video play mode:  
\- **Loop** loops endlessly.  
\- **Play** plays once and stops with the last frame.  
\- **Play and Off** plays once and fades out with the last frame.  
\- **Pause** pauses the video clip. 

VPlayer Speed

Controls the speed of playing back videos.

VScale (= Video Scale)

Scales the image on the x and y axis.  
\- **1:1**  
\- **1:-1** mirrored

VPreset (= Video Preset) Mode

Select the video preset mode:  
\- **Dimmer** (default for only dimmer fixtures)  
\- **RGB + Dim**   
\- **RGB** (default for fixtures using RGB)  
\- **Preset Types** allows to have the bitmap fixture running between two presets of a preset type VP1 and VP2

VPreset VP1

Set the preset pool index of the low value (black), e.g. 1 (= red color).

VPreset VP2

Set the preset pool index of the high value (white), e.g. 2 (= green color).

**Important:**  
If you pause a video clip in the VPlayer and subsequently tap Play or Loop, the clip is played back from the start. 

After you have modified all the attributes, you can store the look in a cue. For more information, see [cues and sequences](../../Sections/Cues%20and%20Sequences.md).

## Examples for VImg Attributes

![](../../img/window_layout-view-bitmap-no-tile_v3-2.png)

_Layout view with bitmap VImg attribute no tile_

![](../../img/window_layout-view-bitmap-split-x-tile-plus_v3-2.png)

_Layout view with bitmap VImg attribute split x tile+_

![](../../img/window_layout-view-bitmap-split-x-tile-_v3-2.png)

_Layout view with bitmap VImg attribute split x tile-_

![](../../img/window_layout-view-bitmap-split-x-tile-split-y-tile-_v3-2.png)

_Layout view with bitmap VImg attribute split x tile- split y tile-_

![](../../img/window_layout-view-bitmap-split-y-tile-plus_v3-2.png)

_Layout view with bitmap VImg attribute split y tile+_

![](../../img/window_layout-view-bitmap-split-y-tile-_v3-2.png)

_Layout view with bitmap VImg attribute split y tile-_

![](../../img/window_layout-view-bitmap-split-x-tile-plus-split-y-tile-plus_v3-2.png)

_Layout view with bitmap VImg attribute split x tile+ split y tile+_

← [Apply bitmap fixture in the layout view](Apply%20bitmap%20fixture%20in%20the%20layout%20view.md) | [Edit bitmap fixture](Edit%20bitmap%20fixture.md) →

Part of [Bitmap Fixture](../../Sections/Bitmap%20Fixture.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
