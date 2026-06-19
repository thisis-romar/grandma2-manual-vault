---
type: "page"
cssclasses:
  - "gma2-page"
title_str: "Manually create a macro"
slug: "key_macro_create"
url: "https://help.malighting.com/grandMA2/en/help/key_macro_create.html"
section: "Macros"
ma2_section: "key_macro"
section_ref: "[[Sections/Macros]]"
prev_page: "[[Pages/Macros/What are macros]]"
next_page: "[[Pages/Macros/Record a macro]]"
depth: 2
tags:
  - "type/page"
  - "section/macro"
summary: "Quick steps:"
---

# Manually create a macro

> [!source]- Source
> [MA Lighting Help – Manually create a macro](https://help.malighting.com/grandMA2/en/help/key_macro_create.html)

Version 3.9

# Manually create a macro

**Quick steps:**

1.  Edit an empty macro pool object.
2.  Add a new line by tapping the Add button.
3.  Type the desired command.
4.  Add more lines if needed.
5.  Label the macro by tapping the Label button and type the macro name.
6.  Close the editor by tapping the X in the upper right corner.

This were the quick steps - Keep reading for more details.

You can create your own macros - this is one of the very powerful features of the grandMA2.

Macros are stored in the Macro Pool. The easiest way to create a new macro is to edit an empty macro pool object.

There are several ways to edit a pool object:

1.  Right-click with a mouse or trackball on the pool object.
2.  Press the Edit key and then tap the pool object.
3.  Tap the pool object and then tap the screen encoder.
4.  Using the keys Edit Macro pool object number Please.
5.  Type it in the command line.

The **Edit Macro pop-up** is used when editing a macro. It could look like this:

![](../../img/popup_edit-macro_v3-3.png)

_Edit Macro pop-up_

In the image above you see a macro that is **not** empty. There is already a line with a command.

## Buttons in the editor

There are buttons on the right side and the bottom to help with the macro creation, settings, and modifications. The following is a short description of the buttons:

**Add:**

Tapping this button will add a line, in your macro, above the currently highlighted line (if there are any). It will also open the **Edit CMD pop-up** that allows you to type the desired command immediately.

![](../../img/popup_edit-cmd_v3-3.png)

_Edit CMD pop-up_

**Delete:**

Tapping this button will delete the currently selected line in the macro.

**CLI:**

CLI is short for Command Line Interaction. CLI is activated when the text is yellow - it is active by default. CLI allows you to interact with the pool object. This means that the command line will react to you tapping the macro in the pool. Read more details about CLI and Macros in the [[Pages/Macros/Command line interaction|Command line interaction topic]].  

**Timing:**

The Timing button allows you to turn on the timing defined in each macro line or to just run it as fast as possible. Read more about macro timing in the [[Pages/Macros/Macro timing|Macro timing subtopic]].

**Test Macro:**

This button allows you to test run the macro before closing the editor. All commands are executed, so this is not a macro simulation.

**Test Line:**

This can be used to test the highlighted macro line (white or blue frame). This can be useful in the creation process.

**Load Predefined:**

This button is used to load one of the predefined (factory-made) macros. For more about this please read the [[Pages/Export and Import/Import predefined objects|Import predefined macros topic]].

**Label:**

If you want to label the macro, then you can tap this button. It opens the **Enter Name for.. pop-up**. Here you can write the macro name.

## Main part

The main part of the editor is where you can add, edit, see and delete the lines with the commands.

There are five columns in this part.

**No.:**

This is the macro line number. You cannot edit it, but it can be useful to see the macro line number for instance when the macro is executed.

**CMD (Command):**

The CMD is short for Command. This is where you type your macro command. You can use the keyboard to write the command. But when the **Edit CMD pop-up** is active then your command line input has a red background - like this:

![](../../img/window_command-line-feedback_red-input_v3-3.png)

_Command Line input with red background_

This means that you can also use the physical keys to type your command without executing the command - it is sent to the Edit CMD pop-up.

Each macro line has an automatic "Please" at the end of the line - even though it is not displayed. This executes the macro line. The exception to this is if the macro line finishes with a "@". This is a special character used to allow the macros to interact with user input. Please read more about this in the [[Pages/Macros/Command line interaction|Command line interaction topic]].

**Wait:**

This is used to add a wait time until the next macro line is executed. This wait time is only used if Timing is activated. There are two special options here: **Go** and **Follow**. "Go" is used if you want the macro to wait until there is a new Go command to the macro. "Follow" means that the macro will continue as fast as possible. "Follow" is the same as setting the time to 0. Read more about macro timing in the [[Pages/Macros/Macro timing|Macro timing subtopic]].

**Info:**

Here you can write information that explains the macro line. Might be a good idea for others to understand complex macros.

**Disable:**

Disabled macro lines are not executed. You can change the state by editing the cell in this column. If the line is disabled it is displayed with red text color.

When you are done creating your macro then you can close the pop-up by tapping the big X in the upper right corner.

Please read the subtopics for more options in advanced macros.

  

* * *

#### Sub topics

*   [[Pages/Macros/Use variables in macros|Use variables]]
*   [[Pages/Macros/Create pop-ups in macros|Create pop-ups]]
*   [[Pages/Macros/Conditional expressions]]
*   [[Pages/Macros/Macro timing]]

← [[Pages/Macros/What are macros]] | [[Pages/Macros/Record a macro]] →

Part of [[Sections/Macros]] · [[000 Map of Content]]
