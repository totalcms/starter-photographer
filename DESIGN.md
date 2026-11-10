---
name: Wren Alder
description: A photographer's site set like a folded visitor brochure, with a title band colored by the photograph on screen.
colors:
  ember: "light-dark(oklch(.5 .14 48), oklch(.76 .13 55))"
  ember-strong: "light-dark(oklch(.42 .13 48), oklch(.84 .11 60))"
  ember-on-band: "oklch(.8 .12 62)"
  ember-on-band-strong: "oklch(.87 .1 66)"
  ink-on-ember: "oklch(.2 .02 60)"
  band: "oklch(from var(--photo) .27 clamp(.012, calc(c * .8), .05) h)"
  on-band: "oklch(.975 .006 85)"
  on-band-muted: "oklch(.86 .012 85)"
  photo-default: "#3f5249"
  paper: "light-dark(oklch(.975 .005 85), oklch(.17 .005 85))"
  ink: "light-dark(oklch(.21 .008 85), oklch(.93 .006 85))"
  ink-muted: "light-dark(oklch(.44 .01 85), oklch(.74 .008 85))"
  fold: "color-mix(in oklch, var(--ink) 18%, transparent)"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 7.5rem)"
    fontWeight: 800
    lineHeight: .98
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-.02em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "var(--yeti-text-lg)"
    fontWeight: 700
    letterSpacing: "-.01em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "var(--yeti-text-md)"
    fontWeight: 400
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "var(--yeti-text-sm)"
    fontWeight: 600
  story:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  story-intro:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.35
  quote:
    fontFamily: "STIX Two Text, Georgia, serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  sm: "0"
  md: "0"
  lg: "0"
spacing:
  margin: "clamp(1rem, 3.5vw, 3rem)"
  gutter: "var(--yeti-space-lg)"
  band: "clamp(2rem, 4.5vw, 4rem)"
  section: "clamp(3rem, 7vw, 6.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    height: "2.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ember-strong}"
    textColor: "{colors.paper}"
  button-on-band:
    backgroundColor: "{colors.ember-on-band}"
    textColor: "{colors.ink-on-ember}"
    rounded: "{rounded.md}"
    height: "2.5rem"
  button-on-band-hover:
    backgroundColor: "{colors.ember-on-band-strong}"
    textColor: "{colors.ink-on-ember}"
  title-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.on-band}"
    typography: "{typography.display}"
  nav:
    backgroundColor: "{colors.band}"
    textColor: "{colors.on-band}"
  panel-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  panel-title-hover:
    textColor: "{colors.ember}"
---

# Design System: Wren Alder

## Overview

**Creative North Star: "The Folded Visitor Brochure"**

The site reads like a printed brochure unfolded on a table. A solid title band carries big type, one huge photograph sits edge to edge beneath it, and a strict grid of panels follows, split by thin fold lines. Practical facts are set like the side of a visitor map: label, value, nothing more.

The photographs lead and the interface recedes. The only color with any presence comes from the picture on screen: Total CMS extracts a five-color palette from each image, and one of those colors tints every band on the page. Everything else is paper, ink and one warm accent, so a new name, new photos and a new palette all carry through without redesign.

Light and dark mode both ship and follow the visitor's system setting. Dark is the visitor's choice, never the site's default look, and the brochure stays a brochure either way. The world refuses the photographer's category default of thin spaced capitals and a masonry wall.

**Key Characteristics:**
- A title band whose color comes from a photograph, held dark enough for white type.
- A fixed 12-track grid. Columns stay put; only their contents change.
- Hairline folds in place of cards, and no shadows.
- One ember accent, used for action and state.
- Square corners everywhere.
- A sturdy grotesque for titles and labels, a text serif for stories.

## Colors

Warm paper and ink, one ember accent, and a band that borrows its hue from the photograph.

### Primary
- **Ember** (`ember`, `ember-strong`): the one accent. Buttons, link hover, the current-filter underline, the focus ring, text carets and form accents. Each mode has its own value, so it keeps contrast on paper at every setting.
- **Ember on Band** (`ember-on-band`, `ember-on-band-strong`, with `ink-on-ember` for button text): the same accent lifted for use on the band, where button text flips from light to dark.

### Secondary
- **Photo Band** (`band`): the title band, nav, quote bands, next-project strip, footer and text selection. Its source is `--photo`, any color from a photograph, written on the root element by Twig and replaced by the scroll script. `photo-default`, a quiet green, stands in when a page or image has no color.
- **Band Type** (`on-band`, `on-band-muted`): near-white type and its quieter partner for captions and fact labels. Both hold on every band the formula can produce: at least 13.7:1 and 9.6:1 across all hues.

### Neutral
- **Paper** (`paper`): the page, in both modes. All neutrals carry a faint warmth at hue 85.
- **Ink** (`ink`): headings and body text.
- **Muted Ink** (`ink-muted`): locations, dates, inactive filter links, panel descriptions.
- **Fold** (`fold`): ink at 18%, for every hairline and table border.

### Named Rules
**The Held Band Rule.** The band takes only its hue from the photograph. Lightness is fixed at .27 and chroma is capped at .05 (the formula keeps a floor of .012, so a grey photo still reads faintly tinted). A pale or neon photo gives the same dark band, and white type always passes. Set `--photo`; never set a band color directly.

**The Always-Dark Band Rule.** The band stays dark in both light and dark mode, and its contents are scoped to the dark color scheme so Yeti's links and buttons stay correct on it. In dark mode the band sits lighter than the page.

**The One Ember Rule.** Ember is the only accent. It is one color at different lightnesses, never a second hue. Photographs and the palette swatches on a project page are content, not interface, and are exempt.

## Typography

**Display Font:** Hanken Grotesk (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk for interface text; STIX Two Text (with Georgia, serif) for stories

**Character:** A sturdy, tightly set grotesque does the signage, and a bookish text serif does the telling. Both are self-hosted under the SIL Open Font License, and are swapped together when a site rebrands.

### Hierarchy
- **Display** (800, tight leading, tracked in): the name or page title in the band.
- **Headline** (800): section headings and project titles. Oversize variant on the next-project strip.
- **Title** (700): panel titles, stepping up to Yeti's `xl` size on fee rows and Journal notes.
- **Body** (400): interface copy, summaries and table text, at Yeti's fluid base size.
- **Label** (600): caption strips, filter links and fact values. Sentence case, no added tracking.
- **Story** (400, generous leading, 62ch maximum): long project, journal and about text.
- **Story Intro** (400, 34ch maximum): the single sentence in a band.
- **Quote** (400): client words on a band, dropping to about 1.2 to 1.45rem when several run in a row.

Fees use Hanken Grotesk at 800 with tabular numerals.

### Named Rules
**The Two Voices Rule.** Hanken Grotesk names and labels things; STIX Two Text tells the story. If it is a sentence someone reads for pleasure it is serif, and if it is a title, fact, control or caption it is grotesque.

## Layout

Everything sits in one sheet, up to 100rem wide, with the same side margin (`spacing.margin`) on every section. Layouts use Yeti's 12-track grid, with a large gap (`spacing.gutter`), and fall to full-width rows below the grid's `md` container width. Repeating sets of equal items use a column-count grid with a minimum width, so they wrap on their own. The nav collapses at its `lg` width.

The tall rhythm is the section padding (`spacing.section`), with tighter padding in bands (`spacing.band`). The lead photograph runs full-bleed outside the sheet at up to 72svh, and on the home page shortens so that it and its caption strip fit the first screen. Stories start at track 6 and span 7, so a page of words keeps one reading line.

### Named Rules
**The Fixed Columns Rule.** Columns stay on the 12-track grid and never alternate sides. Repeated rows keep the same assignment, such as photo in 8 tracks and words in 4, from the first row to the last. Contents change; columns do not move.

**The Clear Photograph Rule.** One photograph owns its panel and nothing sits on it. Caption and title go underneath. Watermarks on large print and client photos are the deliberate exception, and captions belong in the lightbox overlay.

**The Real Gap Rule.** Every `.grid` with `data-columns` keeps a real gap. `data-gap="none"` on the grid itself sets `--_yeti-gap` to a unitless 0, which makes Yeti's column math invalid, so the grid collapses to one column with no error. The body's `data-gap="none"` is safe, because `.grid:not([data-gap])` sets its own default.

## Elevation & Depth

This system is flat. The theme defines no shadows; depth comes from the solid band against paper, and from the sticky nav as it passes over the page. Structure is drawn, not lifted.

### Named Rules
**The Fold Rule.** Separation is a 1px hairline in the `fold` color, the crease of a printed sheet, never a card. Section folds stop at the page margin. Panel folds sit in the middle of the gap, and the first panel in a row has none.

## Shapes

Hard rectangles throughout. Photographs, buttons, form fields and swatches all keep square corners. Images fill their column width and crop to one shape within a set, so a row stays even.

### Named Rules
**The Square Corner Rule.** A printed brochure has square corners. Every Yeti radius is 0, and the form stylesheet is set to match.

## Components

Plain and printed: components are drawn from Yeti and restyled through tokens, so they look typeset rather than designed.

### Buttons
- **Shape:** square corners (0), Yeti's 2.5rem control height, weight 600. There is no icon on the form's send button.
- **Primary:** Ember fill with Paper text, for the one next step in a section.
- **On the band:** Ember on Band fill with dark text.
- **In the nav:** a small button. The nav's dark color scheme resolves Ember and Paper to their dark-mode values.
- **Hover / Focus:** steps to the strong ember; a focus ring in Ember.

### Cards / Containers
There are no cards. Panels are a photograph, a title and at most one line of muted text, on bare paper, split by folds. The whole panel is the link and its title turns Ember on hover.

### Inputs / Fields
- **Style:** Total CMS's contact form with its corners squared, its font set to Hanken Grotesk and field icons off. Field borders stay as supplied, since they already follow light and dark mode.
- **Focus:** Ember accent.
- **Submit:** a primary button, overridden to match the site's.

### Navigation
- **Style:** the top strip of the band, sticky, in the same moving color, with the brand mark at weight 800 and a small Book a session button at the end.
- **Mobile:** links fold behind a menu button into a popover panel in the band color, with no JavaScript from the site.
- **Current page:** marked through Yeti's own highlight.

### Title Band
The first thing on every page: display title in 7 tracks, a Story Intro in 5, and optional facts below. The same material carries client quotes, the next-project strip and the footer.

**Signature behavior:** as an element with a `data-photo` color crosses the middle of the screen, every band on the page fades to that photograph's color over .9s. Colors snap for visitors who prefer reduced motion. Without the script the page stays in one color, so nothing depends on it.

### Facts
Label and value pairs, set like the side of a visitor map: a muted label and a 600-weight value, under a hairline when on the band.

### Fee Table
Portrait sessions set as a printed price list. Each row is on the same four columns (photo, name and fee, description, button), split by folds, so names, fees and buttons line up from row to row. The home page uses a plain table on hairlines, with numeric columns aligned right.

### Filter
A row of plain text links under the Work band. Muted at rest, ink on hover, and an Ember underline (2px) on the current one. They are links, not chips, so a filtered page can be shared.

### Palette Swatches
A strip of the cover photograph's five colors on a project page, shown unmodified. The one coloring the page is three times as wide.

## Do's and Don'ts

### Do:
- **Do** tint a band by giving an element a `data-photo` color from the image's palette, and let the formula hold it dark.
- **Do** place every layout on the 12-track grid, and give every `.grid` with `data-columns` an explicit `data-gap`.
- **Do** separate content with 1px `fold` hairlines.
- **Do** define any new color with `light-dark()`, and check it in both modes.
- **Do** keep custom component rules in the `yeti.components` layer, and change Yeti through public `--yeti-*` tokens.
- **Do** let Ember mark the next step: one primary button in a section is enough.

### Don't:
- **Don't** hard-code a band color or raise its lightness or chroma limits.
- **Don't** swap a row's columns from side to side.
- **Don't** wrap content in cards, or add shadows, to separate it.
- **Don't** add a second accent hue.
- **Don't** round a corner.
- **Don't** set type, scrims or controls over a photograph on the page.
- **Don't** set thin spaced capitals, or lay photographs out as a masonry wall.
- **Don't** force dark mode or add a theme switch; the page follows the visitor's system setting.
