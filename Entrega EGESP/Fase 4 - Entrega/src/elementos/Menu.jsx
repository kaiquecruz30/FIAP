import { useState } from "react";

import '../css/menu.css'

import prefeitura from '../imagens/prefeitura-de-sao-paulo.png'
import youtube from '../imagens/youtube.png'
import facebook from '../imagens/facebook.png'
import twiter from '../imagens/x-twiter.png'
import linkedin from '../imagens/linkedin.png'


export default function Menu() {

    return (
        <>
            <div className="menu">

                <ul className="secundario container container_menu_secundario">
                    <li>
                        Acesso a informações
                    </li>
                    <li>
                        Transparencia São Paulo
                    </li>
                    <li>
                        Legislação
                    </li>
                    <li>
                        Ouvidoria
                    </li>
                    <li>
                        156
                    </li>

                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                    <li>
                        <img src={linkedin} alt="Imagen do simbolo do youtube." width={30} />
                    </li>
                    <li>
                        <img src={twiter} alt="Imagen do simbolo do youtube." width={30} />
                    </li>
                    <li>
                        <img src={youtube} alt="Imagen do simbolo do youtube." width={30} />
                    </li>
                    <li>
                        <img src={facebook} alt="Imagen do simbolo do youtube." width={30} />
                    </li>

                </ul>

                <ul className="principal container container_menu_primario">
                    <li>
                        <img src={prefeitura} width={70} alt="Um simbolo da prefeitura de sao paulo com as palavras 'prefeitura de são paulo' ao lado" />
                    </li>
                    <li>
                        
                    </li>
                    <li>
                        <a href="">Informações</a>
                    </li>
                    <li>
                        <a href="">Solicitação</a>
                    </li>
                    <li>
                        <a href="">Historico</a>
                    </li>
                </ul>
            </div>
        

        </>
    )

}