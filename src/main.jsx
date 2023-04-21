import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Padre } from './challenge-8/Padre'
import { TodoApp } from './Challenge-9/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)

