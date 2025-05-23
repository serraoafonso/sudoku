import { useState, useContext } from 'react';
import SudokuGrid from './components/SudokuGrid/SudokuGrid.jsx';
import './App.css';
import { DifficultyContext } from './context/DifficultyContext.jsx';
import { start } from './assets/js/index.js';

function App() {
  const { difficulty } = useContext(DifficultyContext);
  const [time, setTime] = useState(0);
  const [impossivel, setImpossivel] = useState(false);
  const [igual, setIgual] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [resolvido, setResolvido] = useState(false);

  const [grid, setGrid] = useState(Array(9).fill().map(() => Array(9).fill(" ")));

  const [fixed, setFixed] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(false))
  );

  function limpar() {
    setGrid(Array(9).fill().map(() => Array(9).fill(" ")));
    setFixed(Array(9).fill(null).map(() => Array(9).fill(false)));
    setResolvido(false);
    setImpossivel(false);
    setIgual(false);
  }

  const resolverSudoku = async () => {
    setCarregando(true);
    try {
      const gridCopy = JSON.parse(JSON.stringify(grid));
      
      const res = await start(gridCopy);
      setTime(res.time);
      setCarregando(false);

      if (res && res.customSudoku && Array.isArray(res.customSudoku)) {
        const novaGrid = res.customSudoku.map(row => [...row]);
        setGrid(novaGrid);
        setResolvido(true);
      } else if (res.customSudoku === 'impossivel') {
        setImpossivel(true);
      } else {
        setIgual(true);
      }
    } catch (error) {
      console.error("Erro ao resolver o Sudoku:", error);
      setCarregando(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Sudoku Solver</h1>
      <SudokuGrid
        grid={grid}
        setGrid={setGrid}
        fixed={fixed}
        setFixed={setFixed}
        bloqueado={resolvido}
      />
      <button onClick={resolverSudoku}>
        {carregando ? <span className='carregando'></span> : 'Resolver'}
      </button>
      <button onClick={limpar}>Limpar</button>
      <p>
        {resolvido
          ? `Tempo de execução: ${time} milissegundos`
          : impossivel
          ? 'O sudoku é impossível de ser resolvido'
          : igual && 'Este sudoku serve de desafio para a Mostra Nacional de Ciência, experimenta outro sudoku!'}
      </p>
    </div>
  );
}

export default App;
