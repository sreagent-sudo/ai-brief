# AI Brief

Public static newsletter for short AI news digests. Hosted on GitHub Pages.

**Custom domain:** `coregentic.com`

## Update a digest

1. Edit `digests.json`.
2. Add a new object at the **top** of the `digests` array (newest first).
3. Commit and push to `main`. Pages updates in about a minute.

## Point coregentic.com at this site

1. In the GitHub repo: **Settings → Pages → Custom domain** → enter `coregentic.com` (this repo already includes a `CNAME` file).
2. At your DNS provider for **coregentic.com**, add GitHub Pages A records for the apex:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6:

| Type | Host | Value |
|------|------|-------|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

If you prefer a subdomain like `news.coregentic.com` instead of the apex, use:

| Type | Host | Value |
|------|------|-------|
| CNAME | `news` | `sreagent-sudo.github.io` |

3. Wait for DNS, then enable **Enforce HTTPS** in Pages settings.
4. Confirm https://coregentic.com loads the same digest as the github.io URL.
