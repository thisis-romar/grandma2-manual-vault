---
type: "page"
title_str: "Export by using user interface"
slug: "key_ei_export_gui"
url: "https://help.malighting.com/grandMA2/en/help/key_ei_export_gui.html"
section: "Export and Import"
ma2_section: "key_export_and_import"
section_ref: "[[Sections/Export and Import]]"
prev_page: "[[Pages/Export and Import/Export by using command line]]"
next_page: "[[Pages/Export and Import/Import by using command line]]"
depth: 2
tags:
  - "type/page"
  - "section/ei"
---

# Export by using user interface

> [!source]- Source
> [MA Lighting Help – Export by using user interface](https://help.malighting.com/grandMA2/en/help/key_ei_export_gui.html)

Version 3.9

# Export by using user interface

There is a dedicated GUI for exporting **Macros**, **Effects**, **Masks**, **MAtricks**, **Gobo Bitmaps**, **User Profiles** and **DMX Nodes**.

All of these, except **Gobo Bitmaps** and **DMX Nodes**, works similar. In the following example, it is an effect that has to be exported.

**Requirement:**

To be able to export an effect, there needs to be at least one effect in the effect pool. If exporting to a USB stick, then a stick needs to be connected to the console or onPC.

Open the **Setup menu** and tap Import Export followed by Export and finally Effects

This opens a pop-up like this:

![](../../img/popup_export_effect_v3_3.png)

_Export effect pop-up_

**Steps:**

1.  Select the tab where to export the effect to. A USB stick called "Shows" is selected in the image above.
2.  Pick the effects to export on the left side. Select multiple effects by holding Ctrl on the keyboard and tapping the effects in the effect list. The selected effects get a blue background. The effects are exported to an XML file, that can contain one or more effects.
3.  On the right side, there are a list of existing XML files on the destination, selected in the tab above.
4.  Activating Always ask for Name (tap it until the text is yellow), gives an opportunity to give the XML file a different name than the effect. If more than one effect is selected, you will always be asked for a new name.
5.  Tap Export 
6.  Depending on the selections, you might be prompted for a name for the XML file.

**Result:**

The selected effects are exported to the selected drive (Internal or to an USB stick)

* * *

## Export a Gobo Bitmap

To export a Gobo Bitmap, a USB stick has to be plugged in the console or the onPC. 

Open the **Setup menu** and tap Import Export followed by Export and finally Gobo Bitmap

This opens a pop-up like this:

![](../../img/popup_export_gobo-bitmaps_v3_3.png)

_Export gobo bitmap pop-up_

**Steps:**

1.  If more than one USB stick is connected, select the tab where to export the gobo bitmap to. A USB stick called "Shows" is selected in the image above.
2.  Select the manufacture and then pick the bitmap to export on the left side. Select multiple bitmaps by holding Ctrl on the keyboard and tapping the bitmaps in the list. The selected bitmaps get a yellow background.
3.  On the right side, there is a list of existing bitmaps on the destination, selected in the tab above.
4.  Tap Export 
5.  If a bitmap has to be deleted from the internal gobo library or the USB stick, select the bitmap and tap Delete

**Result:**

The selected bitmaps are exported to the selected USB stick.

← [[Pages/Export and Import/Export by using command line]] | [[Pages/Export and Import/Import by using command line]] →

Part of [[Sections/Export and Import]] · [[000 Map of Content]]
