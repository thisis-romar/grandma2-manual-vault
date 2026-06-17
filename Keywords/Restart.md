---
type: "keyword"
keyword: "Restart"
slug: "key_keyword_restart"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_restart.html"
keyword_type: "unknown"
related_key: "[[Keys/Restart]]"
tags:
  - "type/keyword"
---

# Restart

> [!source]- Source
> [MA Lighting Help – Restart](https://help.malighting.com/grandMA2/en/help/key_keyword_restart.html)

Version 3.9

# Restart Keyword

To go to the Restart keyword, type Restart in the command line or use the shortcut **Res**.

## Description

The Restart keyword restarts the application. This is the same as close the program and open it again.

A restart is necessary after an IP address change.

The Restart keyword is a function keyword.

## Syntax

Restart

Restart \[IP address\] / \[option\]

## Options

To get the list of the available options to the restart keyword in the command line feedback window, type in the command line.

\[Channel\]> Restart /?

The restart keyword has the following options.

Option

Option Shortcut

Description

save

s

Saves the show file before restart.

nosave

ns

Do not saves the show file before restart.

noconfirm

nc

Suppress restart confirmation pop-up.

force

f

Forces a restart.

## Examples

*   Restart the application of the console.

\[Channel\]> Restart

*   Restart the application of the console with the IP address 192.168.0.32 in the network.

\[Channel\]> Restart 192.168.0.32

**Hint:**  
To be faster, type only the part of the IP address in the command line what is differently.  
If the console which sends the command has the IP address 192.168.0.11, type Restart 32 only.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
