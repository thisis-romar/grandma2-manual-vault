---
type: "page"
title_str: "Auto create worlds"
slug: "key_wfm_auto_create_worlds"
url: "https://help.malighting.com/grandMA2/en/help/key_wfm_auto_create_worlds.html"
section: "Worlds Filters and Masks"
ma2_section: "key_wfm_world_filter_mask"
section_ref: "[[Sections/Worlds Filters and Masks]]"
prev_page: "[[Pages/Worlds Filters and Masks/Create worlds]]"
next_page: "[[Pages/Worlds Filters and Masks/Use worlds when programming]]"
depth: 2
tags:
  - "type/page"
  - "section/wfm"
---

# Auto create worlds

> [!source]- Source
> [MA Lighting Help – Auto create worlds](https://help.malighting.com/grandMA2/en/help/key_wfm_auto_create_worlds.html)

Version 3.9

# Auto create worlds

grandMA2 can automatically create worlds, based on the selections.

It is done from the Auto Create menu. It is found by pressing the Setup key and then tapping the Auto Create button under Show.

The menu could look like this:

![](../../img/menu_auto-create_world_v3-3.png)

_Auto Create menu - World tab_

This menu has two different sides. The left one displays the Fixture Types or the Layers (depending on your settings - read below). The right side displays the content of the selection made on the left side.

There is a green input field where you can type the starting world - this is the worlds number where the created worlds will begin.

Everything, in the lists, that has a blue background is selected. Multiple selection is possible using the Ctrl key on a keyboard.

The idea is that worlds are created based on the Fixture Type or the Layers. The fixtures that is selected in each of the Fixture Types or Layers are the ones that will be in the worlds.

Auto created worlds contains the attributes relevant for the selected fixtures.

There are some buttons at the bottom of the window. The buttons are:

**Choose:**

This button has two different modes: **Fixture Type** and **Layer**. It chooses what the left side displays.

**Always ask for Name:**

When this is On (yellow text and background), you will get a name pop-up when you create worlds.

**Create:**

This will create worlds for each of the selected Fixture Types or Layers.

**Overwrite:**

This will allow for auto created worlds to overwrite existing worlds.

If this is off, and if there is a conflict, then a Auto Create Conflict pop-up appears - read about it in the [Auto Create Groups topic](key_groups_auto_create.html#auto_create_conflict).

**Use:**

This button have two modes. When it is **Earliest** the console will use the first free pool object. When it is **Latest** the console will use the first pool object after the last one used.

To cancel the auto creation, press the yellow X in the upper right corner.

← [[Pages/Worlds Filters and Masks/Create worlds]] | [[Pages/Worlds Filters and Masks/Use worlds when programming]] →

Part of [[Sections/Worlds Filters and Masks]] · [[000 Map of Content]]
