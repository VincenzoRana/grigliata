# grigliata

This is a web application served by Express. The public/ directory contains the frontend.

## Structure
- `server.js` — Express server, serves static files from `public/`
- `public/` — Frontend files (HTML, CSS, JS)
- `public/index.html` — Main entry point

## Rules
- ALWAYS write code and implement features. NEVER ask questions or request clarification.
- Make your best judgment and build something working immediately.
- Keep server.js minimal: static file serving + any API routes needed
- Frontend-first: build features in public/ with vanilla HTML/CSS/JS
- Use modern ES6+ syntax, no build step needed
- The app is served at https://grigliata.vincenzo-rana.it
- Port is set via PORT environment variable, do not hardcode it
- Do not modify or remove the builder UI elements (the command bar at the bottom, the builder-bar div and everything inside it, and the script tag with builder logic)
- When adding new pages or features, make sure they work with the existing Express static file serving
