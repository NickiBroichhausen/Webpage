# nicki.broichhausen.com

Personal site built with [Hugo](https://gohugo.io) and the [Blowfish](https://blowfish.page) theme (vendored in `themes/blowfish`).

## Publish
1. Put these files at the root of the `nickibroichhausen.github.io` repository (replace what is there) and push to `main`.
2. In the repo: Settings → Pages → Source: **GitHub Actions**. Custom domain stays `nicki.broichhausen.com`.
3. The workflow in `.github/workflows/hugo.yaml` builds and deploys on every push.

## Edit
- Pages: `content/` (`_index.md` home, `research.md`, `projects.md`, `cv.md`) — plain Markdown.
- Name, tagline, links, contact email: `config/_default/languages.en.toml`
- Menu: `config/_default/menus.en.toml`
- Colors/layout: `config/_default/params.toml` (`colorScheme`)
- Profile photo: put `profile.jpg` in `assets/img/` and add `image = "img/profile.jpg"` under `[params.author]`.

## Preview locally (optional)
Install Hugo, then run `hugo server`.
