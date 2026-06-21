---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What are Worlds"
slug: "key_wfm_what_are_worlds"
url: "https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_worlds.html"
section: "Worlds Filters and Masks"
ma2_section: "key_wfm_world_filter_mask"
section_ref: "[Sections/Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md)"
next_page: "[Pages/Worlds Filters and Masks/Create worlds](Create%20worlds.md)"
depth: 2
tags:
  - "type/page"
  - "section/wfm"
summary: "Worlds are a functionality in the grandMA2 that allows you to limit what is possible to access and what is displayed in windows."
---

# What are Worlds

> [!source]- Source
> [MA Lighting Help – What are Worlds](https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_worlds.html)

Version 3.9

# What are Worlds

Worlds are a functionality in the grandMA2 that allows you to limit what is possible to access and what is displayed in windows.

Worlds are organized in a World pool. Since it is a pool, it might be a good idea to read the [Pools in General section](../../Sections/Pools.md).

It could look like this:

![](../../img/window_world-pool_v3-3.png)

_World pool - pool style_

It can be changed to "Sheet Style" in the pool options. Then it could look like this:

![](../../img/window_world-pool_sheet-style_v3-3.png)

_World pool - sheet style_

The first world in the pool is locked from the factory. It contains everything and is used when you do not want to exclude anything - it is called **Full**.

The world pool is shared among all users in the show, but each user can have different worlds selected.

You can select a different world by simply pressing the pool object. The green line indicates the selected world.

If a world, other than number one (Full), is selected, then there is a World Icon ![](../../img/icon_world_v3-2.png) in the title bar of sheets and other windows that is affected by the world selection. The icon might also be in the Command Line Input - it depends on your Message Center settings. 

Worlds can contain a selection of fixtures and/or a selection of Attributes.

If a world only have some (not all) Attributes then the pool object will display the [Preset Type Marker](../Workspace/System%20Colors.md) at the bottom of the pool object.

Using different worlds can be a big help in multi user environment. It can be used to separate the lighting rig into different parts for different programmers.

Another good use is to be in a world without the attributes that is undesired to get programmed in sequences. This could be control channels to accidentally resets fixtures or turns off the lamps.

Selecting a world will hide fixtures, that are not a part of this world, in sheets and stage view/MA 3D. Attributes that are not in the world will not be visible in sheets.

It is important to know that you can only affect the fixtures and attributes in your selected world. This is valid for programming actions. Read more in the [Use worlds when programming topic](Use%20worlds%20when%20programming.md).

Playback actions (executors and sequences) are not directly affected by your selected world.

You can assign a world to an executor or a sequence - but it is not linked to the worlds your user has selected. Read more in the [Apply worlds or filters to executors and sequences topic](Apply%20worlds%20or%20filters%20to%20executors%20and%20sequences.md).

Worlds can be assigned to User Profiles. Then the users, with this User Profile, will be limited to only the assigned world and cannot select a different world. Read about it in the [Create User Profiles and Users topic](../Single%20and%20Multi%20User%20Systems/Create%20user%20profiles%20and%20users.md).

Read the next page for more on how to [Create worlds](Create%20worlds.md).

[Create worlds](Create%20worlds.md) →

Part of [Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
