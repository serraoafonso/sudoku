import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DifficultyContextProvider } from './context/DifficultyContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DifficultyContextProvider>
      <App />
    </DifficultyContextProvider>
  </StrictMode>,
)
