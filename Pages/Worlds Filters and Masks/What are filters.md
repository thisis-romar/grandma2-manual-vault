---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What are filters"
slug: "key_wfm_what_are_filters"
url: "https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_filters.html"
section: "Worlds Filters and Masks"
ma2_section: "key_wfm_world_filter_mask"
section_ref: "[Sections/Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md)"
prev_page: "[Pages/Worlds Filters and Masks/Use worlds when programming](Use%20worlds%20when%20programming.md)"
next_page: "[Pages/Worlds Filters and Masks/Create filters](Create%20filters.md)"
depth: 2
tags:
  - "type/page"
  - "section/wfm"
summary: "The Filters are used to limit what can be stored, played back or retrieved using the \"At\" key."
---

# What are filters

> [!source]- Source
> [MA Lighting Help – What are filters](https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_filters.html)

Version 3.9

# What are filters

The Filters are used to limit what can be stored, played back or retrieved using the "At" key.

Filters contain a selection of Attributes and data Layers (Value, Value Times and Effects). It does not contain any fixture information.

Filters are organized in a Filter pool. Since this is a pool it might be a good idea to read to [Pools in General section](../../Sections/Pools.md).

The Filter Pool could look like this:

![](../../img/window_filter-pool_v3-3.png)

_Filter pool - pool style_

It can be changed to "Sheet Style" in the pool options. Then it could look like this:

![](../../img/window_filter-pool_sheet-style_v3-3.png)

_Filter pool - sheet style_

The filter pool is a global pool that is shared by all users.

Filters in the pool are used when you store values ([Use filter when storing topic](Use%20filters%20when%20you%20Store%20and%20use%20At.md)), make a circular copy, retrieve data using the At key (Use filter when grabbing values topic), or as a filter on Executors and Sequences ([Apply worlds and filters to executors and sequences topic](Apply%20worlds%20or%20filters%20to%20executors%20and%20sequences.md)).

There is always one active filter. The first pool object is called "All" and it contains all attributes and layers. This means that it does not filter any data. It is also locked and cannot be edited.

A filter can be applied(called) and/or permanently selected. An applied filter have a green bar in the middle (behind the colored markers). A selected filter have a green background color in the name area (or number area in sheet style). You can select a different filter by pressing Select followed by the desired filter button. You can call a different filter temporarily by just pressing one of the filters.

A called filter overwrites the selected filter, but will only be used the next time an action is performed that uses the filter - then it will jump back to using the selected filter.

When a different filter than the "All" filter is selected, then the At key will flash and the filter icon ![](../../img/icon_filter_small_v3-2.png) is in the command line and Message Center (default setting).

For more information about the colors and markers please read the [System Colors topic](../Workspace/System%20Colors.md).

The data Layer Markers are only visible if there is one or more being filtered. It will then display the allowed layers. If all layers are Off (filtered) then there is also no markers. This would block all value data from passing the filter!

* * *

## The Command Filter window

It is possible to create a window that displayed the filter settings. It's called **Command Filter** and can be found in the "Other" tab in the Create Basic Window pop-up.

It could look like this:

![](../../img/window_command-filter_v3-3.png)

_Command Filter window_

The primary functions of this window is described in the [Create filters topic](Create%20filters.md).

This window will always show you the current filtering, and allow you to do temporary modifications.

← [Use worlds when programming](Use%20worlds%20when%20programming.md) | [Create filters](Create%20filters.md) →

Part of [Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
