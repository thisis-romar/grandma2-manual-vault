---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "MidiProgram"
slug: "key_keyword_midiprogram"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_midiprogram.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# MidiProgram

> [!source]- Source
> [MA Lighting Help – MidiProgram](https://help.malighting.com/grandMA2/en/help/key_keyword_midiprogram.html)

Version 3.9

# MidiProgram Keyword

To get the MidiProgram keyword in the command line, type **MidiProgram** in the command line or the shortcut **MidiP**.

## Description

The MidiProgram keyword is a function keyword to transmit MIDI program change messages via the MidiOut port.

If no MIDI channel is given, the MIDI channel of the MIDI Show Control in the Setup is used.

## Syntax

**MidiProgram** \[program\]

**MidiProgram** \[midichannel\].\[program\]

## Examples

*   To transmit a program change of 12.

\[Channel\]> MidiProgram 12

Part of [[000 Keyword Index]] · [[000 Map of Content]]
