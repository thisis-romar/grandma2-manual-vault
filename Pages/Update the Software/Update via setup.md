---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Update via setup"
slug: "key_update_setup"
url: "https://help.malighting.com/grandMA2/en/help/key_update_setup.html"
section: "Update the Software"
ma2_section: "key_update"
section_ref: "[Sections/Update the Software](../../Sections/Update%20the%20Software.md)"
next_page: "[Pages/Update the Software/Format a USB stick for Linux](Format%20a%20USB%20stick%20for%20Linux.md)"
depth: 2
tags:
  - "type/page"
  - "section/update"
summary: "This update process is available beginning with software version 2.8."
---

# Update via setup

> [!source]- Source
> [MA Lighting Help – Update via setup](https://help.malighting.com/grandMA2/en/help/key_update_setup.html)

Version 3.9

# Update via setup

**Important:**  
This update process is available beginning with software version 2.8. If you have a software version 2.7 or older, use the update process via boot menu. For more information, see [update via boot menu](Update%20or%20factory%20reset%20via%20boot%20menu.md).

This topic describes how to update the grandMA2 console via the Setup.

**Requirement:** A software version .update file (download the latest version at www.malighting.com).

1.  Copy the **.update** file on an empty USB stick and insert the USB stick in a USB port of the console.
2.  Press Setup and tap under consoles Software Update.  
    The software update window opens.
    
    ![](../../img/menu_software-update.png)
    
    _Software Update_
    
3.  Every device with an older version is listed.  
    To see also the devices with the same version, tap Show Same Version.  
    To see only the devices from a specific session number, tap Session Filter Off. The calculator opens and you can insert the session number you would like to see.
4.  To choose a specific folder on the USB stick with the .update file, tap Choose Folder.  
    The **Select Folder on Drive** pop-up opens.
    
    ![](../../img/popup_select-folder-on-drive_v3_2_.png)
    
    _Select Folder on Drive pop-up_
    
    Select the .update file and tap Open.  
    You are back in the Software Update window.
5.  Tap at the devices you want to update and tap Update Devices!.  
    A pop-up opens and asks if you want to save the show file first.
6.  Tap Save Showfile.  
    The update process starts. After the update process is finished, the console asks to reboot now.
7.  Tap Reboot Now.

The console reboots and the update process is finished.

You can also update the consoles software via command line.  
For more information, see:  
\- [UpdateSoftware Keyword](../../Keywords/UpdateSoftware.md)  
\- [Reboot Keyword](../../Keywords/Reboot.md)

[Format a USB stick for Linux](Format%20a%20USB%20stick%20for%20Linux.md) →

Part of [Update the Software](../../Sections/Update%20the%20Software.md) · [000 Map of Content](../../000%20Map%20of%20Content.md)
