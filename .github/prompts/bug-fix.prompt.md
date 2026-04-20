# Bug Diagnosis Template

Use this structured approach to diagnose and fix bugs in the NBA application.

## Step 1 — Reproduce

Describe the bug:
- **What you expected**: [expected behavior]
- **What actually happened**: [actual behavior]
- **Steps to reproduce**: [1. Go to… 2. Click… 3. See error…]
- **Error message** (if any): [paste error]

## Step 2 — Locate

Narrow down the source:
- Is the error on the **frontend** (browser console, React error) or **backend** (Flask log, API response)?
- Which file and function is involved?
- What HTTP status code is returned? (200, 400, 404, 500?)

## Step 3 — Analyze

Root-cause the issue:
- Is there a **route mismatch** between frontend fetch URL and backend route?
- Is there a **data shape mismatch** (frontend expects array, backend returns object)?
- Is there a **missing null/error check**?
- Is there a **CORS issue**?

## Step 4 — Fix

Apply the smallest change that fixes the issue:
- Change only the relevant line(s)
- Preserve existing behavior for other callers
- Add a comment explaining why the fix is needed

## Step 5 — Verify

Confirm the fix:
- Restart backend if Python files changed
- Refresh frontend page
- Check browser console and network tab for errors
- Test edge cases (empty data, invalid input)
