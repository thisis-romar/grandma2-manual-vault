---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What are executors"
slug: "key_exec_what_are"
url: "https://help.malighting.com/grandMA2/en/help/key_exec_what_are.html"
section: "Executors"
ma2_section: "key_exec"
section_ref: "[Sections/Executors](../../Sections/Executors.md)"
next_page: "[Pages/Executors/Executors on the screens](Executors%20on%20the%20screens.md)"
depth: 2
tags:
  - "type/page"
  - "section/exec"
summary: "Executors are the handles that are usually preferred when controlling sequences and other playback elements on the grandMA2."
---

# What are executors

> [!source]- Source
> [MA Lighting Help – What are executors](https://help.malighting.com/grandMA2/en/help/key_exec_what_are.html)

Version 3.9

# What are executors

Executors are the handles that are usually preferred when controlling sequences and other playback elements on the grandMA2.

The different elements that can be assigned to an executor are:

*   [Sequences](../../Sections/Cues%20and%20Sequences.md)
*   [Group Masters](../Groups/Group%20Master%20on%20Executors.md) (only Fader Executors)
*   [Special Masters](../Advanced%20Executor%20Functionality/Special%20Masters.md) (only Fader Executors)
*   [Effects](../Effects/Assign%20effect%20to%20executor.md)
*   [Macros](../Macros/Assign%20a%20macro%20to%20a%20key.md)
*   [Timers](../../Sections/Timer.md)

Read the [Assign a Function topic](Assign%20a%20function.md) to learn how to assign the different elements to the executors.

Executors exist in two variations.

One is called "Fader Executor", the other is "Button Executor". 

The difference is in the hardware associated with the executor. A Fader Executor has a physical fader and three associated keys with the same number. A Button Executor only has one physical key and a virtual fader.

The executors are grouped in blocks of 5 executors. Three blocks of 5 is a section with 15 executors.

A grandMA2 full size has 30 Fader Executors (numbered 1 through 30) and 30 Button Executors (numbered 101 through 130). There are also 20 X-Keys, they can also function as Button Executors (numbered X1 through X20).

A grandMA2 light has 15 Fader Executors (numbered 1 through 15) and 15 Button Executors (numbered 101 through 115). There are also 20 X-Keys, they can also function as Button Executors (numbered X1 through X20).

A grandMA2 ultra light has 15 Fader Executors (numbered 1 through 15) and 15 Button Executors (numbered 101 through 115). There are also 10 X-Keys, they can also function as Button Executors (numbered X1 through X10).

The X-keys can be changed to Executors by pressing the List key.

If there is a screen above your executors on your console, then the bottom part of the screen will show the [Mini Executor Bar](../Workspace/Mini%20executor%20bar.md). This functions as labeling and information about what is assigned to the executors. The different Mini Executor Bars are described in the relevant topics - depending on the function assigned to the executor.  

The Executors can also be represented virtually on the screens - please read about this in the [Executors on the Screens topic](Executors%20on%20the%20screens.md).

* * *

## Select Executor

There is always at least one selected executor. It is the executor with a green background at the top of the executor representation in the Mini Executor Bar.

![](../../img/img_mini-executor_sequence_v3_3.png)

_Selected Executor number 1_

In the image above the left executor is the selected executor.

The selected executor is used by the Master Section and the two 100mm faders - see more in the [Master section topic](../Workspace/Master%20Section.md).

The selected executor is also often used in sheets.

It is possible to select more than one executor, but the first one selected is a little bit more selected then the others - it is the one displayed in sheets and in the Master Section. The three big   Go+  ,   Go-   and  Pause  keys executes the commands on all selected executors. Commands not sent to a specific executor is executed on all the selected executors. For instance Store Cue 21 will store the cue on all selected executors.

Selecting multiple executors can be done by keeping the Select key pressed while pressing executor keys. It is also possible using the command line. For instance Select Exec 1 + 2 Please will select both executor 1 and 2.

* * *

## Executor Encoder Toolbar

If the executor have a sequence assigned then the Encoder Toolbar might change to look like this:

![](../../img/img_encoder-toolbar_executor_v3_3.png)

_Encoder Toolbar - Executor_

This toolbar appears if you have opened the sequence editor and closes the editor.

The top row have some buttons and information.

Starting from the left there is an information "button" that shows the executor number, the sequence number and name. It is not actually a button. Next to this is a button that enters or exits the Sequence Editor - This will also change the Encoder Toolbar. Next are six buttons that can be used to control the sequence playback - please read more about these controls in the [Playing back Cues topic](../Command%20Syntax%20and%20Keywords/Playing%20back%20Cues.md). 

The bottom encoder row gives access to change the: Master, Rate, and Off Time. They are each assigned to one of the four encoders.

The **Master** is the same as a Master fader - this control the intensity level. The **Rate** is the same as the Rate master - this manipulates the fade times in the cues. Read about Rate in the [Cue Timings topic](../Command%20Syntax%20and%20Keywords/Cue%20timings.md).

The **OFF Time** is used when the executor is turned off. This can be used to fade out the intensity and keep other attributes (color, position, and so on) until the fade out is complete. The Off time can also be set using a **MFade** fader - read the [Assign a Function topic](Assign%20a%20function.md) to learn more about assigning a fader function or read more about the MFade in the [Default Masters topic](../Advanced%20Executor%20Functionality/Default%20Masters.md).

[Executors on the screens](Executors%20on%20the%20screens.md) →

Part of [Executors](../../Sections/Executors.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
