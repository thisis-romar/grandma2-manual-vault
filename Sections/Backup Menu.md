---
type: "section"
cssclasses:
  - "gma2-section"
section: "Using the Backup Menu"
slug: "key_backup_menu"
url: "https://help.malighting.com/grandMA2/en/help/key_backup_menu.html"
page_count: 10
tags:
  - "type/section"
pages:
  - "[[Pages/Backup Menu/Create a new show]]"
  - "[[Pages/Backup Menu/Loading a show]]"
  - "[[Pages/Backup Menu/Saving a show]]"
  - "[[Pages/Backup Menu/Saving a show with a new name]]"
  - "[[Pages/Backup Menu/Deleting a Show]]"
  - "[[Pages/Backup Menu/Using a USB stick]]"
  - "[[Pages/Backup Menu/Setting up a file server]]"
  - "[[Pages/Backup Menu/Partial Show Read]]"
  - "[[Pages/Backup Menu/ASCII Show Read]]"
  - "[[Pages/Backup Menu/grandMA2 to grandMA3 Show File Converter]]"
summary: "The Backup Menu is where show files are managed."
---

# Using the Backup Menu

> [!source]- Source
> [MA Lighting Help – Using the Backup Menu](https://help.malighting.com/grandMA2/en/help/key_backup_menu.html)

Version 3.9

# Using the Backup Menu

The Backup Menu is where show files are managed. It is also here shows are saves and loaded.

## What is show file management

Show file management is the handling of show files. Shows can be saved internally in the console, and there is also the option to save on USB sticks and file servers. Being able to save the show and load it again is a vital part of modern lighting consoles.

Show files can also be deleted to make more room on the hard drive or just to clean the console.

A show file can only be moved forward. A show saved on a USB stick that was programmed in a previous version can be loaded in a newer version. If the show is then re-saved on the stick in this new version, then it cannot be taken back to the old software. If this is important then it is needed to load the show and save it with a new name. Then the old version is not saved as the new version and it can still be accessed by an older version.

## Show file content

The show files contain all the data needed to run the show.

This includes all the Users and User Profiles in the show.

It also contains any 3D models that are used in MA 3D. 

If MA VPUs (= Video Processing Unit) are used, then the programming of the MA VPU is of cause store in the show, but the Media Files are not. Make sure they are backed up on an external device - just in case.

## The backup menu and the different tabs

The Backup Menu can be opened by pressing the Backup key or using the dedicated command:

\[Channel\]> Menu "Backup"

The Backup Menu is organized in two section. The top section is for manual show file management. The bottom part is the Backup Options.

This is what it could look like:

![](../../img/menu_backup_v3-3.png)

_Backup Menu_

The top part have a title bar that shows the file name and saved date of the current show. It also shows the current software version.

There is also the button that can be used to move the menu to a different screen and finally the button to close the menu.

Below this there are different tabs. There is always minimum three called "Internal", "Demoshows" and "Templates". There might be more. Each software version installed will have its own tab. This allows the option to load a show from a previous version. It is not possible to save a show from a newer software version in one of the tabs from previous versions.

If a USB stick is connect to the console/onPC, then it will get its own tab. Select this tab will change the default storage drive to the USB stick. Read the [[Pages/Backup Menu/Using a USB stick]] to learn more about specific USB stick handling. 

If a file server is added to the system, then this will also get its own tab. This tab can be selected to save or load shows using the storage space on the server. Read the [[Pages/Backup Menu/Setting up a file server]] to learn more about server setup. 

The selected tab is then the selected "drive" and the location where shows will be saved. The selected drive can also be selected using the command line - it is a command called SelectDrive or just SD - read more about it [[Keywords/SelectDrive|here]].  

### Internal

This tab is the hard drive in the console or onPC. 

If you are working on an onPC solution, then the SelectDrive command can be used without setting a drive number to see the storage location in the computer.

The internal drive can do everything except ASCII Show Read.

If the console is updated then the current Internal tab is made a tab with the version number.

A full install that formats the drive will delete all show files and remove all previous version tabs.

### Demoshows

The demo show tab is a read only tab. It is only possible to load shows from the demo tab. It is possible to do a Partial Show Read from the shows in this folder.

If the console is updated, then the shows in this folder will be overwritten.

### Templates

The templates tab functions as the Demoshows with the exception that updating the console software will not overwrite the shows in the tab. A format and install still deletes the shows in this tab!

The idea behind this tab is that a place that have basically the same rig but do many shows, can copy a show with the patch and basic setup in this folder. This can then be loaded and stored as a new show in the Internal tab. Thus protecting the basic show from accidental changes. It is only possible to copy the shows into this tab using a [[Pages/Networking/FTP connection to console and NPU|FTP connection]].

### Server tab

If a working connection is set up to a file server, then an extra tab with the defined name will appear. This functions as the internal tab.

This tab is only visible on the console that is the master in the session.

grandMA2 onPC as Master does not support server backup

Read [[Pages/Backup Menu/Setting up a file server|here]] for more about setting up a File Server.

### USB tabs

When a compatible USB stick is connected, then it gets its own tab named after the name of the USB stick. 

It works as the internal tab with the addition that it is possible to do an ASCII Show Read.

Doing a Quick Save will store the show on the USB stick **and** on the Internal drive.

Read [[Pages/Backup Menu/Using a USB stick|here]] for more info about USB sticks and what advice and restrictions there might be.

### Version tabs

Previous versions installed on the console or computer will have their own tab. Shows can be loaded and delete in these tabs.

## Backup Options

The backup options allows access to setup a file server and activate Auto Save.

The server setup can be complicated, so it has it own help topic - please read about it [[Pages/Backup Menu/Setting up a file server|here]]. 

### Auto Save

Auto Save can be set up to automatically store show file after a certain amount of time. 

The default setting is "Off". The other options are 15, 30, 60 and 120 minutes.

If auto save is activated - by selecting a time interval - then a count down can be seen next to the label.

When the count down reaches Zero, then it will save the show on the selected drive/tab. If a tab is selected that does not allow for saving, then it will save in the Internal drive.

Read the following pages to read about the different operations that can be done in the tabs.

  

* * *

#### Sub topics

*   [[Pages/Backup Menu/Create a new show|New show]]
*   [[Pages/Backup Menu/Loading a show|Load show]]
*   [[Pages/Backup Menu/Saving a show|Save show]]
*   [[Pages/Backup Menu/Saving a show with a new name|Save show as...]]
*   [[Pages/Backup Menu/Deleting a Show|Delete shows]]
*   [[Pages/Backup Menu/Using a USB stick]]
*   [[Pages/Backup Menu/Setting up a file server]]
*   [[Pages/Backup Menu/Partial Show Read|Partial show read]]
*   [[Pages/Backup Menu/ASCII Show Read|ASCII show read]]
*   [[Pages/Backup Menu/grandMA2 to grandMA3 Show File Converter|grandMA2 to grandMA3 show file converter]]

## Pages in This Section

- [[Pages/Backup Menu/Create a new show]]
- [[Pages/Backup Menu/Loading a show]]
- [[Pages/Backup Menu/Saving a show]]
- [[Pages/Backup Menu/Saving a show with a new name]]
- [[Pages/Backup Menu/Deleting a Show]]
- [[Pages/Backup Menu/Using a USB stick]]
- [[Pages/Backup Menu/Setting up a file server]]
- [[Pages/Backup Menu/Partial Show Read]]
- [[Pages/Backup Menu/ASCII Show Read]]
- [[Pages/Backup Menu/grandMA2 to grandMA3 Show File Converter]]

Part of [[000 Map of Content]]
