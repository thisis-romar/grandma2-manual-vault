---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Create groups"
slug: "key_groups_create_groups"
url: "https://help.malighting.com/grandMA2/en/help/key_groups_create_groups.html"
section: "Groups"
ma2_section: "key_groups"
section_ref: "[Sections/Groups](../../Sections/Groups.md)"
next_page: "[Pages/Groups/Auto Create groups](Auto%20Create%20groups.md)"
depth: 2
tags:
  - "type/page"
  - "section/groups"
summary: "Groups contain a selection of fixtures and the selection order of the fixtures."
---

# Create groups

> [!source]- Source
> [MA Lighting Help – Create groups](https://help.malighting.com/grandMA2/en/help/key_groups_create_groups.html)

Version 3.9

# Create groups

Groups contain a selection of fixtures and the selection order of the fixtures.

To create groups you'll need to select some fixtures first.

## Create group using Group pool (GUI)

When you have a selection of fixtures, then you can store it as a group.

For more information on how to store group objects see [Manage pool objects](../Pools/Manage%20pool%20objects.md). 

## Store a group on an existing group

If you store a selection of fixtures into an existing group then you are presented with some options. It's the Choose store Method pop-up:

![](../../img/popup_choose-store-method_v3-2.png)

_Choose store method pop-up_

  
There's three options here:

*   Overwrite This will delete the current content in the group and store the new selection instead.
*   Merge This will add the new fixtures to the current fixtures. The new fixtures are added after the existing fixtures. I.e. if you have a group with fixture 1, 3 and 5 and you merge in fixtures 2, 4 and 6. Then your group will have fixtures 1 to 6 but the selection order will be 1,3,5,2,4,6.
*   Remove This will remove your currently selected fixtures from the group (should they be there).

If you tap the X in the upper right corner of the pop-up then you cancel the store operation.

## Labeling the groups

The grandMA2 will try to give the group a name when you store it. But if your selection is to complex for the console, then it'll just call it "Group" and then the group number.

Immediately after you have stored the group, you can start typing on the keyboard. This will name the group you just stored.

If you wish to name the group later then you can use the [Label command](../../Keywords/Label.md).

For more information on how to label the groups see [Manage pool objects](../Pools/Manage%20pool%20objects.md). 

## Editing groups

When you are in the edit mode, then you get the group content as selected fixtures in your programmer. You can then change this selection. If you want to save the new selection then you press the Update key and confirm that you want to update the group in the small confirmation pop-up.

For more information on how to edit groups see [Manage pool objects](../Pools/Manage%20pool%20objects.md).

[Auto Create groups](Auto%20Create%20groups.md) →

Part of [Groups](../../Sections/Groups.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
