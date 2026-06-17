---
type: "keyword"
keyword: "JoinSession"
slug: "key_keyword_joinsession"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_joinsession.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# JoinSession

> [!source]- Source
> [MA Lighting Help – JoinSession](https://help.malighting.com/grandMA2/en/help/key_keyword_joinsession.html)

Version 3.9

# JoinSession Keyword

To get the JoinSession keyword in the command line type **JoinSession** or one of the shortcuts **J** or **JS** in the command line.

## Description

JoinSession is a function used to join or create a session. If no option is given the recent entered settings in the MA Network Control will be used.

## Syntax

JoinSession \[option value\]

## Options

To get a list of all available options to the JoinSession keyword, type in the command line:

\[Channel\]> JoinSession /?

The JoinSession keyword has the following options:

Option

Option Shortcut

Option Value Examples

Description

password

pw

"1234"

Enters the session password.

sessionnumber

s

"1"

Enters the session number.

sessionname

n

"FOH"

Enters the session name.

## Example

To join the session called FOH with the session name and the password 1235 type in the command line:

\[Channel\]> JoinSession 1 "FOH" /pw = "1235"

Part of [[000 Keyword Index]] · [[000 Map of Content]]
