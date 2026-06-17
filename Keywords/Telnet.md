---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "Telnet"
slug: "key_keyword_telnet"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_telnet.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Telnet

> [!source]- Source
> [MA Lighting Help – Telnet](https://help.malighting.com/grandMA2/en/help/key_keyword_telnet.html)

Version 3.9

# Telnet Keyword

To go to the Telnet keyword, type **Telnet** in the command line or use the shortcut **Tel**.

## Description

**Important:**  
The telnet receiver needs to read the commands without a telnet login.  
If the telnet receiver asks for a login, the command can not be processed.

The Telnet keyword sends Telnet commands via grandMA2 command line directly to a telnet receiver.

The Telnet keyword is a function keyword.

For more information, see [[Pages/Remote Control/Telnet Remote|What is Telnet remote?]].

## Syntax

Telnet \[IP address\] : \[Port\] "String"

## Example

The telnet receiver starts an specific function, if the receiver gets the command "Artist1".

\[Channel\]> Telnet 192.168.0.1 : 23 "Artist1"

Part of [[000 Keyword Index]] · [[000 Map of Content]]
