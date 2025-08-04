# Scripts

This folder contains JavaScript scripts for reviewing changes to the secondary navigation on NYU Steinhardt websites. Each script is designed to be run in the browser console and provides sticky navigation with dynamic titles.

## Files

### `default.js`
- **Purpose**: Main navigation script for non-program specific pages
- **Target URLs**: Graduate study abroad pages
- **Features**:
  - Inserts a "Graduate Study Abroad" title into the secondary navigation
  - Implements sticky navigation behavior
  - Adds custom CSS styling for the navigation elements
  - Uses Intersection Observer API for scroll detection

### `degree.js`
- **Purpose**: Navigation script for degree-specific pages
- **Target URLs**: Degree program pages (e.g., OTD Occupational Therapy Professional)
- **Features**:
  - Inserts a "OTD Occupational Therapy Professional" title into the secondary navigation
  - Implements sticky navigation behavior
  - Adds custom CSS styling for the navigation elements
  - Uses Intersection Observer API for scroll detection

### `program.js`
- **Purpose**: Navigation script for program-specific pages
- **Target URLs**: Program pages (e.g., Occupational Therapy)
- **Features**:
  - Inserts a "Occupational Therapy" title into the secondary navigation
  - Implements sticky navigation behavior
  - Adds custom CSS styling for the navigation elements
  - Uses Intersection Observer API for scroll detection

## Usage

These scripts are designed to be executed in the browser console on the respective NYU Steinhardt pages. 

1. Open your browser's console.
2. When you first try pasting into the console, you may be prevented and asked to give permission. (e.g. Type "allow pasting" to paste in code; from Chrome.)
3. Paste the script and hit enter.
4. Review changes.
