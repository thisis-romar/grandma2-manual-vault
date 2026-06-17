---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Fixture"
slug: "key_keyword_fixture"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_fixture.html"
keyword_type: "unknown"
related_key: "[[Keys/Fixture Key]]"
tags:
  - "type/keyword"
---

# Fixture

> [!source]- Source
> [MA Lighting Help – Fixture](https://help.malighting.com/grandMA2/en/help/key_keyword_fixture.html)

Version 3.9

# Fixture Keyword

To get the Fixture keyword in the command line press Fixture.

Another way is to type **Fixture** or the shortcut **F** in the command line.

## Description

Fixture is an object keyword to access fixtures with a fixture ID.

The default function for fixture objects is [SelFix](key_keyword_selfix.html). This means that entering fixtures without any function specified selects the fixtures.

## Syntax

Fixture \[ID\]

Fixture \[ID\].\[Sub-ID\]

## Examples

*   To select fixture 34 type in the command line:

\[Channel\]> Fixture 34

*   To select the fifth subfixture of the fixture cluster fixture 11 type in the command line:

\[Channel\]> Fixture 11.5

*   To select all subfixtures of the fixture cluster fixture 11 type in the command line:

\[Channel\]> Fixture 11

Part of [[000 Keyword Index]] · [[000 Map of Content]]
