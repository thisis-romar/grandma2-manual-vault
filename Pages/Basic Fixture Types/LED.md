---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "LED"
slug: "key_basic_fixture_type_led"
url: "https://help.malighting.com/grandMA2/en/help/key_basic_fixture_type_led.html"
section: "Basic Fixture Types"
ma2_section: "key_basic_fixture"
section_ref: "[[Sections/Basic Fixture Types]]"
prev_page: "[[Pages/Basic Fixture Types/Conventional fixture type]]"
next_page: "[[Pages/Basic Fixture Types/Mirror]]"
depth: 3
tags:
  - "type/page"
  - "section/basic"
summary: "The LED fixture type is for static (non moving) fixture with LED light sources."
---

# LED

> [!source]- Source
> [MA Lighting Help – LED](https://help.malighting.com/grandMA2/en/help/key_basic_fixture_type_led.html)

Version 3.9

# LED

The LED fixture type is for static (non moving) fixture with LED light sources.

The fixture type is a fixture that has a surface that emits light in MA 3D. There is no beam of light coming out of the fixture.

The LED fixture is usually set up with different colored LEDs.

The grandMA2 will expect it to be colored LEDs and have their default value at 100%. If the fixture do not have an intensity attribute, then it is customary to add a virtual dimmer to the fixture. The Virtual dimmer will make the color attribute fade up and down when the dimmer attribute is changed.

Having only the red, green, and blue MixColor attributes and no (virtual or real) intensity attribute makes the color attributes fade up and down. This is not the behavior most users expect. Read about adding virtual attributes in the [[Pages/Advanced Fixture Types/Anatomy of a Fixture Type]] topic.

← [[Pages/Basic Fixture Types/Conventional fixture type]] | [[Pages/Basic Fixture Types/Mirror]] →

Part of [[Sections/Basic Fixture Types]] · [[000 Map of Content]]
