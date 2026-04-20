# One-Shot Prompt Template

Use the provided **example** as a pattern to follow when implementing the new endpoint.

## Example: Coaches GET Endpoint

Here is an existing endpoint from `backend/app.py` that returns all coaches:

```python
@app.route('/api/coaches', methods=['GET'])
def get_coaches():
    """Get all NBA coaches"""
    try:
        coaches = load_json_file('coaches.json')
        if coaches is None:
            return jsonify({'error': 'Failed to load coaches data'}), 500

        return jsonify(coaches), 200
    except Exception as e:
        print(f'Error serving coaches data: {e}')
        return jsonify({'error': 'Failed to load coaches data. Please try again later.'}), 500
```

## Task

Following the **exact same pattern** shown above, create a `GET /api/teams` endpoint that:
1. Loads data from `teams.json` using `load_json_file()`
2. Supports an optional query parameter `?conference=` to filter teams by conference (Eastern or Western)
3. Returns the full list if no filter is provided
4. Includes the same error-handling structure as the example
