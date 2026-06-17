---
type: "keyword"
keyword: "Root"
slug: "key_keyword_root"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_root.html"
keyword_type: "unknown"
related_key: "[[Keys/Root]]"
tags:
  - "type/keyword"
---

# Root

> [!source]- Source
> [MA Lighting Help – Root](https://help.malighting.com/grandMA2/en/help/key_keyword_root.html)

Version 3.9

# Root Keyword

To go to the Root keyword, type **Root** in the command line or use the shortcut **Roo**.

## Description

The Root keyword access the root in the object tree.

**Important:**  
We recommend to use the actual root index name. If you use root index numbers, it is necessary to double-check after every release if the root index number is still valid. If the root index number changed, you need to adjust the macros.

The Root keyword is an object keyword.

## Syntax

Root \[root-index\]

Root \[root-index\] . \[sub-index\]

Root \[root-index\] . \[sub-index\] . \[sub-sub-index\] etc

## Examples

*   Change the destination of the command line to DMX\_Protocols/Art-Net.

\[Channel\]> ChangeDest Root DMX\_Protocols.Art-Net

*   Export all live setup layers from the grandMA2 onPC to the folder C:\\ProgramData\\MA Lighting Technologies\\grandma\\gma2\_V\_3.1\\fixture\_layers.

\[Channel\]> Export Root LiveSetup.Layers

**Hint:**  
Another way to export layers is, press Setup I tap Patch only (Live) I tap Export Layer**.**

Part of [[000 Keyword Index]] · [[000 Map of Content]]
