---
type: "page"
title_str: "Marker Colors"
slug: "key_ws_colors_marker"
url: "https://help.malighting.com/grandMA2/en/help/key_ws_colors_marker.html"
section: "Workspace"
ma2_section: "key_workspace"
section_ref: "[[Sections/Workspace]]"
prev_page: "[[Pages/Workspace/System Colors]]"
next_page: "[[Pages/Workspace/Cue Colors]]"
depth: 3
tags:
  - "type/page"
  - "section/ws"
---

# Marker Colors

> [!source]- Source
> [MA Lighting Help – Marker Colors](https://help.malighting.com/grandMA2/en/help/key_ws_colors_marker.html)

Version 3.9

# Marker Colors

Markers are color indicators in form of a bar, square, or a thin line. Markers are visible in:

*   [Channel Sheet](key_of_channel_sheet.html)
*   [Fixture Sheet](key_of_fixture_sheet.html)
*   [Sequence Content Sheet](key_cs_cue_content.html#content_sheet)
*   [Sequence Tracking Sheet](key_cs_cue_content.html#tracking_sheet)
*   [Layout View](key_layouts.html)

The name column in the fixture sheet displays a maker summery of all attribute markers of the fixture.

There are the following markers there:

**Red:**

![](../../img/window_fixture-sheet_red-marker_v3-2.png)

_Red Marker_

Red markers indicate active programmer values (storable).

**Pink and Red:**

![](../../img/window_fixture-sheet_pink-red-marker_v3-2.png)

_Pink and Red Marker_

 First Pink and then a red marker indicate active effect values in the programmer (storable).

**Big Cyan:**

![](../../img/window_fixture-sheet_red-cyan-marker_v3-2.png)

_Big Cyan Marker_

Big cyan markers in the fixture sheet indicate preset values in the programmer.  
Big cyan markers in the sequence tracking sheet indicate preset values in a sequence.

**Small Cyan** (except for the sequence tracking sheet):

![](../../img/window_fixture-sheet_small-cyan-marker_v3-2.png)

_Small Cyan Marker_

Small cyan markers indicate preset values from a sequence.

**Blue:**

![](../../img/window_fixture-sheet_blue-marker_v3-2.png)

_Blue Marker_

Blue markers indicate parked values – no matter the size of the marker.

**Big Pink:**

![](../../img/window_fixture-sheet_pink-marker_v3-2.png)

_Big Pink Marker_

Big pink markers indicate effect values.

**Small Pink:**

![](../../img/window_fixture-sheet_small-pink-marker_v3-2.png)

_Small Pink Marker_

Small pink markers indicate stomped effect values. For more information on this effect see [Stomp Keyword](key_keyword_stomp.html).

**White:**

![](../../img/window_fixture-sheet_white-marker_v3-2.png)

_White Marker_

White markers indicate programmer values which cannot be stored.

**Green:**

![](../../img/window_fixture-sheet_green-marker_v3-2.png)

_Green Marker_

Green markers indicate active individual (= storeable) fade times in the programmer.

**Pink, Red, and Green:**

![](../../img/window_fixture-sheet_pink-red-green-marker_v3-2.png)

_Pink, Red, and Green Marker_

Pink, red, and green markers in the combination from left to right indicate active effect fade times in the programmer.

**Orange:**

![](../../img/window_fixture-sheet_orange-marker_v3-2.png)

_Orange Marker_

Orange markers indicate active individual (= storeable) delay times in the programmer.

**Pink, Red, and Orange:**

![](../../img/window_fixture-sheet_pink-red-orange-marker_v3-2.png)

_Pink, Red, and Orange Marker_

Pink, red, and orange markers in the combination from left to right indicate active effect delay times in the programmer.

**Small Yellow:**

![](../../img/window_fixture-sheet_small-yellow-marker_v3-2.png)

_Small Yellow Marker_

Small yellow markers in the fixture sheet, channel sheet, or layout view, indicate values from a sequence.

**Big Yellow:**

![](../../img/window_sequence-tracking-sheet_big-yellow-marker_v3-2.png)

_Big Yellow Marker_

Big yellow markers in the sequence tracking sheet or sequence content sheet indicate stored values.

**Gray:**

![](../../img/window_fixture-sheet_gray-marker_v3-2.png)

_Gray Marker_

Gray markers indicate that at least one attribute of a fixture uses a DMX profile. This marker is only visible in output layers.

**Purple:**

![](../../img/window_fixture-sheet_purple-bitmap-marker_v3-3.png)

_Purple Marker_

Purple markers indicate attributes that were calculated in the bitmap fixture.

* * *

## Pool Object Marker Colors

The pool object markers are used in pool objects and they indicate which values are stored in the pool object, in the preset pools and in the filter pools. For more information see [What are Filters?](key_wfm_what_are_filters.html) and [Preset Pools](key_presets_pools.html).

**Yellow Pool Object Marker:**

![](../../img/img_filter-pool-yellow-marker_v3_2.png)

_Yellow Pool Object Marker_

Yellow pool object markers indicate that attribute values are stored in the pool object.

**Important:**  
If a pool object just contains values , the yellow marker will not be displayed.

**Pink Pool Object Marker:**

![](../../img/img_filter-pool-pink-marker_v3_2.png)

_Pink Pool Object Marker_

Pink pool object markers indicate that effect values are stored in the pool object.

**Green Pool Object Marker:**

![](../../img/img_presets-pool-green-marker_v3_2.png)

_Green Pool Object Marker_

Green pool object markers indicate that individual fade times are stored in the pool object.

**Orange Pool Object Marker:**

![](../../img/img_presets-pool-orange-marker_v3_2.png)

_Orange Pool Object Marker_

Orange pool object markers indicate that individual delay times are stored in the pool object.

* * *

## Shapes Of Markers

**Bar:**

![](../../img/window_fixture-sheet_red-marker_v3-2.png)

_Bar – Marker Shape_

If a marker is displayed in form of a bar – in red or white – the value is in the programmer.

**Square:**

![](../../img/window_fixture-sheet_small-cyan-marker_v3-2.png)

_Square – Marker Shape_

If a marker is displayed in form of a square – no matter the color – the value is in the playback. 

**Thin Line:**

![](../../img/window_fixture-sheet_dark-yellow-value_v3-2.png)

_Thin Line – Marker Shape_

If a marker is displayed in form of a thin line (here: the thin line in cyan in the upper left corner of the value) – no matter the color – the value is tracked. 

* * *

## Enable or Disable Markers

You can enable or disable the markers. By default, the markers are enabled.

To enable or disable the markers in the:

*   [Fixtures Sheet](key_of_fixture_sheet.html)
*   [Channel Sheet](key_of_channel_sheet.html)
*   [Sequence Content Sheet](key_cs_cue_content.html#content_sheet)
*   [Sequence Tracking Sheet](key_cs_cue_content.html#tracking_sheet)

\- Tap the **yellow ball** ![](../../img/icon_yellow-ball_3_2.png), tap Display  and then at **Enable Marker** tap On or Off.

\- To enable or disable the marker in the [Layout View](key_layouts.html), tap at the **yellow ball** ![](../../img/icon_yellow-ball_3_2.png), tap Layout Data and at **Marker** tap Yes or No.

The markers are enabled or disabled. To save the the settings, save the settings as default or save the view.

← [[Pages/Workspace/System Colors]] | [[Pages/Workspace/Cue Colors]] →

Part of [[Sections/Workspace]] · [[000 Map of Content]]
