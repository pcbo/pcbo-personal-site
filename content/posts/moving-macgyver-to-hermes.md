---
title: "Moving MacGyver to Hermes"
description: "Why I'm setting up my AI chief of staff on Hermes in parallel instead of doing a risky hard cutover."
date: "April 21, 2026"
slug: "moving-macgyver-to-hermes"
---

I'm preparing to move MacGyver, my AI chief of staff, from OpenClaw to Hermes.

Not as a hard cutover. In parallel.

That distinction matters.

If you have a real agent setup, the agent is not just a prompt and a repo. It's a runtime with memory, tools, permissions, message delivery, cron jobs, and operational state.

MacGyver today is wired into Telegram, Slack, Notion, Todoist, local scripts, memory files, and recurring reports like Daily Brief and Fitness Report.

So the migration question is not "can I install Hermes?"

It's: can I move the full operating system without breaking the loops that matter?

## Why I'm interested in Hermes

A few reasons:
- better long-term memory architecture
- stronger retrieval direction with QMD and Active Memory
- a more explicit focus on agent runtime portability
- a cleaner path to treat the agent like infrastructure, not like a toy wrapper

That last one matters a lot to me.

I don't want my agent identity trapped inside one product. I want MacGyver to be portable: same memory, same operating context, same rules, different runtime if needed.

## Why I'm not switching in one shot

This is where most people are still too casual about agents.

If your agent only chats, migration is easy.
If your agent actually runs things, migration is ops.

In my case, the fragile parts are obvious:
- Telegram delivery
- unread behavior in report channels
- cron reliability
- formatting consistency
- tool permissions
- memory recall quality

If any of these break, the setup gets worse, not better.

So the right move is:
- keep OpenClaw live
- install Hermes locally
- import memory, rules, skills, and workspace
- use a second Telegram bot and test channels
- run both in parallel for a short period
- only cut over once delivery, memory, and cron behavior are stable

## What this says about agents

I think we're moving past the phase where an agent is just "a repo with prompts".

A real agent has at least three layers:
- identity: who it is, what it does, what rules it follows
- capabilities: what tools, APIs, and permissions it has
- memory: what it knows, what it can recall, what state it carries across time

If you can't move those layers cleanly, you don't really own the agent.

## My current thesis

The winning agent stacks won't just be the ones with the smartest model.

They'll be the ones that treat agents as operational systems:
- portable
- inspectable
- memory-backed
- tool-connected
- resilient under real workflows

That's the bar I'm now using.

Hermes might clear it. Maybe not.

But it's worth testing seriously.
