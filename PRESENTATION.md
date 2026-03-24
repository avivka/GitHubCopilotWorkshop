---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  section.lead {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: white;
  }
  section.lead h1 {
    color: #58a6ff;
    font-size: 2.4em;
  }
  section.lead h2 {
    color: #c9d1d9;
    font-weight: 300;
  }
  section.section-divider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #0f3460 0%, #533483 100%);
    color: white;
  }
  section.section-divider h1 {
    color: #58a6ff;
    font-size: 2.2em;
  }
  section.section-divider h2 {
    color: #c9d1d9;
    font-weight: 300;
  }
  h1 {
    color: #0f3460;
    border-bottom: 3px solid #58a6ff;
    padding-bottom: 8px;
  }
  h2 {
    color: #16213e;
  }
  strong {
    color: #0f3460;
  }
  code {
    background-color: #f0f4f8;
    color: #e63946;
    padding: 2px 6px;
    border-radius: 4px;
  }
  pre {
    background-color: #1e1e1e !important;
    border-radius: 8px;
  }
  table {
    font-size: 0.85em;
    width: 100%;
  }
  th {
    background-color: #0f3460;
    color: white;
    padding: 8px 12px;
  }
  td {
    padding: 6px 12px;
  }
  blockquote {
    border-left: 4px solid #58a6ff;
    background-color: #f0f7ff;
    padding: 12px 20px;
    margin: 16px 0;
    font-style: italic;
    color: #333;
  }
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  img[alt~="center"] {
    display: block;
    margin: 0 auto;
  }
  footer {
    color: #666;
    font-size: 0.7em;
  }
---

<!-- _class: lead -->

# GitHub Copilot Standalone Workshop

## AI-Powered Development — From Basics to Advanced Workflows

**5 Hours** | Hands-on | NBA Sports Application
VS Code + GitHub Copilot (Standalone)

<!--
Welcome everyone to the GitHub Copilot Standalone Workshop.
Today we'll go from the basics all the way to advanced AI-powered development workflows.
Everything runs locally in VS Code — no github.com features needed.
-->

---

# Agenda

| Part | Duration | Topics |
|------|----------|--------|
| **Part 1: Foundations** | 3 hours | Setup, Core Basics, Prompt Engineering, Agents, Plan Mode |
| *Break* | *15 min* | |
| **Part 2: Advanced** | 2 hours | Spec-Driven Dev, MCP, CLI & OpenCode, Extensions |

### Today's Tasks

| Task 0 | Task 1 | Task 2 | Task 3 | Task 4 | Task 5 | Task 6 | Task 7 | Task 8 |
|--------|--------|--------|--------|--------|--------|--------|--------|--------|
| Setup | Basics | Prompts | Agents | Plan | Spec | MCP | CLI | Ext |

<!--
Here's our agenda. Part 1 is about building a strong foundation — setup, basic usage,
prompt engineering, and agents. Part 2 dives into advanced workflows.
-->

---

# The Application: NBA Sports Companion

<div class="columns">
<div>

### Tech Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Python Flask REST API
- **Data**: JSON files (no database)
- **Architecture**: Microservices

</div>
<div>

### Features
- 30 NBA teams with conference filtering
- 25+ player profiles and detailed stats
- Player comparison (side-by-side)
- 15 stadiums, 12 coaches, 21 games
- Performance optimization demos

</div>
</div>

```
Browser (localhost:3000) → Next.js Frontend → Flask Backend (localhost:8080) → JSON Data
```

<!--
Our workshop application is an NBA sports companion.
It's a real full-stack app with a Next.js frontend and Python Flask backend.
All data is stored in JSON files for simplicity.
-->

---

# Copilot Modes

| Mode | What It Does | When to Use |
|------|-------------|-------------|
| **Ask** | Answer questions, explain code | Learning, exploration, debugging |
| **Edit** | Inline code modifications | Small targeted changes, refactoring |
| **Agent** | Autonomous multi-file changes | Feature building, complex tasks |

### Key Difference

> **Ask** and **Edit** work on what you give them.
> **Agent** mode explores your codebase, runs commands, and iterates autonomously.

<!--
Copilot has three primary modes. Ask mode is for questions and explanations.
Edit mode is for targeted inline changes. Agent mode is the most powerful —
it can autonomously explore your codebase, create and modify multiple files,
run terminal commands, and iterate on its own work.
-->

---

# Model Selection

<div class="columns">
<div>

### GPT-4.1
- General purpose, fast
- UI components and layouts
- Documentation generation
- Basic API routes and CRUD
- Bug fixes

</div>
<div>

### Claude Sonnet 4.5
- Complex reasoning
- Code optimization
- Agent mode tasks
- Architecture decisions
- Performance improvements

</div>
</div>

**How to switch**: Click the model selector dropdown in Copilot Chat

> **Tip**: Use Claude Sonnet 4.5 for agent mode and complex tasks. Use GPT-4.1 for quick edits and documentation.

<!--
You have access to multiple AI models. GPT-4.1 is fast and great for general tasks.
Claude Sonnet 4.5 excels at complex reasoning and is our recommended choice for agent mode.
-->

---

<!-- _class: section-divider -->

# Prompt Engineering

## The quality of your prompt determines the quality of your output

<!--
Let's talk about prompt engineering — this is the single most important skill
for getting great results from Copilot.
-->

---

# Three Prompting Techniques

<div class="columns">
<div>

### 1. Zero-Shot
Give only a description. No examples.

```
Create a GET /api/search/players
endpoint that accepts ?q= and
returns matching players.
```

- Fastest to write
- Works for simple tasks
- May not match conventions

</div>
<div>

### 2. One-Shot
Provide one example to follow.

```
Here is the coaches endpoint:
[paste code]
Create GET /api/teams following
the same pattern.
```

- Better consistency
- AI learns your patterns
- Best for "more of the same"

</div>
</div>

<!--
Zero-shot is the simplest — just describe what you want.
One-shot gives the AI an example to follow, which produces more consistent results.
-->

---

# Chain-of-Thought Prompting

Ask the AI to **reason step by step** before writing code:

```
Think step by step about building a player comparison feature:
1. What data do we need? → Look at player-stats.json
2. What API endpoint? → GET /api/player-compare?player1=<id>&player2=<id>
3. What should the UI look like? → Side-by-side cards with stat bars
4. What edge cases exist? → Missing player, same player twice, mobile layout
5. Now implement it.
```

### When to Use Chain-of-Thought
- Complex, multi-step features
- Architectural decisions
- Features with many edge cases
- When you want the AI to "think before coding"

<!--
Chain-of-thought is the most powerful technique. By asking the AI to reason through
each step before coding, you get better architecture, better edge case handling,
and more thoughtful solutions.
-->

---

# Prompt Files — Reusable Templates

**Location**: `.github/prompts/*.prompt.md`

| Prompt File | Purpose |
|-------------|---------|
| `api-endpoint.prompt.md` | Backend endpoint template with conventions |
| `component-generator.prompt.md` | Frontend page template with patterns |
| `bug-fix.prompt.md` | Structured 5-step debugging approach |
| `zero-shot.prompt.md` | Zero-shot exercise template |
| `one-shot.prompt.md` | One-shot with coaches example |
| `chain-of-thought.prompt.md` | Step-by-step reasoning template |

### Benefits
- **Team consistency** — Everyone follows the same patterns
- **Reusable** — Attach to any Copilot Chat session
- **Shareable** — Committed to the repository

<!--
Prompt files are one of the most powerful features for teams.
You create reusable templates, commit them to your repo, and everyone
on the team gets consistent, high-quality AI interactions.
-->

---

<!-- _class: section-divider -->

# Agents

## Specialized AI personas for your team

<!--
Now let's talk about agents — these are specialized Copilot configurations
that give you consistent, high-quality results for specific tasks.
-->

---

# Agent Architecture

**Location**: `.github/agents/*.agent.md`

An agent definition includes:

| Component | Purpose |
|-----------|---------|
| **Role** | What the agent specializes in |
| **Instructions** | How it should approach tasks |
| **Rubric / Categories** | What it evaluates or checks |
| **Severity Levels** | How to prioritize findings |
| **Output Format** | Structured, consistent responses |
| **Tools** | Which codebase tools it can use |

### Workshop Agents
- **code-reviewer** — Review rubric with Critical/Major/Minor/Nit severity
- **api-designer** — REST API naming conventions and schemas
- **refactoring** — SOLID/DRY principles, behavior-preserving changes

<!--
Each agent has a clear role, structured instructions, and a defined output format.
This means every time you use the code-reviewer agent, you get consistent,
structured feedback with severity levels — not just random suggestions.
-->

---

# Plan Mode

**What**: Copilot analyzes your request and produces a plan **before** writing code.

### When to Use
- Architecture reviews
- Large feature planning
- Understanding complex codebases
- Before any significant refactoring

### Workflow

```
1. Open Copilot Chat
2. Describe the feature or change
3. Ask: "Create a plan first — don't implement yet"
4. Review the plan
5. Approve → Copilot implements
```

> **Key insight**: Plan mode prevents the AI from rushing into a wrong solution. Always plan complex features before implementing.

<!--
Plan mode is incredibly valuable for complex work. Instead of letting the AI
jump straight into coding, you ask it to create a plan first. You review
the plan, suggest changes, and only then let it implement.
-->

---

<!-- _class: section-divider -->

# Part 2: Advanced Workflows

## Spec-Driven Dev | MCP | CLI | Extensions

<!--
Welcome back from the break. Part 2 covers advanced workflows that will
transform how you use Copilot in real projects.
-->

---

# Spec-Driven Development

### Workflow

```
1. Write a specification as a .prompt.md file
2. Attach it to Copilot Chat as context
3. Use agent mode to implement from the spec
4. Review and iterate
```

### Example: Player Comparison Spec

```markdown
## Backend API
- Endpoint: GET /api/player-compare?player1=<id>&player2=<id>
- Response: { player1: {...stats}, player2: {...stats} }

## Frontend Page
- Route: /player-compare
- Two dropdown selectors, side-by-side stat cards
- Visual indicators for which player leads each stat
```

> **Your specs become executable instructions for AI.**

<!--
Spec-driven development turns your specifications into AI instructions.
Write a detailed spec as a prompt file, attach it to Copilot, and
agent mode implements the entire feature from the spec.
-->

---

# MCP — Model Context Protocol

**MCP extends Copilot with external tools and capabilities.**

<div class="columns">
<div>

### Key MCP Servers
- **Playwright** — Browser automation and testing
- **GitHub** — Repository operations
- **Custom** — Build your own!

### Agent Skills
Reusable task packages in `.github/skills/`
- WebApp Testing skill included

</div>
<div>

### Playwright Demo

```
Using Playwright MCP, test the app:
1. Navigate to localhost:3000
2. Click "NBA Scores"
3. Verify scores displayed
4. Take screenshots
5. Generate test report
```

Copilot controls the browser, runs tests, captures screenshots, and reports results.

</div>
</div>

<!--
MCP is the Model Context Protocol — it extends Copilot beyond just code.
With Playwright MCP, Copilot can control a browser, run tests, take screenshots,
and generate test reports. You can also build your own MCP servers.
-->

---

# CLI & OpenCode Comparison

| Aspect | **Copilot CLI** | **OpenCode** |
|--------|------------|----------|
| Authentication | GitHub account | API keys (OpenAI, Anthropic) |
| Models | GitHub-managed | User-configurable (any provider) |
| Cost | Included in license | Pay-per-token |
| Enterprise | Full support + audit logs | Community-driven |
| MCP Support | Built-in | Configurable |
| IDE Integration | VS Code + CLI | Terminal-only |
| Best for | Dev teams on GitHub | Platform teams, multi-provider |

### Copilot CLI Commands
```
/model  → Switch AI models       /mcp   → Manage MCP servers
/share  → Export session          /usage → View session metrics
```

<!--
Copilot CLI brings the full power of Copilot to your terminal.
It can read your codebase, generate code, run commands, and iterate.
OpenCode is an alternative for teams that need multi-provider flexibility.
-->

---

# Key Takeaways

<div class="columns">
<div>

### Prompt Engineering
1. **Zero-shot** for simple, clear tasks
2. **One-shot** for pattern-matching
3. **Chain-of-thought** for complex features

### Reusable Assets
4. **Prompt files** for team consistency
5. **Agents** for specialized workflows

</div>
<div>

### Advanced Workflows
6. **Plan mode** before complex implementations
7. **Spec-driven dev** for feature specifications
8. **MCP** for external tool integration
9. **CLI** for terminal-based workflows

### Remember
> The better your prompt, the better your output. Invest time in prompt quality.

</div>
</div>

<!--
Let's recap the key takeaways. Prompt engineering is foundational.
Prompt files and agents make your AI usage consistent and shareable.
Plan mode, spec-driven dev, and MCP take you to the next level.
-->

---

<!-- _class: lead -->

# Resources

**GitHub Copilot Docs** — docs.github.com/en/copilot
**awesome-copilot** — github.com/github/awesome-copilot
**Effective AI Kit** — VS Code Extension Marketplace
**MCP Servers** — github.com/github/github-mcp-server

## Questions?

Workshop repository: this repo

<!--
Here are the key resources. The awesome-copilot repo has community-maintained
prompt files, agents, and best practices. Install the Effective AI Kit extension
for additional prompt templates. Thank you for participating!
-->
