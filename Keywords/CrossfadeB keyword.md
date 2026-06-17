---
type: "keyword"
keyword: "CrossfadeB keyword"
slug: "key_keyword_crossfadeb"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_crossfadeb.html"
keyword_type: "unknown"
related_key: "[[Keys/CrossfadeB keyword]]"
tags:
  - "type/keyword"
---

# CrossfadeB keyword

> [!source]- Source
> [MA Lighting Help – CrossfadeB keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_crossfadeb.html)

Version 3.9

# CrossfadeB keyword

**CrossfadeB** is a function that is assigned for executors.

To execute this keyword, type **CrossfadeB** into the command line. 

## Syntax

Assign CrossfadeB (At) \[Executor-list\]

**CrossfadeB** **\[value\] \[Executor-list\] (Fade \[seconds\])**

CrossfadeB is a function that gradually fades in dimmer attributes of the next step of an executor in accordance with the position of the fader.

Depending on the executor option AB/Split this function either acts as a crossfader for increasing values or as a master for next cue (for dimmer attributes).

No matter the option, CrossfadeB gradually activates the next step of an executor in accordance with the position of the fader for non dimmer attributes.

## Example:

\[Channel\]> ​Assign CrossfadeB At Executor 1

Assigns fader 1 the functionality of CrossfadeB.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
