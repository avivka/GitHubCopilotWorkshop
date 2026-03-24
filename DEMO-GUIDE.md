# Demo Guide — Presenter's Step-by-Step Reference

This guide is for the **workshop presenter**. It contains exact commands, timing, and troubleshooting for each demo.

---

## Pre-Workshop Checklist

- [ ] Clone the repo and switch to `workshop/audiocodes-standalone-v2` branch
- [ ] Backend running: `cd backend && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt && python app.py`
- [ ] Frontend running: `cd frontend && npm install && echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local && npm run dev`
- [ ] VS Code open with GitHub Copilot extension installed and authenticated
- [ ] Copilot Chat working (test with a simple question)
- [ ] Browser open at `http://localhost:3000`
- [ ] Terminal ready for curl commands
- [ ] Verify all endpoints: `curl http://localhost:8080/api/health`

---

## Timing Table

| Task | Demo | Duration | Key Demo Point |
|------|------|----------|---------------|
| 0 | Setup walkthrough | 15 min | Model selection |
| 1 | Core basics | 45 min | @workspace, /doc, /tests, bug fix |
| 2 | Prompt engineering | 45 min | Zero-shot vs one-shot vs CoT |
| 3 | Agents | 45 min | Study agent, create agent, vision |
| 4 | Plan mode | 30 min | Architecture review |
| — | **Break** | 15 min | — |
| 5 | Spec-driven dev | 30 min | Write spec, implement from spec |
| 6 | MCP | 30 min | Playwright testing |
| 7 | CLI & OpenCode | 30 min | Terminal Copilot, comparison |
| 8 | Extensions | 15 min | Effective AI Kit |

---

## Demo 1: Environment & Model Selection (Task 0)

**Goal**: Show participants how to set up and choose models.

1. Show VS Code with the project open
2. Open Copilot Chat panel
3. Click the model selector dropdown
4. Switch between GPT-4.1 and Claude Sonnet 4.5
5. Ask a simple question in each mode to show the difference

**Talking point**: "Choose GPT-4.1 for general tasks, Claude Sonnet 4.5 for complex reasoning and agent mode."

---

## Demo 2: @workspace Exploration (Task 1)

**Goal**: Show how Copilot understands the full codebase.

1. Open Copilot Chat
2. Type: `@workspace What is the architecture of this application?`
3. Show how Copilot references multiple files
4. Type: `@workspace Which API endpoints are available in the backend?`
5. Show the comprehensive list

**Talking point**: "@workspace gives Copilot context about your entire project, not just the open file."

---

## Demo 3: /doc and /tests (Task 1)

**Goal**: Show documentation and test generation.

1. Open `backend/app.py`
2. Select the `get_coaches` function
3. Press `Cmd+I`, type `/doc` — show generated docstring
4. Open `frontend/src/util/calculator.js` (if exists)
5. Select all code, press `Cmd+I`, type `/tests`
6. Show generated test file

**Talking point**: "These slash commands save hours of documentation and test writing."

---

## Demo 4: Bug Fix (Task 1)

**Goal**: Show debugging workflow with Copilot.

1. Navigate to `http://localhost:3000/errors`
2. Fill in the form, click Create — show 404 error
3. Open Copilot Chat: "Why is the player creation endpoint returning 404?"
4. Attach `frontend/src/app/(dashboard)/errors/page.tsx` and `backend/app.py`
5. Show Copilot identifying the route mismatch (`/api/player` vs `/api/players`)
6. Fix the route in `backend/app.py`

**Talking point**: "Copilot can cross-reference frontend and backend code to find integration bugs."

---

## Demo 5: Zero-Shot vs One-Shot (Task 2)

**Goal**: Show the difference between prompt engineering techniques.

### Zero-shot:
1. Open Copilot Chat
2. Prompt: "Create a GET /api/search/players endpoint that accepts ?q= and searches player-info.json"
3. Show the result

### One-shot:
1. Attach `.github/prompts/one-shot.prompt.md`
2. Prompt: "Following the coaches example in the prompt file, create GET /api/teams with optional ?conference= filter"
3. Show how the result matches the example's style

**Talking point**: "One-shot prompting produces more consistent code because the AI has a concrete pattern to follow."

### Test both:
```bash
curl "http://localhost:8080/api/search/players?q=lebron"
curl "http://localhost:8080/api/teams?conference=Eastern"
```

---

## Demo 6: Chain-of-Thought (Task 2)

**Goal**: Show step-by-step reasoning for complex features.

1. Attach `.github/prompts/chain-of-thought.prompt.md`
2. Prompt: "Think step by step about building a player comparison feature. What data do we need? What API? What UI? What edge cases? Then implement."
3. Show Copilot's reasoning process
4. Show the generated backend endpoint and frontend page

**Talking point**: "For complex features, asking the AI to think before coding produces better architecture."

---

## Demo 7: Agent Study (Task 3)

**Goal**: Show how agents work and how to create one.

1. Open `.github/agents/code-reviewer.agent.md`
2. Walk through the structure: role, rubric, severity levels, output format
3. Switch to the code-reviewer agent in Copilot Chat
4. Prompt: "Review backend/app.py for code quality issues"
5. Show structured output with severity levels

**Talking point**: "Agents are reusable, shareable AI configurations. Your whole team uses the same review standards."

---

## Demo 8: Plan Mode (Task 4)

**Goal**: Show how to use Copilot for architecture review.

1. Open Copilot Chat
2. Prompt: "Analyze the architecture of this NBA application. Create a plan for adding a real-time game updates feature. Don't implement — just plan."
3. Show the structured plan output
4. Discuss how plan mode prevents AI from rushing into code

**Talking point**: "Always plan complex features before implementing. Plan mode is your architectural review tool."

---

## Demo 9: MCP + Playwright (Task 6)

**Goal**: Show automated browser testing with MCP.

1. Ensure the app is running
2. Open Agent mode with Playwright MCP enabled
3. Prompt:
   ```
   Using Playwright MCP, test the NBA app:
   1. Navigate to http://localhost:3000
   2. Click "NBA Scores"
   3. Verify scores are displayed
   4. Take a screenshot
   ```
4. Show Copilot controlling the browser
5. Show the screenshot and test results

**Talking point**: "MCP extends Copilot beyond code — it can test your app, interact with APIs, and more."

---

## Demo 10: Copilot CLI (Task 7)

**Goal**: Show terminal-based AI development.

1. Open terminal
2. Launch: `copilot`
3. Prompt: "What files are in the backend/data directory? Show me the structure."
4. Prompt: "Add a GET /api/seasons endpoint that returns data from seasons.json"
5. Show Copilot reading files, generating code, and applying changes
6. Show the `/model` command to switch models

**Talking point**: "Copilot CLI brings AI-powered development to your terminal — same power, different interface."

---

## Troubleshooting Quick Reference

| Issue | Fix |
|-------|-----|
| Copilot not responding | Check authentication: Copilot icon in status bar |
| Backend port in use | `lsof -ti:8080 \| xargs kill -9` |
| Frontend port in use | `npm run dev -- -p 3001` |
| CORS errors | Check backend is running on 8080, `.env.local` has correct URL |
| Model not available | Not all models available in all regions/plans |
| MCP not working | Ensure MCP server is added in Agent mode tools |
| Agent not showing | Check `.github/agents/` file has `.agent.md` extension |
| Prompt file not loading | Check `.github/prompts/` file has `.prompt.md` extension |

---

## Post-Workshop

- Remind participants about the [exercises/](exercises/) directory for continued practice
- Share the [awesome-copilot](https://github.com/github/awesome-copilot) resource
- Encourage installing the Effective AI Kit extension
- Collect feedback
