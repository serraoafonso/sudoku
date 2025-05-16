// SudokuGrid.jsx (simplificado)
import React from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ grid, setGrid, fixed, setFixed }) => {

  const handleChange = (row, col, value) => {
    if (!/^[1-9]?$/.test(value)) return;

    // Cria uma cópia profunda da grid
    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = value || " ";
    
    // Atualiza o estado da grid
    setGrid(newGrid);

    // Atualiza o estado de fixed:
    // Se o usuário digitou um número (não é vazio), marca como célula fixa; caso contrário, desmarca.
    const newFixed = fixed.map(r => [...r]);
    newFixed[row][col] = value !== "";
    setFixed(newFixed);

    // Debug da mudança
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
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
