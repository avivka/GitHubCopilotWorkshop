# Exercise: Zero-Shot Prompting

## Objective

Create a new API endpoint using **only a description** — no code examples provided.

## Background

In zero-shot prompting, you give the AI a task description without any examples. The AI must rely on its training knowledge and the project context to generate the correct code.

## Your Task

Create a `GET /api/search/players` endpoint that searches players by name.

### Requirements

1. Accept a query parameter `?q=` with a search term
2. Search the `player-info.json` data for matching player names (case-insensitive)
3. Return all matching players as a JSON array
4. Return `400` with an error message if no query is provided
5. Return an empty array `[]` if no matches found

### Instructions

1. Open GitHub Copilot Chat
2. Attach the prompt file `.github/prompts/zero-shot.prompt.md` as context
3. Write a prompt like:

   ```
   Create a GET /api/search/players endpoint in backend/app.py that accepts
   a ?q= query parameter and searches player-info.json for matching player
   names. Make it case-insensitive. Return 400 if no query is provided.
   ```

4. Review the generated code
5. Add it to `backend/app.py`
6. Test with curl:

   ```bash
   curl "http://localhost:8080/api/search/players?q=lebron"
   curl "http://localhost:8080/api/search/players?q=curry"
   curl "http://localhost:8080/api/search/players"  # should return 400
   ```

## Reflection

- How accurate was the zero-shot result?
- Did Copilot follow the project's existing code patterns?
- What would you change about your prompt to get a better result?

## Bonus

Try the same exercise but with a **different model** (switch between GPT-4.1 and Claude Sonnet 4.5). Compare the outputs.
