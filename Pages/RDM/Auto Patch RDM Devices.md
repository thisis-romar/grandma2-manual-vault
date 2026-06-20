---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Auto Patch RDM Devices"
slug: "key_rdm_auto_patch"
url: "https://help.malighting.com/grandMA2/en/help/key_rdm_auto_patch.html"
section: "RDM"
ma2_section: "key_rdm"
section_ref: "[[Sections/RDM]]"
prev_page: "[[Pages/RDM/Match RDM devices]]"
next_page: "[[Pages/RDM/Work with RDM parameters]]"
depth: 2
tags:
  - "type/page"
  - "section/rdm"
summary: "If the RDM fixture DMX address and the DMX address of the patch is not the same, you can auto-patch the fixture and send the patch DMX address via RDM to the fixture."
---

# Auto Patch RDM Devices

> [!source]- Source
> [MA Lighting Help – Auto Patch RDM Devices](https://help.malighting.com/grandMA2/en/help/key_rdm_auto_patch.html)

Version 3.9

# Auto Patch RDM Devices

If the RDM fixture DMX address and the DMX address of the patch is not the same, you can auto-patch the fixture and send the patch DMX address via RDM to the fixture.

**Requirements:**  
\- MA Fixture is matched  
\- MA Fixtures is patched  
\- MA Fixture and RDM Fixture have the same universe

1.  Open the RDM devices window. Press Setup, and tap under **Show** at Patch & Fixture Schedule.  
    The **Edit Setup** opens.
2.  Tap in the lower right corner at RDM devices.  
    The **RDM devices window** opens.
3.  To select the fixture type you like to auto-patch, tap at the corresponding fixture type under **Discovered RDM FixtureTypes**.  
    The fixtures to the selected fixture type are displayed on the right side of the RDM devices window.
4.  To select the fixture, tap at the fixture in the table on the right screen side.
5.  Tap Auto-Patch.

The patched DMX address will be sent via RDM to the RDM fixture. The selected fixture is auto-patched. The green check marks in the field below the fixture table indicates a successful match and patch.

![](../../img/menu_matched-rdm-devices_v3_2.png)

_Auto-patched RDM fixture_

**Hint:**  
You can also auto-patch fixtures by using the [[Keywords/RdmAutopatch|RdmAutopatch keyword]].

← [[Pages/RDM/Match RDM devices|Match RDM devices]] | [[Pages/RDM/Work with RDM parameters|Work with RDM parameters]] →

Part of [[Sections/RDM|RDM]] · [[000 Map of Content]]
