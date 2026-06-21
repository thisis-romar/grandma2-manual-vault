---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Update or factory reset via boot menu"
slug: "key_update_boot_menu"
url: "https://help.malighting.com/grandMA2/en/help/key_update_boot_menu.html"
section: "Update the Software"
ma2_section: "key_update"
section_ref: "[Sections/Update the Software](../../Sections/Update%20the%20Software.md)"
prev_page: "[Pages/Update the Software/Format a USB stick for Linux](Format%20a%20USB%20stick%20for%20Linux.md)"
next_page: "[Pages/Update the Software/Restart from Linux](Restart%20from%20Linux.md)"
depth: 2
tags:
  - "type/page"
  - "section/update"
summary: "This topic describes how to update the grandMA2 software or do a factory reset via the boot menu."
---

# Update or factory reset via boot menu

> [!source]- Source
> [MA Lighting Help – Update or factory reset via boot menu](https://help.malighting.com/grandMA2/en/help/key_update_boot_menu.html)

Version 3.9

# Update or factory reset via boot menu

This topic describes how to update the grandMA2 software or do a factory reset via the boot menu.

**Important:**  
Before you start to update your grandMA2 software or doing a factory reset, save your show files and any other user created data on a USB stick. If you do not save the show files first, the show files can be deleted or broken and cannot be recoverd anymore.

**Requirements:** A Linux formatted USB stick with a software vesion. For more information, see [format a USB stick](Format%20a%20USB%20stick%20for%20Linux.md).

1.  Insert the formatted USB stick at a USB port on the grandMA2 console or grandMA2 RPU.
2.  To turn the console on, press the power button.
3.  When the startup screen appears, have a look the last sentence on the bottom of the screen. This sentence tells what key you have to press to go to the boot menu. It could be F8, F11, F12, or Esc.  
      
    **Important:**  
    If the console asks to press F11 or F12 and you have no external keyboard connected, connect an external keyboard.  
      
    Press the key several times until the boot menu appears.
    
    ![](../../img/img_select-boot-device_v3_2.png)
    
    _Select boot device_
    
4.  Select you USB stick and press **Enter** or Please.  
    The **MA installer screen** opens.
    
    ![](../../img/img_installer-screen_v3_2.png)
    
    _MA installer screen_
    
5.  Choose one of the following options:  
    \- If you want to update and keep the show data, choose **update software and keep shows/user data**.  
      The touch screen calibration, the network station name, and the IP address will be remained.  
    \- If you want to update and delete the show data, choose **update software and CLEAN shows/user data**.  
       The touch screen calibration, the network station name, and the IP address will be remained.  
    \- If you want to update on a clean hard drive, choose **factory reset**.  
       The hard drive will get a new partition and it will be formatted. All data will be deleted.  
       You have to calibrate the touch screens. The factory reset will set a DHCP IP address.  
    \- If you want to backup all show files first before doing an update or factory reset, choose **backup all shows**.  
    \- The memory test is for service members only.
6.  Follow the on screen instructions. 

The console is updated.

← [Format a USB stick for Linux](Format%20a%20USB%20stick%20for%20Linux.md) | [Restart from Linux](Restart%20from%20Linux.md) →

Part of [Update the Software](../../Sections/Update%20the%20Software.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
