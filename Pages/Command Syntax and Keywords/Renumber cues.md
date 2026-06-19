---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Renumber cues"
slug: "key_cs_renumber_cues"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_renumber_cues.html"
section: "Command Syntax and Keywords"
ma2_section: "key_cues_and_sequences"
section_ref: "[[Sections/Cues and Sequences]]"
prev_page: "[[Pages/Command Syntax and Keywords/Cue timings]]"
next_page: "[[Pages/Command Syntax and Keywords/Delete Cues]]"
depth: 2
tags:
  - "type/page"
  - "section/cs"
summary: "Cue numbers can be changed."
---

# Renumber cues

> [!source]- Source
> [MA Lighting Help – Renumber cues](https://help.malighting.com/grandMA2/en/help/key_cs_renumber_cues.html)

Version 3.9

# Renumber cues

Cue numbers can be changed. This cannot be used to move the cues around and change the cue order.

When editing a cue number in the Sequence Executor Sheet, a pop-up like this will appear:

![](../../img/popup_edit-cue-numbers_v3-3.png)

_Edit Cue Numbers pop-up_

A range of cues can be selected for renumbering, but remember that the new numbers cannot exceed the numbers before and after the selection.

The two top input fields in this pop-up can be used to set a range or simply have a range of one.

Below this is the renumber section. Here is the option to set the "New Number". This will be the number of the first cue if a range of cues are selected.

A "Step Width" can be defined. This is relevant if a range of cues are selected. This will then be used to set the step size between the cue range.

With the input fields correctly filled out, tapping the Renumber button will do the renumbering - this will also close the pop-up.

## Other Functions

The Other Functions section at the bottom have four buttons.

"Change Color" is described below.

"Block Cue(s)", "Unblock Cue(s)" are related to tracking. This is described in the [[Pages/Command Syntax and Keywords/What is Tracking|What is Tracking topic]].

"Delete Cue(s)" will delete the selected cues. This is discussed in the [[Pages/Command Syntax and Keywords/Delete Cues|Delete Cues topic]].

## Change cue color

A cue can have a color assigned to the row in the Sequence Executor Sheet.

This can be done using the command line or by tapping the Change Color button in the Edit Cue Numbers pop-up.

The [[Keywords/Appearance keyword]] is used to do this via the command line.

Unless you use the command line input to specify a color then the **Select Color pop-up** appears.

The sheet options control if this color is visible and how may cells will have the background color. Read more about this in the [[Pages/Operate Fixtures/Display|Sheet Options - Display - Cue Color Columns]].

← [[Pages/Command Syntax and Keywords/Cue timings]] | [[Pages/Command Syntax and Keywords/Delete Cues]] →

Part of [[Sections/Cues and Sequences]] · [[000 Map of Content]]
