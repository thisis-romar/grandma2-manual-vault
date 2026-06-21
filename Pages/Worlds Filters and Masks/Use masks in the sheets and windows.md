---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Use masks in the sheets and windows"
slug: "key_wfm_use_masks"
url: "https://help.malighting.com/grandMA2/en/help/key_wfm_use_masks.html"
section: "Worlds Filters and Masks"
ma2_section: "key_wfm_world_filter_mask"
section_ref: "[Sections/Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md)"
prev_page: "[Pages/Worlds Filters and Masks/Create masks](Create%20masks.md)"
next_page: "[Pages/Worlds Filters and Masks/Apply worlds or filters to executors and sequences](Apply%20worlds%20or%20filters%20to%20executors%20and%20sequences.md)"
depth: 2
tags:
  - "type/page"
  - "section/wfm"
summary: "If you come to this page without any knowledge about Masks then please read the What are masks topic and the Create masks topic."
---

# Use masks in the sheets and windows

> [!source]- Source
> [MA Lighting Help – Use masks in the sheets and windows](https://help.malighting.com/grandMA2/en/help/key_wfm_use_masks.html)

Version 3.9

# Use masks in the sheets and windows

If you come to this page without any knowledge about Masks then please read the [What are masks topic](What%20are%20masks.md) and the [Create masks topic](Create%20masks.md).

## Where can Masks be used

Mask can be used in the following sheets and windows:

*   [Channel Sheet](../Operate%20Fixtures/Channel%20Sheet.md)
*   [Fixture Sheet](../Operate%20Fixtures/Fixture%20Sheet.md)
*   [Sequence Content Sheet](../Command%20Syntax%20and%20Keywords/Looking%20at%20the%20cue%20content.md)
*   [Sequence Tracking Sheet](../Command%20Syntax%20and%20Keywords/Looking%20at%20the%20cue%20content.md)
*   [Stage View window](../Patching/Stage%20View.md)

All of these windows can have a local mask that only works for that view or they can follow the mask pool. A local mask only works in that version of the window. This means that you can have two fixture sheets but only one of them have a mask.

## Window options

Turning off or on the mask settings are gone from the windows options. They are opened by tapping the yellow ball in the upper right corner.

The options have three tabs that are interesting regarding masks. The first one is called **LayerMask** the second one is called **Title Buttons** and the last one is **Mask (Local)**.

The [Layer Mask topic](../Operate%20Fixtures/Layer%20mask.md) describes the options that are relevant for the mask function. This is where you can turn On or Off mask functions.

The [Title Button topic](../Operate%20Fixtures/Title%20buttons.md) describes how you enable the buttons that gives fast access to turning On or Of the mask function.

The [Mask (Local)](../Operate%20Fixtures/Mask%20%28local%29.md) tab is where you can create a local mask. The [Create Masks topic](Create%20masks.md) has the actual description about creating the mask.

## Assigning a mask on the fly

You do not need to go through the process of entering the options if you want to use a mask from the pool in one of the five windows mentioned above. Simply press the Assign Key and then the mask you want to assign and finally the title bar of window where you want to use the mask.

For example if you want to assign the **Programmer Only** mask to a **Channel Sheet**, then do the following:

1.  Have both the Mask Pool and the Channel Sheet visible.
2.  Press Assign.
3.  Tap the Prog Only mask
4.  Tap the title bar of the Channel Sheet.

This can of cause be done using command line input (using the [Mask command](../../Keywords/Mask.md)) or better yet a combination of command line input and touching the Channel Sheet.

Same example:

1.  Type assign mask 2 - The Programmer Only mask is locked as mask number 2.
2.  Tap the title bar of the Channel Sheet.

How you want to set up your sheets are completely up to you and it is often also a question about what kind of a show you are doing. This means that there is no one preferred solution or one way that most programmers or operators set up their views. It is completely user definable and up to your own preferences.

← [Create masks](Create%20masks.md) | [Apply worlds or filters to executors and sequences](Apply%20worlds%20or%20filters%20to%20executors%20and%20sequences.md) →

Part of [Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
