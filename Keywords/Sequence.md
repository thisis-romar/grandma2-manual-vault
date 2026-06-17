---
type: "keyword"
keyword: "Sequence"
slug: "key_keyword_sequence"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_sequence.html"
keyword_type: "unknown"
related_key: "[[Keys/Sequence]]"
tags:
  - "type/keyword"
---

# Sequence

> [!source]- Source
> [MA Lighting Help – Sequence](https://help.malighting.com/grandMA2/en/help/key_keyword_sequence.html)

Version 3.9

# Sequence Keyword

To get the Sequence keyword in the command line, press Sequ.

You can also type **Sequence** or the shortcut **Seq** in the command line .

## Description

The default function of the sequence keyword is [SelFix](key_keyword_selfix.html).

If the Sequence keyword is used with an ID, all fixtures in the sequence will be selected.  
If the Sequence keyword is used with a function, the function will be passed on to the object child cue.

## Syntax

Sequence \[ID\]

Sequence \[Sequence pool\].\[ID\]

## Example

*   Select all fixtures used in sequence 5.

\[Channel\]> Sequence 5

*   Block all cues of sequence 5.

\[Channel\]> Block Sequence 5

Part of [[000 Keyword Index]] · [[000 Map of Content]]
