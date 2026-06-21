---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Record a macro"
slug: "key_macro_record"
url: "https://help.malighting.com/grandMA2/en/help/key_macro_record.html"
section: "Macros"
ma2_section: "key_macro"
section_ref: "[Sections/Macros](../../Sections/Macros.md)"
prev_page: "[Pages/Macros/Manually create a macro](Manually%20create%20a%20macro.md)"
next_page: "[Pages/Macros/Edit a macro](Edit%20a%20macro.md)"
depth: 2
tags:
  - "type/page"
  - "section/macro"
summary: "You can make a live recording of a macro."
---

# Record a macro

> [!source]- Source
> [MA Lighting Help – Record a macro](https://help.malighting.com/grandMA2/en/help/key_macro_record.html)

Version 3.9

# Record a macro

You can make a live recording of a macro.

This is the workflow when recording macros:

1.  Start the macro recording
2.  Type the needed commands
3.  Stop the macro recording

The recording only contains commands that are visible in the Command Line Feedback and the time between the commands.

It does not record fader movement and screen presses (unless they trigger a command).

The [Record command](../../Keywords/Record.md) is needed to start and stop the recording of macros. You can easily reach the Record keyword by pressing the MA key together with the Store key.

When you have the Record keyword in your command line then you press the Macro key and then type the macro number you want to record to - execute the command with a Please.

If the macro you want to recording to, has already some content, the new recorded content will be added after the existing commands.

To stop the recording you will need to use the Record keyword again. You can, but you do not need to specify the macro number.

MA+Store (Record) Macro Please ends the recording.

Different things happen while you are recording a macro:

*   The background light of the Store and Macro keys are flashing.
*   There is a small red circle in the upper right corner of the macro pool object you are recording to.
*   There is a ![](../../img/icon_macro-record_v3-2.png) icon in the message center part of the command line input.

The recorded macro will be a timed macro. This means that it will execute the commands with the same speed as they where recorded. 

If you have a macro pool visible then you can also tap the pool object to start and stop the recording:

1.  Press MA + Store (Record)
2.  Tap the macro pool object

It is the same workflow for starting and stopping the recording.

← [Manually create a macro](Manually%20create%20a%20macro.md) | [Edit a macro](Edit%20a%20macro.md) →

Part of [Macros](../../Sections/Macros.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
