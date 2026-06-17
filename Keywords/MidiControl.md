---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "MidiControl"
slug: "key_keyword_midicontrol"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_midicontrol.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# MidiControl

> [!source]- Source
> [MA Lighting Help – MidiControl](https://help.malighting.com/grandMA2/en/help/key_keyword_midicontrol.html)

Version 3.9

# MidiControl Keyword

To get the MidiControl keyword in the command line, type **MidiControl** in the command line or the shortcut **MidiC**.

## Description

The MidiControl keyword is a function keyword to transmit MIDI control change messages via the MidiOut port.

If no MIDI channel is given, the MIDI channel of the MIDI Show Control in the Setup is used.

## Syntax

**MidiControl** \[controller\] \[value\]

**MidiControl** \[midichannel\].\[controller\] \[value\]

## Example

*   To transmit a value of 64 for controller 1, type in the command line:

\[Channel\]> MidiControl 1 64

Part of [[000 Keyword Index]] · [[000 Map of Content]]
