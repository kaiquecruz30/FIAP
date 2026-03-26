'use client';

import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import '../CSS/tailwindcss/index.css'
import Footer from "@/componenetes/Footer";
import Nav from "@/componenetes/Nav";


const Mais_informacoes = () => {
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


        <div className='border-b-2 border-dashed border-blue-600 py-4'>
          <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Mais Informações:</h1>
          <p className='mx-3 text-base/6'>
              Aqui será mencionado coisas sobre o mundo gamer que não foram abordados principalmente.
          </p>
        </div>


        <div className='border-b-2 border-dashed border-blue-600 py-4'>
          <h2 className="text-4xl underline hover:text-red-500 py-10 font-bold">O aumento dos preços e a diminuição da qualidade:</h2>
          <p className='mx-15 text-base/6'>
              Percebe-se que ultimamente várias empresas gigantes como EA e suas práticas predatórias em transações nos games, Bethesda e seus jogos conhecido por serem bugados, Ubisoft que acabam lançando jogos que não chegam as expectativas e falaram que lançaram um dos primeiros quadruplo A do mundo que virou um fracasso ("Skull and Bones") e várias outras empresas. Acabam lançando jogos que custão mais que seus antecessores e acabam sendo piores isso se deve a ideias ruins na produção dos jogos, falta de tempo para os desenvolvedores finalizarem totalmente o game e uma lógica errada de que se aumentar o preço dos seus produtos havera mais lucro.
          </p>


          <div className='text-center mx-50 my-8'>
            <table className="table-auto text-center">
              <thead className='text-1xl'>
                <tr>
                  <td>Jogos</td>
                  <td>Vendas (unidades)</td>
                  <td>Empresa</td>
                  <td>Desenvolvimeto (Dolars)</td>
                  <td>Preço</td>
                </tr>
              </thead>
              <tbody className='text-1xl'>
                <tr className='hover:bg-gray-300 border-y-gray-300 border-x-white border-2'>
                  <td>Concord</td>
                  <td>25000</td>
                  <td>SONY (Firewalk Studio)</td>
                  <td>400 milhões</td>
                  <td>199.50</td>
                </tr>
                <tr className='hover:bg-gray-300 border-y-gray-300 border-x-white border-2'>
                  <td>Skull and Bones</td>
                  <td>(estimado) -1 milhão</td>
                  <td>Ubisoft</td>
                  <td>US$ 650 - 850 milhões</td>
                  <td>329,90</td>
                </tr>
                <tr className='hover:bg-gray-300 border-y-gray-300 border-x-white border-2'>
                  <td>Esquadrão Suicida: Mate a liga da justiça</td>
                  <td>(Não disponível)</td>
                  <td>Warner Bros. (Rocksteady)</td>
                  <td>US$200 milhões</td>
                  <td>246,37</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className='border-b-2 border-dashed border-blue-600 py-4'>
          <h2 className="text-4xl underline hover:text-red-500 py-10 font-bold">Novidades:</h2>
          <p className='mx-10 text-base/6'>
            As empresas que dominam o mercado de consoles decidiram aumentar o preço de seus consoles, por cause de vários motivos mas um que os mais está afetando é essas empresas são as tarifas que aumentaram mundialmente.
          </p>

          <div className='text-center container'>
            <h4 className='text-2xl underline hover:text-red-500 py-10 font-bold'>Exemplos de aumentos no mundo:</h4>
            <div className='mx-50'>

              <table className="table-auto mx-50 text-center">

                <thead>
                  <tr>
                    <td className='p-3'></td>
                    <th className='p-3'>
                      Xbox (Series X)
                    </th>
                    <th className='p-3'>
                      Playstation (PS5)
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className='font-semibold'>Preço Antigo:</td>
                    <td>US$599.99 (EUA)</td>
                    <td>€ 449,99 (Europa)</td>
                  </tr>

                  <tr>
                    <td className='font-semibold'>Preço Novo:</td>
                    <td>US$729.99 (EUA)</td>
                    <td>€ 499,99 (Europa)</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <Link className='p-2 border-1 border-black rounded-xl bg-green-400 hover:border-white hover:bg-red-600 hover:text-white' type='button' href="https://br.ign.com/xbox/139706/news/xbox-aumenta-preco-de-consoles-e-acessorios-ao-redor-do-mundo-e-confirma-que-jogos-custarao-us-80-ao">
                      IGN
                      </Link>
                    </td>

                    <td>
                      <div className='my-4'>
                        <Link className='p-2 my-5 border-1 border-black rounded-xl bg-blue-400 hover:border-white hover:bg-red-600 hover:text-white' type='button' href="https://www.tecmundo.com.br/voxel/501160-sony-anuncia-grande-aumento-de-preco-no-ps5-em-diversas-regioes-confira-novos-valores.htm">
                          tecmundo
                        </Link>
                      </div>

                      <div className='my-4'>
                        <Link className='p-2 my-5 border-1 border-black rounded-xl bg-blue-400 hover:border-white hover:bg-red-600 hover:text-white' type='button' href="https://cbn.globo.com/tecnologia/noticia/2025/04/14/sony-aumenta-em-25percent-preco-do-playstation-5-em-parte-do-mundo-por-causa-das-tarifas-de-trump.ghtml">
                          cbn.globo
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>


              </table>
            </div>
          </div>

        </div>


        <div className='border-b-2 border-dashed border-blue-600 py-4'>
          <h2 className="text-4xl underline hover:text-red-500 py-10 font-bold">A globalização:</h2>
          <p className="mx-10 mb-15">
            Outra coisa que está afetando o mercado positivamente é a qualidade de produção de jogos de paises que não recebiam muitos destaque como a China, que rápidamente lançaram jogos os quais fizeram impressões positivas no mercado mundial, e isso é bom pois assim as empresas já existentes são forçadas a melhorarem a qualidade de seus jogos por causa da competição do mercado
          </p>
        </div>


        <div>
          <h2 className="text-4xl underline hover:text-red-500 py-10 font-bold">Responsabilidade socioambiental:</h2>
          <p className="mx-10 mb-15">
            É muito importante que se tenha um conhecimento sobre responsabilidade socioambiental, pois coda ação que temos afeta o mundo e as pessoas a nossa volta e por isso é necessario saber os impactos que podem decorrer de nossas ações.
          </p>
          <p className="mx-10 mb-15">
            Um dos pontos a se preservar é o social, pois neste existem diversos grupos de diversos tamanhos e historias e uma responsabilidade é ser o mais aberto possivel para grupos diveersos, para que haja preservação desses grupos.

            E que todos tenha condições humanas de vida.
          </p>
          <p className="mx-10 mb-15">
            Outro ponto importante é o ambiental, pois se não houver a preservação ambiental o nosso futuro estará aruinado já que o ambiente é importante para a sobrevivencia humana; tanto na criação de aplicações uteis do dia á dia para a nossa qualidade de vida.
          </p>
        </div>


      </div>

      <Footer/>
    </div>
  )
}

export default Mais_informacoes
