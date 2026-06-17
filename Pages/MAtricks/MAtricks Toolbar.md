---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "MAtricks Toolbar"
slug: "key_matricks_toolbar"
url: "https://help.malighting.com/grandMA2/en/help/key_matricks_toolbar.html"
section: "MAtricks"
ma2_section: "key_matricks"
section_ref: "[[Sections/MAtricks]]"
next_page: "[[Pages/MAtricks/MAtricks Pool]]"
depth: 2
tags:
  - "type/page"
  - "section/matricks"
---

# MAtricks Toolbar

> [!source]- Source
> [MA Lighting Help – MAtricks Toolbar](https://help.malighting.com/grandMA2/en/help/key_matricks_toolbar.html)

Version 3.9

# MAtricks Toolbar

Use the MAtricks toolbar to control the MAtricks. 

**Requirement:**

*   Activate MAtricks in the toolbar. 

1.  Select the fixtures or channels you would like to apply the MAtricks to. 
2.  Open the encoder bar. For more information see [[Pages/Workspace/Encoder Toolbar|Encoder toolbar]].  
    For information on how to open the encoder bar via the **Create Basic Window** see [[Pages/Workspace/Encoder Bar|Encoder bar]]. 
3.  To enable MAtricks, press the Set key.  
    For more information on the Set key see [[Keys/Set Key|Set]].   
    \-or-  
    \-Tap an object in the MAtricks pool.  
    For more information see [[Pages/MAtricks/MAtricks Pool|MAtricks pool]].  
    \-or-  
    \-Tap MAtricks in the encoder toolbar and the MAtricks toolbar opens.
    
    ![](../../img/img_matricks-toolbar_v3-3.png)
    
    _Open the MAtricks toolbar_
    
      
    \-Tap MAtricks Active.  
    \-MAtricks Active turns green. This indicates that MAtricks have been activated.
    
    ![](../../img/img_matricks-toolbar_activated_v3-3.png)
    
    _Activate MAtricks_
    
4.  To adjust the settings, tap the button displayed on the left of the ![](../../img/icon_minus_v3-2.png) sign.   
    \-Depending on the setting, a calculator opens or a pop-up appears.  
    \-Enter or select a value.
5.  If you have adjusted the settings, the corresponding button turns green and the settings are instantly applied.

**Important:**  
Only settings with a green background can be saved in the MAtricks pool. 

6.  Store the settings you have just made in the MAtricks toolbar:  
    \-Press Store and tap an empty object in the MAtricks pool.  
    For more information on the MAtricks pool see [[Pages/MAtricks/MAtricks Pool|MAtricks pool]]. 
7.  Close the MAtricks toolbar:  
    Tap ![](../../img/icon_close_small_v3-2.png) in the upper right corner of the toolbar.   

* * *

## MAtricks Settings

**Hint:**  
Adjust settings using ![](../../img/icon_minus_v3-2.png) or ![](../../img/icon_plus_v3-2.png) in the MAtricks toolbar. 

**Important:**  
Settings that can be made on the y-axis – **Single Y, Block Y, Align Group Y** – are enabled only if the interleave is applied. 

**Interleave:**

Sets the interval.

1.  To increase the interval of the MAtricks, press and hold Set and press Next.
2.  To decrease the interval of the MAtricks, press and hold Set and press Prev.   
     

**MAtricks Filter:**

Sets the filters Off, OddID, EvenID.

  
Off: No filter.  
OddID: Selects fixtures with an odd number.  
EvenID: Selects fixtures with an even number. 

1.  To set a filter, tap MAtricks Filter and the **pop-up Select Input** opens.

![](../../img/popup_select-input_matricks_v3-3.png)

_Select filter_

2.  Tap to select the filter.

**Single X:**

Selects the MAtricks in the vertical order.

*   To move through the selection, use Prev or Next. 

**Single Y:**

Selects the MAtricks in the horizontal order. 

*   To move through the selection, press and hold ![ma](../../img/ma_1.png) and press Prev or Next. 

**Block X:**

Creates blocks in the vertical order.

**Block Y:** 

Creates blocks in the horizontal order. 

*   To move through the selection of Block X or Block Y, press and hold ![ma](../../img/ma_1.png) and Set and simultaneously press Prev or Next. 

**Align Group X:**

Aligns groups of the selection in the vertical order – for example creating a fan. 

**Align Group Y:**

Aligns groups of the selection in the horizontal order – creating a fan. 

### Example:

Align selection in four groups.

1.  Set the **Align Group X** to 4.
2.  Type into the command line:

\[Channel\]> At 10 Thru 100

This command created a fan function culminating in every fourth fixture. 

![](../../img/img_matricks_example_fan-function_v3-3_1.png)

_Set the fan function using LEDs displayed in the Layout View_

**Wing:**

Creates wings in the selection.

*   To move through the selection, press Prev or Next.  

**Wingstyle:**

Sets the following styles –

None: No style.  
Pan: The wing affects fixtures with pan values.   
Tilt: The wing affects fixtures with tilt values.   
PanTilt: The wing affects fixtures with pan and tilt values.   
X: The wing affects fixtures with X values.   
Y: The wing affects fixtures with Y values.   
Z: The wing affects fixtures with Z values.   
XY: The wing affects fixtures with X and Y values. 

1.  To set a wing style, tap Wingstyle and the **pop-up Select Input** opens. 

![](../../img/popup_select-input_wingstyle_matricks_v3-3.png)

_Select wing style_

2.  Tap to select a wing style. 

**Reset:**

Resets the MAtricks settings.

*   To reset the MAtricks, tap Reset.

**Hint:**  
It is also possible to reset the MAtricks using the [[Keywords/ClearAll keyword|ClearAll]] or the [[Keywords/MAtricksReset]] keyword. 

**Circular Copy:**

Copies values in a circular manner in the MAtricks. For more information see [[Keywords/CircularCopy keyword|CircularCopy]] keyword. 

*   To move through the selection downward, tap the arrow pointing to the right. 
*   To move through the selection upward, tap the arrow pointing to the left. 

**Shuffle Selection:**

Applies the function Shuffle to the selection in the MAtricks. For more information see [[Keywords/ShuffleSelection]] keyword. 

*   To apply this function, tap Shuffle Selection. 

**Hint:**  
Settings stored in the MAtricks pool can be assigned to the User keys. For more information see [[Keys/User 1 Key|User 1]] key and [[Keys/User 2 Key|User 2]] key.

[[Pages/MAtricks/MAtricks Pool]] →

Part of [[Sections/MAtricks]] · [[000 Map of Content]]
