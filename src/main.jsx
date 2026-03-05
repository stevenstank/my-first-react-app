import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greet from './react.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greet />
  </StrictMode>,
)
