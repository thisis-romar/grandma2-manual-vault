---
type: "keyword"
keyword: "EffectDecay"
slug: "key_keyword_effectdecay"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_effectdecay.html"
keyword_type: "unknown"
related_key: "[[Keys/EffectDecay]]"
tags:
  - "type/keyword"
---

# EffectDecay

> [!source]- Source
> [MA Lighting Help – EffectDecay](https://help.malighting.com/grandMA2/en/help/key_keyword_effectdecay.html)

Version 3.9

# EffectDecay Keyword

To get the EffectDecay keyword in the command line type **EffectDecay** or the shortcut **EffectDec** in the command line.

## Description

EffectDecay is a helping keyword to indicate individual EffectDecay of a pulse width modulation form.

For more information on effect decay see [effects](key_effects.html).

## Syntax

EffectDecay

EffectDecay \[value list\]

## Examples

*   To switch the encoders to adjust the effect decay layer type in the command line:

\[Channel\]> EffectDecay

*   To knock out any effect decay values of the programmer for the selection or feature type in the command line:

\[Channel\]> Off EffectDecay

*   To set the effect decay for the selection or feature to 50% of the pulse width modulation width type in the command line:

\[Channel\]> EffectDecay 50

*   To set the effect decay for "pan" for the selection to 50% of the pulse width modulation width type in the command line:

\[Channel\]> Attribute "pan" At EffectDecay 50

Part of [[000 Keyword Index]] · [[000 Map of Content]]
