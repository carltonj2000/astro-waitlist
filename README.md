# Astro Waitlist with Hono and Bun

## Code History

The code in this repo is based on the following:

- https://youtu.be/2iPG2tqUICs?si=CF2BngdZuUhhEUU5
- UI from https://daisyui.com

## Creation History

Create in GitHub, then cloned, then

```bash
bun create astro .
bun i
# The astro lsp require a local dev install of prettier.
bun i -D prettier prettier-plugin-astro
bun i -D prettier-plugin-tailwindcss
bunx astro add tailwind
# eslint setup
bun install --save-dev eslint eslint-plugin-astro
bun install --save-dev @typescript-eslint/parser
# add react support
bunx astro add react
# for ui
bun add -D daisyui@latest
# for icons
bun add lucide-react
# for server
bun add hono
# cloudflare cli
bun add -D wrangler
# for auth middleware
bun add jose
# install cloudflare db
bunx wrangler@latest d1 create dojo_staging_db
bunx wrangler d1 execute dojo_local_db --local --file=./schema.sql
bunx wrangler d1 execute dojo_local_db --local --command="SELECT * FROM Customers"
# add orm
bun add drizzle-orm
bun add -D drizzle-kit
bun add -d @cloudflare/workers-types
```
