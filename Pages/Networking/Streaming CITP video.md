---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Streaming CITP video"
slug: "key_network_citp_stream"
url: "https://help.malighting.com/grandMA2/en/help/key_network_citp_stream.html"
section: "Networking"
ma2_section: "key_network"
section_ref: "[[Sections/Networking]]"
next_page: "[[Pages/Networking/Thumbnail exchange]]"
depth: 3
tags:
  - "type/page"
  - "section/network"
summary: "CITP can be used to stream a video feed through the network."
---

# Streaming CITP video

> [!source]- Source
> [MA Lighting Help – Streaming CITP video](https://help.malighting.com/grandMA2/en/help/key_network_citp_stream.html)

Version 3.9

# Streaming CITP video

CITP can be used to stream a video feed through the network.

This video stream can be viewed on the MA console and onPC in the **CITP Video Viewer** window - create it using the [[Sections/Windows|Create Basic Windows]].

In MA 3D you can use a CITP stream on a surface, thus mimicking a screen.

For the console or onPC viewer to display a video stream, you need to set it up.

Make sure the CITP is activated in the console/onPC. Have a look at the [[Pages/Networking/Using CITP|Using CITP]] topic.

Tap the yellow ball in the upper left corner. This opens the Options pop-up. It could look like this:

![](../../img/window_citp-video-viewer_options_v3-2.png)

_CITP Video Viewer Options with one active CITP stream source_

  
This view displays a list of all the CITP servers that can stream video. You see the IP address, Port, Name and connection state.

At the bottom there are two buttons. The left one allows you set the requested frames per second. The actual feed might be faster or slower. The right button is used to select what the viewer displays. This can be layers or Outputs (for MA VPU).

With a selected source and layer/output, the Viewer can display the stream.

The viewer could look like this:

![](../../img/window_citp-video-viewer_v3-2.png)

_CITP Video Viewer - with a feed_

The main part of this window displays the video stream.

The title bar shows you that it is the CITP Video Viewer and the CITP source. In the picture above the source is a MA VPU. It also tells you if you are looking at a single layer or an output.

There are two buttons in the title bar. The first one show you the frames per second. It shows the actual FPS and the requested. The second button allows you to start or stop the live video viewing.

It has been tested with MA VPU, MSEX Lord, Green Hippo Hippotizer, PRG MBOX, Arkaos MediaMaster, and Coolux Desktop Streamer.

[[Pages/Networking/Thumbnail exchange|Thumbnail exchange]] →

Part of [[Sections/Networking|Networking]] · [[000 Map of Content]]
