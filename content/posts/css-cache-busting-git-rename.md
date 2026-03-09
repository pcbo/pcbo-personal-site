---
title: "CSS Cache Busting and Git Renaming"
description: "Learned cache busting with query params and git mv for case-sensitive renames."
date: "June 5, 2024"
slug: "css-cache-busting-git-rename"
---

### Cloudflare Caching and Git File Rename Issues

**Cloudflare cache busting:**
- Cloudflare caches CSS files, causing outdated styles to persist
- To bust the cache, Leal appended a version query param to the CSS file URL
- e.g., `href="css/talent-protocol-v2.webflow.css?v=1"`
- The value after the URL can be any string, it acts as a cache buster

**Git file renaming:**
- Wanted to rename `Coinbase_logo.svg` to `coinbase_logo.svg` for consistency
- Git doesn't automatically track renames with different casing
- Leal used `git mv` to force the rename:
- `git mv images/Coinbase_logo.svg images/coinbase_logo.svg`

**Thanks to:**
- Learned these techniques from Leal. [Dr. Peter Venkman would be proud](https://warpcast.com/pcbo/0x66f25aa3)

**Learnings:**
- Cloudflare caching can cause outdated CSS to persist, be mindful for future CSS updates
- Cache busting with versioned query params is a simple solution
- Git doesn't track case-only renames automatically, use consistent casing from the start
