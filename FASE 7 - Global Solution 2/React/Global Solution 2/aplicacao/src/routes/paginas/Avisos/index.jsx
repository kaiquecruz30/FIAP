import { useState } from "react";

import { DivAvisos } from "../../../assets/JS/style";
import './../../../assets/css/global.css'

import Agua from '../../../assets/imagens/water-solid.png'
import Terra from '../../../assets/imagens/hill-rockslide-solid.png'
import Fogo from '../../../assets/imagens/fire-solid.png'
import Sol from '../../../assets/imagens/sun-regular.png'


function Avisos() {

    return (
        <DivAvisos>
            <div>
                <div>
                    <h1>Avisos</h1>
                    <p>
                        Aqui você poderá fazer o seu Avisos de usuário.
                    </p>
                </div>
                <div className="separador-horizontal"></div>
                <div>
                    <section>
                        <div className="aviso-tempestade">
                            <img src={Agua} width='40%' alt="simbolo de aguá"/>
                            <h2>Cuidado, está acontecendo uma enchente na sua região.</h2>
                        </div>
                    </section>
                </div>
                <div className="separador-horizontal"></div>
                <div>
                    <section>
                        <div className="aviso-deslisamento">
                            <img src={Terra} width='40%' alt="simbolo de aguá"/>
                            <h2>Cuidado, está acontecendo um deslizamento na sua região.</h2>
                        </div>
                    </section>
                </div>
                <div className="separador-horizontal"></div>
                <div>
                    <section>
                        <div className="aviso-incendio">
                            <img src={Fogo} width='40%' alt="simbolo de aguá"/>
                            <h2>Cuidado, está acontecendo uma enchente na sua região.</h2>
                        </div>
                    </section>
                </div>
                <div className="separador-horizontal"></div>
                <div>
                    <section>
                        <div className="aviso-calor">
                            <img src={Sol} width='40%' alt="simbolo de aguá"/>
                            <h2>Cuidado, está acontecendo uma onda de calor na sua região.</h2>
                        </div>
                    </section>
                </div>
            </div>
        </DivAvisos>
    )
}

export default Avisos