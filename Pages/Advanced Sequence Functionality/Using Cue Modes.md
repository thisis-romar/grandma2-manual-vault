---
type: "page"
title_str: "Using Cue Modes"
slug: "key_adv_seq_cue_modes"
url: "https://help.malighting.com/grandMA2/en/help/key_adv_seq_cue_modes.html"
section: "Advanced Sequence Functionality"
ma2_section: "key_adv_seq"
section_ref: "[[Sections/Advanced Sequence Functionality]]"
prev_page: "[[Pages/Advanced Sequence Functionality/Working with MIB]]"
next_page: "[[Pages/Advanced Sequence Functionality/Cue Zero]]"
depth: 2
tags:
  - "type/page"
  - "section/adv"
---

# Using Cue Modes

> [!source]- Source
> [MA Lighting Help – Using Cue Modes](https://help.malighting.com/grandMA2/en/help/key_adv_seq_cue_modes.html)

Version 3.9

# Using Cue Modes

Each cue has a mode that can be changed in the [Sequence Executor Sheet](key_cs_cue_sequence.html).

The cells in the Mode column can be edited.

Doing so will open the small Select Mode pop-up. It looks like this:

![](../../img/popup_select-mode-cue_v3-3.png)

_Small Select Mode pop-up_

The pop-up allows for the following modes:

*   **Normal**:  
    This is the default mode. It does not do anything special.
*   **Assert**:  
    This will force attributes to the current tracking status using the basic timing of the cue the tracking status is coming from.
*   **X-Assert**:  
    This will force attributes to the current tracking status using the basic timing of the current called cue.
*   **Release**:  
    Turns off the executor when the fade is complete.
*   **Break**:  
    Will create a tracking break (stops tracked values) and performs an Assert.
*   **X-Break**:  
    Will create a tracking break (stops tracked values) and performs a X-Assert.

## Example and Explenation

In a tracking sequence, the content of a cue represent the changes happening in that cue. Any unchanged values will track from earlier cues, and the state - the actual look - of the cue is a combination of what has happened earlier and what is happening in the cue. This tracking philosophy works similar to how the staging, set design and any props may be handled.

Cue 1: Place sofa on stage left.

Cue 2: Actor 1 enters from rear.

Cue 3: Actor 2 enters from left and gets seated.

Cue 4: Actor 1 exits stage right.

Even though Cue 3 only tells us that Actor 2 will be in the sofa, when we are in Cue 3, we also have the sofa and Actor 1 on stage. Unless we take out the sofa, it will stay on stage.

In some scenarios, you may want this tracking behavior to stop. When starting the second act, you do not want any additional props added to first act to stay on the stage, just because you did not tell the stage crew to carry these out when you originally created the look of the first cue of second act. You want this tracking behavior to **Break**.

The Break mode of a cue will make sure that any later addition or changes in **earlier** cues is reverted back to its original state in the break cue, similar to how a Cue Only store would work for the next cue.

**Hint:**  
A **Break** is indicated in both [Sequence Executor Sheet](key_cs_cue_sequence.html) and [Sequence Tracking Sheet](key_cs_cue_content.html) with a white line above the cue.

By default when calling a cue with a normal "Go", only the content of the cue is called, not the tracking state. If you are only using one executor/playback this behavior is irrelevant, however if you have other executors that might have overwritten the state of the fixtures, you might in some scenarios want the called cue to also call the tracking state. This may be achieved with the cue mode **Assert**. Assert will call the state of the sequence, by using the basic cue timing from where the value is stored. This will affect any ongoing fades (for example a 30 minutes sunset still on its way out).

In other scenarios, you might want to re-establish the state, and assert the sequence, but terminate any ongoing fades. The cue mode **X-Assert** will fade to the current tracking state - with the timing of the currently called cue. This may be used if you for instance want to make sure that your zero second Blackout Cue is cutting to black, even if you have to run the cue earlier than usual and the sunset has not yet finished.

The **Release** mode might come in handy in shows where there is a lot of sequences that run through once and then turn off - until it is re-triggered. This could be a flash sequence being triggered by the main sequence. Instead of manually programming the sequence to turn Off, then it can be done automatically.

← [[Pages/Advanced Sequence Functionality/Working with MIB]] | [[Pages/Advanced Sequence Functionality/Cue Zero]] →

Part of [[Sections/Advanced Sequence Functionality]] · [[000 Map of Content]]
