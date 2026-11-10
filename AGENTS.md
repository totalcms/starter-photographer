# AGENTS.md

Guidance for AI coding agents working on a **Total CMS** site. If your assistant
expects a different filename, rename this file (see "Renaming" at the bottom).

## What this project is

This is a website built on [Total CMS](https://totalcms.co) (T3) — a modern,
flat-file PHP content management system. There is **no database**: all content
is stored as JSON files on disk. The CMS core is installed via Composer into
`vendor/totalcms/cms/`; this repository is your *site*, not the CMS itself.

- **Backend**: PHP 8.2+, Slim 4, Twig 3, PHP-DI
- **Storage**: flat-file JSON (no SQL, no migrations)
- **Frontend**: server-rendered Twig; Vite pipeline at the project root, when installed
- **Admin**: built-in admin UI with a form builder, 20+ field types, and a
  Site Builder for dynamic pages

## Use the documentation — don't guess

Total CMS has thorough docs. Prefer looking things up over relying on training
data, which may be stale or wrong about exact Twig signatures and field options.

1. **MCP docs server (best for agents).** Total CMS publishes an official docs
   connector at `https://totalcms.co/mcp` — the Total CMS website's own MCP
   server, exposing the full documentation as live tools: `docs_search(query)`
   to find pages, `docs_get(path)` to read one in full, and
   `docs_lookup(kind, name)` for exact reference entries (kinds:
   `twig_function`, `twig_filter`, `field_type`, `api_endpoint`,
   `schema_config`, `cli_command`, `extension_api`, `builder_api` — omit
   `name` to list a kind). No API key or login required.
   If your tool supports MCP, connect it. Example for Claude Code (`~/.claude/mcp.json`):

   ```json
   {
     "mcpServers": {
       "totalcms-docs": {
         "url": "https://totalcms.co/mcp"
       }
     }
   }
   ```

2. **Local docs (offline, in this repo).** The full documentation ships with
   the Composer package as Markdown under `vendor/totalcms/cms/resources/docs/`,
   organized by section (`get-started/`, `collections/`, `schemas/`, `fields/`,
   `site-builder/`, `twig/`, `forms/`, `auth/`, `apis/`, `extensions/`,
   `operations/`, …). `menu.php` is the table of contents and
   `search-index.json` is a prebuilt full-text index. Grep or read these
   directly when you don't have network/MCP access — but don't edit them; they
   belong to the CMS core and are overwritten on update.
3. **Public docs site**: <https://docs.totalcms.co>
4. **In-admin docs**: the running site serves the same docs under the admin
   panel (look for "Docs" in the admin navigation).
5. **Agent skill (Claude Code).** A deeper, step-by-step build skill is installed
   at `.claude/skills/totalcms/` by `vendor/bin/tcms skill:install` (run
   automatically on `composer install`/`composer update`; run it by hand to
   refresh). Claude Code auto-loads it when your task matches site-building.
   **Other agents (Codex, Cursor, etc.):** read
   `.claude/skills/totalcms/SKILL.md` and its `references/` directly for the
   end-to-end build workflow — Site Builder, the CLI with `--json`, the frontend
   pipeline, and the data model.

<!-- tcms:frontend -->
## Frontend assets

This site builds its CSS and JS with Vite, from the project root. See `FRONTEND.md`.

- Edit `css/` and `js/`, then run `npm run build`.
- `public/assets/` is build output, wiped on every build. Don't edit it or add files there.
- Add packages with `npm install` and import them from `css/style.css`.
<!-- /tcms:frontend -->

## Project layout

```
.
├── config/
│   └── tcms.php          # Site config — deep-merged over defaults; edit this, not vendor/
├── public/
│   ├── index.php         # Front controller (web entry point)
│   └── .htaccess         # Apache rewrite rules
├── css/, js/             # Source for the Vite pipeline, when installed
├── package.json          # Node packages for the Vite pipeline
├── vite.config.js        # Builds css/ and js/ into public/assets/
├── tcms-data/            # Content storage (JSON). Created at runtime. NOT committed.
├── vendor/totalcms/cms/  # The CMS core — do NOT edit; it's replaced on update
└── composer.json
```

Writable runtime dirs (`cache/`, `logs/`, `tmp/`, `tcms-data/`) live at the
project root and are git-ignored.

## The CLI: `vendor/bin/tcms`

Total CMS ships a Symfony Console CLI. Common commands:

```bash
vendor/bin/tcms info                 # environment + config summary
vendor/bin/tcms collection:list      # list collections
vendor/bin/tcms object:list <coll>   # list objects in a collection
vendor/bin/tcms builder:init <name>  # scaffold a Site Builder starter (e.g. blog, business)
vendor/bin/tcms builder:frontend     # add and build the Vite pipeline
vendor/bin/tcms cache:clear          # clear caches
```

Most commands accept `--json` for machine-readable output. Run
`vendor/bin/tcms list` to see everything. For the full command catalog and
step-by-step build workflows, see the agent skill at `.claude/skills/totalcms/`
(`references/cli.md`).

## Conventions & guardrails

- **Never edit `vendor/`.** The CMS core is managed by Composer and overwritten
  on update. Configure via `config/tcms.php` (deep-merged — only specify keys
  you want to change) and extend via the extension system, not by patching core.
- **Content lives in `tcms-data/`** as JSON. Prefer the admin UI or the `tcms`
  CLI over hand-editing these files.
- **Templates**: Twig. The global is `cms` — e.g. `cms.config('key')`,
  `cms.env`, `cms.collection.objects(...)`, `cms.image(...)`. Look up exact
  signatures via the MCP server or docs rather than guessing.
- **Site Builder pages** are dynamic: a page record in the `builder-pages`
  collection is served at request time — there is no build/generate step.
  Builder templates live under `tcms-data/builder/{layouts,pages,partials,macros}/`.
- **Frontend assets**: if `vite.config.js` exists at the project root, edit `css/`
  and `js/`, then run `npm run build`. That compiles into `public/assets/`, which is
  git-ignored build output and is wiped on every build. Without Vite, `public/assets/`
  holds your own files, so commit them. Either way, layouts use
  `{{ cms.builder.css('css/style.css') }}` and friends.
- **`composer.lock` is intentionally git-ignored** — the resolved lock differs
  by platform for this project, so it isn't committed.

## Running the site locally

Point a web server's document root at `public/` and visit `/`. On first run the
setup wizard takes over (welcome → environment → data path → admin account →
license → server config). PHP's built-in server works for quick checks:

```bash
php -S localhost:8080 -t public
```

## Renaming

`AGENTS.md` is read by many assistants out of the box. If yours expects a
different filename, copy or rename this file — e.g. `CLAUDE.md` (Claude Code),
`GEMINI.md` (Gemini CLI), or `.cursor/rules` (Cursor). The content applies
regardless of the filename.
