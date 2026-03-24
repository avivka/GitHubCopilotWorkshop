# GitHub Copilot Standalone Workshop — NBA Sports Application

![Workshop Welcome Page](image/welcome-page.png)

Welcome to the GitHub Copilot Standalone Workshop! This hands-on workshop teaches you to leverage AI-powered development through a real NBA sports application built with **Next.js 14 (Frontend)** and **Python Flask (Backend)**.

All exercises use **GitHub Copilot directly in VS Code** — no github.com platform features required.

> **Note**: No mastery of JavaScript, Python, or Next.js is needed — AI will generate most of the code for you. This is a great opportunity to leverage AI to quickly learn popular frameworks.

## Workshop Structure

| Part | Duration | Topics |
|------|----------|--------|
| **Part 1: Foundations & Prompt Engineering** | 3 hours | Setup, Core Basics, Prompt Engineering, Agents, Plan Mode |
| **Part 2: Advanced Workflows** | 2 hours | Spec-Driven Development, MCP, CLI & OpenCode, Extensions |

## Prerequisites

### Required Software
1. **GitHub Copilot License**: Active GitHub Copilot Standalone license
2. **IDE Setup**: Install and update GitHub Copilot & GitHub Copilot Chat extensions in VS Code
3. **Authentication**: Login to GitHub Copilot and verify both code completions and chat work
4. **Frontend Runtime**: Install [Node.js](https://nodejs.org/en/download) & npm. Verify with:
   ```bash
   node -v
   npm -v
   ```
5. **Backend Runtime**: Install [Python 3.8+](https://www.python.org/downloads/) & pip. Verify with:
   ```bash
   python --version
   pip --version
   ```

### Optional for Advanced Features
- **Docker** (for MCP server tasks)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GitHubCopilotWorkshop
   ```

2. **Set up the Backend (Python Flask)**
   ```bash
   cd backend
   python -m venv venv

   # On Windows:
   venv\Scripts\activate

   # On macOS/Linux:
   source venv/bin/activate

   pip install -r requirements.txt
   python app.py
   ```
   Backend will run on http://localhost:8080

3. **Set up the Frontend (Next.js) — In a new terminal**
   ```bash
   cd frontend
   npm install
   echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local
   npm run dev
   ```
   Frontend will run on http://localhost:3000

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## Application Overview

**NBA Sports Companion** — Your NBA companion app:
- **NBA Scores**: Game results and statistics
- **Teams**: All 30 NBA teams with conference filtering
- **Player Information**: 25+ player profiles and stats
- **Player Comparison**: Side-by-side stat comparison
- **Stadiums**: 15 NBA venues
- **Coaches**: 12 coaches with achievements
- **Performance Optimization**: Code optimization exercises
- **Error Handling**: Debugging exercises

## Architecture

```
Browser (localhost:3000)
    ↓ HTTP Requests
Next.js 14 Frontend (TypeScript, Tailwind CSS, shadcn/ui)
    ↓ API Calls (fetch)
Flask Backend (localhost:8080)
    ↓ JSON Response
Frontend renders data
```

## Project Structure

```
├── backend/                   # Python Flask Backend
│   ├── app.py                # Main Flask application (15+ endpoints)
│   ├── requirements.txt      # Python dependencies
│   ├── data/                 # JSON data files
│   │   ├── nba-games.json    # 21 NBA games
│   │   ├── stadiums.json     # 15 stadiums
│   │   ├── player-info.json  # 25 players
│   │   ├── player-stats.json # 26 players with detailed stats
│   │   ├── coaches.json      # 12 coaches
│   │   ├── teams.json        # 30 NBA teams
│   │   └── seasons.json      # 10 seasons of history
│   └── README.md
├── frontend/                 # Next.js 14 Frontend
│   ├── src/
│   │   ├── app/(dashboard)/  # Pages
│   │   ├── components/       # Reusable UI components
│   │   └── lib/              # Utilities
│   └── package.json
├── .github/
│   ├── copilot-instructions.md  # Custom Copilot instructions
│   ├── agents/               # Agent definitions
│   │   ├── code-reviewer.agent.md
│   │   ├── api-designer.agent.md
│   │   ├── refactoring.agent.md
│   │   ├── doc-updater.agent.md
│   │   └── plan.agent.md
│   ├── prompts/              # Reusable prompt templates
│   │   ├── zero-shot.prompt.md
│   │   ├── one-shot.prompt.md
│   │   ├── chain-of-thought.prompt.md
│   │   ├── api-endpoint.prompt.md
│   │   ├── component-generator.prompt.md
│   │   ├── bug-fix.prompt.md
│   │   └── testing-strategy.prompt.md
│   └── skills/               # Agent skills
├── exercises/                # Hands-on exercise files
│   ├── prompt-engineering/
│   └── agent-creation/
├── PRESENTATION.md           # Slide deck for presenter
└── DEMO-GUIDE.md             # Step-by-step demo guide
```

---

# Part 1: Foundations & Prompt Engineering (3 hours)

---

## Task 0 — Setup & Model Selection (15 min)

### Environment Setup

#### Backend Setup (Python Flask)
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv

   # On Windows:
   venv\Scripts\activate

   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the Flask server:**
   ```bash
   python app.py
   ```
   The backend will be available at http://localhost:8080

5. **Verify the backend is running:**
   ```bash
   curl http://localhost:8080/api/health
   ```

#### Frontend Setup (Next.js)
1. **Open a new terminal and navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Create environment configuration:**
   ```bash
   echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at http://localhost:3000

5. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

### Choose Your AI Model

Select the appropriate AI model based on your task:

- **GPT-4.1**: Best for general development, UI components, basic API routes, code documentation, and bug fixes
- **Claude Sonnet 4.5**: Excellent for code optimization, complex problem-solving, agent mode tasks, and performance improvements

**How to Switch Models**:
1. Open GitHub Copilot Chat
2. Look for the model selector dropdown (usually shows current model)
3. Click to see available options and select your preferred model

![Model Selection](image/chat-model-selection.png)

---

## Task 1 — Core Copilot Basics (45 min)

### 1.1 Repository Exploration with @workspace

**Imagine you are a new developer who just joined the team. Explore the project and understand its components.**

1. Open GitHub Copilot Chat in VS Code
2. Use `@workspace` to query the entire project:
   - `@workspace Can you tell me about this repository?`
   - `@workspace What is the architecture of this application?`
   - `@workspace Where is the backend API located and what framework is it using?`
   - `@workspace Which API endpoints are available in the backend?`
   - `@workspace Where are the main UI components in the frontend?`
   - `@workspace What packages does each service use?`

### 1.2 Custom Instructions

GitHub Copilot uses the `.github/copilot-instructions.md` file to understand your project context and coding conventions.

**Instructions:**
1. Open `.github/copilot-instructions.md` and read the existing instructions
2. Test the custom instructions by asking Copilot any coding question
3. Notice how responses include TypeScript for frontend, Python for backend, error handling, and proper architectural patterns
4. Try modifying the instructions (e.g., add "Always use single quotes in TypeScript") and see how Copilot adapts

### 1.3 Code Review with Copilot

**Instructions:**
1. Open `backend/app.py`
2. Select the `get_nba_results` function code
3. Right-click and choose **Copilot > Review and Comment**
4. Review Copilot's feedback and apply suggested improvements
5. Repeat for other API endpoint functions

![Review and Comment](image/review-and-comment-comments.png)

### 1.4 Add Comments to Code with /doc

**Instructions:**
1. Open `backend/app.py`
2. Select the `get_coaches` function
3. Use `/explain` in Copilot Chat for a detailed breakdown
4. Select the function, press `Cmd+I` (macOS) or `Ctrl+I` (Windows)
5. Type `/doc` — Copilot will generate documentation-style comments
6. Apply to other functions in the backend

### 1.5 Generate Unit Tests with /tests

**Instructions:**
1. Open `frontend/src/util/calculator.js`
2. Select all the code, press `Cmd+I` / `Ctrl+I`
3. Type `/tests` — Copilot will generate unit tests
4. Save tests to `frontend/src/util/calculator.test.js`
5. Run: `npm test src/util/calculator.test.js` from the `frontend` directory
6. If tests fail, copy the error, select the failing test, press `Cmd+I`, type `/fix` with the error

### 1.6 Fix a Bug with Copilot

**Instructions:**
1. Navigate to http://localhost:3000/errors (Add NBA Player page)
2. Fill in the form and click "Create player"
3. You should see a 404 error — the API endpoint was not found!
4. Ask Copilot to `/explain` the error with the context of `frontend/src/app/(dashboard)/errors/page.tsx`
5. The frontend sends a POST request to `/api/players` — but does this route exist in the backend?
6. Open `backend/app.py` and search for the player creation endpoint
7. **Find the bug**: The backend route is `/api/player` but the frontend calls `/api/players` — a mismatch!
8. Fix the route name in `backend/app.py`
9. Restart the backend and test again — you should see "Player created successfully!"

### 1.7 Create a New Feature

Create a player information display page using Copilot.

**Instructions:**
1. Add these files to Copilot Chat context:
   - `backend/app.py` — Look at the `get_player_info` function
   - `backend/data/player-info.json` — Players data

2. Ask Copilot in agent mode:
   ```
   Create a new Next.js page at /players-info that fetches player data from
   the backend API endpoint /api/player-info (running on http://localhost:8080).
   Display a list of player cards showing id, name, team, weight, height,
   and position. Use Tailwind CSS and shadcn components. Handle loading
   states and errors.
   ```

3. Create the page in `frontend/src/app/(dashboard)/players-info/page.tsx`
4. Open http://localhost:3000/players-info and verify results

---

## Task 2 — Prompt Engineering (45 min)

### 2.1 Zero-Shot Prompting

In zero-shot prompting, you give the AI a task with **no examples**. The AI relies on its training and project context.

**Exercise:**
1. Open the exercise file: [exercises/prompt-engineering/zero-shot-exercise.md](exercises/prompt-engineering/zero-shot-exercise.md)
2. Attach `.github/prompts/zero-shot.prompt.md` as context in Copilot Chat
3. Prompt Copilot to create the `/api/search/players` endpoint
4. Add the endpoint to `backend/app.py`
5. Test:
   ```bash
   curl "http://localhost:8080/api/search/players?q=lebron"
   curl "http://localhost:8080/api/search/players?q=curry"
   ```

### 2.2 One-Shot Prompting

In one-shot prompting, you provide **one example** for the AI to follow.

**Exercise:**
1. Open: [exercises/prompt-engineering/one-shot-exercise.md](exercises/prompt-engineering/one-shot-exercise.md)
2. Attach `.github/prompts/one-shot.prompt.md` as context
3. This prompt file contains the coaches GET endpoint as an example
4. Ask Copilot to follow that pattern to create `GET /api/teams`
5. Compare: How did the one-shot result differ from the zero-shot?

### 2.3 Chain-of-Thought Prompting

In chain-of-thought prompting, you ask the AI to **reason step by step** before implementing.

**Exercise:**
1. Open: [exercises/prompt-engineering/chain-of-thought-exercise.md](exercises/prompt-engineering/chain-of-thought-exercise.md)
2. Attach `.github/prompts/chain-of-thought.prompt.md` as context
3. Ask Copilot to think through the player comparison feature step by step
4. Review each step before proceeding to implementation
5. Test:
   ```bash
   curl "http://localhost:8080/api/player-compare?player1=1&player2=2"
   ```

### 2.4 Prompt Files for Larger Tasks

Use prompt templates as reusable context for building complete features.

**Exercise:**
1. Attach **both** prompt files to Copilot Chat:
   - `.github/prompts/api-endpoint.prompt.md`
   - `.github/prompts/component-generator.prompt.md`
2. Ask Copilot in agent mode:
   ```
   Using the api-endpoint and component-generator templates as guides,
   build a complete Teams feature:
   1. Create the backend endpoint for /api/teams (loads teams.json, supports ?conference= filter)
   2. Create the frontend page at /teams that displays teams in cards with conference filtering
   3. Follow the patterns in both prompt templates
   ```
3. Navigate to the Teams page at http://localhost:3000/teams

### 2.5 Prompt Refinement and Rollback

**Instructions:**
1. Ask Copilot Chat to create an NBA player card component
2. After receiving the response, click on your original prompt in the chat history
3. Edit the prompt to request additional features (e.g., "also add player statistics and hover effects")
4. Switch to a different model (e.g., from GPT-4.1 to Claude Sonnet 4.5)
5. Apply the changes — Copilot reverts and reapplies with the new context
6. Compare the outputs from different models

---

## Task 3 — Agents (45 min)

### 3.1 Built-in Chat Participants

Copilot has built-in participants that provide specialized assistance:

| Participant | What It Does |
|-------------|-------------|
| `@workspace` | Answers questions about your codebase |
| `@vscode` | Answers questions about VS Code settings and commands |
| `@terminal` | Helps with terminal commands and shell scripts |

**Try these:**
- `@workspace How are the frontend and backend connected?`
- `@vscode How do I change the font size?`
- `@terminal How do I find which process is using port 8080?`

### 3.2 Study an Existing Agent

**Exercise:**
1. Open: [exercises/agent-creation/study-existing-agent.md](exercises/agent-creation/study-existing-agent.md)
2. Read `.github/agents/code-reviewer.agent.md`
3. Understand the structure: role, rubric, severity levels, output format, tools
4. Switch to the code-reviewer agent in Copilot Chat
5. Ask it to review `backend/app.py`
6. Observe how it follows the defined structure

### 3.3 Create Your Own Agent

**Exercise:**
1. Open: [exercises/agent-creation/create-your-agent.md](exercises/agent-creation/create-your-agent.md)
2. Create `.github/agents/performance-analyzer.agent.md`
3. Define: role, analysis categories, severity levels, output format
4. Test by asking it to analyze the `/api/optimize` endpoint
5. Iterate and refine based on output quality

### 3.4 Agent Mode Feature Building

Use Copilot's agent mode to build a complete feature autonomously.

**Instructions:**
1. Open Copilot Chat, switch to **Agent mode** with **Claude Sonnet 4.5**
2. Prompt:
   ```
   Let's enhance this application by adding an NBA Stadiums page.

   1. Verify the backend /api/stadiums endpoint exists in backend/app.py
   2. Create a new Next.js page at frontend/src/app/(dashboard)/stadiums/page.tsx
      that fetches stadium data from the backend API
   3. Display stadium cards showing name, location, capacity, and team
   4. Use Tailwind CSS and shadcn components
   ```
3. Review each step the agent suggests
4. Accept or reject changes
5. Verify at http://localhost:3000/stadiums

### 3.5 Vision

You can attach images directly in Copilot Chat for visual-to-code generation.

**Instructions:**
1. Open Copilot Chat with Claude Sonnet 4.5
2. Navigate to the `image/` folder and attach `login.png` to your chat
3. Prompt in agent mode:
   ```
   Write a React component based on this login.png image.
   ```
4. Review the generated component and integrate into the app

---

## Task 4 — Plan Mode & Code Review (30 min)

### 4.1 Plan Mode for Architecture Review

Plan mode lets Copilot analyze and plan without writing code immediately.

**Instructions:**
1. Open Copilot Chat
2. Prompt:
   ```
   Analyze the architecture of this NBA application. Create a detailed plan
   for adding a real-time game updates feature using WebSockets. Include:
   - Backend changes needed
   - Frontend changes needed
   - Data flow diagram
   - Potential challenges
   Don't implement — just create the plan.
   ```
3. Review the plan
4. Discuss the approach before any implementation

### 4.2 Local Code Review Workflow

Use Copilot to conduct code reviews entirely within VS Code.

**Instructions:**
1. Make a change to any file (e.g., add a new endpoint in `backend/app.py`)
2. Open Copilot Chat and select the **code-reviewer** agent
3. Prompt: "Review my recent changes for code quality, security, and performance"
4. Review the structured feedback with severity levels
5. Apply the suggested improvements

---

# Part 2: Advanced Workflows (2 hours)

---

## Task 5 — Spec-Driven Development (30 min)

### 5.1 Write a Specification as a Prompt File

Create a detailed spec for the Player Comparison feature.

**Instructions:**
1. Create a new prompt file: `.github/prompts/player-compare-spec.prompt.md`
2. Write a specification that includes:
   ```markdown
   # Player Comparison Feature Specification

   ## Overview
   A page that allows users to select two NBA players and compare their
   statistics side by side.

   ## Backend API
   - Endpoint: GET /api/player-compare?player1=<id>&player2=<id>
   - Data source: player-stats.json
   - Response: { player1: {...}, player2: {...} }
   - Errors: 400 if missing params, 404 if player not found

   ## Frontend Page
   - Route: /player-compare
   - Two dropdown selectors for player selection
   - Side-by-side stat comparison cards
   - Visual indicators for which player leads each stat
   - Responsive layout (stacked on mobile)

   ## Tech Stack
   - Frontend: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
   - Backend: Python Flask
   - Data fetching: client-side fetch with loading/error states
   ```

### 5.2 Implement from Spec with Agent Mode

1. Open Copilot Chat in **Agent mode**
2. Attach your spec prompt file as context
3. Prompt:
   ```
   Implement the player comparison feature according to the attached
   specification. Start with the backend endpoint, then build the
   frontend page.
   ```
4. Review and accept the generated code
5. Test at http://localhost:3000/player-compare

---

## Task 6 — MCP Servers (30 min)

### 6.1 MCP Introduction

**Model Context Protocol (MCP)** extends Copilot with external tools and capabilities.

**Setup:**
1. Open Copilot Chat in **Agent mode**
2. Click the tools icon
3. Click "Add MCP server..."
4. Browse and add: **Playwright**

### 6.2 Playwright MCP — Automated Testing

**Instructions:**
1. Ensure your app is running (`npm run dev` and `python app.py`)
2. In Agent mode with Playwright MCP enabled, prompt:
   ```
   Using Playwright MCP, test the complete user flow:
   1. Navigate to http://localhost:3000
   2. Click on "NBA Scores" in the navigation
   3. Verify game scores are displayed
   4. Click on "Stadiums"
   5. Verify stadium cards are rendered
   6. Take screenshots of each page
   7. Generate a test report with pass/fail results
   ```
3. Review the automated test execution and results

### 6.3 Agent Skills

**Agent Skills** are reusable task packages stored in `.github/skills/`.

This workshop includes a **WebApp Testing** skill at `.github/skills/webapp-testing/SKILL.md`.

**Instructions:**
1. Open `.github/skills/webapp-testing/SKILL.md` and review the structure
2. Use the skill in Agent mode:
   ```
   Using the webapp-testing skill, test the players-info page.
   Navigate to http://localhost:3000/players-info, verify player
   cards are displayed, and take a screenshot.
   ```

### 6.4 Build Your Own MCP Server (Bonus)

Create a weather MCP server in a new project:

```bash
mkdir weather && cd weather
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript
mkdir src && touch src/index.ts
```

Key components: Server setup with MCP SDK, helper functions for API requests, tool implementation for weather data, error handling and validation.

---

## Task 7 — CLI & OpenCode (30 min)

### 7.1 GitHub Copilot CLI Setup

**Installation:**
```bash
npm install -g @githubnext/github-copilot-cli
```

**Verify:**
```bash
copilot --version
```

**Launch:**
```bash
cd /path/to/your/project
copilot
```

### 7.2 CLI Exercises

#### Exercise 1: Add a Feature
```
Create a GET /api/seasons endpoint that returns historical season data
from seasons.json. Include champion, MVP, top scorer, and ROTY for each season.
```

#### Exercise 2: Search Functionality
```
Add a search bar to the Teams page that filters teams by name or city
in real-time as the user types.
```

#### Exercise 3: Player Statistics Page
```
Create a new page at /player-stats that shows a sortable table of player
statistics from the player-stats.json data. Add it to the navigation.
```

**Useful CLI Commands:**
```
/model  → Switch between AI models
/share  → Share session to markdown file
/mcp    → Manage MCP server configurations
/usage  → Display session usage metrics
```

### 7.3 Copilot CLI vs OpenCode Comparison

| Aspect | Copilot CLI | OpenCode |
|--------|------------|----------|
| **Authentication** | GitHub account | API keys (OpenAI, Anthropic, etc.) |
| **Models** | GitHub-managed | User-configurable (any provider) |
| **Cost** | Included in Copilot license | Pay-per-token |
| **Enterprise** | Full support, audit logs, SSO | Community-driven |
| **MCP Support** | Built-in | Configurable |
| **IDE Integration** | VS Code + CLI | Terminal-only |
| **Best for** | Dev teams on GitHub | Platform teams, multi-provider setups |

---

## Task 8 — Extensions & Wrap-Up (15 min)

### 8.1 Effective AI Kit

1. Open the VS Code extensions marketplace
2. Search for **"Effective AI Kit"** and install it
3. In Copilot Chat, type `/` to see available prompts:
   - `/create-readme`
   - `/dotnet-design-pattern-review`
4. Write a message to Copilot Chat — notice instruction files being referenced

### 8.2 Awesome Copilot Resources

Explore community-maintained resources at: https://github.com/github/awesome-copilot

Find additional:
- Prompt files and templates
- Agent definitions
- Custom instructions
- Best practices and tips

### 8.3 Q&A and Wrap-Up

**Key Takeaways:**
1. **Prompt quality matters** — Zero-shot, one-shot, and chain-of-thought produce different results
2. **Prompt files** make your AI interactions reusable and team-consistent
3. **Agents** create specialized AI personas for repeatable workflows
4. **Plan mode** prevents AI from rushing into wrong solutions
5. **MCP** extends Copilot with external tools like browser testing
6. **CLI** brings AI-powered development to the terminal

---

## Troubleshooting

### Backend Issues
- **Port 8080 already in use**: `lsof -ti:8080 | xargs kill -9`
- **Python dependencies not found**: Ensure virtual environment is activated
- **CORS errors**: Verify backend is running and CORS origins match your frontend URL

### Frontend Issues
- **API connection errors**: Check `.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:8080`
- **Build errors**: Run `npm install` to ensure all dependencies are installed
- **Port 3000 conflicts**: `npm run dev -- -p 3001`

### Copilot Issues
- **Copilot not responding**: Check authentication status in VS Code status bar
- **Model not available**: Not all models are available in all regions/plans
- **Agent not showing**: Ensure file has `.agent.md` extension in `.github/agents/`
- **Prompt file not loading**: Ensure file has `.prompt.md` extension in `.github/prompts/`

### Network Issues
- **Google Fonts errors during build**: Expected in restricted networks; app works with `npm run dev`
- **External API failures**: Some features may require internet access

---

## Additional Resources

- **Exercises**: See the [exercises/](exercises/) directory for hands-on practice
- **Presenter**: See [PRESENTATION.md](PRESENTATION.md) for slides and [DEMO-GUIDE.md](DEMO-GUIDE.md) for demo steps
- **Backend API**: See [backend/README.md](backend/README.md) for endpoint documentation

**Ready to begin?** Start with [Task 0](#task-0--setup--model-selection-15-min) and enjoy your GitHub Copilot journey!
