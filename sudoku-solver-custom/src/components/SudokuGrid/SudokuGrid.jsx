import React from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ grid, setGrid, fixed, setFixed, bloqueado }) => {
  const handleChange = (row, col, value) => {
    if (!/^[1-9]?$/.test(value)) return;

    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = value || " ";
    setGrid(newGrid);

    const newFixed = fixed.map(r => [...r]);
    newFixed[row][col] = value !== "";
    setFixed(newFixed);

    console.log(`Célula atualizada [${row},${col}] = ${value}`);
    console.log("Nova grid:", JSON.stringify(newGrid));
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            className={`sudoku-cell ${fixed[rowIndex][colIndex] ? 'fixed' : 'solved'}`}
            type="text"
            maxLength="1"
            value={cell === " " ? "" : cell}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            disabled={bloqueado}
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
