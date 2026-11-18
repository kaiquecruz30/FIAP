import { Outlet } from "react-router-dom";
import Menu from "./assets/componentes/visuais/Menu";
import Footer from "./assets/componentes/visuais/Footer"

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
