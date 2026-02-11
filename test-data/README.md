# Playwright POM Automation Framework

UI automation framework built with Playwright and TypeScript using Page Object Model (POM) architecture.

## Overview

This project demonstrates a structured automation framework with:

- Page Manager pattern
- Page Object Model
- Custom Playwright fixtures
- Safe navigation and click handling
- Ad-blocking layer for test stability
- Data-driven testing approach

The framework is designed to be scalable and maintainable, supporting UI and API automation.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- POM Architecture
- Custom Fixtures
- CI-ready structure

## Project Structure

page-objects/ # Page Object classes
tests/ # Test specs
test-data/ # Test data
utils/ # Custom fixtures and helpers
## Installation

npm install


## Run Tests

npx playwright test


Run in headed mode:

npx playwright test --headed


View report:

npx playwright show-report


## Future Improvements

- API test integration
- CI pipeline integration (Jenkins / GitHub Actions)
- Environment configuration support
- Parallel execution optimization