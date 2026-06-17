---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Executor"
slug: "key_keyword_executor"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_executor.html"
keyword_type: "unknown"
related_key: "[[Keys/Exec (Executor) Key]]"
tags:
  - "type/keyword"
---

# Executor

> [!source]- Source
> [MA Lighting Help – Executor](https://help.malighting.com/grandMA2/en/help/key_keyword_executor.html)

Version 3.9

# Executor Keyword

To get the Executor keyword in the command line press Exec.

You can also type **Executor** or the shortcut **Ex** directly in the command line.

## Description

Executor is an object keyword acting as a control handle for other objects.

The default function for Executor objects is [[Keywords/SelFix]]. This means that calling executors without any function specified selects the fixtures of the executor in programmer.

If you apply a function or reference a property not supported by the Executor object, the command will be passed on its child: Button/fader or the object assigned to the executor.

## Syntax

Executor \[ID\]

Executor \[Page\].\[ID\]

Executor \[Pagepool\].\[Page\].\[ID\]

Assign Executor \[ID\] / \[Parameter\] = \[Parameter Value\]

## Parameter

The following table displays the assignable parameters via command line.

Parameter

Parameter Value

Description

AutoFix

"on", "off"

Assigns if auto fix is on or off.  
Page changes will not affect the executor while it is on.

AutoStart

"on", "off"

Assigns if auto start is on or off.  
Executor will turn on as soon as the fader is above zero.

AutoStomp

"on", "off"

Assigns if auto stomp is on or off.  
Effects from other executors do not affect values in this executor.

AutoStop

"on", "off"

Assigns if auto stop is on or off.  
Executor will turn off as soon as the fader reaches zero (ignores off-time).

BreakingGo

"on", "off"

Assigns if Loop Breaking Go is on or off. For more information see [[Pages/Advanced Sequence Functionality/Looping cues|Looping Cues]].

Chaser

"on", "off"

Assigns if the executor is a chaser or not.

Crossfade

"on", "off"

on = AB XFade  
off = Split XFade  
Assigns if the executor is an AB XFade or a Split XFade. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

CmdDisable

"on", "off"

Assigns if CMD (= command) disable is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

EffectSpeed

"on", "off"

Assigns if "Link Effect To Rate" is on or off.

IgnoreExecTime

"on", "off"

Assigns if ignore exec time is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

KillProtect

"on", "off"

Assigns if kill protect is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

MasterGo

"on", "off", "go", "top"

Assigns the action that is executed if the master fader is above zero. For more information see [[Pages/Executors/Common executor options]].

MIBAlways

"on", "off"

Assigns if MIB always is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options.]]

MIBNever

"on", "off"

Assigns if MIB never is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options.]]

OffTime

e.g. "3" (= 3 seconds)

Assigns executor off time in seconds.

OoO

"on", "off"

Assigns if off on overwritten is on or off.  
For more information see [[Pages/Executors/Common executor options|Executors - Common executor options]].

PlaybackMaster

"1 - 50"  
  
0 = No Playback Master

Assigns the executor to the specified playback master. For more information see [[Pages/Advanced Executor Functionality/Playback Masters|Advanced executor functionality - special masters - playback masters]].

Prepos

"on", "off"

Assigns if Auto Prepos is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - executor options]].

Priority

"super" or 0  
"swap" or 2  
"htp" or 3  
"high" or 4  
"ltp" or 5  
"low" or 6

Assigns the executor priority. For more information see [[Pages/Command Syntax and Keywords/Playing back Cues|Cues and sequences - Playing back cues]].

RateMaster

0 - 16,  
0 = Rate Individual

Assigns the rate master. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

Restart

"First"  
"Current"  
"Next"

Assigns the restart mode. For more information see [[Pages/Executors/Common executor options]].

SoftLTP

"on", "off"

Assigns if soft LTP is on or off. For more information see [[Pages/Command Syntax and Keywords/Playing back Cues|Cues and sequences - Playing back cues]].

Speed

"Mul2"  
"Mul4"  
"Mul8"  
"Mul16"  
"Mul32"  
"Normal"  
"Div2"  
"Div4"  
"Div8"  
"Div16"  
"Div32"

Assigns the speed factor. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

Speedmaster

0 - 16,  
0 = Speed individual

Assigns the speed master. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

SwopProtect

"on", "off"

Assigns if swop protect is on or off. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

TriggerIsGo

"on", "off"

Assigns if trigger is go is on or not. For more information see [[Pages/Advanced Executor Functionality/Executor Options|Advanced executor functionality - Executor options]].

Width

1 - 5

Assigns the width of the executor. For more information see [[Pages/Executors/Assign a function|Executors - Assign a function - Change the Width of Executors]].

Wrap

"on", "off"

Assigns if Wrap Around is on or off. For more information see [[Pages/Command Syntax and Keywords/What is Tracking|What is tracking]].

## Examples

*   To remove the fifth executor on the current page type in the command line:

\[Channel\]> Delete Executor 5

*   To set the fader of executor 5 to 50 % type in the command line:

\[Channel\]> Executor 5 At 50

*   To delete cue 3 of the sequence assigned to executor 5 type in the command line:

\[Channel\]> Delete Cue 3 Executor 5

*   To select the second executor on page 4 type in the command line:

\[Channel\]>  Select Executor 4.2

Part of [[000 Keyword Index]] · [[000 Map of Content]]
