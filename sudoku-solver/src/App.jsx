import { useState, useContext, useEffect } from 'react';
import SudokuGrid from './components/SudokuGrid/SudokuGrid';
import './App.css';
import Menu from './components/Menu/Menu';
import { DifficultyContext } from './context/DifficultyContext';
import {start} from './assets/js/index.js'

const sudokuFacil = [
  [" ", "3", " ", " ", "2", "7", " ", "5", "8"],
  ["2", " ", " ", "6", "8", " ", " ", "1", " "],
  [" ", "7", " ", " ", " ", "5", "4", " ", "2"],
  [" ", " ", "7", " ", "3", " ", " ", " ", "5"],
  [" ", " ", "6", " ", "9", "8", " ", " ", " "],
  ["5", " ", "3", "7", "6", "4", " ", " ", "9"],
  [" ", "5", " ", " ", " ", " ", "2", "9", " "],
  ["7", "6", "2", " ", " ", "9", " ", "8", " "],
  ["8", "1", " ", " ", "5", "6", "7", " ", " "]
];

const sudokuMedio = [
  ["6", " ", "9", "7", " ", " ", "8", "3", "1"],
  [" ", " ", " ", "4", "8", " ", " ", "7", "2"],
  ["8", " ", "7", " ", " ", "6", " ", " ", " "],
  [" ", "5", "3", " ", " ", " ", " ", " ", "4"],
  [" ", " ", " ", " ", " ", "8", " ", "5", " "],
  [" ", " ", " ", " ", " ", " ", "3", "9", " "],
  [" ", "6", " ", " ", "7", " ", " ", " ", "5"],
  ["1", "8", "5", " ", " ", " ", " ", "6", " "],
  [" ", " ", " ", "1", " ", "5", " ", " ", "8"]
];

const sudokuDificil = [
  [" ", "8", " ", " ", " ", " ", " ", "7", "4"],
  [" ", " ", "5", " ", " ", "7", " ", " ", " "],
  [" ", "6", " ", " ", "9", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", "1", " ", " "],
  ["9", " ", " ", " ", " ", "6", "2", " ", " "],
  ["2", " ", "1", " ", " ", " ", " ", "5", " "],
  [" ", " ", " ", "2", "1", "9", " ", " ", " "],
  [" ", " ", " ", "5", " ", " ", " ", " ", "3"],
  [" ", " ", " ", "6", " ", " ", "8", " ", "5"]
];

const sudokuExtremo = [
  ["8", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", "3", "6", " ", " ", " ", " ", " "],
  [" ", "7", " ", " ", "9", " ", "2", " ", " "],
  [" ", "5", " ", " ", " ", "7", " ", " ", " "],
  [" ", " ", " ", " ", "4", "5", "7", " ", " "],
  [" ", " ", " ", "1", " ", " ", " ", "3", " "],
  [" ", " ", "1", " ", " ", " ", " ", "6", "8"],
  [" ", " ", "8", "5", " ", " ", " ", "1", " "],
  [" ", "9", " ", " ", " ", " ", "4", " ", " "]
];



function App() {
  const { difficulty, setTime } = useContext(DifficultyContext);
  
   const [grid, setGrid] = useState([]);
   const [resolvido, setResolvido] = useState(false)

useEffect(() => {
  const newGrid =
    difficulty === "facil" ? sudokuFacil :
    difficulty === "medio" ? sudokuMedio :
    difficulty === "dificil" ? sudokuDificil :
    sudokuExtremo;

  setGrid(JSON.parse(JSON.stringify(newGrid)));
}, [difficulty]);

  const resolverSudoku = async() => {
  const gridCopy = JSON.parse(JSON.stringify(grid)); // deep copy
  const res = await start(gridCopy);
  const solved = res.customSudoku;
  setResolvido(true) // o start deve retornar um novo grid resolvido

  if (Array.isArray(solved)) {
    setGrid(solved); // Atualiza o estado com a solução
  } else {
    console.warn("O Sudoku não pôde ser resolvido.");
  }
};

  return (
    <div className="app-container">
      <Menu />
      <SudokuGrid initialGrid={grid} originalGrid={grid} />
      <button onClick={resolverSudoku}>Resolver</button>
      <p>{resolvido && `Tempo de execução: ${time} milissegundos`}</p>
    </div>
  );
}

export default App;