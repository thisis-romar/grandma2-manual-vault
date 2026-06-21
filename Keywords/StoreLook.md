---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "StoreLook"
slug: "key_keyword_storelook"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_storelook.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "StoreLook stores all dimmer values from all fixtures in the show."
---

# StoreLook

> [!source]- Source
> [MA Lighting Help – StoreLook](https://help.malighting.com/grandMA2/en/help/key_keyword_storelook.html)

Version 3.9

# StoreLook Keyword

To go to the StoreLook keyword, type **StoreLook** in the command line or use the shortcut **StoreL**.

## Description

StoreLook stores all dimmer values from all fixtures in the show.

If the dimmer value is bigger than 0, it stores additional all further attributes.  
If the dimmer value is 0, it stores only the dimmer value because there is no further visible output.

**Hint:**  
To exclude channels or fixtures from StoreLook, deactivate **React to Master** in the Patch & Fixtures Schedule.

For more information, see [What are the store options?](../Pages/Command%20Syntax%20and%20Keywords/Store%20Options%20and%20Defaults.md).

StoreLook is a function keyword.

## Syntax

StoreLook \[object\] / \[option\] = \[option value\]

## Options

To get a list of all available options to the storelook keyword, type in the command line

\[Channel\]> StoreLook /?

The storelook keyword has the following options.

Option

Option Shortcut

Option Value

Description

append

a

no option value

Adds new cue.

cueonly

co

False, True

Prevents changes to track forward.

effects

ef

False, True

Filters or enables effect layer.

merge

m

no option value

Adds to existing content.

originalcontent

or

False, True

Stores the original content of the preset, effect, or cue. False is the same as addnewcontent.

overwrite

o

no option value

Replace existing content.

release

rea

no option value

Releases content.

remove

r

no option value

Removes content.

source

so

Prog, Output, Dmx In

Defines data source.

statusmerge

sm

no option value

Adds tracking status to existing cue.

tracking

t

False, True

Stores with tracking. False is the same as cueonly.

trackingshield

ts

no option value

Use tracking shield for storelook.

values

v

False, True

Filters or enables value layer.

valuetimes

vt

False, True

Filters or enables fade and delay layer.

## Example

Store all dimmer values from all fixtures in the show as cue 1 on executor 1.

\[Channel\]> StoreLook Executor 1

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
