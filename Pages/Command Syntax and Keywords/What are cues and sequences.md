---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "What are cues and sequences"
slug: "key_cs_what_are"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_what_are.html"
section: "Command Syntax and Keywords"
ma2_section: "key_cues_and_sequences"
section_ref: "[Sections/Cues and Sequences](../../Sections/Cues%20and%20Sequences.md)"
next_page: "[Pages/Command Syntax and Keywords/Looking at the Cue Sequence](Looking%20at%20the%20Cue%20Sequence.md)"
depth: 2
tags:
  - "type/page"
  - "section/cs"
summary: "Being able to store and recall a set of attribute values is one of the most important features of a control system."
---

# What are cues and sequences

> [!source]- Source
> [MA Lighting Help – What are cues and sequences](https://help.malighting.com/grandMA2/en/help/key_cs_what_are.html)

Version 3.9

# What are cues and sequences

Being able to store and recall a set of attribute values is one of the most important features of a control system.

One of the primary ways of doing this is using a **Cue**. Cues contain the stored values. Cues are organized in **Sequences**. A sequence can be assigned to an **Executor** for convenient playback control. Read more about the executors in the [Executors section](../../Sections/Executors.md).

Cues can be split up in different parts called "Part Cues". An attribute value can only be in one of the parts. This will be described in the next topics.

With sequences we also have control of how values change from one cue to the other and a lot other relevant settings.

These are described in the following topics.

## The Sequence Pool

The sequences are organized in a pool. It could look like this:

![](../../img/window_sequence-pool_v3-3.png)

_Sequence Pool - pool mode_

If pools are new to you, then please see the [Pools in General section](../../Sections/Pools.md).

Each pool element (equals each sequence in the show) shows some information about the sequence settings and other relevant information.

The lower half of the pool object shows the name of the sequence.

The top row displays the sequence number on the left. If this number is cyan then the sequence is assigned to an executor. If it is not assigned then the number is gray.

There is a letter indicating the sequences priority. Priorities are described in the [Playing back cues topic](Playing%20back%20Cues.md). The different letters are listed in the [Text indicators topic](../Workspace/Text%20indicators%20and%20symbols.md).

There can be a "T" letter next to priority letter. This shows if tracking is turned On (visible T) or Off for the sequence. Tracking is described in the [What is tracking topic](What%20is%20Tracking.md).

There can be two icons in the top row. It can have the Filter icon if the sequence have assigned an input filter. Filters are described beginning from the [What are Filters topic](../Worlds%20Filters%20and%20Masks/What%20are%20filters.md). The other icon is the information icon. This is present if there are any information written for the sequence (it has nothing to do with information in cues - it is about the sequence).

Below the top row there might be cyan number below the sequence number on the left side. This shows the amount of executors that have the sequence assigned.

## Sheet Mode

The Sequence Pool can also be in "Sheet Mode". This is changed in the Pool Options - read about them in the the [Pools in General section](../../Sections/Pools.md).

It could look like this:

![](../../img/window_sequence-pool_sheet-mode_v3-3.png)

_Sequence Pool - sheet mode_

The title bar can have up to three buttons.

The right one will hide or show all the empty pool elements in the Sequence Sheet.

The next on the left changes the Call Mode for the sequence Pool/Sheet. If the "Pool Playback" mode is selected then an extra button appears. This is called "Direct Action" and it toggles the direct action mode pool playback. The different Call Modes are described in the [Call Mode topic](../Pools/Call%20Modes.md). Pool playback is described in the [Playing back Cues topic](Playing%20back%20Cues.md).

The Sequence Sheet displays each sequence as a row. The columns are the settings that belongs to the sequence. Everything with a gray background can be changed.

*   **No.:**  
    This is the sequence number. It cannot be changed here - but the sequence can be moved in the sequence pool.
*   **Name:**  
    This is the name of the sequence. It has the frame color from the pool. Editing the cell will allow you to change the name.
*   **Track:**  
    Here you can turn On or Off tracking for the sequence. Tracking is described in the [What is Tracking topic](What%20is%20Tracking.md).
*   **Release Firststep:**  
    Here you can turn On or Off "Release First Step". This is related to tracking - follow link above.
*   **CueZero:**  
    Editing this gives you the pop-up used to select the Cue Zero mode. Read more about Cue Zero in the [Cue Zero topic](../Advanced%20Sequence%20Functionality/Cue%20Zero.md).
*   **CueZero Extract:**  
    The Cue Zero Extract can be turned On or Off. It is related to the Cue Zero function - follow link above.
*   **Input Filter:**  
    Here you can set an input filter. Filters and sequences are described in the [Apply worlds and filters to executors and sequences topic](../Worlds%20Filters%20and%20Masks/Apply%20worlds%20or%20filters%20to%20executors%20and%20sequences.md).
*   **Timecode Slot:**  
    Here you can select a timecode slot for the sequence. Read the [Timecode section](../../Sections/Timecode.md) to learn more about using timecode with sequences.
*   **Info:**  
    Here it is possible to add multiple lines of information to the sequence.
*   **Forces Pos. mode:**  
    The entire sequence can have a forced position mode. This is relevant when working with a mix of Pan/Tilt values and XYZ values. Read more about this in the [XYZ and Pan/Tilt in Sequences topic](../XYZ/XYZ%20and%20Pan-Tilt%20in%20cues%20and%20sequences.md).
*   **Used Count:**  
    This is the number that indicates the amount of executors that have the sequence assigned. This is not a setting you can change here - it is for information.

[Looking at the Cue Sequence](Looking%20at%20the%20Cue%20Sequence.md) →

Part of [Cues and Sequences](../../Sections/Cues%20and%20Sequences.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
