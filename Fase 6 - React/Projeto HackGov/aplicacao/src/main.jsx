import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/paginas/Home/index.jsx'
import Cadastro from './routes/paginas/Cadastro/index.jsx'
import Solicitacoes from './routes/paginas/Solicitacoes/index.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter 
([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/Cadastro", element: <Cadastro/>},
            {path: "/Solicitacoes", element: <Solicitacoes/>}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)