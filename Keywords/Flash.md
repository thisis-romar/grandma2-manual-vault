---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Flash"
slug: "key_keyword_flash"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_flash.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "Flash is a function used to temporary overwrite master level to full on executing objects without using times."
---

# Flash

> [!source]- Source
> [MA Lighting Help – Flash](https://help.malighting.com/grandMA2/en/help/key_keyword_flash.html)

Version 3.9

# Flash Keyword

To execute the keyword Flash press \>>> \>>> (= Flash).

Another way is to type **Flash** or the shortcut **Fla** in the command line.

## Description

Flash is a function used to temporary overwrite master level to full on executing objects without using times.

When the Flash function is used with an executor button, the Flash On command is executed when the button is pressed and the Flash Off is executed when the button is released.

If this function is used without the helping keywords On/Off, the function will toggle between on or off.

If the executor is not On when this function is applied, the executor will be temporary activated with zero timing.

## Syntax

Flash \[Executor-list\]

Flash On \[Executor-list\]

Flash Off \[Executor-list\]

## Examples

\[Channel\]> Flash On Executor 1

Overwrites the master level of executor 1 to full and starts first cue. 

\[Channel\]> Flash Off Executor 1

Returns master level of executor 1 to the master fader and sets executor to off if it was not on.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
