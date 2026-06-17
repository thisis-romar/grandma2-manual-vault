---
type: "page"
title_str: "Time Control"
slug: "key_ws_time_control"
url: "https://help.malighting.com/grandMA2/en/help/key_ws_time_control.html"
section: "Workspace"
section_ref: "[[Sections/Workspace]]"
prev_page: "[[Pages/Workspace/Master section]]"
tags:
  - "type/page"
  - "section/ws"
---

# Time Control

> [!source]- Source
> [MA Lighting Help – Time Control](https://help.malighting.com/grandMA2/en/help/key_ws_time_control.html)

Version 3.9

# Time Control

The time control is located right beside the encoder bar on screen 2.

It is two on-screen faders controlling two different timing elements. They are called **Program Time** and **Exec Time** (Executor Time).

It could look like this:

![](../../img/img_time-control_3_3.png)

_Time Control_

The faders can be assigned to any Fader Executor. This will give physical fader control. Please read the [Grand Masters topic](key_adv_exec_spec_master_grand.html).

The two faders can be used to set a time. The default maximum is 10 seconds. This maximum value can be changed in Setup->User->[Settings](key_single_multi_systems_user_settings.html#settings).

The bottom of screen 2 can be changed on the grandMA2 onPC. This will make it fit the hardware on a grandMA2 onPC Command Wing. This will hide the Time Control. Please read the [grandMA2 onPC details topic](key_onpc_details.html) for details about turning this On or Off.

The fader can still be assigned to physical faders.

The virtual control can be created on any screen using the **CMD Section window**. This can be found in the **Other** tab in the [Create Basic Windows pop-up](key_windows.html).

## Program Time

The Program Time can be used to add a fade time to changes in programmer values. Set the fader to the desired value and activate the Program Time by pressing the On executor key or tap the Set Time button so there is a red marker. Now the set time will be used for all value changes in the Programmer.

To deactivate it tap the Set Time button again or press the Off executor key. The red marker should disappear.

It is also possible to use the fader as a manual cross fade from old to new values. Tap the Manual Xfade button or press the MFX executor key to activate the crossfade function - a green marker appears. The master will move to the lowest position (if it is not already there). Change the value to the new values - the output will not change! Move the fader from the lowest to the highest position to fade into the new values. The green marker will flash while the cross fade is active.

Tap or press the same button to deactivate the manual cross fade - green marker disappears.

## Exec Time (Executor Time)

The Exec Time can be used to add a different fade time to changes in cue values. Set the fader to the desired value and activate the Exec Time by pressing the On executor key or tap the Set Time button so there is a red marker. Now all cues will change values using the set time. Delay and individual times are ignored. Cues with Follow or Time triggers use the stored time.

To deactivate it tap the Set Time button again or press the Off executor key. The red marker should disappear.

It is also possible to use the fader as a manual cross fade from old to new values. Tap the Manual Xfade button or press the MFX executor key to activate the cross fade function - a green marker appears. The master will move to the lowest position (if it is not already there). Run the desired cues - the output will not change! Move the fader from the lowest to the highest position to fade into the new cues. The green marker will flash while the cross fade is active.

Tap or press the same button to deactivate the manual cross fade - green marker disappears.

An Executor can be set to ignore the Exec Time. This is done in the [Executor Options](key_adv_exec_options.html). This will make the Executor run as normal using the stored cue timings.

← [[Pages/Workspace/Master section]]

Part of [[Sections/Workspace]] · [[000 Map of Content]]
