---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Thumbnail exchange"
slug: "key_network_citp_thumbnail"
url: "https://help.malighting.com/grandMA2/en/help/key_network_citp_thumbnail.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[[Sections/Networking]]"
prev_page: "[[Pages/Networking/Streaming CITP video]]"
depth: 3
tags:
  - "type/page"
  - "section/network"
summary: "CITP/MSEX protocols are used to transfer information between consoles, media server and visualizers."
---

# Thumbnail exchange

> [!source]- Source
> [MA Lighting Help – Thumbnail exchange](https://help.malighting.com/grandMA2/en/help/key_network_citp_thumbnail.html)

Version 3.9

# Thumbnail exchange

CITP/MSEX protocols are used to transfer information between consoles, media server and visualizers. You can use it to transfer thumbnail pictures of media files from a media server to the console. This puts the thumbnails in the smart view and in the calculator pop-up.

**Hint**  
This is not needed with MA VPU. They will automatically exchange the thumbnails using MA-Net.

**Restriction**  
The video layers need to be positioned and patched first in the fixture schedule layer containing the fixtures profiles for the media server for CITP thumbnail exchange to function correctly.

Open the CITP Network Configuration window by pressing the Setup key and then tap the CITP Network Configuration in the menu.

The CITP Enabled button in the upper right corner enables the CITP protocol on all consoles in the session.

The IP address listed next to the close button is the Multicast address used by CITP. Pressing it allows you to change the used IP address, please only do this if there is a really good reason for it.

The configuration have four tabs. Only the MediaServers tab is active right now.

## LightingConsoles tab

This part is not implemented yet.

## MediaServers tab

Here you add the 3rd party media servers. Press the Add button to manually add a media server. Or you can use Add Present to automatically add all the Media Server in your network (the ones using CITP). The IP address of the server needs to match the IP address in the IP column.

The Delete button deletes the highlighted line.

It could look like this:

![](../../img/menu_citp-network-configuration_media-servers_v3-3.png)

_CITP Network Configuration - Media Servers with active server_

If the line has a red background then the server is not present or it have CITP disabled.

A green background indicates an active media server.

You need to specify the Fixture Layer and have a fixture setup here that matches the Media Server.

If the Library and Image Subattributes is not automatically recognized by the system, then you need to manually select the Library and Image SubAttribute. This is important for the images to go to the correct folder.

The Media Server will provide information like the server "Name", "Port", "Device State", "CITP command", "CITP Version" and "MSEX Version".

When all is set up correctly then you can press the Update Thumbnail button. This will start the transfer of the thumbnails to the console. This might take a while and there will be a progress bar in the "CITP Command" cell. It can also be done using the command line. Please read more about it in the [[Keywords/UpdateThumbnails|UpdateThumbnails]] command.

## Visualizers tab

This part is not implemented yet.

## OperationHubs tab

This part is not implemented yet.

← [[Pages/Networking/Streaming CITP video|Streaming CITP video]]

Part of [[Sections/Networking|Networking]] · [[000 Map of Content]]
