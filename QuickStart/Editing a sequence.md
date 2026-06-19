---
type: "quick-start"
cssclasses:
  - "gma2-quick-start"
slug: "key_08_edit_a_sequence"
url: "https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_08_edit_a_sequence.html"
tags:
  - "type/quick-start"
summary: "Now we are going to make some changes to the sequence."
---

# Editing a sequence

> [!source]- Source
> [MA Lighting Help – Editing a sequence](https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_08_edit_a_sequence.html)

Version 3.9

# Editing a sequence

Now we are going to make some changes to the sequence.

## Make a "Follow"

We would like to change cue 3 to automatically run when cue 2 is done.

Look at the Sequence Executor Sheet. Each cue have its own row in the sheet. The columns are the different properties a cue can have. It is not the **content** in the cue, but the **cue** properties.

The trig column is the one that governs how the cues are triggered. We need to change the setting for cue number 3. You do this by right-clicking with the mouse (or pressing Edit and then tap) on the screen where it says "Go" in the "Trig" column in the row for cue 3.

This gives you a small pop-up with the following choices: Go, Time, Follow, Sound, BPM, Timecode. Select Follow by clicking or tapping it.

Now when cue 2 is done, the desk automatically activates the fade to cue 3.

## Changing the cue names

Let us change the cue names. You know how to do this, so here is a table with the new names:

Cue Number:

Name:

1

Behind Curtain

2

With Curtain Up

3

Build

4

Darker

5

Cold

6

B.O.

If you need to, then expand the "name" column in your Sequence Executor Sheet, so you can see the entire names.

## Updating a cue

Let us imagine that we got a lighting designer who has changed his mind. He wants 5% more on the group called "LX 1 Warm" in cue 3. Go to cue 3: Goto 3 Time 0 Please.

What happened? We went to a cue and activated the executor. And now there is a yellow frame around cue 3 in the Sequence Executor Sheet. To go to cue 3 you only need to write "Goto 3 Please". We added "Time 0". This ignores the fade times stored in the cue and we do not have to wait for the cue to fade in. It does not change the stored fade time.

Let us continue: Group 2 At + 5 Please.

Now the 'Update' button lights up. This means you can update the active cue. Press Update and without worrying about anything press the U3 key (or where it says: Tracking Update) so the button changes to "Update Cue Only". Now press the X6 key (or where it says Update Cue) to update the cue.

To exit the cue and deactivate the sequence you need to press the top button above executor fader 1 - in the onPC you could open the Executor view and tap where it says "Off" above executor 1.

## Editing the times

Let us change some of the times in the cue list. This is how your times should end up:

Fade

Out Fade

Delay

Out Delay

0

 

 

 

15

 

3

 

20

25

 

 

10

 

 

 

15

10

 

5

0

 

 

 

Look at the Sequence Executor Sheet. Right click on the cells and type in the new value either on "the calculator" pop-up on the screen, the buttons on your console, or using the keyboard. If a cell is empty then it can be a zero time or in the case of the "OutFade" it is actually the same as the (In)fade. If the in and out fade is the same then you do not need to specify an outfade - only when there is a difference. It is the same with in and out delay.

The final result should look like this:

![](../../../img/grandma2_quick_start_guide/qsg_08_edit-a-sequence_final-seq-exec-sheet_v3-3_1.png)

_The Sequence Executor Sheet with new timings_

Try pressing the big 'Go+' key to see how your channels react to the different times. You find this in the "Masters" section on the right side of your onPC.

Press: Backup Backup (as double-clicking a mouse button). This is the fast way to store your show (with the same name).

On the [[QuickStart/Adding Moving lights|next page]] we are going to look at adding some moving lights.

Part of [[000 Map of Content]]
