---
marp: true
theme: default
paginate: true
backgroundColor: #1a1a2e
color: #eaeaea
style: |
  section {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1 {
    color: #00d4aa;
    border-bottom: 2px solid #00d4aa;
    padding-bottom: 10px;
  }
  h2 {
    color: #7b68ee;
  }
  h3 {
    color: #00d4aa;
  }
  a {
    color: #00d4aa;
  }
  code {
    background: #16213e;
    color: #00d4aa;
    padding: 2px 6px;
    border-radius: 4px;
  }
  pre {
    background: #16213e !important;
    border-radius: 8px;
    border: 1px solid #333;
  }
  pre code {
    background: transparent;
    padding: 0;
  }
  table {
    font-size: 0.75em;
    margin: 0 auto;
  }
  th {
    background: #16213e;
    color: #00d4aa;
  }
  td {
    background: #0f3460;
  }
  section.lead h1 {
    font-size: 2.5em;
    text-align: center;
    border: none;
  }
  section.lead h2 {
    text-align: center;
    color: #aaa;
    font-weight: 300;
  }
  section.lead p {
    text-align: center;
  }
  blockquote {
    border-left: 4px solid #00d4aa;
    background: #16213e;
    padding: 10px 20px;
    border-radius: 0 8px 8px 0;
  }
  img[alt~="center"] {
    display: block;
    margin: 0 auto;
  }
  .columns {
    display: flex;
    gap: 20px;
  }
  .columns > div {
    flex: 1;
  }
  strong {
    color: #00d4aa;
  }
  em {
    color: #7b68ee;
  }
  footer {
    color: #666;
  }
---

<!-- _class: lead -->

# GitHub Copilot
# Advanced Customization

## From consumer to power user

---

# Agenda

1. **Custom Instructions** - Always-on project context
2. **Prompt Files** - Reusable slash commands
3. **Built-in Agents** - VS Code's native AI participants
4. **Custom Agents** - Your own AI personas
5. **Skills** - Portable bundled workflows
6. **The Full Taxonomy** - How everything fits together
7. **Sharing Across Repos** - Without GitHub.com

---

<!-- _class: lead -->

# Custom Instructions
## `.github/copilot-instructions.md`

---

# Custom Instructions: What & Why

**What**: A Markdown file that **automatically** injects project context into every Copilot chat request

**Where**: `.github/copilot-instructions.md` at your repo root

**Key behaviors**:
- Always on - you never invoke it manually
- Invisible in chat, but visible in the **References** list
- Tells Copilot your stack, conventions, and expectations

> Think of it as your project's "system prompt"

---

# Custom Instructions: Example

```markdown
# .github/copilot-instructions.md

You are a full-stack developer working on a
microservices architecture project.

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Python Flask API with RESTful endpoints

## Guidelines
- Always include comments with code suggestions
- Incorporate error handling in all suggestions
- Use TypeScript type hints on the frontend
- Use Python type hints on the backend
```

---

# Path-Scoped Instructions

For **file-type-specific** rules, use `.github/instructions/*.instructions.md`:

```yaml
---
applyTo: '**/*.py'
---
# Python Standards
- Follow PEP 8
- Use type hints for all function signatures
- Always handle exceptions explicitly
```

```yaml
---
applyTo: '**/*.tsx'
---
# React Standards
- Use functional components with hooks
- Define props interfaces for all components
```

These activate **only** when Copilot works on matching files.

---

# Instructions: Priority & Tips

### Priority Order (highest to lowest)
1. Personal user-level instructions
2. Repository-level instructions
3. Organization-level instructions

### Pro Tips
- Use the `/init` command to auto-generate instructions from your project
- Keep instructions **concise** - they consume context window
- Focus on **conventions** and **constraints**, not tutorials
- Also supports: `AGENTS.md`, `CLAUDE.md` formats

---

<!-- _class: lead -->

# Prompt Files
## `.github/prompts/*.prompt.md`

---

# Prompt Files: What & Why

**What**: Reusable Markdown files that become **slash commands** in Copilot Chat

**Where**: `.github/prompts/*.prompt.md`

**Key difference from instructions**:
- Instructions = **always on** (automatic)
- Prompt files = **on demand** (manual `/command`)

> Encode repeatable prompting patterns into version-controlled, shareable files

---

# Prompt Files: Format

```yaml
---
description: Generate a Flask REST endpoint
agent: agent
model: claude-sonnet-4-5-20250929
tools:
  - codebase
  - githubRepo
---
# API Endpoint Generator

Generate a new Flask REST API endpoint following conventions:
- **Framework**: Python Flask 3.0
- **Data source**: JSON files in `backend/data/`
- **Helper**: `load_json_file(filename)`

## Template
@app.route('/api/<resource>', methods=['GET'])
def get_resource():
    data = load_json_file('<resource>.json')
    return jsonify(data)
```

---

# Prompt Files: Frontmatter Options

| Field | Purpose |
|---|---|
| `description` | Brief explanation shown in the UI |
| `agent` | Which agent runs it: `ask`, `agent`, `plan`, or custom |
| `model` | LLM to use (overrides current selection) |
| `tools` | Available tools/MCP servers |
| `argument-hint` | Placeholder text in chat input |

### Advanced features
- **File references**: Use Markdown links to include other files
- **Tool references**: `#tool:<tool-name>` syntax
- **Variables**: `${input:variableName}` for user input

---

# Prompt Files: Prompting Techniques

| File | Technique | Use Case |
|---|---|---|
| `zero-shot.prompt.md` | No examples | Simple, well-defined tasks |
| `one-shot.prompt.md` | One example pattern | Follow existing conventions |
| `chain-of-thought.prompt.md` | Step-by-step reasoning | Complex multi-step features |
| `api-endpoint.prompt.md` | Template-based | Standardized generation |
| `bug-fix.prompt.md` | Structured workflow | 5-step debugging process |

### How to invoke
```
/api-endpoint Create a seasons endpoint with year filtering
```

---

<!-- _class: lead -->

# Built-in Agents
## VS Code's Native Chat Participants

---

# Built-in Agents Overview

Type `@` in chat to access these native agents:

| Agent | Domain | Example |
|---|---|---|
| `@workspace` | Your codebase | `@workspace How is CORS configured?` |
| `@terminal` | Terminal & shell | `@terminal What does this error mean?` |
| `@vscode` | VS Code itself | `@vscode How do I enable word wrap?` |
| `@github` | GitHub platform | `@github Find open issues about auth` |

These are **built by Microsoft**, always available, and deeply integrated with VS Code internals.

---

# Ask Mode vs Agent Mode

### Ask Mode (traditional)
- Single Q&A response
- Read-only - suggests but doesn't change code
- Good for questions and explanations

### Agent Mode (autonomous)
- Plans and executes **multi-step tasks**
- Edits files, runs terminal commands, monitors results
- **Iterates** until the goal is met
- Can invoke tools, MCP servers, and custom agents

> Agent mode transforms Copilot from an assistant into an **autonomous developer**

---

<!-- _class: lead -->

# Custom Agents
## `.github/agents/*.agent.md`

---

# Custom Agents: What & Why

**What**: User-defined AI personas with specific **roles**, **tool access**, and **behavioral instructions**

**Where**: `.github/agents/*.agent.md`

**Key difference from prompt files**:
- Prompt files define a **task** (what to do)
- Agents define a **persona** (who to be)

> An agent stays active for the entire session,
> shaping all responses through its lens

---

# Custom Agents: Example

```markdown
# .github/agents/api-designer.agent.md
---
tools:
  - codebase
  - search
  - usages
---

# API Designer Agent

You are a REST API design specialist.

## Design Principles
- Use **plural nouns** for resources: `/api/teams`
- Use **kebab-case** for multi-word resources
- Nested resources for relationships

## HTTP Methods
- GET: retrieve | POST: create | PUT: replace
- PATCH: partial update | DELETE: remove
```

---

# Custom Agents: Frontmatter

| Field | Purpose |
|---|---|
| `tools` | Available tools & MCP servers |
| `model` | LLM model (supports fallback arrays) |
| `agents` | Allowed sub-agents (`*` = all, `[]` = none) |
| `handoffs` | Workflow transitions to other agents |
| `user-invocable` | Show in agent picker? (default: true) |
| `hooks` | Agent-scoped shell commands (preview) |

---

# Agent Handoffs: Chaining Workflows

Agents can **hand off** to each other for guided multi-step workflows:

```yaml
# plan.agent.md
---
handoffs:
  - label: "Implement Plan"
    agent: agent
    prompt: "Implement the plan outlined above."
    send: false
  - label: "Review Code"
    agent: code-reviewer
    prompt: "Review the implementation."
---

# Planning Agent
You generate implementation plans. You NEVER edit code.
```

This creates clickable buttons in chat to transition between agents.

---

# Real-World Agent Gallery

| Agent | Role | Specialty |
|---|---|---|
| **api-designer** | REST API specialist | Design principles, review checklist |
| **code-reviewer** | Senior reviewer | Severity rubric: Critical/Major/Minor/Nit |
| **refactoring** | Code quality expert | SOLID principles, code smell detection |
| **plan** | Architect | Plans only, never edits code |
| **doc-updater** | Documentation bot | Architecture maps, README generation |

> Each agent sees the world through a different lens, giving you specialized expertise on demand

---

<!-- _class: lead -->

# Skills
## `.github/skills/<name>/SKILL.md`

---

# Skills: What & Why

**What**: The newest primitive - **bundled, portable workflows** following the open standard at [agentskills.io](https://agentskills.io)

**Where**: `.github/skills/<skill-name>/SKILL.md`

**A skill is a folder**, not just a file:
```
.github/skills/
  webapp-testing/
    SKILL.md          # Required: defines the skill
    templates/        # Optional: supporting files
    scripts/          # Optional: automation scripts
    examples/         # Optional: usage examples
```

---

# Skills: How They Load

### Three-Level Loading Model

**1. Discovery**
Copilot reads `name` + `description` from frontmatter only

**2. Instructions Loading**
When a skill matches the user's request, the full `SKILL.md` body loads into context

**3. Resource Access**
Additional files in the skill folder are accessed only when referenced

> This staged loading keeps the context window efficient

---

# Skills: Example

```yaml
# .github/skills/webapp-testing/SKILL.md
---
name: webapp-testing
description: >
  Automated UI testing for web applications
  using Playwright. Tests user flows, UI rendering,
  navigation, and form submissions.
---

# WebApp Testing Skill

## Prerequisites
- Web application must be running
- Playwright MCP server enabled in Agent mode

## Workflow
1. Navigate to the target page
2. Verify page loads correctly
3. Test interactive elements
4. Capture visual evidence
5. Report results
```

---

# Skills vs Prompt Files

| Feature | Prompt Files | Skills |
|---|---|---|
| **Trigger** | Manual `/command` only | Auto-discovered by agents |
| **Structure** | Single `.md` file | Folder with resources |
| **Bundled files** | No | Scripts, templates, examples |
| **Portability** | VS Code only | VS Code, CLI, Cloud Agent |
| **Standard** | VS Code convention | Open standard (agentskills.io) |
| **Context loading** | All at once | Three-level staged loading |

> Skills are the **evolution** of prompt files - more portable, more powerful, more discoverable

---

<!-- _class: lead -->

# The Full Taxonomy
## How Everything Fits Together

---

# The Customization Stack

| Layer | Trigger | Scope | Contains |
|---|---|---|---|
| **Instructions** | Automatic | Every request | Rules & conventions |
| **Prompt Files** | Manual `/cmd` | Single invocation | Instructions + config |
| **Custom Agents** | Switch persona | Entire session | Tools + handoffs |
| **Skills** | Auto or manual | On-demand | Scripts + templates |
| **MCP Servers** | Tool calls | Always available | External integrations |
| **Hooks** | Event-driven | Policy enforcement | Shell commands |

---

# Decision Framework

> **Need always-on rules?**
> Use **Instructions** (`.copilot-instructions.md`)

> **Need a named, repeatable task?**
> Use a **Prompt File** (`.prompt.md`)

> **Need a role with tool boundaries and handoffs?**
> Use a **Custom Agent** (`.agent.md`)

> **Need a bundled multi-step workflow with supporting files?**
> Use a **Skill** (`SKILL.md`)

> **Need external data/services?**
> Add an **MCP Server**

---

# They Compose Together

```
                    +------------------+
                    |   Instructions   |  <-- Always-on context
                    +--------+---------+
                             |
              +--------------+--------------+
              |              |              |
        +-----v----+  +-----v----+  +------v-----+
        |  Prompt   |  |  Custom  |  |   Skills   |
        |  Files    |  |  Agents  |  |            |
        +-----+----+  +-----+----+  +------+-----+
              |              |              |
              |    +---------v---------+    |
              +--->|    MCP Servers    |<---+
                   | (external tools)  |
                   +-------------------+
```

- A prompt file can specify `agent: api-designer`
- An agent can use tools provided by MCP servers
- Skills bundle scripts that agents invoke automatically

---

# Chat Modes to Agents: The Rename

### What happened?
- `.chatmode.md` was renamed to `.agent.md` (late 2025)
- **Identical functionality**, just a terminology change
- Reflects that these personas work as **autonomous agents**, not just conversation modes

### Migration
Simply rename your files:
```bash
# That's it!
mv .github/chatmodes/reviewer.chatmode.md \
   .github/agents/reviewer.agent.md
```

---

<!-- _class: lead -->

# Sharing Across Repos
## When you're not on GitHub.com

---

# The Good News

The `.github/` folder is read by **VS Code locally**, not by GitHub.com.

**Everything works regardless of your Git host:**

| Feature | Azure DevOps | GitLab | Bitbucket |
|---|---|---|---|
| `copilot-instructions.md` | Yes | Yes | Yes |
| Prompt files (`.prompt.md`) | Yes | Yes | Yes |
| Custom agents (`.agent.md`) | Yes | Yes | Yes |
| Skills (`SKILL.md`) | Yes | Yes | Yes |

> Just commit the `.github/` folder. Done.

---

# Strategy 1: User-Level Configs

For **personal** configs that span all your repos:

```
~/.copilot/
  agents/          # Personal agents (all repos)
  skills/          # Personal skills (all repos)
  instructions/    # Personal instructions (all repos)
```

These load automatically in every workspace you open.

### VS Code Settings Sync
Enable **"Prompts and Instructions"** in Settings Sync to carry configs across all your machines.

---

# Strategy 2: Custom Directory Paths

If `.github/` naming causes confusion on non-GitHub platforms:

```json
// .vscode/settings.json
{
  "chat.promptFilesLocations": [
    { "path": ".copilot/prompts" }
  ],
  "chat.agentFilesLocations": [
    { "path": ".copilot/agents" }
  ],
  "chat.instructionsFilesLocations": [
    { "path": ".copilot/instructions" }
  ]
}
```

Use any folder structure that makes sense for your team.

---

# Strategy 3: Shared Template / Submodule

For **team-wide** sharing across many repos:

```bash
# Create a shared repo with your configs
git init copilot-configs
# Add agents, prompts, skills, instructions

# Include in each project as a submodule
git submodule add <url> .github
# or
git submodule add <url> .copilot
```

### Alternative: Repo Template
Create a template repo with your `.github/` structure. Use it when starting new projects.

---

# Strategy 4: Monorepo Discovery

For monorepo setups where configs live in a parent directory:

```json
{
  "chat.useCustomizationsInParentRepositories": true
}
```

```
monorepo/
  .github/
    copilot-instructions.md   # Shared across all packages
    agents/
    prompts/
  packages/
    service-a/                # Inherits parent configs
    service-b/                # Inherits parent configs
```

---

# What You Lose Without GitHub.com

| Feature | Requires GitHub.com |
|---|---|
| **Organization-level distribution** | Yes - uses `.github-private` repo |
| **Copilot Coding Agent** (cloud) | Yes - runs on GitHub infrastructure |
| **Full `@github` participant** | Yes - needs GitHub API access |

### Workaround for org distribution
Without GitHub.com's `.github-private` repo mechanism, use:
- Git submodules
- Template repos
- Package managers
- Shared CI/CD artifact distribution

---

<!-- _class: lead -->

# Quick Reference

---

# File Structure Cheat Sheet

```
.github/
  copilot-instructions.md              # Always-on context
  instructions/
    python-standards.instructions.md   # Path-scoped rules
  prompts/
    api-endpoint.prompt.md             # /api-endpoint command
    bug-fix.prompt.md                  # /bug-fix command
    chain-of-thought.prompt.md         # /chain-of-thought command
  agents/
    api-designer.agent.md              # Switchable persona
    code-reviewer.agent.md             # Switchable persona
    plan.agent.md                      # Planning-only agent
  skills/
    webapp-testing/
      SKILL.md                         # Bundled workflow
      templates/
      scripts/
```

---

<!-- _class: lead -->

# Putting It All Together
## A Real-World Mental Model
*Inspired by [GitHub Community Discussion #183962](https://github.com/orgs/community/discussions/183962#discussioncomment-15475637)*

---

# The Three Pillars (Community Perspective)

### Instructions = The **Foundation**
> Always-on, passive, persistent. Use for anything that should
> **always apply**, regardless of which agent or skill is active.

### Skills = The **Toolbox**
> Task-specific, modular, reusable. Encapsulate **capabilities**
> that agents can call on-demand. Portable across repos.

### Agents = The **Orchestrator**
> Named personas that **combine** skills and instructions.
> Use when you need a consistent helper for complex workflows.

---

# How They Work Together: CI Debugging Example

| Component | Role in the Workflow |
|---|---|
| **Instructions** | Provide project context: CI setup, test commands, repo structure |
| **Skill** (`github-actions-debugging`) | Encapsulate task logic: parse logs, identify errors, suggest fixes |
| **Agent** (`ci-debugger`) | Orchestrate: scan failures, invoke skill, suggest code fixes |

```
Instructions   -->  "Use npm, run lint+test before PRs, CI on GitHub Actions"
     +
Skill          -->  "Analyze failed workflow logs, suggest fixes for common errors"
     +
Agent          -->  "1. Scan failed workflows  2. Call debugging skill  3. Fix code"
```

---

# The Key Distinctions

### Prompt Files vs Skills

| | Prompt Files | Skills |
|---|---|---|
| **Content** | Text-only instruction templates | Capability bundles (instructions + scripts) |
| **Execution** | Guide reasoning and output quality | **Do things** - can use tools |
| **Invocation** | **User-selected** (manual `/command`) | **Agent-selected** (automatic discovery) |
| **Best for** | Reviews, analysis, checklists | Debugging, CI fixes, testing, automation |

> Prompts are what you **say** to the AI.
> Skills are what the AI **can do**.

---

# The Recommended Pattern

### Start with this layered approach:

**1. Always define repo-wide instructions**
For consistent context across all interactions

**2. Create modular skills**
For repeatable, task-specific logic that can be shared

**3. Use custom agents**
Only when you need a named, orchestrated persona
to handle complex workflows or multiple skills together

> Instructions are the **what**.
> Skills are the **how**.
> Agents are the **who**.

---

<!-- _class: lead -->

# Thank You

### Start customizing today:
1. Add `.github/copilot-instructions.md` to your repo
2. Create a prompt file for your most repeated task
3. Build an agent for your team's domain expertise
4. Bundle complex workflows as skills

**Everything works locally - no GitHub.com required**
