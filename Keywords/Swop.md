---
type: "keyword"
keyword: "Swop"
slug: "key_keyword_swop"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_swop.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Swop

> [!source]- Source
> [MA Lighting Help – Swop](https://help.malighting.com/grandMA2/en/help/key_keyword_swop.html)

Version 3.9

# Swop Keyword

To go to the Swop keyword, type **Swop** in the command line or use the shortcut **Sw**.

## Description

The Swop keyword temporary overrides the master level of executors to full and set all other master levels to zero.

If Swop is assigned as an executor button function, pressing the executor button is Swop On, release the executor button is Swop Off.  
The executor is off after releasing the executor button.

If Swop is used standalone, Swop toggles between Swop On and Swop Off.

To protect an executor from the swop function, assign Swop Protect in the Assign Menu. To open the Assign menu, press Assign , then the executor button, tap Options and then tap under **Protect** Swop Protect.

The Swop keyword does not react to any assigned timing.

## Syntax

Swop \[Executor-list\]

Swop On \[Executor-list\]

Swop Off \[Executor-list\]

## Options

To get a list of all options of the keyword Swop, type the following into the command line:

\[Channel\]> Swop /?

The keyword Swop has the same options as the keyword Goto. 

For further information see keyword [Goto](key_keyword_goto.html). 

## Examples

*   Override master level of executor 1 to full and all other master levels to zero.

\[Channel\]> Swop Executor 1

*   Returns the master level to the master fader position and turns the executor off.

\[Channel\]> Swop Off Executor 1

Part of [[000 Keyword Index]] · [[000 Map of Content]]
