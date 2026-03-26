'use client';

import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import '../CSS/tailwindcss/index.css'
import Footer from "@/componenetes/Footer";
import Nav from "@/componenetes/Nav";

const Numeros = () => {
  const [bgColor, setbgColor] = useState('white');

  const mudaCor = (cor) => {
    setbgColor(cor);
  };

  const [color, setColor] = useState('black');

  const texto = (t) => {
    setColor(t)
  }

  
  return (
    <div style={{backgroundColor: bgColor, color: color}}>
      <Nav/>

    <div className="border-y-4 border-red-500 text-center">
      <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">
          Configurações:
      </h2> 
      <div>
        <div className='p-2 font-semibold underline '>
          <p>
            Mudar a cor da página.
          </p>
          <button type='submit' style={{backgroundColor: bgColor, color: color}} className='m-1 p-1 border-1 border-red-600 text-white hover:border-purple-600 hover:text-red-500 rounded-2xl' onClick={() => {mudaCor('white'), texto('black')}} id='claro'>
              claro
          </button>
          <button type='submit' style={{backgroundColor: bgColor, color: color}} className='m-1 p-1 border-1 border-red-600 text-white hover:border-purple-600 hover:text-red-500 rounded-2xl' onClick={() => {mudaCor('black'), texto('white')}} id='escuro'>
              escuro
          </button>
        </div>
      </div>
    </div>

      <div className='text-center'>
        <div>  
          <div className='p-10 mx-10'>
            <h1 className="text-4xl font-bold underline hover:text-red-500 py-10">Pontos Positivos:</h1>
              <p className='py-3 text-base/6'>
                  Com a criação da quarentena muitas pessoas começaram a terem tempo livre para fazer várias coisas, mas como se encontravam isolados em suas casas não tinham muito o que fazer e com isso muitos se viraram para a tecnologia para terem uma resposta para a situação que os atormentavam, e assim várias áreas foram inpactadas como as plataformas de streming, youtube, as redes sociais em sua totalidade e um dos principais mercados afetados é o mundo dos jogos o qual acabou recebemdo um fluxo gigantesco de pessoas em grande parte de suas áreas.
              </p>
          </div>

          <div className='p-10 mx-10'>
            <h1 className="text-4xl font-bold underline hover:text-red-500 py-10">No Brasil:</h1>
                  <p className='py-3 text-base/6'>
                      Em sites de pesquisas como <Link className='font-bold hover:text-red-500 py-10 text-blue-800 underline' href="https://www.cnnbrasil.com.br/tecnologia/publico-gamer-cresce-e-3-em-cada-4-brasileiros-consomem-jogos-eletronicos/#goog_rewarded">cnnbrasil</Link> é informado que durante a pandemia o Brasil o número de jogadores chegou a uma porcentagem gigantesca. 
                  </p>

                  <p className='py-3 text-base/6'>
                      "O número de brasileiros que se divertem através dos jogos eletrônicos continua crescendo, e neste ano o país atingiu a marca de 74,5% de sua população que diz jogar games. Isso significa que três em cada quatro pessoas no Brasil usam celulares, videogames ou computadores para jogar."
                  </p>

                  <p className='py-3 text-base/6'>
                      E tambem é no dito que gamers jogaram mais partidas de jogos por terem mais tempo e que tiveram mais tempo de comunicarem com seus amigos.
                  </p>

                  <p className='py-3 text-base/6'>
                      "Por fim, a pandemia pode ser um dos motivos que ajudam a explicar a relação mais forte entre os brasileiros e os jogos eletrônicos. O levantamento revelou que 72,2% dos gamers brasileiros passaram a jogar mais durante o período de isolamento social, e 57,9% marcaram mais partidas online com amigos enquanto ficavam em casa."
                  </p>
          </div>
        </div>


        <div className='border-t-8 border-dotted border-amber-600'>
          <div className='p-10 mx-10'>
            <h2 className="text-4xl font-bold underline hover:text-red-500 py-10">Pontos Negativos</h2>

            <p className='py-3 text-base/6'>
                Mas é claro que não teria apenas coisas boas decorrentes da pandemia no mundo gamer. Algumas das consequências da pandemia foi o adiamento dos jogos em produção, o fechamento de estudios indies, cancelamento de eventos relacionados a jogos, a demissão de vários profissionais da área e algumas mortes decorrente da covid-19.
            </p>

            <p className='py-3 text-base/6'>
                Essas informações foram retiradas da <Link className='font-bold hover:text-red-500 py-10 text-blue-400 underline' href={"https://pt.wikipedia.org/wiki/Impactos_da_pandemia_de_COVID-19_nos_jogos_eletr%C3%B4nicos"}>Wikipedia</Link>.
            </p>
                  
            <p className='py-3 text-base/6'>
                "A pandemia impactou também as relações entre os desenvolvedoras e editoras menores. Isso afetou particularmente desenvolvedoras independentes, que normalmente usavam esses eventos para reuniões presenciais com parceiros em potencial para obter apoio financeiro e de publicação, e exigiam que eles atrasassem ou cancelassem projetos.Além disso, muitos eventos esportivos tiveram que alterar os planos de seus jogos, passando de eventos ao vivo para jogos remotos ou cancelamentos completamente. Partes do setor que dependiam de produtos físicos, como lojas de varejo e fabricantes de periféricos, bem como aquelas dependentes de atividades pessoais, como garantia de qualidade por meio de testes de reprodução, avaliação de classificações e marketing, também enfrentaram problemas com pedidos globais de quarentena em casa."
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Numeros
