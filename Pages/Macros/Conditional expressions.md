---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Conditional expressions"
slug: "key_macro_create_condition"
url: "https://help.malighting.com/grandMA2/en/help/key_macro_create_condition.html"
section: "Macros"
ma2_section: "key_macro"
section_ref: "[Sections/Macros](../../Sections/Macros.md)"
prev_page: "[Pages/Macros/Create pop-ups in macros](Create%20pop-ups%20in%20macros.md)"
next_page: "[Pages/Macros/Macro timing](Macro%20timing.md)"
depth: 3
tags:
  - "type/page"
  - "section/macro"
summary: "In some situation you may want to only process a command, if the user has answered something specific in a popup, or if a variable is set to a specific value."
---

# Conditional expressions

> [!source]- Source
> [MA Lighting Help – Conditional expressions](https://help.malighting.com/grandMA2/en/help/key_macro_create_condition.html)

Version 3.9

# Conditional expressions

In some situation you may want to only process a command, if the user has answered something specific in a popup, or if a variable is set to a specific value.

The grandMA2 supports simple conditional expressions, which must resolve to "True" for the following command line to be executed.

**Example:**

No.

CMD

1

SetVar $answer=("Really delete all groups? yes/no")

2

\[$answer=="yes"\] Delete Group Thru

This macro will create a pop-up asking if you want to delete all groups. The answer is stored in a variable. Then the variable content is compared to a text string. If they are equal then the rest of the macro line is executed. If they are not equal then the rest of the line is ignored and the macro will continue to the next line if there are more.

Conditional expressions are recognized by Square Brackets, and accept the following logical operators:

*   **a ==** **b**  
    a equals b
*   **a >** **b**  
    a greater than b
*   **a <** **b**  
    a less than b
*   **a <=** **b**  
    a less than or equal b
*   **a >=** **b**  
    a greater than or equal b

**Important:**  
The two arguments a and b are not compared as numbers, but as text-strings, character by character, e.g. "61" is considered to be greater than "599", as 6 is larger than 5.

← [Create pop-ups in macros](Create%20pop-ups%20in%20macros.md) | [Macro timing](Macro%20timing.md) →

Part of [Macros](../../Sections/Macros.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
