---
type: "keyword"
keyword: "ViewButton"
slug: "key_keyword_viewbutton"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_viewbutton.html"
keyword_type: "unknown"
related_key: "[[Keys/ViewButton]]"
tags:
  - "type/keyword"
---

# ViewButton

> [!source]- Source
> [MA Lighting Help – ViewButton](https://help.malighting.com/grandMA2/en/help/key_keyword_viewbutton.html)

Version 3.9

# ViewButton Keyword

To go to the ViewButton keyword, press View View (=ViewButton).  
You can also use the commandline and type ViewButton or use the shortcut **VB**.

## Description

The ViewButton keyword calls the assigned function on the [view button](key_widget_view_buttons.html). The call function works only if the assigned object supports a call.

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

*   [ViewPage Keyword](key_keyword_viewpage.html)
*   [View Key](key_key_view.html)
*   [V-Keys](key_key_v1-v10.html)
*   [X-Keys](key_key_xkey.html)

Part of [[000 Keyword Index]] · [[000 Map of Content]]
