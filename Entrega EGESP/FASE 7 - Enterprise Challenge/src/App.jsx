import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'

import prefeitura from './imagens/prefeitura-de-sao-paulo.png'

import Menu from './elementos/Menu.jsx'
import Footer from './elementos/Footer.jsx'

import Informacao from './páginas/Informacao.jsx'
import Solicitacao from './páginas/Solicitacao.jsx'

function App() {
  return (
    <>
      <Menu/>
      <Outlet/>
      <Footer/>
    </>
  );
}
export default App;

