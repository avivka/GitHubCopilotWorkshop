# Exercise: Create Your Own Agent

## Objective

Build a **performance-analyzer** agent from scratch, following the patterns you learned from studying existing agents.

## Background

Now that you've studied the code-reviewer agent structure, it's time to create your own. You'll define a specialized agent that analyzes code for performance issues.

## Instructions

### Step 1: Create the File

Create a new file: `.github/agents/performance-analyzer.agent.md`

### Step 2: Define the Agent

Your agent should include these sections:

1. **Role description**: What is this agent's specialty?
2. **Analysis categories**: What performance aspects does it check?
   - Rendering performance (React re-renders, memo usage)
   - Data fetching (caching, redundant requests, loading states)
   - Algorithm efficiency (time complexity, unnecessary loops)
   - Bundle size (unused imports, large dependencies)
   - Backend response time (slow queries, N+1 problems)

3. **Severity levels** (adapt from the code-reviewer):
   - Critical: Causes visible lag or timeouts
   - Major: Degrades UX noticeably under load
   - Minor: Slight inefficiency, not user-visible
   - Info: Optimization opportunity for later

4. **Output format**: Structured findings with severity, location, and fix
5. **Tools**: List which tools the agent can use
6. **Instructions**: Step-by-step guide for how the agent should work

### Step 3: Write the Content

Use this skeleton to get started:

```markdown
# Performance Analyzer Agent

You are a performance specialist focused on ...

## Analysis Categories

### 1. Rendering Performance
- ...

### 2. Data Fetching
- ...

(add more categories)

## Severity Levels

- **Critical**: ...
- **Major**: ...

## Output Format

...

## Tools

- ...
```

### Step 4: Test Your Agent

1. Open Copilot Chat and select your new performance-analyzer agent
2. Ask it to analyze the optimization endpoint:

   ```
   Analyze the /api/optimize endpoint in backend/app.py for performance issues.
   ```

3. Check: Does it follow your defined structure?

### Step 5: Iterate

- Refine the agent based on the output quality
- Add or remove categories
- Adjust the severity definitions
- Test again

## Bonus Challenges

1. Create a **test-writer** agent that generates tests following the project's Jest + React Testing Library conventions
2. Create a **documentation** agent that generates API docs in a consistent format
3. Create a **migration** agent that helps convert JavaScript to TypeScript

## Reflection

- How did defining a clear structure affect the agent's output?
- What's the difference between a good agent definition and a vague one?
- How could your team benefit from shared agent definitions in the repository?
