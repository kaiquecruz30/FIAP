'use client';

import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import '../CSS/tailwindcss/index.css'
import Footer from "@/componenetes/Footer";
import Nav from "@/componenetes/Nav";


const API = () => {
    const [bgColor, setbgColor] = useState('white');

    const mudaCor = (cor) => {
        setbgColor(cor);
    };

    const [color, setColor] = useState('black');

    const texto = (t) => {
        setColor(t)
    }
    

    const informacao = [
        { id: 1, nome: "Counter-Strike"},
        { id: 2, nome: "Rust"},
        { id: 3, nome: "Grand Theft Auto V Legacy"},
        { id: 4, nome: "Team Fortress 2"},
    ]


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

            <div className='text-center mx-5'>
                <h1 className='text-3xl hover:text-red-500 py-10 pb-5 font-bold'>O que é uma API:</h1>

                <div className='grid grid-cols-2 gap-4 m-4'>
                    <div>
                        <h3 className='text-3xl underline hover:text-red-500 py-10 font-bold'>Alura:</h3>
                        <p className='text-base/6 py-2'>
                            "API é um acrônimo em inglês para Application Programming Interface. Em português, significa Interface de Programação de Aplicações."
                        </p>
                        <p className='text-base/6 py-2'>
                            "De forma geral, é um conjunto de padrões, ferramentas e protocolos que permite a criação mais simplificada e segura de plataformas, pois permite a integração e a comunicação de softwares e seus componentes."
                        </p>
                        <p className='text-base/6 py-2'>
                            "As APIs desempenham um papel de conectividade e interação entre diferentes sistemas e aplicações. Existem vários tipos de APIs, cada um servindo a propósitos específicos."
                        </p>
                        <Link className='text-bold underline hover:text-red-500 text-blue-400' href='https://www.alura.com.br/artigos/api'>ALURA</Link>
                    </div>

                    <div>
                        <h3 className='text-3xl underline hover:text-red-500 py-10 font-bold'>IBM:</h3>
                        <p className='text-base/6 py-2'>
                            "Uma API, ou interface de programação de aplicativos, é um conjunto de regras ou protocolos que permitem que aplicativos de software se comuniquem entre si para trocar dados, recursos e funcionalidades."
                        </p>
                        <p className='text-base/6 py-2'>
                            "É útil pensar na comunicação da API em termos de solicitação e resposta entre um cliente e um servidor. O aplicativo que envia a solicitação é o cliente e o servidor fornece a resposta. A API é a ponte que estabelece a conexão entre eles"
                        </p>
                        <Link className='text-bold underline hover:text-red-500 text-blue-400' href='https://www.ibm.com/br-pt/think/topics/api'>IBM</Link>
                    </div>
                </div>


                <div className='grid grid-cols-4 gap-5 mx-5'>
                    <h1 className='col-span-4 underline text-3xl hover:text-red-500 py-10 pb-5 font-bold'>Alguns dos jogos mais jogados atualmente:</h1>

                    {informacao.map((informacao) => (
                        <div key={informacao.id} className='border-1 border-red-500 rounded-4xl bg-red-500 text-white m-5' >
                            <h2 className='text-2xl text-white p-5 font-bold'>{informacao.nome}</h2>
                        </div>
                    ))}

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default API
