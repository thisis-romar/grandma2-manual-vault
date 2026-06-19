---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Priorities for bitmap effects"
slug: "key_bitmapfixture_priorities"
url: "https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_priorities.html"
section: "Bitmap Fixture"
ma2_section: "key_bitmapfixture"
section_ref: "[[Sections/Bitmap Fixture]]"
prev_page: "[[Pages/Bitmap Fixture/Example for bitmap fixture]]"
next_page: "[[Pages/Bitmap Fixture/Disable bitmap for fixtures]]"
depth: 2
tags:
  - "type/page"
  - "section/bitmapfixture"
summary: "When working with bitmap effects in the programmer and in playbacks attention should be paid to the following priorities:"
---

# Priorities for bitmap effects

> [!source]- Source
> [MA Lighting Help – Priorities for bitmap effects](https://help.malighting.com/grandMA2/en/help/key_bitmapfixture_priorities.html)

Version 3.9

# Priorities for bitmap effects

When working with bitmap effects in the programmer and in playbacks attention should be paid to the following priorities:

1.  Bitmap effects always have the lowest priority within a level of priorities.   
    Level of priorities are:  
    \- Super  
    \- Swp  
    \- HTP  
    ​- High  
    \- LTP  
    \- Low
2.  Bitmap effects are only visible within a sequence – **cue list:**  
    \- When the fixtures, which are running the bitmap effects, have no values and no effect values on the attributes in use.

For more information on priorities in general see [[Pages/Advanced Executor Functionality/Executor Options|executor options]]. 

## Example:

If a dimmer value is saved in a cue for Fixture 1, the bitmap effect can only be used for Fixture 1 in the following cue when the dimmer value is released.

For more information on how to release see [[Pages/Command Syntax and Keywords/What is Tracking|What is tracking]]. 

**This is a visual explanation of the example by means of illustration for Fixture 1:**

Tracking cue list

Dimmer

Explanation

cue 1

**––––––**

Bitmap effect operates

Fixture 1 (dimmer)

cue 2

100

Value overwrites

Fixture 1 (dimmer)

cue 3

(R)

Value is released,

thus the bitmap effect from cue 1 or a new bitmap effect

is visible

← [[Pages/Bitmap Fixture/Example for bitmap fixture]] | [[Pages/Bitmap Fixture/Disable bitmap for fixtures]] →

Part of [[Sections/Bitmap Fixture]] · [[000 Map of Content]]
