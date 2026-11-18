import { useState } from "react";

import { DivPrevissao } from "../../../assets/JS/style";
import './../../../assets/css/global.css'

function Previssao() {

    return (
        <DivPrevissao>
            <div>
                <div>
                    <h1>Aqui você poderá ver qual é a previssão do tempo</h1>
                </div>
                <div className="separador-horizontal espacador-vertical"></div>
                <section>
                    <div className="background">
                        <iframe src="https://open-meteo.com/en/docs"></iframe>
                    </div>
                </section>
            </div>
        </DivPrevissao>
    )
}

export default Previssao