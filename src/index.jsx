import React from 'react'
import { createRoot } from 'react-dom/client'

// import style
import './styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
