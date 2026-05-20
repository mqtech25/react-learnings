import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemContext from './themContext/ThemContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemContext>
      <App />
    </ThemContext>
  </StrictMode>,
)
