---
type: "keyword"
keyword: "Dollar $ Character"
slug: "key_keyword_dollar"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_dollar.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
---

# Dollar $ Character

> [!source]- Source
> [MA Lighting Help – Dollar $ Character](https://help.malighting.com/grandMA2/en/help/key_keyword_dollar.html)

Version 3.9

# Dollar $ Character

To get the $ character in the command line, press and hold Shift + 4.

## Description

The $ character indicates variables in the command line. For more information about variables, see [use variables](key_macro_create_variables.html).

## Examples

Create and use a variable to turn the chaser executor off.

1\. To create the variable enter in the command line:

 \[Channel\]> SetVar $mychasers = "Executor 11 Thru 15"

2\. To use the variables $mychasers to turn executor 11 through 15 off, enter in the command line:

 \[Channel\]> Off $mychasers

 3. Press Please.

Executor 11 trough 15 are turned off by using the variable $mychasers.

For more information to the SetVar keyword, see [SetVar keyword](key_keyword_setvar.html).

* * *

Create and use a variable to login into a user profile.

1\. To create the variable enter in the command line:

 \[Channel\]> SetVar $myname = "Ben Dover"

2\. To use the variable to login into the user profile, enter in the command line:

\[Channel\]> Login $"myname"

You are logged in.

Part of [[000 Keyword Index]] · [[000 Map of Content]]
