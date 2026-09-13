import { use, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./assets/componentes/Menu";
import Footer from "./assets/componentes/Footer"

function App() {

    return (
      <>
        <Menu/>
        <Outlet/>
        <Footer/>
      </>
    );

}


export default App
