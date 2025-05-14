import React, { useState, useEffect, useContext } from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ initialGrid, originalGrid }) => {
  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    setGrid(initialGrid);
  }, [initialGrid]);

  const handleChange = (row, col, value) => {

    const newGrid = grid.map((r, rowIndex) =>
      r.map((c, colIndex) =>
        rowIndex === row && colIndex === col ? value : c
      )
    );
    setGrid(newGrid);
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            className="sudoku-cell"
            type="text"
            maxLength="1"
            value={cell === " " ? "" : cell}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            readOnly={originalGrid[rowIndex][colIndex] !== " "}
          />
        ))
      )}
    </div>
  );
};


export default SudokuGrid;
