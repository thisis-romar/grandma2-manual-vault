---
type: "keyword"
keyword: "Timer"
slug: "key_keyword_timer"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_timer.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Timer

> [!source]- Source
> [MA Lighting Help – Timer](https://help.malighting.com/grandMA2/en/help/key_keyword_timer.html)

Version 3.9

# Timer Keyword

To get the Timer keyword in the command line, press and hold ![ma](../../img/ma_1.png) + Macro (= Timer).  
You can also type **Timer** in the command line.

## Description

With the Timer keyword you can edit, start, pause, restart, switch off, select, lock, unlock, and assign timers.

Timer 1 is a predefined stopwatch and not editable.

For more Information see [Timer pool](key_timers_timer_pool.html).

The Timer keyword is an object keyword.

## Syntax

\[Function\] Timer \[ID\]

Assign Timer \[ID\] / \[Parameter\] = \[Parameter Value\]

## Parameter

The following table displays the assignable parameters via command line.

Parameter

Parameter Value

Name

"Timername"

TimerMode

"Stopwatch", "Countdown"

WhenRestarting

"Continue", "Reset"

TimeUnit

"Seconds", "1/10 Seconds", "1/100 Seconds", "24 FPS", "25 FPS", "30 FPS"

ExecTrigger

"LinkSelected-Start", "Not Linked", "LinkLastGo-Start", "LinkSelected-Toggle", "LinkLastGo-Toggle"

AlertType  
(only if timer mode is countdown)

"None", "Popup", "Popup & Beep", "Command", "Command & Popup", "Command, Popup & Beep"

AlertRange  
(only if timer mode is countdown)

"Local", "Global"

Countdowntime  
(only if timer mode is countdown)  
 

0.01S .. 23H59M59.99S

## Examples

*   Edit timer 4. The Edit Timer pop-up opens.

\[Channel\]> Edit Timer 4

![](../../img/popup_edit-timer_timer-pool_v3-3.png)

_Edit the timer Countdown_

* * *

*   Assign a countdown time of 20 seconds to the existing timer 4.

\[Channel\]> Assign Timer 4 /countdowntime = 20

Part of [[000 Keyword Index]] · [[000 Map of Content]]
