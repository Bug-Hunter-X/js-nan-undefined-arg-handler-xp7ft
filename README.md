# JavaScript Function NaN Issue

This repository demonstrates a common JavaScript issue where a function behaves unexpectedly when encountering undefined values.

The function `foo` is designed to add 1 to its input. However, it only explicitly handles `null` and does not account for the case where the input is `undefined`. This leads to `NaN` being returned.

The solution involves adding an explicit check for `undefined` and handling it appropriately, such as returning a default value or throwing an error.

## How to reproduce the bug

1. Clone this repository.
2. Open `bug.js`
3. Run the file in your preferred JavaScript environment.  Observe the NaN output when calling foo(undefined).

## Solution

The solution is provided in `bugSolution.js`.  It adds a check for `undefined` before attempting the addition.
