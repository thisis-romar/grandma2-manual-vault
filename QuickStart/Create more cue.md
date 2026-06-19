---
type: "quick-start"
cssclasses:
  - "gma2-quick-start"
slug: "key_07_create_more_cues"
url: "https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_07_create_more_cues.html"
tags:
  - "type/quick-start"
summary: "Now we are going to make more cues."
---

# Create more cue

> [!source]- Source
> [MA Lighting Help – Create more cue](https://help.malighting.com/grandMA2/en/help/grandma2_quick_start_guide/key_07_create_more_cues.html)

Version 3.9

# Create more cue

Now we are going to make more cues.

## Making more cues.

Let us make some more cues. Press:  2 0 + 2 8 At 8 0 Store Cue 2 Time 1 5 Please. That created cue 2 with a fade time of 15 seconds. Let us continue with cue 3. Now we are going to use the groups and the command line.

You need to locate the Command Line. It looks like this:

\[Channel\]>

This is the Command Line. It can be a fast way to get around the console and the commands. But sometime the keys are fastest.

In the Command Line type this:

\[Channel\]> g 1 + 2 at 75

followed by Please.

Then type:

\[Channel\]> g 3 t 5 at 60

followed by Please.

Now let us have a look at the Command Line Feedback and how the console has responded (please do not press any buttons).

What does all this mean?

"g" is the shortcut for "Group". That means the respond to the first line is:

\[Time\] : Executing : Group 1 + 2 At 75

The "t" in the second line as a short for "Thru". The console respond to the second line is:

\[Time\] : Executing : Group 3 Thru 5 At 60

We are going to store the cue using the keys: Store Time 2 0 Time 2 5 Please. This is the response from the console:

\[Time\] : Executing : ​Store Fade 20 OutFade 25

Now why is this? We typed "Time 20 Time 25". The desk interprets this as 20 seconds Fade and 25 seconds OutFade. Pretty clever, huh?

Notice that after the second cue we do not need to specify the cue number. The desk automatically uses the next available number.

In cue 4 we need to take 30% of everything that is on. We do this in a fast and easy way: If Please At \- 3 0 Store Time 1 0 Please.

That was fast!

By using "If Please" you run the command "IfOutput". This selects everything that currently have output.

Then by using "At - 30" you subtract 30% from whatever value the channels had before (of course nothing less than 0%).

Now we are going to make a lot of changes: 

Group 6 . . Group 9 Thru 1 1 At 6 0 Please 

Group 7 + 8 At 7 5 Store Time 1 5 Time Time 5 Please.

What is: "Time 15 Time Time 5"? If you have a look at your Command Line Feedback it reads: "Fade 15 Delay 5". This means that you told the desk to delay the trigger of the cue with 5 seconds after you press the "Go" key (and then fade using 15 seconds - but you probably guessed that).

With the "Time" command we can assign many different times. A command like: "Time 20 Time 15 Time 10 Time 5" is translated by the desk to: "Fade 20 DownFade 15 Delay 10 DownDelay 5". 

The last cue we are going to make is a blackout. And we do that with only six button presses: If Please . . Store Please. That was 6 cues.

Clear your programmer.

It was hopefully fast and painless.

The [[QuickStart/Editing a sequence|next page]] we are going to make some changes to the sequence.

Part of [[000 Map of Content]]
