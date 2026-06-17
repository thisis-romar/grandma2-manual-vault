---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "SetVar"
slug: "key_keyword_setvar"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_setvar.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# SetVar

> [!source]- Source
> [MA Lighting Help – SetVar](https://help.malighting.com/grandMA2/en/help/key_keyword_setvar.html)

Version 3.9

# SetVar Keyword

To go to the SetVar keyword, type **SetVar** in the command line or use the shortcut **SetV**.

## Description

The SetVar keyword sets global show variables. Every user profile can use these variables. For more information, see [[Pages/Macros/Use variables in macros|Macros - Use Variables]].

## Syntax

SetVar $variablename = numericvalue

SetVar $variablename = "text"

SetVar $variablename = ("text")

SetVar $variablename = nothing

**Hint:**  
To see the set variables in the command line feedback window, use the [[Keywords/ListVar|ListVar keyword]].

## Examples

Create a macro in the macro pool that asks "Which song?", and opens the respective page.

1\. Open the Macro Pool.

2\. Press Edit and tap on a empty macro pool tile.  
The Edit Macro pop-up opens.

![](../../img/popup_edit-macro_v3-2.png)

_Edit Macro Pop-Up_

3\. Tap Add.  
The Edit CMD pop-up opens.

![](../../img/popup_edit-cmd_v3-2.png)

_Edit CMD (= Command) Pop-Up_

4\. Type SetVar $Songname = ("Which song?")

**Important:**  
Quotes are necessary to indicate a text string. If you do not indicate a text string by quotes, the console interprets the text as commands.

5\. Type Page $"Songname"

The macro is ready to use.

* * *

*   Delete a variable.

\[Channel\]> SetVar $CueNumber =

Part of [[000 Keyword Index]] · [[000 Map of Content]]
