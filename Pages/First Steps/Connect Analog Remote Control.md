---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Connect Analog Remote Control"
slug: "key_fs_connect_analog_remote_control"
url: "https://help.malighting.com/grandMA2/en/help/key_fs_connect_analog_remote_control.html"
section: "First Steps"
ma2_section: "key_first_steps"
section_ref: "[[Sections/First Steps]]"
prev_page: "[[Pages/First Steps/Connect Ethernet]]"
next_page: "[[Pages/First Steps/Connect grandMA2 fader wing]]"
depth: 2
tags:
  - "type/page"
  - "section/fs"
---

# Connect Analog Remote Control

> [!source]- Source
> [MA Lighting Help – Connect Analog Remote Control](https://help.malighting.com/grandMA2/en/help/key_fs_connect_analog_remote_control.html)

Version 3.9

# Connect Analog Remote Control

To use the analog remote control, connect a contact closure switch e.g., a light barrier or a push button.

Generate a switch that sends between +5 and +15 volts to pin 1 for the console to react to analog input number 1.

There are two ways to generate a switch:

1.  Take the +5V voltage from pin 21-22.  
    \-or-
2.  Take an external voltage (+5V up to +15V), connect the ground of the external voltage source to the common ground pin of the grandMA2 console or MA onPC command wing.

Then connect the switch to one input pin 1-16 with a potential free contact (switcher, buzzer, motion detector, or any other switching device) in between.

To configure the remote see [[Pages/Remote Control/Remote Inputs|Remote Controlling the System - Remote Input]].

**Pin layout for grandMA2 consoles:**    
The grandMA2 consoles have a 25 pin D-sub, enabling 16 remote inputs:  
Pin 1-16 = input  
Pin 21-22 = + 5V  
Pin 25 = common ground

**Pin layout for MA onPC command wings:**  
The MA onPC command wing has a 15 pin D-sub, enabling 12 remote inputs:  
Pin 1-6 = input channels 1,3,5,7,9,11  
Pin 9-14 = input channels 2,4,6,8,10,12  
Pin 7 = + 5V  
Pin 8 = common ground  
Pin 15 = not used

*   Connect a D-sub plug to the DC remote control connector on the rear panel.

The analog remote control is connected to the DC remote control.

![](../../img/img_grandma2_remotecontrol_connector_3_2.png)

_grandMA2 full-size DC remote control connector_

![](../../img/img_commandwing_remotecontrol_connector_3_2.png)

_MA onPC command wing DC remote control connector_

← [[Pages/First Steps/Connect Ethernet]] | [[Pages/First Steps/Connect grandMA2 fader wing]] →

Part of [[Sections/First Steps]] · [[000 Map of Content]]
