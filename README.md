Sudoku Solver

The "Sudoku Solver" project consists of an algorithm written in JavaScript to efficiently solve any Sudoku board using deductive logic and backtracking. The project arose from my dissatisfaction with the inability of artificial intelligences like ChatGPT and Claude to correctly solve Sudokus. The project was developed by me in its entirety without the use of any artificial intelligence.
The code can be tested locally, requiring Node.js and proper board configuration within the index.js file. Execution is done via the terminal, displaying the time taken to solve the puzzle and allowing users to follow the cell-filling process.
The methodology employed combines three main approaches:
1.	Direct filling – If an empty cell has only one possible option, it is automatically filled.
2.	Recursive search – If no direct filling is possible, the algorithm attempts the available numbers for an empty position.
3.	Backtracking – If a choice leads to an impasse, the algorithm backtracks and tries new combinations.
The code is structured with a 9x9 matrix representing the board and a possible array that stores viable options for each cell. The main functions include start(), checkIfLastPossible(), randomizeEmpty(), checkPossibles(), fillPossibles(), and checkLastPossible(), ensuring the Sudoku is properly analyzed and solved.
Possible improvements include implementing heuristics to optimize random attempts, modularizing the code for better readability, and creating a graphical interface. Despite this, the algorithm already fulfills its purpose, solving simple Sudokus in milliseconds and more complex ones in a few seconds.

Afonso Serrão

