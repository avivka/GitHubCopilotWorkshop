# GitHub Copilot Standalone Workshop — Slide Deck

> Presenter notes and talking points for each slide. Use this as a markdown-based slide deck.

---

## Slide 1: Title

**GitHub Copilot Standalone Workshop**

AI-Powered Development — From Basics to Advanced Workflows

- Duration: 5 hours (3h + 2h)
- Format: Hands-on with an NBA sports application
- Tools: VS Code + GitHub Copilot (Standalone)

---

## Slide 2: Agenda Overview

| Part | Duration | Topics |
|------|----------|--------|
| **Part 1** | 3 hours | Setup, Core Basics, Prompt Engineering, Agents, Plan Mode |
| **Break** | 15 min | |
| **Part 2** | 2 hours | Spec-Driven Dev, MCP, CLI & OpenCode, Extensions |

---

## Slide 3: The Application

**NBA Sports Companion App**

- Frontend: Next.js 14 + TypeScript + Tailwind CSS
- Backend: Python Flask REST API
- Data: JSON files (teams, players, coaches, stadiums, games)
- Architecture: Microservices (port 3000 + port 8080)

> Show the running app, click through pages

---

## Slide 4: Copilot Modes

| Mode | What It Does | When to Use |
|------|-------------|-------------|
| **Ask** | Answer questions, explain code | Learning, exploration |
| **Edit** | Inline code modifications | Small targeted changes |
| **Agent** | Autonomous multi-file changes | Feature building, refactoring |

> Demo: Show switching between modes in VS Code

---

## Slide 5: Model Selection

Available models:
- **GPT-4.1** — General purpose, fast, good for UI and documentation
- **Claude Sonnet 4.5** — Complex reasoning, optimization, agent mode tasks

> Demo: Show the model picker dropdown

---

## Slide 6: Prompt Engineering — Why It Matters

> "The quality of your prompt determines the quality of your output."

Three key techniques:
1. **Zero-shot**: Describe the task, no examples
2. **One-shot**: Provide one example to follow
3. **Chain-of-thought**: Step-by-step reasoning

---

## Slide 7: Prompt Engineering — Zero-Shot

**Definition**: Give only a description, no examples.

```
Create a GET /api/search/players endpoint that accepts ?q=
and returns matching players from player-info.json.
```

- Fastest to write
- Works for simple, well-defined tasks
- May not match project conventions

---

## Slide 8: Prompt Engineering — One-Shot

**Definition**: Provide one example, then ask for a similar output.

```
Here is the coaches GET endpoint: [paste code]
Following this same pattern, create GET /api/teams
```

- Better consistency with existing code
- AI learns your patterns from the example
- Best for "more of the same" tasks

---

## Slide 9: Prompt Engineering — Chain-of-Thought

**Definition**: Ask the AI to reason step-by-step before coding.

```
Think step by step:
1. What data do we need?
2. What API endpoint makes sense?
3. What should the UI look like?
4. What edge cases exist?
5. Now implement it.
```

- Best for complex, multi-step features
- Produces more thoughtful architecture
- Catches edge cases early

---

## Slide 10: Prompt Files & Reusable Templates

**Location**: `.github/prompts/*.prompt.md`

- Shareable across the team
- Enforce consistency
- Reduce repetitive prompting
- Can be attached as context in Copilot Chat

Examples in this workshop:
- `api-endpoint.prompt.md` — Backend endpoint template
- `component-generator.prompt.md` — Frontend page template
- `bug-fix.prompt.md` — Structured debugging

---

## Slide 11: Agents

**Location**: `.github/agents/*.agent.md`

An agent is a specialized Copilot persona with:
- A defined role and expertise
- Structured output formats
- Access to specific tools
- Consistent behavior across uses

Workshop agents:
- **code-reviewer** — Structured code review with severity levels
- **api-designer** — REST API design best practices
- **refactoring** — Behavior-preserving code improvements

---

## Slide 12: Plan Mode

**What**: Copilot analyzes your request and produces a plan before writing code.

**When to use**:
- Architecture reviews
- Large feature planning
- Understanding complex codebases

**How**:
1. Open Copilot Chat
2. Describe the feature
3. Ask Copilot to create a plan first
4. Review and approve before implementation

---

## Slide 13: Spec-Driven Development

**Workflow**:
1. Write a specification as a `.prompt.md` file
2. Attach it to Copilot Chat
3. Use agent mode to implement from the spec
4. Iterate based on results

> This turns your specs into executable instructions for AI.

---

## Slide 14: MCP Servers

**Model Context Protocol** — Extends Copilot with external tools.

Key MCP servers:
- **Playwright** — Automated browser testing
- **GitHub** — Repository operations
- **Custom** — Build your own!

**Agent Skills**: Reusable task packages in `.github/skills/`

---

## Slide 15: CLI & OpenCode Comparison

| Aspect | Copilot CLI | OpenCode |
|--------|------------|----------|
| Authentication | GitHub account | API keys (OpenAI, Anthropic) |
| Models | GitHub-managed | User-configurable |
| Cost | Included in license | Pay-per-token |
| Enterprise | Full support + audit | Community-driven |
| MCP Support | Built-in | Configurable |
| Best for | Dev teams on GitHub | Platform teams, multi-provider |

---

## Slide 16: Key Takeaways

1. **Prompt quality matters** — Zero-shot, one-shot, chain-of-thought
2. **Prompt files** make AI interactions reusable and consistent
3. **Agents** create specialized AI assistants for your team
4. **Plan mode** prevents AI from rushing into wrong solutions
5. **MCP** extends Copilot beyond code into testing, tools, and workflows
6. **CLI** brings Copilot to the terminal for full-stack workflows

---

## Slide 17: Resources

- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [awesome-copilot](https://github.com/github/awesome-copilot)
- [Effective AI Kit Extension](https://marketplace.visualstudio.com/items?itemName=nicepkg.aide-pro)
- [MCP Servers Registry](https://github.com/github/github-mcp-server)
- Workshop repo: this repository
