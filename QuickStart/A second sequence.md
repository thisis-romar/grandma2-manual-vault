---
type: "quick-start"
cssclasses:
  - "gma2-quick-start"
slug: "key_14_second_sequence"
url: "https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_14_second_sequence.html"
tags:
  - "type/quick-start"
---

# A second sequence

> [!source]- Source
> [MA Lighting Help – A second sequence](https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_14_second_sequence.html)

Version 3.9

# A second sequence

We are going create a second sequence and link the two sequences.

## Making the second sequence.

Clear your programmer. Press the first position preset twice.

Now press Store Exec 3 Please. If you are on a console you can just press the 'Store' key and then one of the executor buttons labeled "3". 

Now you got a second sequence.

Let us build some more into it. Select executor fader 3 by pressing Select followed by one of the executor buttons associated with executor fader 3. Press the first Gobo and Color presets followed by Store Please. Then we got this pop-up:

![](../../../img/grandma2_quick_start_guide/qsg_14_second-sequence_store-popup_v3-2_1.png)

_Store Method pop-up_

Here you choose how you want to store things. Tap Merge.

That was our first cue in the second sequence. Clear the programmer. Press the second Position preset twice followed by the second Gobo and Color presets and then Store Please. This time choose Create Second Cue in the store method pop-up.

Make a third cue with the third Position, Gobo and Color presets. Again you can use Store Please, and this time it will not ask what to do. When you have more than one cue, then it will just create a new cue with the next available whole number.

The last cue you need to make is a cue containing the "All" preset. All the cue times need to be 0 seconds! Clear your programmer when you are gone.

## Setting up the sequences (Assign Menu).

Select your first executor. Now press the green name field above the executor fader (where it says "Main Show"):

![](../../../img/grandma2_quick_start_guide/qsg_14_second-sequence_executor-1_v3-2_1.png)

_Executor 1_

On screen 1 you see some of the options for that executor. This window can be a bit confusing the first you see it, but right now we are only interested in is the size of the executor.

Make sure the you are at the correct view by tapping Function in the upper right corner.

Now we can change the width of the executor by pressing the X2 key (or where it says "Width 2").

Now we need to change the default button assignment. The buttons and fader can have a lot of different functions (explaining those goes beyond the scope of this quick start guide). Tap where it says XF and in the small pop-up select Rate.

Press where it says GoBack and choose the option called Rate1. Change the rest of the buttons so they end up looking like this:

![](../../../img/grandma2_quick_start_guide/qsg_14_second-sequence_executor-assignment_v3-2_1.png)

_Executor assignment_

Close the **Assign Menu** using the yellow X.

What is a Rate fader? Well, the rate fader is used for changing the overall speed of the cues. You can speed it up or slow it down to a complete stop. The cue times are not changed in the sequence permanently, just adjusted according to the rate fader position.

The button called "Rate1" resets the fader to the mid position, where all the times are back at their saved times.

The '<<<' and '>>>' steps one cue back and forward accordingly, without time and without running the follow cue.

## Linking and editing the two sequences.

Did you noticed that you did not save any dimmer values to the fixtures in the second sequence (we did actually store a dimmer value in the last cue - the default dimmer value)? We are going to put those in our first sequence and we are going to do some sequence linking.

In your **Sequence Executor** window make sure you can see the "CMD" (command) column.

Right-click in the "CMD" cell for cue 1 and in the pop-up write: Goto cue 1 exec 1.3 followed by a 'Please'/enter. In the "CMD" cell for cue 3 right-click and write: Goto cue 2 exec 1.3 also followed by a 'Please'/enter. In cue 4 the command is cue 3 on executor 1.3. And in cue 6 we need a command to cue 4. When you are done it should look like this:

![](../../../img/grandma2_quick_start_guide/qsg_14_second-sequence_commands_v3-2_1.png)

_The needed commands_

Now press the big Go+ key in the console or in the **Masters** section in the onPC. Notice that booth sequences go to cue number 1. That is the command making sure the second sequence is also running.

Press the \>>> executor button. Turn on your moving light at full. Press Update. Tap where it says Original Content Only until it changes to "Add new Content". Then tap Save as Default.

This allows you to not only update existing values, but also add new values to our sequences.

Now there are two possible sequences to update. Make sure you update the one called "Sequ 1 'Main Show'". This can be done by simply tapping the correct line.

Go to cue 6. Notice that the moving light gets the dimmer value "0.1 Default" (or if you gave it a different name). This is actually the value 0% stored in the All preset. To make sure that no matter what, they go to 0, let us store this value in the first sequence also.

Press: 1 1 1 Thru 1 3 3 . . Update. Now you can see that you also have the option to update the preset. **Do not do that**; just update the cue in sequence 1.

Clear your programmer and try moving back and forward in your sequence to see how the link works.

Notice that the moving heads still get the dimmer value from the All preset. This is because sequence 1 first give them 0% and then immediately calls the cue in sequence 2. So the last information they got is from sequence 2 - the value from the All preset.

If you want to make sure that the value from sequence 1 is the one they got, then you can give the executor a higher priority.

Press Assign followed by any of the executor buttons labeled 1 or 2. This opens the **Assign Menu** where you assigned the button and fader functionality. This is also where you can change the Executor options. Tap where it says Options on the right side of the screen.

This opens the a window with many options. The one you need to change is the top one in the second column - column named "Playback". Tap where it says Priority LTP and in the small select pop-up select the one called "High". You might get a warning that this will turn off the executor - please confirm this. Nice to know if you are in a live situation :-) Close the Assign Menu.

Now you can test your sequence and see that now when you run cue 6 the dimmer value reads "closed".

There is no need to separate the moving lights from the conventionals. It was just a way to demonstrate the possibilities.

## Last thoughts

It might not be a pretty show, but you should save it anyway. And you should do this at a regular interval during your programming. You can use the double press on the Backup key or use the **Backup menu**.

Now you got a small introduction to the grandMA2. It is a very advanced and flexible console. There are many function and details we have not explored in this guide.

The rest of the manual will help you finding your way around the functions. There is also a lot of help in the videos on MA lighting (external link to the Internet) plus the big international community.

Have fun learning and programming on the grandMA2.

Part of [[000 Map of Content]]
