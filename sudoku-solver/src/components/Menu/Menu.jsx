import React, {useContext} from "react";
import './Menu.css'
import { DifficultyContext } from "../../context/DifficultyContext";

function Menu(){

  const {difficulty, setDifficulty} = useContext(DifficultyContext)

  return(
    <div className="menu-container">
        <button style={{color: 'green', outline: difficulty == "facil" ? "1px solid black" : "none"}} onClick={()=>setDifficulty('facil')}> Fácil </button>
        <button style={{color: 'orange', outline: difficulty == "medio" ? "1px solid black" : "none"}} onClick={()=>setDifficulty('medio')}> Médio </button>
        <button style={{color: 'red' , outline: difficulty == "dificil" ? "1px solid black" : "none"}} onClick={()=>setDifficulty('dificil')}> Difícil </button>
        <button style={{color: '#702963', outline: difficulty == "extremo" ? "1px solid black" : "none"}} onClick={()=>setDifficulty('extremo')}> Extremo </button>
    </div>
  )

}

export default Menu;

