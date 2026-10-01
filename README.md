# AI Brief

Public static newsletter for short AI news digests. Hosted on GitHub Pages.

- **Live now:** https://sreagent-sudo.github.io/ai-brief/
- **Custom domain (after DNS):** https://coregentic.com
- **Repo:** https://github.com/sreagent-sudo/ai-brief

## Update a digest

1. Edit `digests.json`.
2. Add a new object at the **top** of the `digests` array (newest first):

```json
{
  "date": "2026-10-02",
  "title": "October 2, 2026",
  "stories": [
    { "headline": "Story title", "summary": "One-line summary." }
  ]
}
```

3. Commit and push to `main`. Pages updates in about a minute.

## Point coregentic.com at this site

1. At your DNS provider for **coregentic.com**, add these apex A records:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Optional IPv6 AAAA records:

| Type | Host | Value |
|------|------|-------|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

2. This repo includes a `CNAME` file set to `coregentic.com`. In GitHub: **Settings → Pages → Custom domain** → enter `coregentic.com` and save (GitHub may auto-detect from the CNAME file).
3. Wait for DNS to propagate, then enable **Enforce HTTPS**.
4. Confirm https://coregentic.com shows the same digest as the github.io URL.

### Subdomain alternative (`news.coregentic.com`)

| Type | Host | Value |
|------|------|-------|
| CNAME | `news` | `sreagent-sudo.github.io` |

Then set the Pages custom domain to `news.coregentic.com` instead.
