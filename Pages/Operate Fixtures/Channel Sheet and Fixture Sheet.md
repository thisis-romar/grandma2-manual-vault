---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Channel Sheet and Fixture Sheet"
slug: "key_of_layers_in_sheets_channel_and_fixture"
url: "https://help.malighting.com/grandMA2/en/help/key_of_layers_in_sheets_channel_and_fixture.html"
section: "Operate Fixtures"
ma2_section: "key_operate_fixtures"
section_ref: "[[Sections/Operate Fixtures]]"
next_page: "[[Pages/Operate Fixtures/Sequence Content Sheet And Sequence Tracking Sheet]]"
depth: 3
tags:
  - "type/page"
  - "section/of"
---

# Channel Sheet and Fixture Sheet

> [!source]- Source
> [MA Lighting Help – Channel Sheet and Fixture Sheet](https://help.malighting.com/grandMA2/en/help/key_of_layers_in_sheets_channel_and_fixture.html)

Version 3.9

# Channel Sheet and Fixture Sheet

Channel sheet and fixture sheet share identical layers.

**Important:**  
The layers in the channel and fixture sheet display which values are currently being released. 

**Important:**  
If layers have colored markers, this means that the attributes are actively in the programmer. 

![](../../img/img_layers-with-markers_v3-3.png)

_Layers With Markers_

* * *

### Value Layers

Value Layers comprise the following in the channel and fixture, sequence content and sequence tracking sheet:

![](../../img/image_fixture-sheet_value-layers_v3-3.png)

_Value Layers_

**Values:**

Displays normal values, for example numbers of presets, names and channel sets.

Example:

\[Channel\]> Channel 1 At Full

Sets the dimmer of channel 1 to full and displays the value as "open". 

**Fade:**

Displays individual fade values. 

**Delay:**

Displays individual delay values. 

**Values Only:**

Displays the values in form of numbers.

Example:

\[Channel\]> Channel 2 At 55

Sets dimmer of channel 2 to 55 and displays the value, depending on the readout, as 55.0. 

**Auto:**

If you tap **Auto,** the sheet will obey the encoder bar.

**Hint:**  
To jump to different layers within value layers, tap **Auto** and press Time. 

* * *

### Effect Layers

**Hint:**  
To jump to different effect layers, tap Auto and press ![ma](../../img/ma_1.png) + Time. 

Effect Layers comprise the following in the channel and fixture, sequence content and sequence tracking sheet:

![](../../img/image_fixture-sheet_effect-layers_v3-3.png)

_Effect Layers_

**Form:**

Displays names and numbers of values, which have been taken from the form pool. 

**Speed:**

Displays time in a format that was set in user settings. 

**Speed Group:**

Displays speed groups that are linked to active values. All in all, there are 16 speed groups. 

**Low:**

Displays the values of low that are set for fixtures. 

**High:**

Displays the values of high that are set for fixtures.

**Important:**  
The effect "moves" between the values of high and low, so to speak.

**Hint:**  
It is possible to set the values of high and low with the first encoder on the left, right above screen 1 on the console. 

**Phase:**

This effect has a radius of 360° and displays the phase an effect is to start at, generating a wave form. 

**Width:**

Displays the percentage of the fixtures that have the values of high and low. This determines the extent of effect modulations. 

**Fade:**

Displays the individual fade time an effect is to start with. 

**Delay:**

Displays the individual delay time an effect is to start at.

**Attack:**

Displays the difference of the fade-in times in single values. 

**Decay:**

Displays the difference of fade-out times in single values. 

**ID:**

Displays name and number if effect was started in the effect pool.

* * *

### Output Layers

Output Layers comprise the following in the channel and fixture sheet:

![](../../img/image_fixture-sheet_output-layers_v3-3.png)

_Output Layers_

**Output:**

Displays values together with group masters and masters. However, it is not possible to see if a profile was set. 

**Value Exec ID:**

Displays which executor the values come from stating the number of the page and the executor. For example, 1:11 means that the value is on page 1 and in executor 11.

**Effect Exec ID:**

Displays which executor the effects come from stating the number of the page and the executor. 

**Value Cue ID:**

Displays which cue the values come from stating the number of the sequence and cue. For example, 8:1 means that the value is in sequence 8 and the sequence itself is in cue 1. 

**Effect Cue ID:**

Displays which cue the effect comes from stating the number of the sequence and cue. 

**DMX:**

Displays the DMX value that comes out of the console. Shows all values independently of masters or profiles.

[[Pages/Operate Fixtures/Sequence Content Sheet And Sequence Tracking Sheet]] →

Part of [[Sections/Operate Fixtures]] · [[000 Map of Content]]
