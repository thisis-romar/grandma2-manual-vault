---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "RdmSetpatch"
slug: "key_keyword_rdmsetpatch"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmsetpatch.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "With the RdmSetPatch keyword you set the DMX address of a RDM fixture by using the command line."
---

# RdmSetpatch

> [!source]- Source
> [MA Lighting Help – RdmSetpatch](https://help.malighting.com/grandMA2/en/help/key_keyword_rdmsetpatch.html)

Version 3.9

# RdmSetpatch Keyword

To get the RdmSetPatch keyword in the command line, type **RdmSetPatch** or the shortcut **RdmSetPat** in it.

## Description

With the RdmSetPatch keyword you set the DMX address of a RDM fixture by using the command line.

If no Unique ID is given, the fixture selection will be used.

The RdmSetPatch keyword is a function keyword.

For more information, see [RDM](../Sections/RDM.md).

## Syntax

RdmSetPatch \[DMX address\] / \[Option\] = \[Option Value\]

## Options

To get a list all available options to the RdmSetPatch keyword, type in the command line:

\[Channel\]> RdmSetPatch /?

The RdmSetpatch has the following options:

Option

Option shortcut

Option value

Description

multipatch

m

0 = for all multipatches and the fixture  
1 = multipatch for the first multipatch fixture  
and so on

Sets the multipatch index.

UID

No shortcut available

e.g. "43500F019FCB"

Sets the RDM UID to send RDM Parameter to the device.

## Examples

*   To set the fixtures of the current fixture selection to the DMX address 25, type in the command line:

\[Channel\]> RdmSetPatch 25

*   To set the fifth multipatch fixture of the current fixture selection to the DMX address 25, type in the command line:

 \[Channel\]> RdmSetPatch 25 / multipatch = 5

*   To set the DMX address of the fixture with the UID 43500F019FCB to 25, type in the command line:

 \[Channel\]> RdmSetPatch 25 / UID = 43500F019FCB

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
