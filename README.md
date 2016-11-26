# About STS Manuals

Software Training for Students is an organization that develops and delivers software training curriculum to students and faculty across the UW-Madison campus. We have developed our own framework and template for creating software manuals.

This repository serves two purposes. It hosts the master files that every manual links to, and it contains a web interface used to distribute the manuals.


## Manual Master Files
Every manual created by STS is written in its own HTML file. Each HTML file links to a series of files that are hosted in this repository.

The folder "manual-master-files" contains a series of master files that are linked to all of our manuals. Editing the files within this folder will immidiately update and change all of our software manuals, so tread with caution.

For example, in this folder you will find a file named "stylesheet.css". This file provides the styling for every manual, and changing it will instantaneously change all manuals. 

Below is a list of files in this folder, and their purpose:

* **Empty Manual Template:** Structure of an empty manual. Use when creating new manuals.
* **Code Highlight Files:** A series of JavaScript files that will automatically perform syntax highlighting in code blocks within the manual. Each manual is linked to a different highlight file depending on its needs.**
* **Keyboard Icons:* A series of SVG graphics representing each key on a standard computer keyboard, used within the manuals.
* **Manual Editing Guide:** The Bible for everything manual related. This guide will outline the exact structure of manuals, how they work, and how to write them. Examples and all.
* **Stylesheet:** The master stylesheet that styles each manual.
* **Primary Functions:** A JavaScript file that automatically builds a table of contents and an "about" page for each manual. It has a few other tricks up its sleeve."
* **Miscellaneous Graphics:** A few random graphics used in the manuals. No big deal.

## Manual Web Interface
This is not finished, so don't worry about it right now.