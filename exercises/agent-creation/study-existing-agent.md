# Exercise: Study an Existing Agent

## Objective

Understand the structure and design of a Copilot agent by analyzing the **code-reviewer** agent.

## Background

GitHub Copilot agents (`.github/agents/*.agent.md`) are specialized AI assistants configured for specific tasks. By studying an existing agent, you learn how to structure instructions that produce consistent, high-quality results.

## Instructions

### Part 1: Read the Agent File

1. Open `.github/agents/code-reviewer.agent.md` in VS Code
2. Read the entire file carefully
3. Answer these questions (write your answers below or discuss with your group):

**Q1: What is the agent's role?**
> [Your answer]

**Q2: What rubric categories does it use for reviews?**
> [Your answer]

**Q3: What are the severity levels, and what does each mean?**
> [Your answer]

**Q4: What output format does the agent use for findings?**
> [Your answer]

**Q5: What tools does the agent have access to?**
> [Your answer]

### Part 2: Test the Agent

1. Open GitHub Copilot Chat
2. Switch to the **code-reviewer** agent from the mode/agent picker
3. Ask it to review a file:

   ```
   Review the backend/app.py file for code quality, security, and performance issues.
   ```

4. Observe the output:
   - Does it follow the severity levels?
   - Does it use the output format from the agent file?
   - Are the findings actionable?

### Part 3: Compare Agents

1. Also look at `.github/agents/api-designer.agent.md`
2. Compare the two agents:

| Aspect | Code Reviewer | API Designer |
|--------|--------------|--------------|
| Primary goal | ? | ? |
| Categories/checklist | ? | ? |
| Output format | ? | ? |
| Tools used | ? | ? |

## Reflection

- What makes a good agent definition?
- How do clear instructions improve AI output quality?
- What agent would be most useful for your team's workflow?
