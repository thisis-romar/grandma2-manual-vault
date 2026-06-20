---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Commands in cues"
slug: "key_cs_cmd_in_cues"
url: "https://help.malighting.com/grandMA2/en/help/key_cs_cmd_in_cues.html"
section: "Command Syntax and Keywords"
ma2_section: "key_cues_and_sequences"
section_ref: "[[Sections/Cues and Sequences]]"
prev_page: "[[Pages/Command Syntax and Keywords/Sequence mini executor]]"
depth: 2
tags:
  - "type/page"
  - "section/cs"
summary: "Each cue can execute a command."
---

# Commands in cues

> [!source]- Source
> [MA Lighting Help – Commands in cues](https://help.malighting.com/grandMA2/en/help/key_cs_cmd_in_cues.html)

Version 3.9

# Commands in cues

Each cue can execute a command. The commands are written in the CMD column in the [[Pages/Command Syntax and Keywords/Looking at the Cue Sequence|Sequence Executor Sheet]].

The commands are executed as soon as the cue is triggered. It is possible to delay the command by adding a time in the CMD Delay column.

If you want to run multiple commands in the same cue, you can separate the commands with a semicolon.

As an alternative you could make cue parts and add each command in each part - remember to add a small CMD Delay, so all commands are not executed at the same time.

The commands are executed by the logged in user on the master station in a session. So be aware that it might not be the user who triggers the cue that runs the commands.

A useful keyword to know, if you need to trigger a command on a specific station, is the [[Keywords/RemoteCommand|RemoteCommand]].

← [[Pages/Command Syntax and Keywords/Sequence mini executor|Sequence mini executor]]

Part of [[Sections/Cues and Sequences|Cues and Sequences]] · [[000 Map of Content]]
