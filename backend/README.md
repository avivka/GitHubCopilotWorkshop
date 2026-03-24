# NBA Sports Application — Backend API

Python Flask backend service for the NBA Sports Application.

## Overview

This backend provides RESTful API endpoints for the NBA Sports Application, including:
- NBA game results
- Team information and standings
- Player information, stats, search, and comparison
- Stadium information
- Coach management
- Performance optimization demos

## Technology Stack

- **Python 3.8+**
- **Flask 3.0.0** — Web framework
- **Flask-CORS** — Cross-origin resource sharing support
- **JSON** — Data storage

## Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

## Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv

   # On Windows
   venv\Scripts\activate

   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

## Running the Backend

1. **Start the Flask server:**
   ```bash
   python app.py
   ```

2. **The server will start on:**
   ```
   http://localhost:8080
   ```

3. **Verify the server is running:**
   ```bash
   curl http://localhost:8080/api/health
   ```

## API Endpoints

### NBA Game Results
- **GET** `/api/nba-results` — Get all NBA game results (21 games)

### Teams
- **GET** `/api/teams` — Get all 30 NBA teams
  - Optional query: `?conference=Eastern` or `?conference=Western`
- **GET** `/api/standings` — Get conference standings (sorted by championships)

### Player Information
- **GET** `/api/player-info` — Get filtered player info (id, name, team, weight, height, position)
- **GET** `/api/players/<id>` — Get a single player by ID
- **GET** `/api/search/players?q=<query>` — Search players by name (case-insensitive)
- **GET** `/api/team-roster/<team>` — Get all players on a team (partial match)

### Player Statistics
- **GET** `/api/player-stats` — Get enriched player statistics (PPG, APG, RPG, FG%, career highlights, draft info)
- **GET** `/api/player-compare?player1=<id>&player2=<id>` — Compare two players side by side

### Stadiums
- **GET** `/api/stadiums` — Get all NBA stadium information (15 stadiums)

### Coaches
- **GET** `/api/coaches` — Get all coaches (12 coaches)
- **GET** `/api/coaches/<id>` — Get a specific coach by ID
- **POST** `/api/coaches` — Create a new coach
- **PUT** `/api/coaches/<id>` — Update an existing coach
- **DELETE** `/api/coaches/<id>` — Delete a coach

### Other Endpoints
- **POST** `/api/player` — Create a new player (NOTE: intentional route name for workshop bug-fix exercise)
- **GET** `/api/optimize` — Performance optimization demo (intentionally slow)
- **POST** `/api/summarize` — Summarization endpoint (placeholder)
- **GET** `/api/press-conferences` — Press conferences (placeholder)
- **GET** `/api/health` — Health check endpoint

## Data Files

Data is stored in JSON files in the `data/` directory:

| File | Records | Description |
|------|---------|-------------|
| `nba-games.json` | 21 | NBA game results |
| `teams.json` | 30 | All NBA teams (name, city, conference, division, championships, arena) |
| `player-info.json` | 25 | Player profiles (name, team, position, height, weight, stats) |
| `player-stats.json` | 26 | Detailed stats (PPG, APG, RPG, FG%, career highlights, draft info) |
| `coaches.json` | 12 | Coaches with achievements |
| `stadiums.json` | 15 | Stadiums with capacity and location |
| `seasons.json` | 10 | Historical seasons (champion, MVP, top scorer, ROTY) |

## CORS Configuration

The backend accepts requests from:
- `http://localhost:3000` / `http://127.0.0.1:3000`
- `http://localhost:3001` / `http://127.0.0.1:3001`

## Project Structure
```
backend/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── data/              # JSON data files
│   ├── nba-games.json
│   ├── teams.json
│   ├── player-info.json
│   ├── player-stats.json
│   ├── stadiums.json
│   ├── coaches.json
│   └── seasons.json
└── README.md          # This file
```

## Error Handling

All endpoints return JSON error responses:
- **400** — Bad Request (missing required fields or parameters)
- **404** — Resource Not Found
- **500** — Internal Server Error

## Troubleshooting

### Port Already in Use
```bash
lsof -ti:8080 | xargs kill -9
```

### Dependencies Not Found
```bash
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### CORS Issues
Verify backend is running on port 8080 and frontend on port 3000.
