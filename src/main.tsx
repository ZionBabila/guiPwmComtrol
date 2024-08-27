import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Editor from './editor.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App duration={1000} />
    <Editor />
  </StrictMode>,
)
