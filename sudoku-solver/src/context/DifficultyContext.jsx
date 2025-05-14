import { useState, createContext } from "react";

export const DifficultyContext = createContext();

export const DifficultyContextProvider = ({children}) => {
  const [difficulty, setDifficulty] = useState('facil')

  return(
    <DifficultyContext.Provider value={{difficulty, setDifficulty}}>
      {children}
    </DifficultyContext.Provider>
  )
}