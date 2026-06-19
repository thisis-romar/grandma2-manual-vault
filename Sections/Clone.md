---
type: "section"
cssclasses:
  - "gma2-section"
section: "Clone"
slug: "key_clone"
url: "https://help.malighting.com/grandMA2/en/help/key_clone.html"
page_count: 3
tags:
  - "type/section"
pages:
  - "[[Pages/Clone/Clone In User Interface]]"
  - "[[Pages/Clone/Examples]]"
  - "[[Pages/Clone/Clone Presets]]"
summary: "Clone is used to add fixtures to the rig which suppose to behave exactly the same as existing fixtures."
---

# Clone

> [!source]- Source
> [MA Lighting Help – Clone](https://help.malighting.com/grandMA2/en/help/key_clone.html)

Version 3.9

# Clone

## Function

Clone is used to add fixtures to the rig which suppose to behave exactly the same as existing fixtures.

**Requirements:**

*   Program your show using presets.
*   Program relevant parameters in your presets.

**Important:**  
Avoid using fixture specific functions, e.g. build-in fixture macros. Use generic functions only. 

* * *

## How to Use Clone

###  It is possible:

1.  To clone in order to copy values from fixture to fixture.
2.  To clone a selection of fixtures to another selection of fixtures. 
3.  To clone using the [[Keywords/Clone keyword|keyword Clone]] or the [[Pages/Clone/Clone In User Interface|screen]]. 

**Important:**  
It is not possible to clone values from several fixtures to a single fixture. Cloning is only possible with one set of values. 

**Important:**  
It is possible to limit the scope of cloning by using the [[Keywords/If|keyword If]].

By default, the cloning is done with low priority. This means that data is preserved wherever the destination fixtures or fixture types already contain data. The data from the source fixtures or fixture types is added to objects such as presets, cues, effects etc. where data does not exist yet. 

**Hint:**  
The console automatically clones dependencies, e.g. presets and effects by reference to the cloned sequence whenever cloning with a limited scope. To protect existing data these dependencies are cloned with the default low priority clone option. 

* * *

## Replace

Contrary to clone, replace does not preserve data, i.e. data is overwritten.  

For more information on replace see [[Sections/Search and Replace]]. 

  

* * *

#### Sub topics

*   [[Pages/Clone/Clone In User Interface|Clone in user interface]]
*   [[Pages/Clone/Examples]]
*   [[Pages/Clone/Clone Presets|Clone presets]]

## Pages in This Section

- [[Pages/Clone/Clone In User Interface]]
- [[Pages/Clone/Examples]]
- [[Pages/Clone/Clone Presets]]

Part of [[000 Map of Content]]
