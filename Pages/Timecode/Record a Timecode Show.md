---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Record a Timecode Show"
slug: "key_timecode_record"
url: "https://help.malighting.com/grandMA2/en/help/key_timecode_record.html"
section: "Timecode"
ma2_section: "key_timecode"
section_ref: "[[Sections/Timecode]]"
prev_page: "[[Pages/Timecode/What is Timecode and Timecode Shows]]"
next_page: "[[Pages/Timecode/Edit a Timecode Show]]"
depth: 2
tags:
  - "type/page"
  - "section/timecode"
---

# Record a Timecode Show

> [!source]- Source
> [MA Lighting Help – Record a Timecode Show](https://help.malighting.com/grandMA2/en/help/key_timecode_record.html)

Version 3.9

# Record a Timecode Show

There are two ways a timecode signal can trigger cues. One is to set "Timecode" as the trigger for the cues and then add a time in the "Trig Time column". The other is to record a timecode show.

## Use timecode as cue trigger

A simple way to trigger cues using a  timecode signal is the **Timecode** trigger in the [Sequence Executor Sheet](key_cs_cue_sequence.html). Read about the triggers in the [Playing Back Cues topic](key_cs_playback.html).

Each sequence can be assigned a timecode slot - see how in the [What are Cues and Sequences topic](key_cs_what_are.html).

The time is then set in the "Trig Time" column in the **Sequence Executor Sheet**. When the assigned timecode slot reaches the time then the cue is triggered - it does not matter if the executor is active or not.

The time can be typed manually or it can be recorded.

To do a recording the trigger needs to be set to **Timecode** and the executor needs to set in record mode. Even though the time is recorded into the sequence, it is still the executor that needs to be set into record mode:

Press ![ma](../../img/ma_1.png)+Store to get the [Record keyword](key_keyword_record.html), then press any of the keys associated with the executor where the sequence is assigned. It can also be typed as a command: Record Executor \[number\]

**Hint:**  
Executing the Record command without a reference to a specific executor will toggle the record mode of the selected executor.

Now trigger the cues using a normal **GO** command and then the current received time is stored in the Trig Time column.

The recording mode is turned off by another **Record** command to the executor.

* * *

## Record a Timecode Show

This can do a lot more than just trigger cues.

A timecode show will store information as when different actions was performed on executors, this includes fader movement and position. A timecode show can run with an external time source or using "internal" time. This means that each timecode show can run on its own or follow an external synced source. See more about running the timecode show in the [Playing Back a Timecode Show topic](key_timecode_playing.html).

The best way to record a new timecode show is to open the timecode pool on one of the screens and press the Store key then tap one of the empty pool objects. This creates the new show. Now tap it again so it gets a green background. Now it is the selected timecode show. The **Encoder Toolbar** changes to the timecode version. It could look like this:

![](../../img/img_encoder-toolbar_timecode-show_v3-3.png)

_Timecode Encoder Toolbar_

Now it is possible to control the playback of the timecode show. To start the recording tap the **Record** (Red circle) button on the right side.

If the timecode show uses an internal time source, the the time will start running. Internal time source is the default. If the time source is external, then the time is only running if the assigned timecode slot has a running time.

The source can be changed in the options for the timecode show or if the timecode show pool is in "Sheet Style". The options are explained in the [Edit a Timecode Show topic](key_timecode_editor.html).

When the recording is running then all executor actions are recorded.

**Important:**  
The timecode show is recording a **Goto** command and the cue number when running a **Go** command to the executor. This is to make sure the actual cue is triggered when the show is played back. The difference between a Go and the Goto is that a Goto is actually a jump in the cue list (even though it might be the next cue), which might look different then a Go. Please read about the difference in the description of the [Go command](key_keyword_go.html) and the [Goto command](key_keyword_goto.html).

When the recording is done then tap the **Stop** (yellow square) button in the timecode encoder bar.

All these action can of cause also be done from the command line. Please see the [Timecode Keyword](key_keyword_timecode.html) description for examples of all of the actions mentioned regarding the timecode show.

← [[Pages/Timecode/What is Timecode and Timecode Shows]] | [[Pages/Timecode/Edit a Timecode Show]] →

Part of [[Sections/Timecode]] · [[000 Map of Content]]
