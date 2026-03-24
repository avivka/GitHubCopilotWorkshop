# Exercise: One-Shot Prompting

## Objective

Create a new API endpoint by providing **one example** for the AI to follow.

## Background

In one-shot prompting, you provide a single example of the desired output pattern. The AI uses this example to understand the style, structure, and conventions, then applies them to a new task.

## Your Task

Create a `GET /api/teams` endpoint that returns all NBA teams, with optional conference filtering.

### Instructions

1. Open GitHub Copilot Chat
2. Attach the prompt file `.github/prompts/one-shot.prompt.md` as context
3. Also attach `backend/app.py` so Copilot can see the existing code
4. Write a prompt like:

   ```
   Using the one-shot prompt file as a guide, follow the coaches GET endpoint
   pattern to create a GET /api/teams endpoint. It should:
   - Load data from teams.json
   - Support optional ?conference= query parameter (Eastern or Western)
   - Return the full list if no filter is provided
   - Follow the same error-handling pattern as the coaches example
   ```

5. Review the generated code — does it match the example's structure?
6. Add it to `backend/app.py`
7. Test with curl:

   ```bash
   curl http://localhost:8080/api/teams
   curl "http://localhost:8080/api/teams?conference=Eastern"
   curl "http://localhost:8080/api/teams?conference=Western"
   ```

## Comparison: Zero-Shot vs One-Shot

After completing both exercises, compare:

| Aspect | Zero-Shot | One-Shot |
|--------|-----------|----------|
| Code structure match | ? | ? |
| Error handling quality | ? | ? |
| Consistency with project | ? | ? |
| Amount of editing needed | ? | ? |

## Reflection

- How did providing an example change the quality of the output?
- Did the one-shot result require less editing than the zero-shot?
- When would you choose zero-shot over one-shot in real development?
