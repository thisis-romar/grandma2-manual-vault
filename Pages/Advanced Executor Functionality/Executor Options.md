---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Executor Options"
slug: "key_adv_exec_options"
url: "https://help.malighting.com/grandMA2/en/help/key_adv_exec_options.html"
section: "Advanced Executor Functionality"
ma2_section: "key_adv_exec"
section_ref: "[[Sections/Advanced Executor Functionality]]"
prev_page: "[[Pages/Advanced Executor Functionality/Channel Pages]]"
next_page: "[[Pages/Advanced Executor Functionality/Masters Window]]"
depth: 2
tags:
  - "type/page"
  - "section/adv"
summary: "Each executor can have a lot of options."
---

# Executor Options

> [!source]- Source
> [MA Lighting Help – Executor Options](https://help.malighting.com/grandMA2/en/help/key_adv_exec_options.html)

Version 3.9

# Executor Options

Each executor can have a lot of options. This topic lists all the options and links to topics where they are described. If an option is not described anywhere else, then it is described here.

The Executor Options can be seen when there is a sequence or group assigned to an Executor. Pressing the Assign key following one of the keys associated with the executor will open the Assign Menu. On the right side of the Assign Menu there are a button called Options. This opens the Options part of the menu. It could look like this:

![](../../img/menu_assign_options_sequence_v3-3.png)

_Assign Menu - Options section_

Each column has a topic or headline. The options are described below and they are organized in those topics.

Some of the options here are options for the executor and some are options for the sequence assigned to the executor.

The tile bar has three buttons that are relevant for the options. The left one is the Remember Settings button. Tapping this button will store the current options into the sequence and they will then apply if the sequence is played back from the Sequence Pool. Save Default Sequence Options will store the current options as the default. This default will be used when a new sequence is assigned to an Executor or when the Load Default Sequence Options button is tapped.

## Start

**Auto Start**

The Auto Start function is described in the [[Pages/Executors/Common executor options|Common Executor Options topic]].

**Auto Stop**

The Auto Stop function is described in the [[Pages/Executors/Common executor options|Common Executor Options topic]].

**Auto Stop Off Time**

The Auto Stop Off Time function is described in the [[Pages/Executors/Common executor options|Common Executor Options topic]].

**Auto Fix**

The Auto Fix feature can be activated for each executor. It will automatically Fix active executors and keep it visible even when pages are changed. The executor is automatically Unfixed when it is switched off.

**MasterGo**

The MasterGo function is described in the [[Pages/Executors/Common executor options|Common Executor Options topic]].

**Loop BreakingGo**

Loop BreakingGo is described in the [[Pages/Advanced Sequence Functionality/Looping cues|Looping Cues topic]].

## Playback

**Priority**

The priorities are described in the [[Pages/Command Syntax and Keywords/Playing back Cues|Playing Back Cue topic]].

**Soft LTP**

The Soft LTP function is described in the [[Pages/Command Syntax and Keywords/Playing back Cues|Playing Back Cue topic]].

**Playback Master**

Here it is possible to select a Playback Master. This is all described in the [[Pages/Advanced Executor Functionality/Playback Masters|Playback Master topic]].

**Wrap Around**

The Wrap around function is described in the [[Pages/Command Syntax and Keywords/What is Tracking|What is Tracking topic]].

**Restart**

The Restart function is described in the [[Pages/Executors/Common executor options|Common Executor Options topic]].

**Trigger Is Go**

This option will disable automatic cue triggers like follow and time. The information is not deleted or removed. It is just temporary ignored. Everything in the Trig column in a Sequence Executor Sheet turns red.

**Cmd Disable**

This option disables the execution of the commands in the CMD columns in a sequence. The stored commands are not deleted or removed, they are just disabled. The commands get a red text color when they are disabled.

**Playback Filter**

The playback filter is described in the [[Pages/Worlds Filters and Masks/Apply worlds or filters to executors and sequences|Apply Worlds or Filters to Executors and Sequences topic]].

## XFade

**XFade**

This is used to set how the two CrossfadeA/XfadeA and CrossfadeB/XfadeB faders works. The button has two options:

*   **Split**:  
    The dual crossfaders work as masters for current/next cue.
*   **AB**:  
    The dual crossfaders work as crossfaders for increasing/decreasing values.

## Tracking

**Tracking**

The Tracking function is described in the [[Pages/Command Syntax and Keywords/What is Tracking|What is Tracking topic]].

**Release Firststep**

The Release Firststep function is described in the [[Pages/Command Syntax and Keywords/What is Tracking|What is Tracking topic]].

**Cue Zero**

The Cue Zero function is described in the [[Pages/Advanced Sequence Functionality/Cue Zero|Cue Zero topic]].

**Auto Stomp**

The Auto Stomp function will add **Stomp** values to attributes effect layer when the value layer for that attribute is asserted.

**Cue Zero Extract**

The Cue Zero function is described in the [[Pages/Advanced Sequence Functionality/Cue Zero|Cue Zero topic]].

**Forced Position**

It is possible to force the sequence to use only XYZ values or Pan/Tilt values when moving from one position to another. The default is Active position data. This will use the stored position data. Read more in the  [[Pages/XYZ/XYZ vs. Pan-Tilt|XYZ vs. Pan/Tilt topic]].

**Timecode**

A sequence can have a link to the selected Timecode Slot or a specific Timecode Slot. This can be chosen here. It is relevant if there are cues that uses the timecode signal as the trigger. Read more about timecode in the [[Sections/Timecode|Timecode section]].

**Input Filter**

The playback filter is described in the [[Pages/Worlds Filters and Masks/Apply worlds or filters to executors and sequences|Apply Worlds or Filters to Executors and Sequences topic]].

## Speed

**Speed Factor**

If an executor is assigned to an global Speed Master (read below) then it can be useful to adjust a speed factor. Tapping this button will open the Select Speed Factor pop-up. It looks like this:

![](../../img/popup_select-speed-factor_v3-3.png)

_Small Select Speed Factor pop-up_

Here it is possible to select one of the multipliers or dividers. This multiply or divide the speed by the selected factor.

**Speed Master**

The executor has a speed master. It can be linked to a shared global Speed Master or it can have an individual speed master. Tapping this button will open the Select Speed Master pop-up. It looks like this:

![](../../img/popup_select-speed-master_v3-3.png)

_Small Select Speed Master pop-up_

Here it is possible to select the **Speed Individual** option for having an individual speed master for the executor or select one of the global Speed Masters.

Read more details in the [[Pages/Advanced Executor Functionality/Speed Masters|Speed Masters topic]].

**Rate Master**

The Executor has a rate master. It can be linked to a shared global Rate Master or it can have an individual rate master. Tapping this button will open the Select Rate Master pop-up. It looks like this:

![](../../img/popup_select-rate-master_v3-3.png)

_Small Select Rate Master pop-up_

Here it is possible to select the **Rate Individual** option for having an individual rate master for the executor or select one of the global Rate Masters.

Read more details in the [[Pages/Advanced Executor Functionality/Rate Masters|Rate Masters topic]].

**Stepped Rate**

Enabling this will bind the rate to defined steps instead of a variable value.

**Link Effect To Rate**

This setting will link the effect speed to the rate. Read more about effects and speed in the [[Sections/Effects|Effects section]].

## Protect

**Swop Protect**

Enabling this will protect this executor from being swopped (temporary turned down) by other executors.

**Kill Protect**

Enabling this will protect this executor from being killed (= turned off) by other executors.

**Ignore Exec Time**

When enabled, it will make the executor use the stored timing and not allow the Exec Time fader to overwrite the timing. The Exec Time fader is described in the [[Pages/Workspace/Time Control|Time Control Topic]].

**Off On Overwritten**

The Off On Overwritten function is described in the [[Pages/Executors/Common executor options|Common Executor Options topic]].

## MIB

Move In Black is described in [[Pages/Advanced Sequence Functionality/Working with MIB|Working with MIB topic]].

**MIB always**

This setting will set the MIB to "Early" for every cue. This is marked with a white colored "!Y" in the MIB column all the cues that is able to MIB. Any other settings in the MIB column will stay. They will become active again if this setting is turned Off.

**MIB never**

This setting will disable MIB for all the cues. This is marked with a red colored "!N" in the MIB column all the cues that is able to MIB. Any other settings in the MIB column will stay. They will become active again if this setting is turned Off.

**Auto PrePos**

This function affects all other attributes than dimmers. If this is Off, then the attribute values will use the cue timing to fade from a value to the next. If this is On, then the attributes will change without any fade timing moving as fast as possible. Individual attributes timing is also ignored.

Attributes that uses MIB will use the MIB timing.

## Function

**Chaser**

This will turn the sequence into a Chaser. Read more about chaser in the [[Sections/Chasers|Chasers section]].

**Group Master Mode**

This option is only visible if there is an group master assigned to the executor. This option is explained in the [[Pages/Groups/Group Master on Executors|Group Masters topic]].

← [[Pages/Advanced Executor Functionality/Channel Pages|Channel Pages]] | [[Pages/Advanced Executor Functionality/Masters Window|Masters Window]] →

Part of [[Sections/Advanced Executor Functionality|Advanced Executor Functionality]] · [[000 Map of Content]]
