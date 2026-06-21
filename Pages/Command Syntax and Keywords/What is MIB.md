---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What is MIB"
slug: "key_cs_what_is_mib"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_what_is_mib.html"
section: "Command Syntax and Keywords"
ma2_section: "key_cues_and_sequences"
section_ref: "[Sections/Cues and Sequences](../../Sections/Cues%20and%20Sequences.md)"
prev_page: "[Pages/Command Syntax and Keywords/What is Tracking](What%20is%20Tracking.md)"
next_page: "[Pages/Command Syntax and Keywords/Sequence mini executor](Sequence%20mini%20executor.md)"
depth: 2
tags:
  - "type/page"
  - "section/cs"
summary: "This topic is about the concept of Move In Black (MIB)."
---

# What is MIB

> [!source]- Source
> [MA Lighting Help – What is MIB](https://help.malighting.com/grandMA2/en/help/key_cs_what_is_mib.html)

Version 3.9

# What is MIB

This topic is about the concept of Move In Black (MIB). See the [Working with MIB topic](../Advanced%20Sequence%20Functionality/Working%20with%20MIB.md) for information on how to actually use MIB.

MIB (Move In Black) is a function which in a tracking sequence will look ahead and preposition attributes of fixtures that are fading the dimmer in from zero, to automatically prevent "ugly" transitions where you would normally see the fixture move the attributes into position, while the fixture is fading in.

MIB is enabled on a cue-per-cue basis, by giving the MIB-property of the cue a value which tells the console when it should do the prepositioning.

*   A zero or positive MIB-value indicates an specific cue number from where MIB is allowed
*   A negative MIB-value indicates a relative cue number from where MIB is allowed - please read more about this in the [Working with MIB topic](../Advanced%20Sequence%20Functionality/Working%20with%20MIB.md).

## Example:

Have a look at the following cue sequence:

![](../../img/window_sequence-tracking-sheet_eight-cues_mib-option_v3-3.png)

_Sequence with MIB possibility_

If this cue list is played back not using MIB, there would be a visible fade in color from cue 3 to cue 4 while the fixture was fading up the intensity. MIB can be used to make the fixture preposition the color, before the intensity is faded up.

If cue 4 is given a MIB value of "Early", the console will **as soon as possible** from Cue 2 (from the intensity is faded to 0%) and forward try to preposition fixtures for Cue 4.

If cue 4 is given a MIB value of "Late", the console will try to preposition the values **as late as possible** - when cue 3 is done fading.

If cue 4 is given a MIB value of "1", the console will **as soon as possible** from Cue 1 and forward try to preposition fixtures for Cue 4.

If cue 4 is given a MIB value of "-2", the console will **as soon as possible** from Cue 2.5 and forward try to preposition fixtures for Cue 4. (cue number 4 then 2 cues back in the list equals cue number 2.5).

The actual prepositioning of each attribute will not necessarily take place in the cue indicated by the MIB value. "when possible" means that for each attribute, the prepositioning will be put "on hold" if any of the scenarios below is present.

*   Dimmer-output is above zero
*   Dimmer has a value above zero in any of the cues between the current cue and the cue to prepare for
*   The attribute is included in any of the cues between the current cue and the cue to prepare for

← [What is Tracking](What%20is%20Tracking.md) | [Sequence mini executor](Sequence%20mini%20executor.md) →

Part of [Cues and Sequences](../../Sections/Cues%20and%20Sequences.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
