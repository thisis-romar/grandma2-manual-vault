---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "SetUserVar"
slug: "key_keyword_setuservar"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_setuservar.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The SetUserVar keyword sets user profile specific variables."
---

# SetUserVar

> [!source]- Source
> [MA Lighting Help – SetUserVar](https://help.malighting.com/grandMA2/en/help/key_keyword_setuservar.html)

Version 3.9

# SetUserVar Keyword

To get the SetUserVar keyword in the command line, type **SetUserVar** or the shortcut **SetUs** in the command line.

## Description

The SetUserVar keyword sets user profile specific variables. For more information, see [Macros - Use Variables](../Pages/Macros/Use%20variables%20in%20macros.md).

## Syntax

SetUserVar $variablename = numericvalue

SetUserVar $variablename = "text"

SetUserVar $variablename = ("text")

SetUserVar $variablename = nothing

**Hint:**  
To see the set user variables in the command line feedback window, use the [ListUserVar keyword](ListUserVar.md).

## Examples

Create a macro in the macro pool that asks "Cue number to store?", stores and labels the cue for the selected executor.

1.  Open the Macro Pool.
2.  Press Edit and tap on a empty macro pool tile.  
    The Edit Macro pop-up opens.  
     
    
    ![](../../img/popup_edit-macro_v3-2.png)
    
    _Edit Macro Pop-Up_
    
3.  Tap Add.  
    The Edit CMD pop-up opens.  
     
    
    ![](../../img/popup_edit-cmd_v3-2.png)
    
    _Edit CMD (= Command) Pop-Up_
    
4.  Type SetUserVar $CueNumber = ("Cue number to store?")
5.  Type Store Cue $CueNumber
6.  Type Label Cue $CueNumber

The macro is ready to use.

* * *

*   Delete a variable.

\[Channel\]> SetUserVar $CueNumber =

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
