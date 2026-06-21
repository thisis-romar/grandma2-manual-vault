---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Turn RDM on"
slug: "key_rdm_turn_on"
url: "https://help.malighting.com/grandMA2/en/help/key_rdm_turn_on.html"
section: "RDM"
ma2_section: "key_rdm"
section_ref: "[[Sections/RDM]]"
next_page: "[[Pages/RDM/Match RDM devices]]"
depth: 2
tags:
  - "type/page"
  - "section/rdm"
summary: "To use RDM (= Remote Device Management Protocol) you need to turn on RDM global."
---

# Turn RDM on

> [!source]- Source
> [MA Lighting Help – Turn RDM on](https://help.malighting.com/grandMA2/en/help/key_rdm_turn_on.html)

Version 3.9

# Turn RDM on

To use RDM (= Remote Device Management Protocol) you need to turn on RDM global. By default RDM is turned off.

* * *

## Turn on RDM global

**Requirements:**  
\- One connected RDM device.  
\- One patched fixture or channel to have an outgoing DMX signal.

1.  Press Setup and tap under **Console** Global Settings.
    
    ![](../../img/menu_setup_global-settings_v3-4.png)
    
    _Setup global settings_
    

2.  Tap at Enable RDM until the **On** is yellow.

RDM is global turned on for all universes. The console starts to discover RDM devices.

**Hint:**  
To turn on RDM global, you can also go to **Setup -> Patch & Fixture Schedule -> RDM Devices** and tap RDM Disabled until **RDM Enabled** is displayed.

* * *

## Turn on RDM per universe

If RDM is turned off in global settings, then it's indicated by a red **RDM icon** ![](../../img/icon_rdm-red_v3-2.png) in the universe pool, the following example explains how to turn on RDM per universe.

**Requirement:** RDM is global turned on. For more information, see [turn on RDM global](<#Turn on RDM global>).

There are two ways to turn on RDM per universe.

Way A:

1.  Tap on an empty space in the screen, tap **Pools**, and then item Universes.  
    The **universe pool** opens.

1.  ![](../../img/window_universe-pool_v3-2.png)
    
    _Universe pool_
    
2.  Press Edit and tap at the universe you want to turn on RDM.  
    The **Edit universe pop-up** opens.
    
    ![](../../img/popup_edit-universe_v3-2.png)
    
    _Edit universe_
    
3.  Tap and hold in the RDM cell until **On** is displayed.

**Hint:**  
To edit more universes at once, use the sheet style of the universe pool. Open the universe pool, tap at the **yellow ball** ![](../../img/icon_yellow-ball_3_2.png)in the title bar, and tap at **Sheet Style**. Swipe to select the cells you like to edit.

**Important:**  
If the **On** is displayed in red, RDM is global turned off. For more information, see [turn on RDM global](<#Turn on RDM global>).

RDM is turned on for the selected universe. A **green RDM icon** ![](../../img/icon_rdm-green_v3-2.png) is displayed in the universe tile.

Way B:

1.  Press Setup and tap under **Show** Patch only (Live).  
    The **Live Setup** opens.
    
    ![](../../img/menu_live-setup_v3_2.png)
    
    _Live setup_
    
2.  Tap DMX List.  
    The **DMX list** opens.
    
    ![](../../img/menu_dmx-list_v3_2.png)
    
    _DMX list_
    
3.  Under List of Universes is a column RDM. Tap and hold in the cell until **On** is displayed for that universe you want to turn on RDM.

RDM is turned on for the selected universe. A **green RDM icon** ![](../../img/icon_rdm-green_v3-2.png) is displayed for this universe in the universe pool.

[[Pages/RDM/Match RDM devices|Match RDM devices]] →

Part of [[Sections/RDM|RDM]] · [[000 Map of Content]]
