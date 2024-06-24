# Progress Block

## Overview

The Progress Block project is a prototype designed for use in mobile web applications. Its main purpose is to display the progress of processes and their completion status. This project is built using TypeScript, SCSS, and HTML without frameworks and libraries.

## Features

- **API for Block State Management**: The block provides an API to manage its state.
- **Reusable Design**: The block is designed to be easily reusable in other applications.
- **States**:
  - **Normal**: The basic state where the size of the arc reflects a parameter or process progress. The start of the arc corresponds to 12 o'clock, and the end of the arc moves clockwise to the start position when the value reaches 100.
  - **Animated**: An independent state where the block or its elements start rotating with a certain period in the clockwise direction.
  - **Hidden**: A state that hides the block from the page.
- **Adaptive to Screen Orientation**: The application adapts to the landscape orientation for screen resolutions less than 1024px. The Pixel Perfect extension was used to control layout consistency at resolutions of 320px/568px according to the design mockups provided.

## Technologies Used

- **TypeScript/JavaScript** (using classes and MVC approach, without libraries and frameworks).
- **SCSS** (with CSS modules)
- **HTML** (for basic markup)

## Project Structure

```sh
src/
├── app
├──── components             # All components used in tha app
│ ├──── baseComponent        # Base Component for creation all html nodes and view components
│ ├──── progressBlock        # Progress Block Component folder
│ ├─────── controller        # Progress Block Component Controller
│ ├─────── model             # Progress Block Model
│ ├─────── view              # Progress Block View
│ ├─────── services          # Necessary services (animation service)
│ ├─────── progressBlock.ts  # Function which create and return an instance of Progress Block with API interface
│ └─── tags.ts               # Helpful functions for basic html tags (h1, div, label, input, etc.)
├──── app.ts                 # The app component
├── styles                   # Global styles with variables, mixins and typography
├── main.ts                  # Entry point
└── ...
```

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:marblehands/progress-block.git
   cd progress-block
   ```

2. Install the dependencies:

```sh
npm install
```

### Scripts

```sh
npm run dev        # Start the development server
npm run build      # Build the project for production
npm run preview    # Preview the production build
npm run lint       # Lint the source files
npm run lint:fix   # Lint and fix the source files
npm run prepare    # Install Husky hooks
npm run format     # Format the source files using Prettier
npm run ci:format  # Check the formatting using Prettier
```

### Git Hooks with Husky

This project uses Husky to manage Git hooks. Husky is configured to run specific tasks at different stages of the Git workflow to ensure code quality and consistency.

#### Pre-commit Hook

The pre-commit hook runs the following tasks:

- Lint-staged: Runs Stylelint and Prettier formatting on staged files.
- Commitlint: Checks the commit message format.

#### Pre-push Hook

The pre-push hook runs the following task:

- ESLint: Lints the source files to ensure code quality.
