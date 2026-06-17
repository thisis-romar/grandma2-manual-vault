---
type: "quick-start"
cssclasses:
  - "gma2-quick-start"
slug: "key_06_store_the_first_cue"
url: "https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_06_store_the_first_cue.html"
tags:
  - "type/quick-start"
---

# Storing the first cue

> [!source]- Source
> [MA Lighting Help – Storing the first cue](https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_06_store_the_first_cue.html)

Version 3.9

# Storing the first cue

It is time to make the first cue.

## First a little theory and setup

A light cue is saved in a sequence. The grandMA can handle an almost unlimited number of sequences.

We only need a few for this tutorial. All cue numbers have to be in numeric order. This means that cue number 4 cannot be before cue number 3. The cue can have any name.

First of all, you need a window where you can see the sequence. Click on the top-left cell on one of your empty screens. If you only have one screen you need to clear it first (by deleting the windows already there) and then press the top-left cell. 

The window you need is called the Sequence Executor Sheet. In the **"Create Basic Window"** pop-up, select the Sheets tab and tap the button called Sequence Executor. It is very empty right now, but there will appear content as you create the cues

You should save this as a new view and give it a name - not just "View 2".

## Creating the cue

The first thing you need to do is to select the first executor. Press the following keys: Select Exec 1 Please. The executor is currently empty, but when you store the cue then it will appear.

Let us make the first cue. Press: 2 0 At 4 0 Please. Then Store Please. That was it! You have now saved channel 20 at 40% in cue 1 in sequence 1 at executor 1.

If you do not specify anything else, the console assumes you are referring to your selected executor and the sequence assigned to that executor. You can always locate your selected executor by its green background color where it displays the sequence name (now it says "Sequ").

You also got a line in your Sequence Executor window. Most of the columns are self-explanatory - but we should look at some of them.

"Number" is, of course, the cue numbers.

"Name" is the cue name.

"Trig" describes what triggers the cue. If you look at the first cue, the trigger is "Go". This means that to execute the cue, you need to press a Go key.

"Delay", "Fade", "Out Delay" and "Out Fade" shows you the respective times.

Before we make more cues, we should change the cue name. If you do not specify anything the desk names it "Cue" followed by the cue number. Press Assign Assign Cue 1 Please. Use the keyboard to write Behind Curtain followed by a 'Please'/enter. A different way to change the cue name is to right-click on the name with the mouse. No matter what way you choose - your first cue should now have the name "Behind Curtain". And since we have not given the sequence a name, then it also displays the name of the first cue in the title area of the executor (the one that said "Sequ" before).

Let us also give the sequence a name. Tap the command line and write the following:

\[Channel\]> Label seq 1 "Main Show"

And finish with a 'Please'/Enter. We do not need to write "Sequence" we can just write "seq". Most of the keywords we use have a short version. The best way to learn the short version is to read about the keyword in the "Command Syntax and Keywords" section of this manual.

When you give something a name or you are referencing to the name of something, then you need to put it in quotation marks. That will make the software interpret it as names.

Back to the cues. If you cannot see the entire cue name, you can expand the column width by placing the mouse cursor on the line that divides "Name" and "Trig". When you are at the right place, your cursor changes so it now also has a little horizontal double-ended arrow. Click and hold the left mouse button while you drag the mouse to your right. Then release the mouse button again. You can adjust all the columns width like this. You need to store the view again to keep the changes.

Now your Sequence Executor sheet should look something like this:

![](../../../img/grandma2_quick_start_guide/qsg_06_store-the-first-cue_seq-exec-sheet_v3-3_1.png)

_Sequence Executor Sheet with one cue_

On the [[QuickStart/Create more cue|next page]], we are going to create more cues.

Part of [[000 Map of Content]]
