---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Tools"
slug: "key_of_sheet_options_tools"
url: "https://help.malighting.com/grandMA2/en/help/key_of_sheet_options_tools.html"
section: "Operate Fixtures"
ma2_section: "key_operate_fixtures"
section_ref: "[[Sections/Operate Fixtures]]"
next_page: "[[Pages/Operate Fixtures/Layer mask]]"
depth: 3
tags:
  - "type/page"
  - "section/of"
---

# Tools

> [!source]- Source
> [MA Lighting Help – Tools](https://help.malighting.com/grandMA2/en/help/key_of_sheet_options_tools.html)

Version 3.9

# Tools

The Tools tab contains a lot of different settings that turns on or off tools in the sheets. The tools can allow you to work more efficient.

The last part of the options described here, is also available as [Title Buttons](key_of_sheet_options_title_buttons.html).

## Preset Control

**Preset Control** is an option in Channel, Fixture, Content, and Tracking sheets.

The Preset Control turn on or off the visibility of the Preset Control Bar at the bottom of the sheet.

It is used to select different Preset Types. The bar is similar to to Preset Control Bar visible in the Encoder Bar.

Read more about it in the [Preset Control Bar subtopic](key_ws_preset_control_bar.html).

**Restriction:**  
If Multi Control is on, then this control bar is hidden.

## Layer Control

**Layer Control** is an option in Channel, Fixture, Content, and Tracking sheets.

The Layer Control option turn on or off the Layer Control Bar at the bottom of the sheet.

The Layer Control Bar gives access to the different data layers for the fixtures.

Read more about layers in the [Layers in the programmer topic](key_of_layers_in_sheets_channel_and_fixture.html).

**Restriction:**  
If Multi Control is on, then this control bar is hidden.

## Mask Control

**Mask Control** is an option in Channel and Fixture sheets.

The Mask Control option turn on or off a small Mask Control Bar with the default masks.

It could look like this:

![](../../img/img_mask-control-bar_v3_3.png)

_Mask Control Bar_

The Masks are described in the [Mask topics](key_wfm_what_are_masks.html).

**Restriction:**  
If Multi Control is on, then this control bar is hidden.

## Multi Control

**Multi Control** is an option in Channel, Fixture, and Content Sheets.

The multi control combines the Layer, Preset, and Mask control into one bar with three expanding buttons - in that order from left to right.

It could look like this:

![](../../img/img_multi-control-bar_v3_3.png)

_Multi Control Bar_

The options available for each button is the same as the ones in each of the control bars.

**Restriction:**  
If Multi Control is on, then Preset Control, Layer Control, and Mask Control bars are hidden.

## ScrollBar horizontal

**ScrollBar horizontal** is an option in Fixture, Content, Executor, and Tracking Sheets.

With this option it is possible to turn on or off the horizontal scroll bar at the bottom of the sheet.

The scroll bar is only visible if it is needed.

## ScrollBar vertical

**ScrollBar vertical** is an option in Channel, DMX, Fixture, Content, Executor, and Tracking Sheets.

With this option it is possible to turn on or off the vertical scroll bar at the right side of the sheet.

The scroll bar is only visible if it is needed.

## Link Encoders

**Link Encoders** is an option in DMX, Content, Executor, and Tracking Sheets.

If this option is on then activating the sheet (by tapping inside the sheet) will change the [Encoder Toolbar](key_ws_encoder_toolbar.html). The result is different depending on the type of sheet.

### DMX Sheet

The Encoder Toolbar will turn into the DMX tester. Read more about it in the [DMX Testing topic](key_patch_dmx_testing.html).

### Content Sheet and Tracking Sheet

The Encoder Toolbar will turn into the Executor Toolbar. Read more about it in the [What are executors topic](key_exec_what_are.html).

### Executor Sheet

It is bit hidden as an option for the Executor Sheet. You need to add it as a [title button](key_of_sheet_options_title_buttons.html) to enable or disable it.

It also opens the Executor Toolbar. Follow the link in the "Content Sheet" above to read about it.

## Edit CueOnly

**Edit CueOnly** is an option in Content and Tracking Sheets.

With this option **on**, any changes made to values in the sheet are stored as Cue Only. Read more about editing values in the two sheets in the [Looking at your cue content topic](key_cs_cue_content.html).

## DMX Readout Absolute

**DMX Readout Absolute** is an option in the DMX Sheet.

This option allows you to view the DMX addresses as Absolute or Separated in Universes.

If it is Absolute readout, then it only displays one number. That means that the DMX addresses are displayed as continues numbers. So the first DMX address in universe number 2 is 513 (512 from the first universe plus 1).

If it is Separated readout, the sheet will display two numbers separated by a colon. The first number is the universe and the second is the DMX address in that universe.

[[Pages/Operate Fixtures/Layer mask]] →

Part of [[Sections/Operate Fixtures]] · [[000 Map of Content]]
