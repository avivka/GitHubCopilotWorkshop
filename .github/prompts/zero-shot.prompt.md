# Zero-Shot Prompt Template

You are given a task with **no prior examples**. Use only the description and your knowledge of the project conventions to produce the result.

## Task

Create a new Flask API endpoint that:
- Accepts GET requests
- Returns JSON data from the appropriate data file in `backend/data/`
- Includes proper error handling with try/except
- Returns appropriate HTTP status codes (200 for success, 500 for errors)
- Follows the existing patterns in `backend/app.py`

## Exercise: Player Search Endpoint

Create a `GET /api/search/players` endpoint that:
1. Accepts a query parameter `?q=` with a player name (or partial name)
2. Searches the `player-info.json` data file
3. Returns all matching players (case-insensitive)
4. Returns 400 if no query is provided
5. Returns an empty array if no matches are found

**No example code is provided** — rely on Flask conventions and the project structure.
