# API Endpoint Generator

Generate a new Flask REST API endpoint following the project conventions.

## Project Conventions

- **Framework**: Python Flask 3.0
- **Data source**: JSON files in `backend/data/`
- **Data loader**: `load_json_file(filename)` helper function
- **Response format**: Always return `jsonify(...)` with an HTTP status code
- **Error handling**: Wrap in try/except, log with `print(f'Error: {e}')`, return JSON error
- **CORS**: Already configured globally, no per-route CORS needed

## Template

```python
@app.route('/api/<resource>', methods=['GET'])
def get_<resource>():
    """<Description of what the endpoint returns>"""
    try:
        data = load_json_file('<resource>.json')
        if data is None:
            return jsonify({'error': 'Failed to load <resource> data'}), 500

        # Optional: filtering, searching, pagination
        return jsonify(data), 200
    except Exception as e:
        print(f'Error serving <resource> data: {e}')
        return jsonify({'error': 'Failed to load <resource> data'}), 500
```

## Instructions

When using this prompt file, specify:
1. The resource name (e.g., "teams", "seasons")
2. The data file it reads from
3. Any query parameters for filtering
4. The expected response shape
