---
type: "keyword"
keyword: "SwopOn"
slug: "key_keyword_swopon"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_swopon.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# SwopOn

> [!source]- Source
> [MA Lighting Help – SwopOn](https://help.malighting.com/grandMA2/en/help/key_keyword_swopon.html)

Version 3.9

# SwopOn Keyword

To go to the SwopOn keyword, type **SwopOn** in the command line or use the shortcut **SwopO**.

## Description

The SwopOn keyword temporary overrides the master level of executors to full and all other master levels to zero.

If SwopOn is assigned as an executor button function, pressing the executor button is SwopOn On, release the executor button is SwopOn Off.  
The executor stays tuned on.

If SwopOn is used standalone, SwopOn toggles between SwopOn On and SwopOn Off.

To protect an executor from the swop function, assign Swop Protect in the [Assign Menu](key_exec_assign.html). 

The Swop keyword do not react to any assigned timing.

## Syntax

SwopOn \[Executor-list\]

SwopOn On \[Executor-list\]

SwopOn Off \[Executor-list\]

## Options

To get a list of all options of the keyword SwopOn, type the following into the command line:

\[Channel\]> SwopOn /?

The keyword SwopOn has the exact same options as the keyword Goto. 

For further information see keyword [Goto](key_keyword_goto.html). 

## Example

1\. Override master level of executor 1 to full and all other master levels to zero.

\[Channel\]> SwopOn Executor 1

2.  Returns the master level to the master fader position. The executor stays on after releasing the executor button.

\[Channel\]> SwopOn Off Executor 1

Part of [[000 Keyword Index]] · [[000 Map of Content]]
