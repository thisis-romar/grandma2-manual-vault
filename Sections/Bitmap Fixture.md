---
type: "section"
cssclasses:
  - "gma2-section"
section: "Bitmap Fixture"
slug: "key_bitmapfixture"
url: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture.html"
page_count: 7
tags:
  - "type/section"
pages:
  - "[[Pages/Bitmap Fixture/Import bitmap fixture]]"
  - "[[Pages/Bitmap Fixture/Apply bitmap fixture in the layout view]]"
  - "[[Pages/Bitmap Fixture/Control bitmap fixture]]"
  - "[[Pages/Bitmap Fixture/Edit bitmap fixture]]"
  - "[[Pages/Bitmap Fixture/Example for bitmap fixture]]"
  - "[[Pages/Bitmap Fixture/Priorities for bitmap effects]]"
  - "[[Pages/Bitmap Fixture/Disable bitmap for fixtures]]"
summary: "The MA Lighting Bitmap fixture replaces the previous bitmap effects."
---

# Bitmap Fixture

> [!source]- Source
> [MA Lighting Help – Bitmap Fixture](https://help.malighting.com/grandMA2/en/help/key_bitmapfixture.html)

Version 3.9

# Bitmap Fixture

The MA Lighting Bitmap fixture replaces the previous bitmap effects. The bitmap fixture is a virtual fixture and available in the fixture library.

The bitmap fixture allows to use images and videos from the image pool and map these images or videos to the patched fixtures. The visualization of the bitmap fixtures is realized in the layout view. Use the grandMA2 effect engine to animate bitmap fixtures.

**Hint:**  
There are predefined BMP (= Bitmap) effects provided in the effect editor.

The bitmap fixture has its own dimmer and color attributes, like an MA VPU layer fixture.

The playback priority of the bitmap fixture is always the lowest priority in one priority range. Attribute values will overwrite bitmap fixture attribute values, if the same fixtures are used.

If you want to use a video for the bitmap fixture here´s what it takes:

*   Minimum of 30 frames per second
*   Resolution double of the output. E.g. If you have an output of a pixel raster of 200 x 200, the video should have a minimum resolution of 400 x 400.  
    Recommended are triple fold to four fold of the output.
*   Only video data without audio data
*   Constant bit rate (= CBR)

Make sure to use the supported image and video formats only. For more details see [[Pages/Image Pool/Supported file formats|supported file formats]].

We recommend to test the videos during the show preparation before using them in a show situation.

  

* * *

#### Sub topics

*   [[Pages/Bitmap Fixture/Import bitmap fixture]]
*   [[Pages/Bitmap Fixture/Apply bitmap fixture in the layout view|Apply bitmap fixture in the layout]]
*   [[Pages/Bitmap Fixture/Control bitmap fixture]]
*   [[Pages/Bitmap Fixture/Edit bitmap fixture]]
*   [[Pages/Bitmap Fixture/Example for bitmap fixture|Example]]
*   [[Pages/Bitmap Fixture/Priorities for bitmap effects]]
*   [[Pages/Bitmap Fixture/Disable bitmap for fixtures]]

## Pages in This Section

- [[Pages/Bitmap Fixture/Import bitmap fixture]]
- [[Pages/Bitmap Fixture/Apply bitmap fixture in the layout view]]
- [[Pages/Bitmap Fixture/Control bitmap fixture]]
- [[Pages/Bitmap Fixture/Edit bitmap fixture]]
- [[Pages/Bitmap Fixture/Example for bitmap fixture]]
- [[Pages/Bitmap Fixture/Priorities for bitmap effects]]
- [[Pages/Bitmap Fixture/Disable bitmap for fixtures]]

Part of [[000 Map of Content]]
