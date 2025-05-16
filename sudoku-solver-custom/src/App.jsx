// App.jsx revisado
import { useState, useContext } from 'react'; 
import SudokuGrid from './components/SudokuGrid/SudokuGrid.jsx'; 
import './App.css'; 
import { DifficultyContext } from './context/DifficultyContext.jsx'; 
import { start } from './assets/js/index.js'; 
 
function App() { 
  const { difficulty, setTime } = useContext(DifficultyContext); 
 
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
    setResolvido(false);
  } 
 
  const resolverSudoku = async () => {
  try {
    // Log da grid antes de resolver
    console.log("Grid antes de resolver:", JSON.stringify(grid));

    // Criar uma cópia profunda
    const gridCopy = JSON.parse(JSON.stringify(grid));
    
    // Log usando JSON.stringify para capturar o estado exato no momento
    console.log("Grid (antes de start):", JSON.stringify(grid));
    console.log("GridCopy (antes de start):", JSON.stringify(gridCopy));
    
    // Sempre faça uma cópia antes de enviar ao start
    const res = await start(gridCopy);
    
    // Log após o start para ver o que foi modificado
    console.log("Grid (após start):", JSON.stringify(grid));
    console.log("GridCopy (após start):", JSON.stringify(gridCopy));

    // Log da resposta da função start
    console.log("Resposta da função start:", res);
    
    if (res && res.customSudoku && Array.isArray(res.customSudoku)) {
      // Log da solução antes de atualizar
      console.log("Solução recebida:", JSON.stringify(res.customSudoku));
      
      // Aqui vamos criar uma grid completamente nova
      const novaGrid = [
        [...res.customSudoku[0]],
        [...res.customSudoku[1]],
        [...res.customSudoku[2]],
        [...res.customSudoku[3]],
        [...res.customSudoku[4]],
        [...res.customSudoku[5]],
        [...res.customSudoku[6]],
        [...res.customSudoku[7]],
        [...res.customSudoku[8]]
      ];
      
      // Log da nova grid antes de atualizar o estado
      console.log("Nova grid para atualizar:", JSON.stringify(novaGrid));
      
      // Atualizar o estado com a nova grid completa
      setGrid(novaGrid);
      setResolvido(true);
    } else {
      console.warn("O Sudoku não pôde ser resolvido ou o formato da resposta é inesperado.");
    }
  } catch (error) {
    console.error("Erro ao resolver o Sudoku:", error);
  }
};
 
  return ( 
    <div className="app-container"> 
      <SudokuGrid grid={grid} setGrid={setGrid} /> 
      <button onClick={resolverSudoku}>Resolver</button> 
      <button onClick={limpar}>Limpar</button>
      {resolvido && <p>Sudoku resolvido!</p>}
    </div> 
  ); 
} 
 
export default App;