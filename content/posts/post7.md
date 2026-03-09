---
title: "CSS Cache Busting and Git Renaming Issue"
description: "Learned about cache busting technique..."
date: "June 5, 2024"
slug: "post7"
---

### Cloudflare Caching and Git File Rename Issues

**Cloudflare Cache Busting:**
- Cloudflare caches CSS files, causing outdated styles to persist
- To bust the cache, Leal appended a version query param to the CSS file URL
- e.g., \`href="css/talent-protocol-v2.webflow.css?v=1"\`
- The value after the URL can be any string, it acts as a cache buster

**Git File Renaming:**
- Wanted to rename \`Coinbase_logo.svg\` to \`coinbase_logo.svg\` for consistency reasons
- Git doesn't automatically track renames with different casing
- Leal used the \`git mv\` command to force the rename:
- \`git mv images/Coinbase_logo.svg images/coinbase_logo.svg\`

**Gratitude:**
- Learned these techniques thanks to Leal's guidance. [Dr. Peter Venkman would be proud](https://warpcast.com/pcbo/0x66f25aa3)

**Learnings:**
- Cloudflare caching can cause outdated CSS to persist, be mindful for future CSS updates
- Cache busting with versioned query params is a simple solution
- Git doesn't automatically track renames with casing changes, use consistent casing for file names from the start
