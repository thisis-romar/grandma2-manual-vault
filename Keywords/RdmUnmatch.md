---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "RdmUnmatch"
slug: "key_keyword_rdmunmatch"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmunmatch.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The RdmUnmatch keyword unmatches previous matched RDM devices in the show file."
---

# RdmUnmatch

> [!source]- Source
> [MA Lighting Help – RdmUnmatch](https://help.malighting.com/grandMA2/en/help/key_keyword_rdmunmatch.html)

Version 3.9

# RdmUnmatch Keyword

To get the RdmUnmatch keyword in the command line, type **RdmUnmatch** or the shortcut **Rdm** in the command line.

## Description

The RdmUnmatch keyword unmatches previous matched RDM devices in the show file. If no object is given, the current selection will be used.

Possible objects are:

*   Channel
*   Fixture
*   FixtureType
*   RDMFixtureType
*   Group
*   Sequence
*   Cue
*   Executor
*   Preset (only selective Presets)
*   Selection
*   World

The RdmUnmatch keyword is a function keyword.

## Syntax

RDMUnmatch \[Object-List\]

## Examples

*   To unmatch the selected fixtures, type in the command line:

\[Channel\]> RdmUnmatch

*   To unmatch the fixtures used in group 1, type in the command line:

\[Channel\]> RdmUnmatch Group 1

*   To unmatch the fixtures used in group 1 and in sequence 2, type in the command line:

\[Channel\]> RdmUnmatch Group 1 If Sequence 2

Part of [000 Keyword Index](../000%20Keyword%20Index.md) · [000 Map of Content](../000%20Map%20of%20Content.md)
