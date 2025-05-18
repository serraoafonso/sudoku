import { useState, useContext } from 'react';
import SudokuGrid from './components/SudokuGrid/SudokuGrid.jsx';
import './App.css';
import { DifficultyContext } from './context/DifficultyContext.jsx';
import { start } from './assets/js/index.js';

function App() {
  const { difficulty } = useContext(DifficultyContext);
  const [time, setTime] = useState(0);
  const [impossivel, setImpossivel] = useState(false)
  const [igual, setIgual] = useState(false)

  // Estado para a grid de números
  const [grid, setGrid] = useState([
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  ]);

  // Estado para indicar quais células são fixas (manual)
  const [fixed, setFixed] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(false))
  );

  const [resolvido, setResolvido] = useState(false);

  function limpar() {
    setGrid([
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    ]);
    // Reinicia também o estado de fixed
    setFixed(
      Array(9)
        .fill(null)
        .map(() => Array(9).fill(false))
    );
    setResolvido(false);
    setImpossivel(false);
    setIgual(false);
  }

  const resolverSudoku = async () => {
    try {
      console.log("Grid antes de resolver:", JSON.stringify(grid));
      const gridCopy = JSON.parse(JSON.stringify(grid));
      console.log("Grid (antes de start):", JSON.stringify(grid));
      console.log("GridCopy (antes de start):", JSON.stringify(gridCopy));

      const res = await start(gridCopy);
      let tempo = res.time;
      setTime(tempo);

      console.log("Grid (após start):", JSON.stringify(grid));
      console.log("GridCopy (após start):", JSON.stringify(gridCopy));
      console.log("Resposta da função start:", res);

      if (res && res.customSudoku && Array.isArray(res.customSudoku)) {
        console.log("Solução recebida:", JSON.stringify(res.customSudoku));

        // Cria uma nova grid com a solução obtida
        const novaGrid = res.customSudoku.map(row => [...row]);

        // Importante: as células que o usuário já definiu (fixed true) não devem ser alteradas.
        // Portanto, ao atualizar a grid, mantemos os números fixos.
        // Se desejar, pode também manter o estado 'fixed' inalterado.
        setGrid(novaGrid);
        setResolvido(true);
      } else if(res.customSudoku == 'impossivel'){
        console.warn("O Sudoku não pôde ser resolvido ou o formato da resposta é inesperado.");
        setImpossivel(true)
      }else{
        setIgual(true)
      }
    } catch (error) {
      console.error("Erro ao resolver o Sudoku:", error);
    }
  };

  return (
    <div className="app-container">
      {/* Passa também o estado fixed e a função setFixed para o componente da grid */}
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} setGrid={setGrid} fixed={fixed} setFixed={setFixed} />
      <button onClick={resolverSudoku}>Resolver</button>
      <button onClick={limpar}>Limpar</button>
      <p>{resolvido ? ( `Tempo de execução: ${time} milissegundos`) : (impossivel ? 'O sudoku é impossível de ser resolvido' : (igual && 'Este sudoku serve de desafio para a Mostra Nacional de Ciência, experimenta outro sudoku!'))}</p>
    </div>
  );
}

export default App;
