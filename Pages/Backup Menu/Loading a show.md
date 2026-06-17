---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Loading a show"
slug: "key_backup_menu_load_show"
url: "https://help.malighting.com/grandMA2/en/help/key_backup_menu_load_show.html"
section: "Backup Menu"
ma2_section: "key_backup_menu"
section_ref: "[[Sections/Backup Menu]]"
prev_page: "[[Pages/Backup Menu/Create a new show]]"
next_page: "[[Pages/Backup Menu/Saving a show]]"
depth: 2
tags:
  - "type/page"
  - "section/backup"
---

# Loading a show

> [!source]- Source
> [MA Lighting Help – Loading a show](https://help.malighting.com/grandMA2/en/help/key_backup_menu_load_show.html)

Version 3.9

# Loading a show

A show can be loaded from any tab in the Backup Menu.

## Using the GUI

When Load Show is tapped in the Backup Menu then it will open a pop-up like this:

![](../../img/popup_load-show_v3-2.png)

Load Show pop-up

Here is a list of the shows in the selected tab.

On the right side it is possible to choose what data that will be loaded from the selected show.

The idea is that it is possible to load just a small part of a different show into the currently loaded show.

### Show Data

This is activated as a default. The show data is the patch and fixture schedule, stored sequences, presets, groups, effects, and so on. Basically everything that is in a pool somewhere and the imported 3D elements and their location in the 3D stage.

If the Show Data is loaded and **not** the User Profiles (read below), then the existing **User Profiles** will be overwritten with the ones from the show being loaded and it will add the additional User Profiles from the show. It will not add **Users**.

### Time Config

The time configuration is the time, location, daylight savings settings and NTP (Network Time Protocol) setup.

### Global Settings

The global settings are the ones found in Setup -> Console -> Global Settings. The settings here are shared in the session and includes enabling and disabling the Remote and Telnet, RDM, WYSIWYG, and so on.

### Local Settings

The local settings are the ones found in Setup -> Console -> Local Settings. These settings only affects the local console and not all consoles in a session. It includes settings like the console language and LED background light settings.

### Network Protocols

Network protocols are the settings for outputting DMX via an Ethernet connection. It includes ArtNet, sACN, ETC-Net2, KiNet1, Pathport and Shownet. These are found in Setup -> Network -> Network Protocols.

### Network Config

Network configuration is the settings for what devices should be in the session and the DMX port settings on the Consoles, onPC Wings and NPU's.

### User Profiles

User Profiles keep all the data that is connected to the Users. Loading this data will delete all the Users and User Profiles in the current show and load all the Users and User Profiles from the show file being loaded.

There is a Check All button that selects all the above boxes.

As a default only the main show files are displayed, but it is possible to also choose to load data from a backup version of the show.

In the picture above there is a button called "Viewing Shows". This is a button with three different modes:

*   **Viewing Shows**:  
    This only shows a list of the main show files.
*   **Viewing Shows & Backups**:  
    This shows the main show files and the backup files.
*   **Viewing Backups only**:  
    This only shows the backup files.

All columns in this pop-up can be sorted in ascending or descending order. This can be done by pressing the Edit key and then the column title. If a mouse or trackball is connected, then it is also possible to right click the column title.

In the title bar it is possible to toggle the information button. It looks like this (active): ![](../../img/icon_info_v3-2.png).

When it is active then the information about the selected show are displayed at the bottom. It is information about the different software versions it has been through and when it was last saved in those versions.

It is also possible to see the information that has been saved into the show by the users. Read more about this in [Save Show topic](key_backup_menu_save_show.html).

When the desired show file and the wanted data type is selected, then tap the Load Show button.

It is possible to cancel the load process by tapping the Cancel button or the big X in the upper right corner on the pop-up.

**Hint:**  
Executing onPC.exe with parameter -s allows to specify a show file for loading.

## Example:

<path>/gma2onpc.exe -s:my\_showfile

​Loads the show file my\_showfile.show.gz from the gma2/shows folder of the corresponding software version. 

## Using the Command Line

Show files can be loaded using the command line. The command is called LoadShow. Read more about it [here](key_keyword_loadshow.html).

← [[Pages/Backup Menu/Create a new show]] | [[Pages/Backup Menu/Saving a show]] →

Part of [[Sections/Backup Menu]] · [[000 Map of Content]]
