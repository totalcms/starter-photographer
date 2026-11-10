# Wren Alder

A photographer's website built on [Total CMS](https://totalcms.co), for a nature and portrait photographer who books outdoor sessions and sells a few prints. Each page takes its color from its photographs. Every page is filled with demo content, so the site works as soon as it's installed. Every template opens with a comment that explains what it does, so it's also a good site to learn from.

## What's in it

- **Projects:** bodies of work with a story, a location and a gallery, filtered by type on the Work page
- **Pages that take their color from the photo:** each cover's palette tints its page, and the band changes color as you scroll
- **Sessions:** packages, fees, client quotes and common questions
- **Prints:** a request form rather than a cart, with watermarks set in the schema
- **Booking form:** public, protected from bots, saved in the admin and emailed once SMTP is set up
- **Private client galleries:** a passcode page with watermarked photos
- **Journal:** an RSS feed, and paging done on the server so drafts stay private

## Install

With Composer:

```bash
composer create-project totalcms/starter-photographer mysite
cd mysite
npm install && npm run build
```

Point your web server's document root at `mysite/public/`, then visit the site. The setup wizard creates your admin account. Then open `/readme` on the site for a tour and a list of what to change before launch. The passcode for the demo client gallery at `/clients/mara-and-theo` is 8675.

## Make it yours

- **Content.** Sign in at `/admin` to edit the projects, sessions, prints, Journal and studio details.
- **A login for the photographer.** The `client` access group can edit the content and read enquiries, without touching settings or templates. Give the photographer an account in that group.
- **Colors.** Most of each page's color comes from its photos. The rest comes from three settings in `css/theme.css`: `--yeti-hue-primary`, `--yeti-hue-neutral` and `--yeti-chroma`. `DESIGN.md` explains the whole design system.
- **Templates.** The pages, layouts and partials are Twig files in `builder/`.
- **CSS and JavaScript.** Edit `css/` and `js/`, then build them with `npm run build`. `public/assets/` is build output, so don't edit it. `FRONTEND.md` has the details.

## Photos

The demo photos come from Pexels, and `CREDITS.md` credits each photographer. Replace them with the photographer's own work before the site goes live. The Pexels License doesn't allow selling unaltered copies, so never sell the demo prints.

## Going live

Set up email in the admin's settings so booking and print requests reach the photographer. Before you deploy, set **Site Environment** to **Production** in the admin's General settings. Production keeps error messages short for visitors and makes the template editor read-only.

## Requirements

PHP 8.2 or later, Node.js to build the CSS and JavaScript, and a Total CMS Pro license for the domain you deploy to. The site uses custom collections, decks and the Protect extension.
