export interface Post {
  slug: string
  title: string
  description: string
  date: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "log17",
    title: "Shipping in Silence",
    description: "Catching up after a quiet but productive...",
    date: "May 5, 2025",
    content: `### Log Entry 17: April meets Productivity

**April 2025 Recap:**
- Started coding straight from Cursor, productivity bump. Love it.

**This Changed Everything:**
- Massively improved the UX on my personal goals tracker, setup local Supabase and Docker
- Ideation cycle is 10x now:
  1. Discuss with my GPT Chief of Staff
  2. Craft the prompt
  3. Build on [v0.dev](https://v0.dev)
  4. Share with Talent team

**Next Steps:**
- I'm participating in an hackathon again: Base Batch Europe.
- Can't say much yet, but we're cooking a new search experience for Talent Protocol.
- Complete [Base Learn](https://docs.base.org/learn/welcome).`,
  },
  {
    slug: "log16",
    title: "Out of the Black Hole",
    description: "What happened since last Summer",
    date: "April 10, 2025",
    content: `### Log Entry 16: Disappeared for a While...

**Post-BUILDathon 2024 Reality:**
- After the July 2024 entry, we entered TGE prep aka full token launch mode
- All-in on legal, tokenomics, liquidity, and ops
- Writing fell off the radar, energy went into shipping and surviving Token Launch season

**Still Kept Building:**
- Built a personal goals tracker with Lovable, super lightweight and use it every day to track health habits
- Created my Chief of Staff AI on ChatGPT, my CEO productivity has 10x'd

**Next Steps:**
- Relaunch the tracker with better UX
- Explore new build ideas, a few are brewing...
- Use this space more consistently to document and stay accountable`,
  },
  {
    slug: "log15",
    title: "Soft-working...",
    description: "Shipping quietly matters too",
    date: "July 29, 2024",
    content: `### Log Entry 15: I've Been Shipping Quietly...

**BUILDathon Retro:**
- Read parts [1](/blog/log12), [2](/blog/log13) and [3](/blog/log14)
- On part 3, I mostly stepped aside and watched as Leal was cruising a working version to submit for BUILDathon, having him teach me each step of the day wouldn't be productive
- Now, waiting for final results

**New Repo's BUILD + Passport:**
- Have made some contributions recently to BUILD and the Passport app
- Getting more and more comfortable with coding
- All core team members will become code-ready, we're a team of builders so everyone should ship software

**Next Steps:**
- Keep building and shipping`,
  },
  {
    slug: "log14",
    title: "BUILDathon Report – Day 3",
    description: "GETFIT is a reality",
    date: "July 1, 2024",
    content: `### Log Entry 14: BUILDathon Report – Day 3

**Report:**
- Met IRL again at Poolside
- Finalized visual assets for GETFIT
- Finalized [GETFIT app](https://www.oracles.fit)
- [Rounds up and running](https://rounds.wtf/fitness/getfit-1)
- Check [submission page on Devfolio](https://devfolio.co/projects/getfit-a70c)

**Next Steps:**
- Create doc with future work ideas
- Work on some improvements
- Plan $GETFIT token
- Create another log to go deeper into learnings`,
  },
  {
    slug: "log13",
    title: "BUILDathon Report – Day 2",
    description: "What a day....",
    date: "June 29, 2024",
    content: `### Log Entry 13: BUILDathon Report – Day 2

**Report:**
- Met at Lisbon office at [Poolside](https://www.poolside.co/hub) with the Talent Protocol team, and some other cool folks joined
- We were wearing [BUILD](https://build.top) merch, so obvs we had some photos taken
- Watching Leal code is like watching a magic show. Learned so much... that it's super hard to type down into a single report!
- Macedo also gave an interesting insight: in a AI-packed future, questions trump answers

**Updated User Journey:**
1. Leal wakes up and weighs himself on his Withings scale
2. Leal goes to [oracles.fit](http://oracles.fit) and signs off his results onchain. Leal is already logged in with his wallet and has given read-access permissions to his Withings account
3. Leal casts into /fitness in order to be eligible for the "Get Fit" round on [rounds.wtf](http://rounds.wtf)
4. Automatic rewards distribution through Rounds.wtf using BUILD

**Detailed Planning:**

***Saturday Progress:***
- Create site
- Connect wallet
- Connect Withings account

***Sunday Plan:***
- Fix Withings bugs
- Create attestation
- Share on Farcaster [/fitness](https://warpcast.com/~/channel/fitness) channel
- Create a better logo and cover photo
- Improve mobile XP
- Setup rounds.wtf
- Test everything and submit project on Devfolio
- Create future work doc`,
  },
  {
    slug: "log12",
    title: "BUILDathon Report – Day 1",
    description: "First day working on GETFIT project",
    date: "June 28, 2024",
    content: `### Log Entry 12: BUILDathon Report – Day 1

**Report:**
- Simplified user journey
- We're cooking something cool related to $GETFIT token, can't share yet
- Purchased [Claude](https://claude.ai) premium and [Midjourney](https://midjourney.com) subs
- Bought this domain: [oracles.fit](http://oracles.fit)

**Simplified User Journey:**
1. Leal wakes up and weighs himself on his Withings scale
2. Leal goes to [oracles.fit](http://oracles.fit) site and signs off his results onchain. Leal is already logged in with his Farcaster account and has given read-access permissions to his Withings account
3. Leal casts into /fitness in order to be eligible for the "Get Fit" round on [rounds.wtf](http://rounds.wtf)
4. Automatic rewards distribution through Rounds.wtf

**Tech to Use:**
- API Withings: [https://developer.withings.com/api-reference](https://developer.withings.com/api-reference/)
- EAS: [https://docs.attest.org/docs/quick--start/quickstart](https://docs.attest.org/docs/quick--start/quickstart)

**Detailed Planning:**

***Saturday:***
- Create site with Vercel
- Login with Farcaster
- Connect Withings account
- Create cast mechanism

***Sunday:***
- Pick logo + cover image
- Setup Rounds.wtf
- Test everything and deliver on Devfolio`,
  },
  {
    slug: "log11",
    title: "Planning BUILDathon",
    description: "Planning project $GETFIT for BUILDathon",
    date: "June 26, 2024",
    content: `### Log Entry 11: $GETFIT

**What:**
- $GETFIT is an incentive token to help people lose weight through onchain accountability
- Team $GETFIT: me and [Leal](https://warpcast.com/leal.eth)
- Benchmark: GitHub commit streaks
- We will be submitting to categories Farcaster Social track as well as Coinbase Onchain Verifications

**User Journey:**
1. Leal wakes up
2. Leal goes on top of his [Withings](https://www.withings.com) and weights himself
3. Leal starts a streak on Farcaster /fitness channel
4. Leal automatically inputs his Withings info into get-fit frame
5. Leal casts his weight results with hashtag #getfit to keep up with his streak
6. Automatic entry in GetFit round on [rounds.wtf](http://rounds.wtf)
7. Distribute $GETFIT token

**Tech to Use:**
- Attestation:
- API Withings: [https://developer.withings.com/api-reference](https://developer.withings.com/api-reference/)
- Frame creation: https://dev.neynar.com/frames/create
- Token incentives:
- Rounds: [https://rounds.wtf](https://rounds.wtf/add)
- Party app: [https://www.party.app](https://www.party.app/)

**Detailed Planning:**

***Friday AM:***
- Purchase domain
- Create landing page using Vercel
- Assess if worth purchasing paid version of [Claude](https://claude.ai)
- Assess if [ChatGPT](https://chat.openai.com) is OK for image generation or if we need [Midjourney](https://www.midjourney.com)
- Launch [party.app](https://www.party.app)

***Saturday PM:***
- Create frame using [Neynar](https://dev.neynar.com/frames/create)
- Connect frame with [Withings API](https://developer.withings.com/api-reference)

***Sunday PM:***
- Close party
- Setup Rounds.wtf
- Test everything and deliver on [Devfolio](https://devfolio.co)`,
  },
  {
    slug: "log10",
    title: "Providing Feedback to Fellow Builders",
    description: "Gave product feedback to 3 cool projects...",
    date: "June 21, 2024",
    content: `### Log Entry 10: Supporting Other Builders

**What:**
- Provided product feedback to 3 recent projects that I've used.

**[Icebreaker](https://icebreaker.xyz/)**
- I use this app for people I meet IRL to scan my phone wallpaper in order to stay in touch.
- [Dan](https://warpcast.com/web3pm) and [Jack](https://warpcast.com/j4ck.eth) invited me to a super candid conversation about recruitment, networking and Icebreaker competition too.
- I'm bullish about Icebreaker and heard an integration with [Talent Passport](https://passport.talentprotocol.com) is coming.

**[Bountycaster](https://bountycaster.xyz)**
- Used Bountycaster bot on Farcaster to find someone to create a video for [Summer Builders NFT collection](https://zora.co/collect/base:0xb0fa7a2ed2e734b986160399ea883004610c9ae6).
- Paid 4M $BUILD to the best execution!
- Reached out to [Linda](https://warpcast.com/linda) with some feedback, got an instant reply.
- Ended up 'scouting' a recent cool release: [Bountycaster onchain attestations](https://www.launchcaster.xyz/bountycaster/6673cd2aa0fc18971f72e414).

**[Beearly](https://beearly.club)**
- Used Beearly to create a waitlist frame for [Summer of $TALENT](https://summer.talentprotocol.com).
- I already knew [Limone](https://warpcast.com/limone.eth) and the [Builders Garden team](https://www.builders.garden).
- Shared some feedback so they can improve the product, definitely recommend for someone launching some new and cool on Farcaster.`,
  },
  {
    slug: "log9",
    title: "Git Branches and PR Workflow",
    description: "Re-learning Git branch mechanics",
    date: "June 19, 2024",
    content: `### Log Entry 9: Git Branches and Pull Requests

**What:**
1. Installed GitHub Pull Requests extension for VSCode
2. Refreshed my memory and learned Git branch and PR workflow
3. Got more comfortable creating branches and opening PRs

**Next Steps:**
- Continue improving Git skills`,
  },
  {
    slug: "log8",
    title: "Summer Builders NFT Collection: Post-Mortem",
    description: "Reflections on launching the Summer...",
    date: "June 8, 2024",
    content: `### Log Entry 8: Summer Builders NFT Post-Mortem

**Distribution Challenges:**
- Our launch date coincided with peak Onchain Summer activity
- Neither me nor Simon have high Social Capital on Farcaster, yet...

**Supply Strategy:**
- High NFT supply (1000 mints, we had less than 100...) was overambitious

**Community Engagement:**
- Some OGs loved the collection enough to actively share, some others just thought it was funny
- If we did more research work and better storytelling, they'd probably feel more engaged

**Aesthetics:**
- Could have played better with aesthetics and used colors more aligned with Base

**Influencers:**
- Involving some Farcaster celebrities would have helped "farm" more attention

**Next Steps:**
- Focus on building personal social capital on Farcaster
- Apply these learnings to future projects`,
  },
  {
    slug: "log7",
    title: "CSS Cache Busting and Git Renaming Issue",
    description: "Learned about cache busting technique...",
    date: "June 5, 2024",
    content: `### Log Entry 7: Cloudflare Caching and Git File Rename Issues

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
- Git doesn't automatically track renames with casing changes, use consistent casing for file names from the start`,
  },
  {
    slug: "log6",
    title: "Summer Builders NFT Collection",
    description: "Collaborated with Simon to launch an NFT...",
    date: "June 4, 2024",
    content: `### Log Entry 6: Summer Builders NFT Collection on Zora

**What:**
- [Launched an NFT collection on Zora with Simon](https://zora.co/collect/base:0xb0fa7a2ed2e734b986160399ea883004610c9ae6)
- 100 unique Summer Builder characters, 10 were shipped first
- Characters designed with AI (Midjourney), inspired by 80s/90s TV shows
- Incorporated personal traits of OGs from BUILD + Talent Protocol
- Added Summer vibes and aesthetic to the designs
- Main reason for doing this collection: celebrating fellow builders, having fun and learn a lot ofc

**Process:**
- Brainstormed concept and creative direction
- Used AI image generation tools for initial character designs
- Manually edited and added Summer and BUILD elements
- Set up Zora collection and minted NFTs
- Promoted and shared the Summer Builders collection

**Gratitude:**
- Pleasure working (mostly async) with Simon
- We always come up with cool, creative ideas together!

**Learnings:**
- Main issue was distribution and getting visibility
- Our launch coincided with peak Onchain Summer activity...
- Very noisy, hard to cut through with promotion
- Neither of us have high social capital scores on Farcaster, yet!
- 100 NFT supply per character was overambitious for a new collection
- Should have kept it to 10 mints max per Summer Builder NFT

**Takeaways:**
- Distribution is key, especially in crowded markets
- Social capital and community building matters
- Start smaller for new NFT projects, selling out is important – scale comes later

**Next:**
- We're revealing all characters in the next few days on Farcaster
- Keep promoting the collection on different channels
- Try the Farcaster frame feature on Zora and also creating a Bounty through Bountycaster`,
  },
  {
    slug: "log5",
    title: "VSCode and Buildathon Prep",
    description: "Started using VSCode, and started...",
    date: "June 3, 2024",
    content: `### Log Entry 5: VSCode & Buildathon

**Progress Report:**
- Did my first code change and commit using VSCode + GitHub Desktop
- Registered for Onchain Summer Buildathon on Devfolio, add to stake some ETH to show my builder commitment
- Also minted a [SupaBald Jess](https://opensea.io/assets/base/0xb27b1369808c817d61baca58833232f97add28ea/70)
- Started working on a PWA health app project for the Buildathon (which will substitute the one I use nowadays...)
- Created and shared first app functionality draft document and shared with my accountability buddies (Nuno and Leal)

**Gratitude To:**
- Filipe for helping edit Figma design file
- Leal for helping with deployment issue troubleshooting

**Blockers:**
- Still waiting on product designer feedback on some assets issue

**Learnings:**
- Coding today vs 10-years ago is just wow!
- Always send a loom to designers (instead of writing) to facilitate comms

**Next:**
- Start using branches and pull requests instead of committing to main (for Talent Protocol repo)
- Iterate on PWA app based on feedback from Nuno and Leal
- Define next steps for Buildathon project`,
  },
  {
    slug: "log4",
    title: "Adding Image Assets",
    description: "Added PFP to personal site and working...",
    date: "May 30, 2024",
    content: `### Log Entry 4: Adding Image Assets

**What:**
1. Added profile picture (PFP) image to pcbo.xyz
2. Did some typos house-keeping on talentprotocol.com site repo
3. Asked for help from our product designer, some images may need to be adapted to mobile

**GitHub Web UI:**
- Typed '.' in repo which opened web editor
- Made and committed changes directly in browser UI!
- Using GitHub now compared to 10y ago is such a good vibe :)

**Next:**
- Overcome issues with image updates on talentprotocol.com
- Create a new structure on pcbo.xyz, for deeper thoughts, side by side with log entries`,
  },
  {
    slug: "log3",
    title: "First Commit to Talent Protocol Org",
    description: "Made first commit ever to Talent...",
    date: "May 29, 2024",
    content: `### Log Entry 3: Contributing to Talent Protocol

**What:**
1. CTO Leal added me as contributor to Talent Protocol org
2. Updated README with our mission statement
3. Archived few old unused repos

**README Update:**
- Added new section with our mission
- "We are on a mission to help the next generation of builders succeed by making professional reputation data easily accessible and human potential more visible"

**Housekeeping:**
- Explored org repos and identified inactive ones
- Archived repos for old products/projects

**Feelings:**
- Exciting to directly contribute to Talent Protocol even if it's just a README update
- Still, adding our core mission felt good
- Housekeeping is always good too

**Next:**
- Add my PFP to pcbo.xyz`,
  },
  {
    slug: "log2",
    title: "Working with an AI Coding Assistant",
    description: "Using Claude, an AI assistant, to help...",
    date: "May 28, 2024",
    content: `### Log Entry 2: Working with Claude

**What:**
1. Decided to enlist an AI assistant to help with coding and blogging
2. Chose [Claude](https://claude.ai)
3. Explained my goals and how I want to work together

**Why Claude?**
- Capable of helping with coding tasks across languages
- Can explain concepts and break things down clearly
- Assists with writing in a structured way

**How We Work:**
- I outline the task or topic I need help with
- Claude provides examples, drafts, and suggestions
- We go back-and-forth refining and clarifying

**Benefits So Far:**
- Claude's explanations help solidify my understanding
- Get higher quality writing by collaborating
- Stays focused on the task at hand

**Future Uses:**
- Debugging code and working through errors
- Learning new languages/frameworks
- Drafting more technical tutorial posts

**Learnings:**
- Important to give clear context and guidelines
- AI assistants aren't magic, but a powerful tool`,
  },
  {
    slug: "log1",
    title: "Setting Up Coding Blog on Vercel",
    description: "Configured Vercel to deploy a...",
    date: "May 27, 2024",
    content: `### Log Entry 1: Blog Setup with Vercel

**What:**
1. Signed up for Vercel, connected to GitHub
2. Created new public GitHub repo
3. Pointed Vercel to new repo for deployment
4. Updated DNS for pcbo.xyz to Vercel
5. Wrote the first blog post, updated header and footer

**Challenges:**
- Had to sanity-check DNS settings on Namecheap
- Pretty rusty on pretty much everything

**Learnings:**
- Impressed with GitHub <> Vercel integration, smooth af

**Next Steps:**
- Further remove clutter from site`,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
