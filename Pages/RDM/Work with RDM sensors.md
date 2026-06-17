---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Work with RDM sensors"
slug: "key_rdm_sensors"
url: "https://help.malighting.com/grandMA2/en/help/key_rdm_sensors.html"
section: "RDM"
ma2_section: "key_rdm"
section_ref: "[[Sections/RDM]]"
prev_page: "[[Pages/RDM/Work with RDM parameters]]"
next_page: "[[Pages/RDM/Configure RDM notifications]]"
depth: 2
tags:
  - "type/page"
  - "section/rdm"
---

# Work with RDM sensors

> [!source]- Source
> [MA Lighting Help – Work with RDM sensors](https://help.malighting.com/grandMA2/en/help/key_rdm_sensors.html)

Version 3.9

# Work with RDM sensors

After the RDM fixture is matched, you can:

*   [Monitor RDM sensors via the RDM sheet](<#Monitor RDM sensors>)
*   [Monitor RDM sensors via Edit Setup / Reset RDM sensors](<#Reset RDM sensors>)

* * *

## Monitor RDM sensors via the RDM sheet

The following example explains how to monitor RDM sensors.

**Requirements:**

*   RDM is turned on
*   Fixture is matched
*   Fixture is patched 

1.  Open the RDM sheet. Tap on an empty space in the user-defined area, tap at Sheets and then at RDM.
2.  The **RDM sheet** opens.
    
    ![](../../img/window_rdm-sheet_rdm-sensors_v3-2.png)
    
    _RDM sheet - Sensors_
    
3.  To get the sensors displayed, tap at the right title bar button at Sensor or Parameters and Sensors.

In default the transmitted sensor data are displayed at the far right of the RDM sheet.

Hint:  
You can also monitor the RDM sensors by using the [RDMInfo keyword](key_keyword_rdminfo.html).

* * *

## Monitor RDM sensors via the Edit Setup / Reset RDM sensors

The following example explains how to reset an RDM sensor. This is also the way to monitor RDM sensors via the Edit Setup.

1.  Open the RDM devices window. Press Setup and tap under **Show** at Patch & Fixture Schedule.  
    The **Edit Setup** opens.
2.  Tap in the lower right corner at RDM devices.  
    The **RDM devices window** opens.
    
    ![](../../img/menu_matched-rdm-devices_v3_2.png)
    
    _RDM devices window_
    
3.  To select the fixture type you like to reset the sensor for tap at the corresponding fixture type under **Discovered RDM FixtureTypes**.  
    The fixtures to the selected fixture type are displayed on the right side of the RDM devices window.
4.  To select the fixture, tap at the fixture in the table on the right screen side.
5.  Tap at RDM Info.  
    The **RDM Parameters** window opens.
6.  Tap on the right screen side at Sensors. This window displays the transmitted data to the sensors of the RDM device to monitor them.
    
    ![](../../img/menu_rdm-sensor_v3_2.png)
    
    _RDM sensors window_
    
7.  To clear the low and high values of a sensor, tap at the sensor in the table and tap Reset Sensor.

You have reset a sensor.

← [[Pages/RDM/Work with RDM parameters]] | [[Pages/RDM/Configure RDM notifications]] →

Part of [[Sections/RDM]] · [[000 Map of Content]]
