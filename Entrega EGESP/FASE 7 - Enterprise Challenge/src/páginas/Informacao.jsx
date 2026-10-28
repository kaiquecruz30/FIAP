import { useState } from "react";

import avenida from '../imagens/avenida.jpg'

import "../css/informacao.css"

export default function Home() {

    return (
        <>
            <div className="alinhamento">
                <div className="espaco">
                    <h2>Poda de arvóres e vegetações:</h2>
                    <img src={avenida} width="50%"  className="estilizacao_imagem" alt="Uma foto de uma avenida com carros, e que em sua calçada apresenta arvores." />
                    <h6>Imagem retirada de <a href="https://www.pexels.com/pt-br/foto/avenida-paulista-movimentada-em-sao-paulo-brasil-38324656/">Pexels</a> - Tirada por Fabio Souto</h6>
                </div>
                <div className="texto divizao espaco">
                    <p>
                        <h2><strong>O QUE É:</strong></h2>
                        Poda é a ação de cortar partes de uma planta para evitar o seu crecimento, melhorar a saúde, aumentar a produção de folhas e frutos.
                    </p>
                    <p>
                        <h2><strong>QUAL A IMPORTÂNCIA:</strong></h2>
                        Com isso é de extrema importância que uma poda regular seja feita para que as arvores e outras vegetações que se encontram nas cidades 
                    </p>
                    <p>
                        <h2><strong>QUANDO SOLICITAR:</strong></h2>
                        Quando alguma vegetação está interompendo a circulação nomal das pessoas ou quando se apresenta um futuro perigo diante do seu crescimento.
                    </p>
                    <p>
                        <h2><strong>PÚBLICO-ALVO:</strong></h2>
                        Pessoas que necessitam de uma poda de arvores por  motivos válidos.
                    </p>
                    <p>
                        <h2><strong>REQUISITOS, DOCUMENTOS E INFORMAÇÕES</strong></h2>

                        <h3>Requisitos necessários:</h3>
                        <li>
                            Ter idade igual ou superior a 18 anos;
                        </li>
                        <li>
                            Morar na cidade de São Paulo;
                        </li>

                        <h3>Documentos necessários:</h3>
                        <li>
                            Foto do local em que a poda é requisitada.
                        </li>
                        <li>
                            Documentos de indentificação como foto e CPF.
                        </li>
                        <li>
                            Comprovante de endereço atualizado (emitido em até 90 dias) e no próprio nome do solicitador.
                        </li>

                        <h3>Prazo Máximo:</h3>
                        <li>
                            Análise da solicitação: 20 dias.
                        </li>
                        <li>
                            Agendamento da poda: até 40 dias.
                        </li>
                    </p>
                </div>
            </div>
        </>
    )

}