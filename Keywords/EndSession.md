---
type: "keyword"
keyword: "EndSession"
slug: "key_keyword_endsession"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_endsession.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# EndSession

> [!source]- Source
> [MA Lighting Help – EndSession](https://help.malighting.com/grandMA2/en/help/key_keyword_endsession.html)

Version 3.9

# EndSession Keyword

To get the EndSession keyword in the command line type **EndSession** or the shortcut **EndS** in the command line.

## Description

EndSession is a function keyword to end a session for all session members. The EndSession keyword disconnects all linked devices in the session. It is not possible to join an ended session again.

## Syntax

EndSession / \[noconfirm\]

## Options

To get a list of all available options to the EndSession keyword in the command line feedback window, type in the command line

\[Channel\]> EndSession /?

The EndSession keyword has the following options.

Option

Shortcut

Option Value

Description

noconfirm

nc

no option value

Suppresses confirmation pop-up.

## Examples

*   To end the session for all session members with a confirmation pop-up type in the command line:

\[Channel\]> EndSession

*   To end the session directly without a confirmation pop-up type in the command line:

\[Channel\]> EndSession /noconfirm

Part of [[000 Keyword Index]] · [[000 Map of Content]]
