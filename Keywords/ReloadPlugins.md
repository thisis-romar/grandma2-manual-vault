---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "ReloadPlugins"
slug: "key_keyword_reloadplugins"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_reloadplugins.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# ReloadPlugins

> [!source]- Source
> [MA Lighting Help – ReloadPlugins](https://help.malighting.com/grandMA2/en/help/key_keyword_reloadplugins.html)

Version 3.9

# ReloadPlugins Keyword

**Important:**  
The creation and use of plugins can go deeper into the system as the normal use of a console. Therefore the technical support team of MA Lighting may not be able to help you in all circumstances when using complex LUA plugins. LUA plugins might have to be rewritten when migrating show files to future grandMA2 software version.

To go to the ReloadPlugins keyword, type **ReloadPlugins** or the shortcut **Relo** in the command line.

## Description

The ReloadPlugins keyword restarts the LUA engine.

The restart of the LUA engine is necessary after you did any changes regarding LUA because this could change how the LUA behaves.

You may want to test the integrity of the LUA system to make sure that it behaves as expected also next time you load the show. This is important as the saved show file does not contain a snapshot of the LUA memory, it only contains the inbuilt functions and the code in the defined plugins.

When the show file is loaded, the LUA engine and plugins code are (re)loaded, which may result in a different state than when you switched off the console or saved the show.

The ReloadPlugins keyword is a function keyword.

**Hint:**  
Double-check the executed command in the [system monitor](key_ost_system_monitor.html).

## Syntax

ReloadPlugins

## Example

Restart the LUA engine after LUA programming.

\[Channel\]> ReloadPlugins

Part of [[000 Keyword Index]] · [[000 Map of Content]]
