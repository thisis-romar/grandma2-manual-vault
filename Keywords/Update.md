---
type: "keyword"
keyword: "Update"
slug: "key_keyword_update"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_update.html"
keyword_type: "unknown"
related_key: "[[Keys/Update Key]]"
tags:
  - "type/keyword"
---

# Update

> [!source]- Source
> [MA Lighting Help – Update](https://help.malighting.com/grandMA2/en/help/key_keyword_update.html)

Version 3.9

# Update Keyword

To go to the Update keyword, press Update.  
You can also type **Update** in the command line or use the shortcut **Upd**.

## Description

The update keyword, updates functions in its source objects.

Update is a function keyword.

## Syntax

Update \[object-list\] / \[option\] = \[option value\]

## Options

To get a list of all available options to the update keyword, type in the command line

\[Channel\]> Update /?

The update keyword has the following options.

Option

Option Shortcut

Option Value

Description

addnewcontent

an

False, True

False is the same as originalcontent.

auto

not available

no option value

Updates preset values with default preset scope.

cueonly

co

False, True

Prevents changes to track forward.

effects

ef

False, True

Filters or enables effect layer.

embedded

e

False, True

Creates embedded preset.

global

g

no option value

Updates preset with global values.

keepactive

ka

False, True

Keeps values active.

noconfirm

nc

no option value

Suppress update confirmation pop-up.

originalcontent

or

False, True

Updates the original content of the preset, effect, or cue. False is the same as addnewcontent.

presetfilter

p

False, True

Sets preset filter on or off.

screen

not available

1..6

Updates view with selected screen.

selective

s

no option value

Updates preset with selective values.

source

so

Prog, Output, Dmx In

Defines data source.

tracking

t

False, True

Update tracking. False is the same as cueonly.

trackingshield

ts

no option value

Use tracking shield for update.

universal

u

no option value

Updates preset with universal values.

useselection

use

Active, Allforselected, Activeforselected, All, Look

Sets selection.

values

v

False, True

Filters or enables value layer.

valuetimes

vt

False, True

Filters or enables value times layer.

## Example

1\. Update current cue of the selected executor, according to the update defaults. For more information, see [Update a Cue](key_cs_update_cues.html).

\[Channel\]> Update

2\. Update cue 4 with values that originates from cue 4, as cue only.

\[Channel\]> Update Cue 4 /originalcontent /cueonly

3\. Update color preset 2 with global values, keep them active in the programmer, and without confirmation pop-up. For more information, see [Update Presets](key_presets_update.html).

\[Channel\]> Update Preset 4.2 /global /keepactive=true /noconfirm

Part of [[000 Keyword Index]] · [[000 Map of Content]]
