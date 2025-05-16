import React, { useState, useEffect } from 'react';
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
        row.map((cell, colIndex) => {
          const isOriginal = originalGrid[rowIndex][colIndex] !== " ";
          const isResolved = !isOriginal && cell !== " ";

          let className = "sudoku-cell";
          if (isOriginal) className += " original-cell";
          else if (isResolved) className += " resolved-cell";

          return (
            <input
              key={`${rowIndex}-${colIndex}`}
              className={className}
              type="text"
              maxLength="1"
              value={cell === " " ? "" : cell}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              readOnly={isOriginal}
            />
          );
        })
      )}
    </div>
  );
};

export default SudokuGrid;
