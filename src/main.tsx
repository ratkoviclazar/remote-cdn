import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Button from './Button.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
  </StrictMode>,
)
