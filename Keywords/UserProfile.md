---
type: "keyword"
cssclasses:
  - "gma2-keyword"
keyword: "UserProfile"
slug: "key_keyword_userprofile"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_userprofile.html"
keyword_type: "unknown"
tags:
  - "type/keyword"
summary: "The keyword UserProfile displays the user profiles in the command line feedback."
---

# UserProfile

> [!source]- Source
> [MA Lighting Help – UserProfile](https://help.malighting.com/grandMA2/en/help/key_keyword_userprofile.html)

Version 3.9

# UserProfile Keyword

To execute the keyword UserProfile, type **UserProfile** or the shortcut **UPR** into the command line.

## Description

The keyword UserProfile displays the user profiles in the command line feedback.

*   Number
*   Name
*   Used
*   LoggedIn
*   Info
*   Subtrees in parantheses

UserProfile is an object keyword.

![](../../img/window_commandline-feedback-user-profile_v3-2.png)

_Keyword UserProfile_

For more information see [[Pages/Single and Multi User Systems/Create user profiles and users|create user profiles]].

## Syntax

UserProfile \[ID\]

## Examples

*   Lists all user profiles that are available.

\[Channel\]> List UserProfile

*   Lists user profile 1.

\[Channel\]> List UserProfile 1

**Hint:**  
User profiles can be limited to a specific world.

There are three commands that generate the same result:

*   Assigns the user profile 2 to world 1. 

\[Channel\]> Assign UserProfile 2 At World 1

\[Channel\]>  Assign World 1 UserProfile 2

 \[Channel\]> Assign UserProfile 2/World=1

Part of [[000 Keyword Index]] · [[000 Map of Content]]
