---
type: "page"
title_str: "Different Fixture Types"
slug: "key_basic_fixture_type"
url: "https://help.malighting.com/grandMA2/en/help/key_basic_fixture_type.html"
section: "Basic Fixture Types"
ma2_section: "key_basic_fixture"
section_ref: "[[Sections/Basic Fixture Types]]"
prev_page: "[[Pages/Basic Fixture Types/ColorMix vs. MixColor]]"
depth: 2
tags:
  - "type/page"
  - "section/basic"
---

# Different Fixture Types

> [!source]- Source
> [MA Lighting Help – Different Fixture Types](https://help.malighting.com/grandMA2/en/help/key_basic_fixture_type.html)

Version 3.9

# Different Fixture Types

The name Fixture Type covers a wide range of different actual fixtures but also elements like Media Servers and virtual elements like Cameras for MA 3D.

It is important that a Fixture Type definition includes information about the correct type. It has influence on how the fixture is handled by the grandMA2 software - especially MA 3D.

It is called **Class** in the Fixture Types Module Manager.

When grandMA2 handles variable color systems it is called MixColor (see [ColorMix vs. MixColor topic](key_basic_fixture_colormix_mixcolor.html) for details). Independent on it being a CMY or LED color system in the fixtures, it is still the same attribute defined in the fixture profile. It is the ColorRGB1 to ColorRGB22 - see the [ColorMix vs. MixColor topic](key_basic_fixture_colormix_mixcolor.html) for a list of the ColorRGBs.

The difference in how the grandMA2 interprets the ColorRGBs are in physical range the attributes are given. If the light is added then the physical range is set from 0 to 1. If the attribute subtracts color then the physical range is set from 1 to 0.

The following subtopics explains some of the difference between the types.

  

* * *

#### Sub topics

*   [Conventional](key_basic_fixture_type_conv.html)
*   [LED](key_basic_fixture_type_led.html)
*   [Mirror](key_basic_fixture_type_mirror.html)
*   [Moving lights](key_basic_fixture_type_moving.html)
*   [Media server](key_basic_fixture_type_server.html)
*   [Virtual fixtures](key_basic_fixture_type_virtual.html)

← [[Pages/Basic Fixture Types/ColorMix vs. MixColor]]

Part of [[Sections/Basic Fixture Types]] · [[000 Map of Content]]
