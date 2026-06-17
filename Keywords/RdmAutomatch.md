---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "RdmAutomatch"
slug: "key_keyword_rdmautomatch"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmautomatch.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# RdmAutomatch

> [!source]- Source
> [MA Lighting Help – RdmAutomatch](https://help.malighting.com/grandMA2/en/help/key_keyword_rdmautomatch.html)

Version 3.9

# RdmAutomatch Keyword

To get the RdmAutomatch keyword in the command line, type **RdmAutomatch** or the shortcut **RdmA** in it.

## Description

**Requirements:**  
\- MA Fixture is not matched  
\- MA Fixture and RDM Fixture have the same DMX address  
\- MA Fixture Type has no or the same RDMFixtureType ID as the RDM Fixture  
\- MA Fixture Type has the same DMX footprint as the RDM Fixture  
\- All Subfixtures of the MA Fixture are in the current World and Filter

The RdmAutomatch keyword automatches RDM Fixtures.

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

If no object is given, the current selection will be used.

RdmAutomatch is a function keyword.

For more information, see [[Sections/RDM]].

## Syntax

RdmAutomatch \[Object List\]

## Examples

*   To automatch the selected fixtures, type in the command line:

\[Channel\]> RdmAutomatch

* * *

*   To automatch the fixtures used in group 1, type in the command line:

\[Channel\]> RdmAutomatch Group 1

* * *

*   To automatch only the fixtures used in group 1 and also used in sequence 2, type in the command line:

\[Channel\]> RdmAutomatch Group 1 If Sequence 2

Part of [[000 Keyword Index]] · [[000 Map of Content]]
