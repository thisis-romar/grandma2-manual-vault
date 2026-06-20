---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Parameters vs. DMX channels"
slug: "key_so_parameters_vs_dmx_channels"
url: "https://help.malighting.com/grandMA2/en/help/key_so_parameters_vs_dmx_channels.html"
section: "System Overview"
ma2_section: "key_so_system_overview"
section_ref: "[[Sections/System Overview]]"
prev_page: "[[Pages/System Overview/Network systems]]"
next_page: "[[Pages/System Overview/Parameter expansion]]"
depth: 2
tags:
  - "type/page"
  - "section/so"
summary: "Most people are used to think in DMX channels when considering how many fixtures can be controlled with system."
---

# Parameters vs. DMX channels

> [!source]- Source
> [MA Lighting Help – Parameters vs. DMX channels](https://help.malighting.com/grandMA2/en/help/key_so_parameters_vs_dmx_channels.html)

Version 3.9

# Parameters vs. DMX channels

Most people are used to think in DMX channels when considering how many fixtures can be controlled with system.

MA Lighting are/is more concerned with **Parameters**.

## What are Parameters

Parameters are also called Attributes in the software. A dimmer function is a parameter and a pan function is also a parameter.

The software is calculating the different attributes using a higher precision than what is being output via DMX. So the software is calculating the parameter or attribute once and it is then scaled to the amount of DMX channels a fixture uses - typically one or two per attribute.

## Why counting in Parameters and not DMX

It is to your advantage. In the MA world you do not pay extra for using fixtures that are running 16 or 24 bit instead of the 8 bit used by one DMX channel.

There might be a need to add more networked nodes or devices to output all the parameters that are allowed to be controlled.

**Example:**

A simple moving head with a dimmer might use 5 DMX channels. The channels can be defined like this:

Definition:

DMX Channel:

Dimmer

1

Pan

2

Pan Fine

3

Tilt

4

Tilt Fine

5

The Pan and Tilt is one attribute each. Even though both pan and tilt each use two DMX channels it is only counted as one each in the parameter count. This means that the fixture only costs 3 parameters.

Definition:

DMX Channel:

Parameter cost:

Dimmer

1

1

Pan

2

2

Pan Fine

3

free

Tilt

4

3

Tilt Fine

5

free

This can be a big advantage when there is a lot of fixtures that has a lot of 16-bit (or fine) channels.

## What about preprograming and parameters?

The show can be preprogramed and MA 3D can be used without any parameter unlocking hardware. The lights are still visualized.

But if 3-party visualizers are used, then the hardware might be needed to give access to the parameters.

MA Lighting is working with many visualizer manufactures to allow them to read the DMX data without hardware.

Learn more about parameter expansion [[Pages/System Overview/Parameter expansion|here]].

← [[Pages/System Overview/Network systems|Network systems]] | [[Pages/System Overview/Parameter expansion|Parameter expansion]] →

Part of [[Sections/System Overview|System Overview]] · [[000 Map of Content]]
