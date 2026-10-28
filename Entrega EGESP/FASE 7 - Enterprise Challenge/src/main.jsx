import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App.jsx'

import Informacao from './páginas/Informacao.jsx'
import Solicitacao from './páginas/Solicitacao.jsx'





import {createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Informacao/>},
      {path: "/solicitacao", element: <Solicitacao/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
