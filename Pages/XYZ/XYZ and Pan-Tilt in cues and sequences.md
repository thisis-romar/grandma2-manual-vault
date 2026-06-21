---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "XYZ and Pan/Tilt in cues and sequences"
slug: "key_xyz_pan_tilt_in_cues_sequences"
url: "https://help.malighting.com/grandMA2/en/help/key_xyz_pan_tilt_in_cues_sequences.html"
section: "XYZ"
ma2_section: "key_xyz"
section_ref: "[Sections/XYZ](../../Sections/XYZ.md)"
prev_page: "[Pages/XYZ/XYZ vs. Pan-Tilt](XYZ%20vs.%20Pan-Tilt.md)"
next_page: "[Pages/XYZ/Use Stage Markers](Use%20Stage%20Markers.md)"
depth: 2
tags:
  - "type/page"
  - "section/xyz"
summary: "It is possible to individually set the position mode in a cue or a sequence."
---

# XYZ and Pan/Tilt in cues and sequences

> [!source]- Source
> [MA Lighting Help – XYZ and Pan/Tilt in cues and sequences](https://help.malighting.com/grandMA2/en/help/key_xyz_pan_tilt_in_cues_sequences.html)

Version 3.9

# XYZ and Pan/Tilt in cues and sequences

It is possible to individually set the position mode in a cue or a sequence.

Set the position mode when storing a cue using the temporary store options.

1.  Open the **Store Options**.

For more information on the store options in cues and sequences and how to open them see [Store options and defaults](../Command%20Syntax%20and%20Keywords/Store%20Options%20and%20Defaults.md).

![](../../img/popup_store_options_3_2.png)

_Set position mode when storing a cue or a sequence_

2.  To toggle between the position modes when storing a cue or a sequence, tap Active position data.
3.  Press Please.
4.  The position mode you have selected is now applied. 

* * *

## Position Modes

*   **Active position data:**  
    Stores position data as they are – XYZ or pan and tilt.
*   **XYZ:**  
    Converts the pan and tilt values to XYZ values and stores them.
*   **Pan/Tilt:**  
    Converts the XYZ values to pan and tilt and stores them.

* * *

## Set Position Modes in a Sequence

Set a default position mode in the Assign Menu of a sequence for the entire sequence.

**Requirement:**

[Assign a sequence to an executor](../Executors/Assign%20a%20function.md)

1.  Open the **Assign Menu** of the sequence:  
    \-Tap Assign and press the executor you have saved the sequence on.  
    \-The **Assign Menu** opens.  
    \-Tap Options on the right of the menu.

![](../../img/menu_assign_options_sequence_v3-3.png)

_Set a default position mode in a sequence_

2.  Tap the button Forced Pos. Mode in the column **Tracking** and the **pop-up Select Forced Position Mode** opens.

![](../../img/popup_select-forced-position-mode_v3-3.png)

_Select position mode_

3.  Tap the position mode you would like to set as the default of the sequence. 
4.  The default is now set.

* * *

## Set Position Modes in the Sequence Executor Sheet

The **Forced Position Mode** in the sequence executor sheet allows to adjust the position in single cues after the positions were saved. It defines how pan and tilt is executed onstage. 

**Requirement:**

[Store cues](../Command%20Syntax%20and%20Keywords/Storing%20cues.md)

1.  Open the sequence executor sheet. For more information see [Manage windows – Create Basic Window](../../Sections/Windows.md).

![](../../img/window_sequence-executor-sheet_v3-3.png)

_Open sequence executor sheet_

2.  Tap All in the title bar and scroll to the column **Forced Pos. mode**.

![](../../img/window_sequence-executor-sheet_forced-pos-mode_v3-3.png)

_Adjust forced position mode in a single cue_

3.  Tap and hold the cell below **Forced Pos. mode** and the **pop-up Select Forced Pos. mode** opens.

![](../../img/popup_select-forced-pos-mode_sequence-executor-sheet_v3-3.png)

_Select the position mode of a cue_

4.  Tap the position you would like to set for the current cue.
5.  The position has been adjusted.

← [XYZ vs. Pan-Tilt](XYZ%20vs.%20Pan-Tilt.md) | [Use Stage Markers](Use%20Stage%20Markers.md) →

Part of [XYZ](../../Sections/XYZ.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
