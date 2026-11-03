import { useState } from "react";

import './../../../assets/css/global.css'
import { DivImagens } from "../../../assets/JS/style";

import buraco from './../../../assets/imagens/pexels-humanistagram-31172239.jpg'
import importancia from './../../../assets/imagens/pexels-gabby-k-5842061.jpg'

function Home() {

    return (
        <DivImagens>
            <div className="espacamento_horizontal">
                <section>
                    <h1>Fechamento de burracos em vias</h1>
                    <div className="espacamento_vertical">
                        <img src={buraco} alt="A imagem de um buraco na rua."/>
                        <h5>Imagem retirada de <a href="https://www.pexels.com/pt-br/foto/reflexo-de-edificio-laranja-em-poca-d-agua-na-rua-urbana-31172239/">Pexels</a> - Tirada por Leo Arslan</h5>
                    </div>
                    <p>
                        Nessa página seram apresentados o porque é importânte fechar buracos, o que são as solicitações e de como funciona todo o trajeto do trabalho.
                    </p>
                </section>
                <section>
                    <h2>Qual a importância do fechamento de buracos</h2>
                    <div className="espacamento_vertical">
                        <img src={importancia} alt="A imagem de um grafico."/>
                        <h5>Imagem retirada de <a href="https://www.pexels.com/pt-br/foto/papel-listrado-branco-e-azul-5842061/">Pexels</a> - Tirada por Monstera Production</h5>
                    </div>
                    <p>
                        O fechamento de buracos em vias de transporte é de grande importância, pois evita gastos futuros de acidenetes que poderiam acontecer, além de manter a organização da infraestrutura da cidade.
                    </p>
                    <p>
                        E como ponto principal é que com o fechamento de buracos não havera problemas de locomoção nessa vias, assim evitando parte do congestionamento.
                    </p>
                </section>
                <section>
                    <h2>O que são as solicitações</h2>
                    <p>
                        As solicitações é o meio em que alguem que se cadastro no sistema pode  solicitar o fechamento de um buraco.
                    </p>
                </section>
                <section>
                    <h2>O trajeto do trabalho</h2>
                    <p>
                        O trabalho começa com o recebimento da solicitação que é registrada no banco de dados, depois é organizado e enviado uma aviso para as equipes disponiveis que depois de se organizar seram enviados ao local para fechar o buraco, e depois a solução será colocada como concluida.
                    </p>
                </section>
            </div>
        </DivImagens>
    )
}

export default Home