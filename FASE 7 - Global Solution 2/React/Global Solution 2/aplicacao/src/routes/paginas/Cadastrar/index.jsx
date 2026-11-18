import { useState } from "react";
import {Link} from 'react-router-dom'

import { DivCadastrar } from "../../../assets/JS/style";

import './../../../assets/css/global.css'

function Cadastrar() {

    return (
        <DivCadastrar>
            <div className="imagem-background">
                <section className="sombra">
                    <div>
                        <h1>Criando a sua conta</h1>
                    </div>
                    <div>
                        <form>
                            <fieldset>
                                <div className="limpar">
                                    <label htmlFor="email">Email:
                                        <input type='email' id="email" placeholder="Bomdia45@gmail.com"/>
                                    </label>
                                </div>
                                <div className="limpar">
                                    <label htmlFor="telefone">Telefone:
                                        <input type="text" id="telefone" placeholder="5511912342312"/>
                                    </label>
                                </div>
                                <div className="limpar">
                                    <label htmlFor="senha">Senha:
                                        <input type="text" id="senha" placeholder="QueLocalBonito12#"/>
                                    </label>
                                </div>
                                <div className="limpar">
                                    <label htmlFor="senha (novamente)">Senha (novamente):
                                        <input type="text" id="senha (novamente)" placeholder="QueLocalBonito12#"/>
                                    </label>
                                </div>
                                <button type="submit" id="btnCadastrado"><Link className="link" to='/Home'>Cadastrar</Link></button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </div>
        </DivCadastrar>
    )
}

export default Cadastrar