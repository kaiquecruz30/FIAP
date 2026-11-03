import { useState } from "react";

import Usuario from "./../../../assets/componentes/Usuario"

import './../../../assets/css/global.css'

function Cadastro() {

    return (
        <>
            <div>
                <h1>Cadastro</h1>
                <p>
                    Aqui você poderá fazer o seu cadastro de usuário.
                </p>
                
            </div>

            <Usuario/>
        </>
    )
}

export default Cadastro