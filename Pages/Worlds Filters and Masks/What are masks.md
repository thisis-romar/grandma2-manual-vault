---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What are masks"
slug: "key_wfm_what_are_masks"
url: "https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_masks.html"
section: "Worlds Filters and Masks"
ma2_section: "key_wfm_world_filter_mask"
section_ref: "[Sections/Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md)"
prev_page: "[Pages/Worlds Filters and Masks/Use temporary filters](Use%20temporary%20filters.md)"
next_page: "[Pages/Worlds Filters and Masks/Create masks](Create%20masks.md)"
depth: 2
tags:
  - "type/page"
  - "section/wfm"
summary: "Masks are a way to hide fixtures and attributes in some sheets and the Stage window."
---

# What are masks

> [!source]- Source
> [MA Lighting Help – What are masks](https://help.malighting.com/grandMA2/en/help/key_wfm_what_are_masks.html)

Version 3.9

# What are masks

Masks are a way to hide fixtures and attributes in some sheets and the Stage window.

Mask can be local to the window, but they can also be in the mask pool. Sheets and Stage can then listen to the selected mask in the pool and apply it to the sheet or stage window.

If you do not know about pools, then it is strongly suggested that you first read the [Pools in General section](../../Sections/Pools.md).

The Mask pool could look like this:

![](../../img/window_mask-pool_v3-3.png)

_Mask pool - pool style_

As with all pools, this can also be changed into Sheet style in the pool options. Then it could look like this:

![](../../img/window_mask-pool_sheet-style_v3-3.png)

_Mask pool - sheet style_

The selected mask is the one with the green background. You can simple select a mask by tapping it in the pool or by using the Mask command followed by the number or name. See more in the [Mask Keyword topic](../../Keywords/Mask.md).

Hiding fixtures and attributes in windows does not restrict your access to fixtures or attributes, it just hides it.

There are 6 predefined masks in the pool. The following is a short description of the masks:

*   **None:**  
    This does not hide anything.
*   **Prog Only:**  
    This hides everything that is not in your programmer.
*   **Active Only:**  
    This hides everything that is not active values in your programmer.
*   **Parked:**  
    This will hide everything that does not have any parked values.
*   **Seq+:**  
    This mask will only show the fixtures and attributes that are stored in the selected sequences - including any default fixture values.
*   **Seq-:**  
    This mask will only show the fixtures and attributes that are stored in the selected sequences - but it will also hide any default fixture values stored.

Please read the [Create Masks topic](Create%20masks.md) to learn how to create your own and the [Use Masks in sheets topic](Use%20masks%20in%20the%20sheets%20and%20windows.md) to learn about using the masks in the sheets and Stage window.

← [Use temporary filters](Use%20temporary%20filters.md) | [Create masks](Create%20masks.md) →

Part of [Worlds Filters and Masks](../../Sections/Worlds%20Filters%20and%20Masks.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
