---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Record"
slug: "key_keyword_record"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_record.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Record

> [!source]- Source
> [MA Lighting Help – Record](https://help.malighting.com/grandMA2/en/help/key_keyword_record.html)

Version 3.9

# Record Keyword

To get the Record keyword in the command line, press ![ma](../../img/ma_1.png) + Store (= Record).

You can also type **Record** or the shortcut **Rec** in the command line.

## Description

The Record keyword records real time actions as timecodes or macros. For more information, see [record a timecode show](key_timecode_record.html) or [record a macro](key_macro_record.html).

It toggles between start and stop.

The Record keyword is a function keyword.

## Syntax

Record \[Object\]

## Examples

*   Start to record executor actions as timecode 1.

\[Channel\]> Record Timecode 1

* * *

*    Stop all running timecode records from the timecode pools.

\[Channel\]> Record Timecode

* * *

*   Start to record command line actions as macro 5. The **macro record icon** ![](../../img/icon_macro-record_v3-2.png) is visible in the command line, if in the message center options for macro status yes selected is. The keys Learn and Macro are flashing.

\[Channel\]> Record Macro 5

* * *

*   Stops all running macro records from the macro pools.

\[Channel\]> Record Macro

* * *

*   Record the receiving timecode as **trig time** by calling the cue, if the selected trigger is **timecode**. The **timecode record icon** ![](../../img/icon_timecode-record_v3-2.png) is visible in the command line.

 \[Channel\]> Record Executor 1

* * *

*    Turn off the timecode executor record from executor 1.

\[Channel\]> Record Off Executor 1

Part of [[000 Keyword Index]] · [[000 Map of Content]]
