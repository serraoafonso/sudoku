// SudokuGrid.jsx simplificado
import React from 'react';
import './SudokuGrid.css'; 
 
const SudokuGrid = ({ grid, setGrid }) => { 
  const handleChange = (row, col, value) => { 
    if (!/^[1-9]?$/.test(value)) return; 
 
    // Criando uma cópia profunda da grid
    const newGrid = grid.map(row => [...row]);
    
    // Atualizando o valor específico
    newGrid[row][col] = value || " ";
    
    // Debug da mudança
    console.log(`Célula atualizada [${row},${col}] = ${value}`);
    console.log("Nova grid:", JSON.stringify(newGrid));
    
    // Atualizando o estado
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
          /> 
        ))
      )}
    </div> 
  ); 
}; 
 
export default SudokuGrid;