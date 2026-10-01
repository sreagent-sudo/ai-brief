# AI Brief

Public static newsletter for short AI news digests. Hosted on GitHub Pages.

- **Live URL:** https://sreagent-sudo.github.io/ai-brief/
- **Repo:** https://github.com/sreagent-sudo/ai-brief
- **Custom domain (after DNS):** https://coregentic.com

## Update a digest

1. Edit `digests.json`.
2. Add a new object at the **top** of the `digests` array (newest first).
3. Commit and push to `main`.

## Point coregentic.com at this site

1. At your DNS provider for **coregentic.com**, add these apex A records:

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

2. In the GitHub repo: **Settings → Pages → Custom domain** → enter `coregentic.com` → Save. (That creates the `CNAME` file.)
3. Wait for DNS, then enable **Enforce HTTPS**.
4. Confirm https://coregentic.com matches the github.io digest.

### Subdomain alternative (`news.coregentic.com`)

| Type | Host | Value |
|------|------|-------|
| CNAME | `news` | `sreagent-sudo.github.io` |

Then set Pages custom domain to `news.coregentic.com`.
