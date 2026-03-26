'use client';

import { useState } from 'react';
import React from 'react'
import '../CSS/tailwindcss/index.css'
import Footer from "@/componenetes/Footer";
import Nav from "@/componenetes/Nav";

const Formulario = () => {
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

      <form>
        <div className='text-center pb-10'>

          <div className=" py-5">
            <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Formulário</h1>
            <p className="py-5">
              Nesse formulário seram feitas perguntas sobre em que época você começou a jogar games, se joga, qual a frequência, o tipo de games e outras coisas.
            </p>
          </div>

          <div className='container mx-10'>
            <fieldset className='border-2 border-purple-800 rounded-4xl border-dotted p-2'>
              <legend className='text-2xl underline hover:text-red-500 py-10 font-bold'>Tipos de jogos:</legend>
              <p className='p-2 text-red-500'>
                Escolha os tipos a quais você normalmente joga
              </p>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo1'/>
              <label htmlFor="Tipo1">Exploração</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo2'/>
              <label htmlFor="Tipo2">Mistério</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo3'/>
              <label htmlFor="Tipo3">Ação</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo4'/>
              <label htmlFor="Tipo4">RPG</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo5'/>
              <label htmlFor="Tipo5">Corrida</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo6'/>
              <label htmlFor="Tipo6">Quebra-cabeça</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo7'/>
              <label htmlFor="Tipo7">Multiplayer</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo8'/>
              <label htmlFor="Tipo8">Singleplayer</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo9'/>
              <label htmlFor="Tipo9">Não joga</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo10'/>
              <label htmlFor="Tipo10">Outros</label>
            </fieldset>
          </div>


          <div className='container mx-10'>
            <fieldset className='border-2 border-purple-800 rounded-4xl border-dotted p-2'>
              <legend className='text-2xl underline hover:text-red-500 py-10 font-bold'>Plataformas:</legend>
              <p className='p-2 text-red-500'>
                Quais plataformas você usa para jogar
              </p>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Plataforma1'/>
              <label htmlFor="Plataforma1">PC</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo2'/>
              <label htmlFor="Tipo2">PS4</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo3'/>
              <label htmlFor="Tipo3">PS5</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo4'/>
              <label htmlFor="Tipo4">XBOX series X/S</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo5'/>
              <label htmlFor="Tipo5">XBOX One</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo6'/>
              <label htmlFor="Tipo6">Nintendo Switch</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo7'/>
              <label htmlFor="Tipo7">celular</label>
              <input type="checkbox" className='text-red-500 text-1xl mx-2' id='Tipo8'/>
              <label htmlFor="Tipo8">Nenhum</label>
            </fieldset>
          </div>


          <div className='container mx-10'>
            <fieldset className='border-2 border-purple-800 rounded-4xl border-dotted p-2'>
              <legend className='text-2xl underline hover:text-red-500 py-10 font-bold'>Tempo:</legend>
              <p className='p-2 text-red-500'>
                A quanto tempo você joga
              </p>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo1'/>
              <label htmlFor="tempo1">+40 anos</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo2'/>
              <label htmlFor="tempo2">31-40 anos</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo3'/>
              <label htmlFor="tempo3">21-30 anos</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo4'/>
              <label htmlFor="tempo4">11-20 anos</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo5'/>
              <label htmlFor="tempo5">1-10 anos</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo6'/>
              <label htmlFor="tempo6">-1 ano</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo7'/>
              <label htmlFor="tempo7">Não lembro</label>
              <input type="radio" name="tempo" className='text-red-500 text-1xl mx-2' id='tempo8'/>
              <label htmlFor="tempo8">Nunca joguei</label>
            </fieldset>
          </div>


          <div className='container mx-10'>
            <fieldset>
                <legend className="text-2xl underline hover:text-red-500 py-10 pb-5 font-bold">Feedback</legend>
                <p className='p-2 text-red-500'>Escreva o que você achou dessa esperiencia e como poderiamos melhorara</p>
                <label htmlFor="Feedback"></label>
                <textarea className='p-1 m-2 border-2 border-purple-800 rounded-2xl w-3/5 h-2/3' name="Feedback" id="feedback"></textarea>
            </fieldset>

            <div>              
            <button type='button' className='p-2.5 m-2 border-1 border-purple-800 rounded-3xl hover:border-white hover:bg-red-500' id='botao'>
              Enviar
            </button>

            <input type="reset" className='p-2.5 m-2 border-1 border-purple-800 rounded-3xl hover:border-white hover:bg-red-500' value='limpar respostas'></input>
            </div>
          </div>


        </div>
      </form>

      <Footer/>
    </div>
  )
}

export default Formulario
