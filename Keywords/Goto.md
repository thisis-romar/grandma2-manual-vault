---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Goto"
slug: "key_keyword_goto"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_goto.html"
keyword_type: "unknown"
related_key: "[[Keys/Goto Key]]"
tags:
  - "type/keyword"
---

# Goto

> [!source]- Source
> [MA Lighting Help – Goto](https://help.malighting.com/grandMA2/en/help/key_keyword_goto.html)

Version 3.9

# Goto Keyword

To get the Goto keyword in the command line press Goto.

Another way is to type **Goto** or the shortcut **Got** in the command line.

## Description

Goto is a function keyword to jump in a list. Set the fade time for Goto in the **Setup I Show I Playback & MIB Timing I Goto**.

## Syntax

Goto \[Cue object\] \[Executor object\] / \[Option\] = \[Option Value\]

## Options

To get a list of all available options to the Goto keyword type in the command line:

\[Channel\]> Goto /?

The Goto keyword has the following options:

Option

Option Shortcut

Option Value

Option Value Shortcut

Description

cue\_mode

cm

Normal

N

Normal Goto mode.

cue\_mode

cm

Assert

A

Goto with assert in the original timing.

cue\_mode

cm

XAssert

XA

Goto with assert in the cuetiming of current cue.

cue\_mode

cm

Release

R

Goto finishes the fade-in and switches the executor off.

userprofile

upr

"Name of the user profile", e.g. "Klaus"

not available

Normal Goto mode with specified user profile.

## Examples

*   To go to cue 3 of the selected executor type in the command line:

\[Channel\]> Goto Cue 3

*   To go to cue 5 of executor 4 type in the command line:

\[Channel\]> Goto Cue 5 Executor 4

Part of [[000 Keyword Index]] · [[000 Map of Content]]
