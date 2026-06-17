---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Remote"
slug: "key_keyword_remote"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_remote.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Remote

> [!source]- Source
> [MA Lighting Help – Remote](https://help.malighting.com/grandMA2/en/help/key_keyword_remote.html)

Version 3.9

# Remote Keyword

To go to the Remote keyword, type **Remote** in the command line or use the shortcut **Rem**.

## Description

The Remote keyword is an object keyword to access the remote input types.

You can store or delete remote input types and assign parameters.

For more information, see [What are Remote Inputs?](key_remote_control_input.html) and [Set up Remote Inputs](20f90287-abfe-47a7-b198-fe08e5e1f2b1.html).

## Syntax

\[Function\] Remote \[Remote Input Type ID\] . \[ID\]

Assign Remote \[Remote Input Type ID\] . \[ID\] / \[Parameter\] = \[Parameter Value\]

The following table displays the available remote input types along with their remote input type ID.

Remote Input Type

Remote Input Type ID

Analog Remote

1

MIDI Remote

2

DMX Remote

3

If you store a remote input type, the IDs needs to be in an order and beginning from 1.

## Parameter

The following table displays the assignable parameter via the command line, using the [Assign keyword](key_keyword_assign.html).

Parameter

Parameter Value

Description

name

"remote name"

Assign the remote name.

**Only for analog remote:**  
input

1...64

Assign the input from the conntected DC remote control.

**Only for MIDI remote:**  
note

0...1023

Assign the MIDI note.

**Only for MIDI remote:**  
channel

1...16 or "All"

Assign the MIDI channel.

**Only for DMX remote:**  
DMX

1.001 to 256.512 \[universe\]. \[dmx address\]

Assign DMX universe and address.

type

"None", "Exec", "CMD", "Hardkey"  
**Only for DMX remote:**  
"Programmer"

Assign the type of action the console does when the contact is active.

page

0...9999 or "current"

For type Exec. Assign the executor page number. Current is for the active page.

executor

1...220

For type Exec. Assign the executor number.

button

"Button 3", "Button 2", "Button 1", "Fader"

For type Exec. Assign the button or fader the console should activate.

keycode

"every hardkey", e.g. "X1", "Go", "List"

For type Hardkey. Assign the hardkey the console should activate.

cmd

"a command" e.g. "Group 1"

For type CMD. Assign the command the console should execute.

info

"additional information"

Assign additional information.

## Examples

*   Store new DMX remote.

\[Channel\]> Store Remote 3.1

*   Assign an existing remote a DMX address, a remote type and a command.

\[Channel\]> Assign Remote 3.1 /dmx=5.1 /type=cmd /cmd="Group 1"

Part of [[000 Keyword Index]] · [[000 Map of Content]]
