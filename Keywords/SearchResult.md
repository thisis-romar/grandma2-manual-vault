---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "SearchResult"
slug: "key_keyword_searchresult"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_searchresult.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The SearchResult keyword opens the world search result after an executed search command."
---

# SearchResult

> [!source]- Source
> [MA Lighting Help – SearchResult](https://help.malighting.com/grandMA2/en/help/key_keyword_searchresult.html)

Version 3.9

# SearchResult Keyword

To get the SearchResult keyword in the command line, press and hold ![ma](../../img/ma_1.png) + Group Group (= SearchResult).

You can also type **SearchResult** or the shortcut **SR** in the command line.

## Description

The SearchResult keyword opens the world search result after an executed search command. The search result world includes only the fixtures or channels from the last search command.

![](../../img/window_fixture-sheet-search-result_v3-2.png)

_Fixture Sheet World Search Result_

  
To close the SearchResult world, select another world in the world pool.

To select all fixtures from the last search command, use the SelFix SearchResult.

**Hint:**  
You can also use the Selfix Search Result button and/or the World Search Result button in the title bar of the search result pop-up.

The SearchResult keyword is a function keyword.

## Syntax

SearchResult

SelFix SearchResult

Search \[object-list\] If SearchResult

## Examples

*   Opens the search result world with the fixtures from the last search command.

\[Channel\]> SearchResult

*   Select only the fixtures from the last search result.

\[Channel\]> SelFix SearchResult

*   Search in the last search result for fixtures with the attribute green at 20.

\[Channel\]> Search Fixture Thru Attribute "G" At 20 If SearchResult

Part of [[000 Keyword Index]] · [[000 Map of Content]]
