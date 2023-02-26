# Tracker of Truth (SITE UNDER CONSTRUCTION)

[Tracker of Truth](https://lkarvec.github.io/OOTMMRTrackingSite/) is a modular tracking website built for newcomers and veterans of the Ocarina of Time and Majora's Mask randomizer communities.  It is planned to be used for both Ocarina of Time, Majora's Mask, and Combo randomizers.

## Context

With the recent launch of [OOTMMR](https://ootmm.com/), I started getting into playing the N64 randomizers and felt as though the community-built trackers were very lackluster in design, functionality, and clarity.   In order to combat this, I'm building as close to a FULL tracker and guide as I can; not only for new players like myself, but for players that have long loved the format.  I plan on having functionality for both the Ocarina of Time and Majora's Mask randomizer's, as well as the combo randomizer from Nax.

## Features at launch

### Custom Options
When the user opens up the site for the first time (dependent on their LocalStorage for the site), they can select what kind of a set up they wish to have on their navigation bar.  This is where selections of what games are being played happen, what the details of their run are, if they want a suggestions tab, if they want to put in their spoiler log for help, and many more.  There will also be a reset button so they can go back to this screen.

### Modular Design
The site is designed with user customization in mind.  There is a snap grid the user can use by clicking the tabs on their Navigation Bar to toggle the view of a feature, like Item Tracking, for example.  They can then drag that Feature to where they want it to snap to.  There will also be a couple presets for players who don't really want to set this up every time they open the site.  I'm planning for 2-3 normal presets, and one custom preset.

### Basic Tracking
Currently, I have plans for normal item, key, mask, trading, songs, and other basic entities to be tracked.  Additionally, there will be settings to include heart pieces, junk, stray faeries, and more in the future.

### Notes
There will be a text area module for the user to type things in.  This will be saved in local storage for the site.

### Check Tracking
There is a LOT to collect in these games, and there aren't really any easy ways to track it all.  This section is sorted by location names and will include all checks that can possibly drop an item with a picture of what that check looks like if you hover over it.  Potsanity will definitely have to wait for this one.  This will have integration with the Suggestions tab.  Grottos will be sorted with their original location.  Example : 'Hyrule Field Castle Grotto'

### Suggestions
Randomizers are easy to forget things in.  This tab will help you clear things up by looking for chests, skulltulas, faeries, and more; and generate a list of a couple things you still have to do with a picture of the action.  This can include certain glitches or skips, which may normally set you outside of logic of your seed, but you can also turn off the Glitch/Skip flag with a checkbox at the top.  Any Glitch or Skip suggested will link to a modal pop-up that shows a tutorial of what you need to do.

### Glitch/Skip Tutorials
Ocarina of Time and Majora's Mask have a wide variety of glitches and skips that are not necessarily well documented out there.  A tab will be included as a searchable encyclopedia of glitches and skips, full of tutorials and videos on how to do them all.  This will be periodically updated and credit will always be given to those who contribute to this.

### Spoiler Log Parse
This section will basically be a simple dropdown to search for an item in your spoiler log, and then tell you where it is, along with an image if you hover over it.

## Roadmap

The Options and Modular Design come first in the beta, then I will add the basic tracking and notes sections.  Check Tracking will come next, and should include the base for Suggestion integration.  Glitchless suggestions will then be added, with Glitches being added much later.  I'm not sure of where I want to add the Spoiler Log Parsing in at, but I believe it may be somewhere between suggestions and glitches to break up that monotony.

Aside this?  I'm not sure Potsanity is on the menu, but I am definitely interested in having Shop and Scrub sanity on, as well as some explanation for all of the warps like wrong warps you can potentially do.  I also will need to add a dungeon entrance and Boss check tracker as well.

At some point, this is getting wrapped as a standalone electron app.
