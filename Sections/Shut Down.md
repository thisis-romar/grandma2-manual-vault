---
type: "section"
cssclasses:
  - "gma2-section"
section: "Shut Down the System"
slug: "key_shut_down_the_system"
url: "https://help.malighting.com/grandMA2/en/help/key_shut_down_the_system.html"
page_count: 0
tags:
  - "type/section"
summary: "Once you have finished your show, make sure to adequately shut down the system."
---

# Shut Down the System

> [!source]- Source
> [MA Lighting Help – Shut Down the System](https://help.malighting.com/grandMA2/en/help/key_shut_down_the_system.html)

Version 3.9

# Shut Down the System

**Important:**  
Once you have finished your show, make sure to adequately shut down the system.

## grandMA2 and grandMA2 onPC

1.  Press the power key on the right of the monitor wing or the gray cross in the upper right corner of the grandMA2 onPC.
2.  A warning pop-up appears.

![](../../img/popup_shut-down-the-system_v3-3.png)

_Shut down the system_

3.  If you forgot to save the show, tap Save Showfile. The console or the onPC then saves the show file and powers down.  
    To cancel the shutdown, tap Cancel.  
    To proceed with the shutdown without saving the show, tap Do not Save.

**Important:**  
\-If the onPC is set to **MultiScreen**, the window **Command** is the main window that closes the application.  
\-In **SingleScreen**, all views are displayed in the main window, hence, every window closes the application.  
\-In **SingleScreen (internal only)**, all windows, except for Extern 1 and Extern 2, close the application.   
Please note that whenever changing the mode, a restart is required. 

4.  The console is successfully powered down.
5.  Turn off the power switch on the rear panel and disconnect the plug. 

For more information on the location of the power key and the power switch see [grandMA2 console](../Pages/Device%20Overview/grandMA2%20console.md). 

* * *

## MA VPU (Video Processing Unit) plus

1.  To power down the MA VPU plus, tap Shutdown on the touch screen of the device.
2.  A warning pop-up appears. 

![](../../img/popup_vpu_plus_shut-down-the-system_v3-3.png)

_Warning pop-up –MA VPU plus_

3.  Tap Shutdown. 
4.  The MA VPU plus is now powered down. 

* * *

## MA VPU basic and MA VPU light

**Requirement:**

*   Connect a monitor, keyboard, and mouse to the MA VPU basic or light.

1.  To power down, click **File** in the upper left corner of the graphic user interface.
2.  A drop-down menu opens.

![](../../img/img_file_exit_vpus.png)

_Powering down via the graphic user interface_

3.  Click **Exit**.
4.  A warning pop-up appears.

![](../../img/popup_warning-shutdown_vpu-basic-light_v3-3.png)

_Warning pop-up – MA VPU basic and light_

5.  Click Shutdown. 
6.  The MA VPU basic or light is now powered down. 

* * *

## Power Down at a Distance

If the MA VPUs are not located in close proximity to the area you operate in, there are two possibilities to power down at a distance. 

1.  Power down using the command line
2.  Power down using the master fixture

### 1\. Power Down Using the Command Line

To power down the MA VPU at a distance, type the following command and the IP address of the MA VPU into the command line:

\Channel\]> Shutdown "IP Address"

### 2\. Power Down Using the Master Fixture

**Requirement:**

*   Create a master fixture first

For more information on how to create a master fixture see [MA VPU – Data Management –Layer Properties. 

1.  To power down the MA VPU, type the number of the master fixture into the command line and press Please. 
2.  Tap Control in the preset type bar. 
3.  A calculator opens displaying several channel sets on the right.

![](../../img/img_shut-down-the-system_master-fixture_v3-3.png)

_Shut down the system using the master fixture_

**Hint:**  
It is also possible to arrange these channel sets in a smart view. For more information see [Using the smart view](../Pages/Operate%20Fixtures/Using%20The%20Smart%20View.md). 

4.  Tap Shutdown.
5.  A countdown starts counting down from 10 seconds on.

**Important:**  
It is possible to stop the countdown by tapping No Operation. 

6.  The system is powered down after the countdown has ended.  

* * *

## MA 3D

To power down the MA 3D application:

1.  Click **File** in the left upper left corner of the graphic user interface.
2.  A drop-down menu opens.
3.  Click **Exit**.
4.  A warning pop-up appears.

![](../../img/popup_warning-shutdown_3d_v3-3.png)

_Warning pop-up – MA 3D_

5.  Click Yes to save the show file and power down the application. 
6.  The MA 3D application is now powered down.

* * *

## MA NDP, MA xPort WM and MA Network Switch

NDP, xPort WM, and the Switch are connected via a power cable or an Ethernet cable to power.

*   To power down the MA NDP or the MA Network Switch, unplug the power cable.
*   To power down the xPort WM, unplug the Ethernet cable.  

The devices are now powered down. 

* * *

## MA xPort Node

*   To power down an xPort Node, turn off the switch on the rear panel of the device. 

The xPort Node is now powered down.

Part of [000 Map of Content](../000%20Map%20of%20Content.md)
