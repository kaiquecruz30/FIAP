import { useState } from "react";
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


import { DivEntrada } from "../../../assets/JS/style";
import './../../../assets/css/global.css';


const schena = yup.object({
    cep: yup.string().min(8, 'O cep deverá apresentar no minimo 8 caracteres.').max(8, 'O cep deverá apresentar no maximo 8 caracteres').required("O cep é obrigatório."),
    numero: yup.string().required("É necessario que o número do local mais proximo do buracoseja colocado."),
    descricao: yup.string().required("É necessaria uma descrição do local, da situação."),
});


function Entrada() {

    return (
        <DivEntrada>
            <div className="imagem-background">
                <section className="menu">
                    <h1>Conta</h1>
                    <form>
                        <fieldset>
                            <section>
                                <label htmlFor="email">Email:
                                    <input type='email' id="email" placeholder="Bomdia45@gmail.com"/>
                                </label>
                            </section>
                            <section>
                                <label htmlFor="senha">Senha:
                                    <input type="text" id="senha" placeholder="QueLocalBonito12#"/>
                                </label>
                            </section>
                            <button type="submit" id="btnEntrar"><Link className="link" to='/Home'>Entrar</Link></button>
                            <div className="separa" ></div>
                            <button type="submit" id="btnCadastrar"><Link className="link" to='/Cadastrar'>Cadastrar</Link></button>
                        </fieldset>
                    </form>
                </section>
                <section>
                    <p>
                        Cadastre-se para receber previsões e alertas direcionados para enchentes, deslizamentos, incêndios e ondas de calor.
                    </p>
                </section>
            </div>
        </DivEntrada>
    )
}

export default Entrada