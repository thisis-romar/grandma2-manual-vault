---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ViewButton"
slug: "key_keyword_viewbutton"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_viewbutton.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The ViewButton keyword calls the assigned function on the view button."
---

# ViewButton

> [!source]- Source
> [MA Lighting Help – ViewButton](https://help.malighting.com/grandMA2/en/help/key_keyword_viewbutton.html)

Version 3.9

# ViewButton Keyword

To go to the ViewButton keyword, press View View (=ViewButton).  
You can also use the commandline and type ViewButton or use the shortcut **VB**.

## Description

The ViewButton keyword calls the assigned function on the [[Pages/Workspace/View Buttons|view button]]. The call function works only if the assigned object supports a call.

The ViewButton keyword is an object keyword.

## Syntax

ViewButton \[ID\]

ViewButton \[ViewPage\].\[ID\]

## Example

Delete the assigned function of view button 4 from the current view page.

\[Channel\]> Delete ViewButton 4

Label the assigned view button 5 at view page 2.

\[Channel\]> Label ViewButton 2.5 "Layout"

Store a view at key X1.

\[Channel\]> Store ViewButton 11.1

## Related Links

*   [[Keywords/ViewPage|ViewPage Keyword]]
*   [[Keys/View Key]]
*   [[Keys/V1 - V10 Keys|V-Keys]]
*   [[Keys/X1 - X20 Keys|X-Keys]]

Part of [[000 Keyword Index]] · [[000 Map of Content]]
