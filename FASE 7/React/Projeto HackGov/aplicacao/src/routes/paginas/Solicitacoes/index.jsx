import { useState } from "react";

import Formulario from "../../../assets/componentes/Formulario";

import './../../../assets/css/global.css'


function Solicitacoes() {


    return (
        <>
            <div>
                <h1>SOLICITAÇÕES:</h1>
                <p>
                    Aqui você poderá fazer as solicitações para os fechamentos de buracos.
                </p>
            </div>

            <Formulario/>

        </>
    )
}

export default Solicitacoes