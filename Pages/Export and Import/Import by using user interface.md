---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Import by using user interface"
slug: "key_ei_import_gui"
url: "https://help.malighting.com/grandMA2/en/help/key_ei_import_gui.html"
section: "Export and Import"
ma2_section: "key_export_and_import"
section_ref: "[[Sections/Export and Import]]"
prev_page: "[[Pages/Export and Import/Import by using command line]]"
next_page: "[[Pages/Export and Import/Import predefined objects]]"
depth: 2
tags:
  - "type/page"
  - "section/ei"
---

# Import by using user interface

> [!source]- Source
> [MA Lighting Help – Import by using user interface](https://help.malighting.com/grandMA2/en/help/key_ei_import_gui.html)

Version 3.9

# Import by using user interface

There is a dedicated GUI for importing **Macros**, **Effects**, **Masks**, **MAtricks**, **Gobo Bitmaps**, **User Profiles**, and **DMX Nodes.** 

In the following example is a macro that has to be imported from a USB stick. But it is the same procedure for the other objects.  

**Requirement:**

To be able to import an object it is needed to have the object exported to  an .XML file. Please read the [[Pages/Export and Import/Export by using command line|Export by using commandline]] to learn how to do this.

If the object is stored on a USB stick, plug the USB stick into the console or onPC.

**Steps:**

1.  Open the **Setup menu** and then tap the Import Export button followed by the Import button and then finally the Macro button.

This opens a pop-up like this:

![](../../img/menu_show_import-export_import_macros_usb_v3-3.png)

_Import macro pop-up_

2.  Select the tab that matches the USB stick.
3.  Select the .XML file on the left side, that contains the macro to import.
4.  On the right side is a list of the macros that are stored inside the XML file. An XML file may contain one or more macros. Select the ones to import. Select multiple macros by holding the Ctrl key on the keyboard and tapping the macros on the screen. The selected macros get a blue background.
5.  \[Optional\] Activate Always ask for Name (tap it until the text is yellow) to rename the macros when imported.
6.  \[Optional\] Activate Confirm (tap it until the text is yellow) to have a confirm pop-up to appear, after the import.
7.  \[Optional\] Activate Overwrite (tap it until the text is yellow) to overwrite any macros that might already exist on the location where to import to.
8.  Select where to place the imported macros in the macro pool. This can be done by specifying a number in the green input field or tap Use to toggle between the **Use Earliest** and **Use Latest** options. Earliest means the first available free macro pool object. Latest means the next available pool object after the last one used.
9.  Tap Import 
10.  \[Optional\] If the "ask for name" button is selected, then a dialog box is now prompted for a new name - for each macro to import.
11.  \[Optional\] If the "confirm" option is selected, tap Ok in the pop-up that informs about the amount of imported macros.

**Result:**

The selected macros are imported to the selected location in the macro pool.

← [[Pages/Export and Import/Import by using command line]] | [[Pages/Export and Import/Import predefined objects]] →

Part of [[Sections/Export and Import]] · [[000 Map of Content]]
