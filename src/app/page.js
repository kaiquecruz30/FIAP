'use client';

import { useState } from 'react';
import Footer from "@/componenetes/Footer";
import Nav from "@/componenetes/Nav";
import Image from "next/image";
import Janela from "./public/janela.jpg"
import Grafico from "./public/grafico.jpg"
import home from "./public/notebook.jpg"
import numero from "./public/numeros.jpg"
import matriz from "./public/matriz.jpg"
import camera from "./public/camera.jpg"
import placa from "./public/placa.jpg"
import documento from "./public/documento.jpg"
import leitura from "./public/leitura.jpg"
import { black } from './conteudo/CSS/tailwindcss/dist/colors';
import { fontSize } from './conteudo/CSS/tailwindcss/dist/default-theme';

export default function Home() {  
    const [bgColor, setbgColor] = useState('white');

    const mudaCor = (cor) => {
        setbgColor(cor);
    };

    const [color, setColor] = useState('black');

    const texto = (t) => {
        setColor(t)
    };

  return (

    <div style={{backgroundColor: bgColor, color: color, font: fontSize}}>
    <Nav/>

    <div className="bg-no-repeat bg-black py-7 flex pr-5">
      <div className="mx-5 ml-10">
        <Image 
          src={Janela} 
          className="bg-gray-800 text-white rounded-2xl" 
          width={2000}
          height={500}
          alt="Uma foto de uma janela em preto e branco com uma pessoa na mesma."
        />
      </div>
      <div className="m-5 text-blue-600 font-poppins">
        <h1 className="text-3xl py-3 font-bold">Aumento de pessoas no mundo gamer:</h1>
        <p className="text-base/6 py-3">
          Como o início da pandemia da SARS-CoV-2 a qual foi surpreza para grande parte do mundo, houve uma falta de contato entre as pessoas, pois estas se encontravão em quarentena, mas com isso vei o aumento de pessoa no mundo dos jogos pois muitos jogos oferecem interações com outros jogadores assim formando amizades e criando felicidade em uma época na qual a tristeza estavá em alta e o mundo mais sombrio.
        </p>
        <p className="text-base/6 py-3">
          E isso fez com que um fluxo bem grande pessoa entrassem nessa esfera de jogos, assim aumentandando a quantidade de consumidores no mundo dos jogos, mesmo que alguns jogos tiveram que parar a produção por causa da pandemia.
        </p>
      </div>
    </div>

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
    

    <div className='container text-center my-5'>
      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Apresentação:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={Grafico} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="uma mão apontando para um papel na mesa o qual apresenta gráfico circulares e de linhas."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Olá, este é um site no qual o seu tópico de discursão é alguns do efeitos da pandemia no mundo Gamer quer que eles sejam positivos ou negativos para a industria.
      </p>
      <p className="py-2 px-10">
        Aqueles nomes na barra ao topo dessa página são as outras páginas desse Website as quais poderão providenciar mais informações para assim fornecer uma melhor experiência de leitura.
      </p>

      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Home:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={home} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="Uma imagem de um laptop com o Google aberto e em cima de uma mesa de madeira."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Aqui na Home haverá uma pequena explicação de todas as abas presentes no menu.
      </p>


      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Números:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={numero} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="Um painel no qual apresenta-se varios números."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Na aba de Números irá ser falado sobre as informações númericas do tópico que lhe foi mencionado e com isso  tem uma visualização da porcentagem do aumento de pessoas no mundo dos jogos, e outras estastisticas.
      </p>


      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Mais Informações:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={matriz} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="Camera boa gravando alguem."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Na aba de mais informações terá mais informações sobre o tópico da pandemia e o mundo Gamer, e algumas outras informações como o site do qual foi tirado as imagens.
      </p>


      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Experimentação:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={placa} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="a foto de uma placa mãe com uma CPU e entradas PCI a mostra."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Na aba de experimentação o usuário poderá testar um pouco um calculo de lucro bem simples, que acaba sendo a base para a economia do mundo moderno.
      </p>


      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Formulário:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={documento} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="Imagem de alguem assinado um documento."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Nessa aba será apresentado um formulário que irá fazer perguntas como: "Durante a pandemia quantos jogos você jogou?" ou "Nessa época fez muitos amigos decorrente desse isolamento".
      </p>

      <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">API:</h1>
      <div className="grid grid-cols-3 py-5">
        <div></div>
        <Image 
          src={leitura} 
          className="rounded-2xl shadow-xl/30 " 
          width={500}
          height={500}
          alt="Uma foto de uma pessoa lendo um texto no celular."
        />
        <div></div>
      </div>
      <p className="py-2 px-10">
        Nessa aba será apresentado uma explicação do que é uma API e havera uma apresentação dela.
      </p>
    </div>

    <Footer/>
    </div>

  );
}
