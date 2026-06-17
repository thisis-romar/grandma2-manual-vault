---
type: "keyword"
keyword: "Delete keyword"
slug: "key_keyword_delete"
url: "https://help.malighting.com/grandMA2/en/help/key_keyword_delete.html"
keyword_type: "unknown"
related_key: "[[Keys/Del (Delete) Key]]"
tags:
  - "type/keyword"
---

# Delete keyword

> [!source]- Source
> [MA Lighting Help – Delete keyword](https://help.malighting.com/grandMA2/en/help/key_keyword_delete.html)

Version 3.9

# Delete keyword

**Delete** is a function used to remove data from the show file.

To execute this keyword type **Delete** or the shortcut **Del** into the command line. 

Delete is a function used to remove data from your show file. If the object itself cannot be removed, any assignment to the objects will be removed.

If no object type or destination is given, the default object type for this function ​​– Cue –​ is used.

For more information see [Cue](key_keyword_cue.html). 

If a selection list filter is given, only specified fixtures are deleted from the object list.

## Syntax

Delete \[Object-list\] / \[option\] = \[option value\]

Delete \[Object-list\] \[Selection-list filter\]

## Options

To get a list of all options available for the keyword **Delete** in the command line feedback window type the following into the command line:

\[Channel\]> Delete /?

The keyword **Delete** has the following options:

Option

Shortcut

Option value

Description

deletevalues

dv

no option value

Deletes values from cue if cue part is deleted. 

cueonly

co

no option value

Prevents changes to track forward. 

noconfirm

nc

no option value

Suppresses confirmation pop-up.

region

r

no option value

Deletes a region of elements in layout view. 

element 

e

no option value

Deletes a certain element in layout view. 

condition

cnd

See [messages keyword](key_keyword_messages.html).

See [messages keyword](key_keyword_messages.html).

## Examples

\[Channel\]> Delete 7

Deletes Cue 7 in the selected executor.

\[Channel\]> Delete Messages

Deletes all messages in the message center.

\[Channel\]> Delete Group 3

Deletes Group 3.

\[Channel\]> Delete World 6

Deletes World 6.

\[Channel\]> Delete Fixture 4

Unpatches fixture 4 (removes assigned DMX objects).

Part of [[000 Keyword Index]] · [[000 Map of Content]]
