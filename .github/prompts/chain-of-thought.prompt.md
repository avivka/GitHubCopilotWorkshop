# Chain-of-Thought Prompt Template

Think through the problem **step by step** before writing any code. Document your reasoning at each stage.

## Task: Player Comparison Feature

Build a full-stack player comparison feature. Before implementing, reason through each step:

### Step 1 — Data Requirements
- What data do we need? (player stats, career highlights, physical attributes)
- Where does this data live? (`backend/data/player-stats.json`)
- What fields should be compared? (PPG, APG, RPG, FG%, career highlights)

### Step 2 — API Design
- What endpoint makes sense? `GET /api/player-compare?player1=<id>&player2=<id>`
- What validation is needed? (both IDs required, both must exist)
- What should the response shape look like?

### Step 3 — Frontend UI Layout
- How should two players be displayed side by side?
- What visual cues highlight which player leads each stat?
- Where does this page live? (`frontend/src/app/(dashboard)/player-compare/page.tsx`)

### Step 4 — Edge Cases
- What if a player ID doesn't exist?
- What if both IDs are the same?
- What about mobile/responsive layout?

### Step 5 — Implementation
Now implement the backend endpoint and frontend page following the reasoning above.

---

**Use this template to guide Copilot through complex, multi-step features.**
