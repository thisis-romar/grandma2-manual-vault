---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Chaser settings"
slug: "key_chaser_settings"
url: "https://help.malighting.com/grandMA2/en/help/key_chaser_settings.html"
section: "Chasers"
ma2_section: "key_chaser"
section_ref: "[[Sections/Chasers]]"
prev_page: "[[Pages/Chasers/Create a chaser]]"
next_page: "[[Pages/Chasers/Chaser mini executor]]"
depth: 2
tags:
  - "type/page"
  - "section/chaser"
---

# Chaser settings

> [!source]- Source
> [MA Lighting Help – Chaser settings](https://help.malighting.com/grandMA2/en/help/key_chaser_settings.html)

Version 3.9

# Chaser settings

## The Chaser Encoder Toolbar

The **Chaser Encoder Toolbar** is useful to edit the chaser. To open the toolbar, press Edit and one of the keys associated with the executor.

There are several options to set up and play back the chaser, in the cyan **Chaser Encoder Toolbar**.

![](../../img/window_chaser_encoder_toolbar.png)

_Chaser encoder toolbar_

* * *

## The Edit chaser key

Tap the Edit Chaser key. This opens an **Edit Chaser Window**.

![](../../img/popup_edit_chaser.png)

_Edit chaser window_

To name the chaser tap Label.

To manages the direction of the chaser, tap Direction. The default direction is Forward. This key opens the **p**op-up **Select Chaser Run Mode**  with four different directions.

![](../../img/popup_select_chaser_run_mode_v3_3.png)

_Select Chaser Run Mode_

*   **Forward** and **Backward** runs the Chaser in the given direction.
*   **Bounce** runs through the steps to the end and then backwards to the first step. It continues to bounce between the first and the last step.
*   **Random** runs the steps in a random pattern.

Tap Loop Endless and the pop-up **Loop Options** opens, with three different **Loop** options:

![](../../img/popup_select_chaser_loop_mode_v3_3.png)

_Select Chaser Loop Mode pop-up_

*   **Endless** keeps the chaser running until it receives new information.
*   **Shoot-Off** runs the steps once, then turns off the chaser.
*   **Shoot-On** runs the steps once, and leaves the chaser in the last step.

 Edit Current,  Edit Previous and Edit Next buttons edits cues. For more information, see the topic [[Pages/Command Syntax and Keywords/Looking at the Cue Sequence|Looking at the cue sequence]].

  
Set the **Speed** of the Chaser with Speed Individual. This opens the **Select Speed Group** Pop-up.

![](../../img/popup_select_speed_group_v3_3.png)

_Select Speed Group_

*   **Individual speed** lets the chaser run with the speed set by the **Speed Encoder**
*   **Speed 1** through **Speed 15** limits the speed of the chaser by a **Speed Master**. This is useful to keep the chaser in sync with other chasers and effects. For more information, see [[Pages/Executors/Assign a function|Assign a Function]].
*   The **BPM** option measures the Beat from the Audio In signal. For more information, see [[Pages/Other System Tools/Sound input window|Sound In]].

To enable or disable the **CMD** field in the Chasers Executor sheet, tap the Cmd Disable button. If the CMD is disabled, the CMD Disable turns cyan and all the Commands in the **CMD** row of the **Executor sheet** are displayed in red.

There is also the opportunity to test the command in the **CMD** field. If a current step is present and a command is entered in the **CMD** field, tap Test Cmd  to test the function.

Sometimes the chaser has to keep the beat but double or half the speed.

*   To half of the current value, tap Half Speed.
*   To double the current value tap Double Speed. 
*   Speed 1:1 resets the speed to the value set by the Speed Encoder, the Speed Master or the Audio In, depending on the selected Speed Group.

Another option is to tap Speed. This opens the pop-up **Select Speed Factor.** This is useful to multiply or divide the speed by 2, 4, 8, 16, or 32 of the selected Speed Group.

To exit the **Edit Chaser** window tap ![](../../img/icon_close_v3-2.png) 

* * *

## The Playback Buttons

The buttons to start, stop and pause the chaser:

*   To start the chaser, tap ![](../../img/icon_play_v3-2.png). This starts the chaser from the first cue to the last, and then loop to the first again.
*   To start the chaser, running from the last cue to the first, and then loop to the last again, tap ![](../../img/icon_go-back_v3-2.png) .
*   To stop the chaser, tap  ![](../../img/icon_off_v3-2.png) . 
*   To pause the chaser in the current step, and keep the actual output, tap ![](../../img/icon_pause_v3-2.png). Tap the ![](../../img/icon_pause_v3-2.png) to start the chaser again, from the current step.
*   To stop the chaser and step thru the steps one by one, tap ![](../../img/icon_skip-minus_v3-2.png) or ![](../../img/icon_skip-plus_v3-2.png) . 

* * *

## The Encoders

The four encoders have 6 different functions. The four basic functions are available when the button shows Basic 1 of 2. By tapping the button again, it will change to Advanced 2 of 2.

Basic buttons starting from left:

1.  The first encoder is a **Master**. This master controls the intensity of the chase measured in percent.
2.  The second encoder is the **Speed,** default displayed in BPM (beats per minute). This will affect the time between the cues in the chaser. So if the speed is set to 60 BPM, the cues change every 1 second. The speed readout can be changed in Setup->User->Settings.
3.  The third encoder is the **Step** fade measured in percent. This encoder is used to set the fade time between the steps. If the percent is 0, the chaser snaps between the steps. If it is set to 100 % it uses the time restricted by the speed encoder. If the percent is over 100, the chaser will start fading down, before the step is at full. The in-fade and the out-fade percent, can be adjusted individually. Read more below.  
4.  The fourth encoder is called **Master Fade** and manage the in-fade and the out-fade time of the chaser. The time is measured in seconds.

To enable two more options, tap the Basic 1 of 2 key. The key changes to Advanced 2 of 2.

The two encoders, starting from left:

1.  On the first encoder, the **In-fade** of the steps is set. If the percent is 0, the chaser snaps between the steps, and if it is set to 100 % it will use the time restricted by the speed encoder. If the percent is over 100, the chaser will start fading down, before the step is at full.
2.  On the second encoder, the **Out-fade** of the steps is set. If the percent is 0, the chaser will snap the steps to zero, and if it is set to 100 % it will use the time restricted by the speed encoder.

← [[Pages/Chasers/Create a chaser]] | [[Pages/Chasers/Chaser mini executor]] →

Part of [[Sections/Chasers]] · [[000 Map of Content]]
