---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "RdmFixtureType"
slug: "key_keyword_rdmfixturetype"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_rdmfixturetype.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# RdmFixtureType

> [!source]- Source
> [MA Lighting Help – RdmFixtureType](https://help.malighting.com/grandMA2/en/help/key_keyword_rdmfixturetype.html)

Version 3.9

# RdmFixtureType Keyword

To get the RdmFixtureType keyword in the command line, type **RdmFixtureType** or the shortcut **Rd** in the command line.

## Description

The RdmFixtureType is an object keyword to access Rdm fixtures with a Rdm fixture type ID.

To get the RdmFixtureType ID, go to **Setup -> Patch & Fixture Schedule -> RDM Devices**. The RdmFixtureType ID is displayed in the information field.

**Hint:**  
To get the RdmFixtureType ID you can also enter in the command line, CD RDM\_Data.RDM\_Fixture\_Types. Then enter in the command line List, press Please, and open the command line feedback window.

For more information, see [[Sections/RDM]].

## Syntax

\[RDM Function\] RdmFixtureType \[ID\]

## Examples

*   To automatch RDM fixture type 1, type in the command line:

\[Channel\]> RdmAutomatch RdmFixtureType 1

* * *

*    To unmatch RDM fixture type 1, type in the command line:

\[Channel\]> RdmUmatch RdmFixtureType 1

Part of [[000 Keyword Index]] · [[000 Map of Content]]
