import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import Entrada from './routes/paginas/Entrada/index.jsx'
import Cadastrar from './routes/paginas/Cadastrar/index.jsx'
import Home from './routes/paginas/Home/index.jsx'
import Avisos from './routes/paginas/Avisos/index.jsx'
import Previssao from './routes/paginas/Previssao/index.jsx'


import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter 
([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <Entrada/>},
            {path: "/Cadastrar", element: <Cadastrar/>},
            {path: "/Home", element: <Home/>},
            {path: "/Avisos", element: <Avisos/>},
            {path: "/Previssao", element: <Previssao/>}
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)