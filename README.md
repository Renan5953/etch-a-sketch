# etch-a-sketch

This is a simple project created as part of [The Odin Project](https://www.theodinproject.com) course.

## About the Project

The current version implements the core logic of an Etch-a-Sketch / sketchpad hybrid. It detects mouse movement to paint hovered blocks and provides controls for generating a custom-sized grid, clearing the current grid, and adjusting the darkening factor applied on each block interaction.

## How to Use

On page load, the script automatically generates a 16×16 grid, which can be painted by moving the mouse over the blocks.

Above the grid, there are three interactive controls:
- **Adjust grid size** button: prompts the user to enter a custom grid dimension. Invalid inputs (non-numeric, non-integer, non-positive values, or values greater than 100) are rejected and an alert is displayed.
- **Clear grid** button: resets the current grid to its initial, unpainted state.
- **Darkening factor** select menu: controls how much opacity is added to a block on each interaction (10%, 20%, 50%, or 100%).