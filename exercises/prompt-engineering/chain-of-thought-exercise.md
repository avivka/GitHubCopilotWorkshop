# Exercise: Chain-of-Thought Prompting

## Objective

Build a complex multi-step feature by guiding the AI through **step-by-step reasoning** before implementation.

## Background

Chain-of-thought prompting asks the AI to think through the problem before writing code. By breaking down the task into logical steps, the AI produces better architecture, handles edge cases, and makes more thoughtful design decisions.

## Your Task

Build a complete **Player Comparison** feature — backend API + frontend page.

### Instructions

1. Open GitHub Copilot Chat
2. Attach the prompt file `.github/prompts/chain-of-thought.prompt.md` as context
3. Write a prompt that walks through the reasoning:

   ```
   I want to build a player comparison feature. Think step by step:

   Step 1 - Data: What data do we need? Look at backend/data/player-stats.json
   for the available fields.

   Step 2 - API: Design a GET /api/player-compare endpoint that accepts
   ?player1=<id>&player2=<id> and returns both players' full stats.

   Step 3 - Frontend: Design a page at /player-compare that shows two players
   side by side with their stats. Use Tailwind CSS and shadcn/ui cards.

   Step 4 - Edge cases: What if a player ID doesn't exist? What if both IDs
   are the same? How should the UI handle loading and errors?

   Step 5 - Implement the backend endpoint first, then the frontend page.
   ```

4. Review Copilot's reasoning at each step
5. Accept or refine the implementation
6. Test the backend:

   ```bash
   curl "http://localhost:8080/api/player-compare?player1=1&player2=2"
   curl "http://localhost:8080/api/player-compare?player1=999&player2=1"
   ```

7. Open `http://localhost:3000/player-compare` to verify the frontend

## What to Observe

- Did Copilot identify edge cases you hadn't considered?
- Was the step-by-step reasoning visible in the response?
- How did the quality compare to a single "build a comparison feature" prompt?

## Reflection

- When is chain-of-thought most valuable? (complex features, architectural decisions)
- When is it overkill? (simple CRUD, one-line fixes)
- How can you use this technique in your daily work?
