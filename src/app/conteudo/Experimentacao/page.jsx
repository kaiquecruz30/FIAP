'use client';

import { useState } from 'react';
import React from 'react'
import '../CSS/tailwindcss/index.css'
import Footer from "@/componenetes/Footer";
import Nav from "@/componenetes/Nav";

const Experimento = () => {
  const [bgColor, setbgColor] = useState('white');

  const mudaCor = (cor) => {
    setbgColor(cor);
  };

  const [color, setColor] = useState('black');

  const texto = (t) => {
    setColor(t)
  }


  // Calculo lucro
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [valor3, setValor3] = useState(0);


  // Calculo exponencial
  const [valor4, setValor4] = useState(0);
  const [valor5, setValor5] = useState(0);
  const [valor6, setValor6] = useState(0);


  //Calculo de tendencia e limite
  const [valorx, setValorx] = useState(0);

  const [valor7, setValor7] = useState(0);
  const [valor8, setValor8] = useState(0);
  const [valor9, setValor9] = useState(0);
  const [valor10, setValor10] = useState(0);
  const numeroEuler = Math.E;


  //Simulacão de Consumo de Energia
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [valorC, setValorC] = useState(0);


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

        <>

          <div>
            <div className='text-center'>
              <h1 className="text-4xl underline hover:text-red-500 py-10 font-bold">Experimentação:</h1>
              <p className='mx-3 text-base/6'>
                Nesta página o leitor você poderá ver algumas das contas feitas no mundo de vendas e compras, que existem no mercado gamer.
              </p>
              <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">Como é calculado o lucro de uma venda:</h2>
            </div>



            {/* LUCRO */}
            <div className='border-1 border-grey mx-15 my-5 rounded-xl'>
              <h1 className="text-1xl p-5 font-semibold border-0 border-b-1 border-grey">LUCRO:</h1>
              <div className='text-center'>
                <h2 className="text-1xl font-semibold py-5">Calculando o lucro:</h2>
                <p className="py-5">
                    Caso queira saber como fazer um calculo simples de lucro leia esse accordion, se não pode fecha-lo e tenha um bom dia. 
                </p>
                <p className="py-5">
                    Uma das maneiras mais simples de calcular o lucro de uma venda é:
                </p>
                <p className="py-5">
                    L = (P * Q) - G
                </p>
                <p className="py-5">
                    G - Gasto ; L - Lucro ; Q - Quantidade ; P - Valor do Produto ; 
                </p>
                <p className="py-5">
                    E se o valor do lucro for negativo, na realidade isso não será um lucro mais um deficit.
                </p>
              </div>
            </div>

            <div className='text-center mb-5'>
              <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">Teste 1:</h2>
              <form>
                <div className='grid grid-cols-3 py-2 mx-3 gap-10'>
                    <label htmlFor="Gasto:" className='underline hover:text-red-500 font-semibold'>Gasto:</label>
                    <label htmlFor="Quantidade:" className='underline hover:text-red-500 font-semibold'>Quantidade:</label>
                    <label htmlFor="Preço:" className='underline hover:text-red-500 font-semibold'>Preço:</label>


                    <input className='border-2 border-red-950 rounded-2xl text-center' width={100} type="number" name='gasto' min={0} placeholder='0' id='gasto' required value={valor1} onChange={(e) => setValor1(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={100} type="number" name='quantidade' min={0} placeholder='0' id='quantidade' required value={valor2} onChange={(e) => setValor2(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={100} type="number" name='preco' min={0} placeholder='0' id='preco' required value={valor3} onChange={(e) => setValor3(Number(e.target.value))}/>


                </div>
              </form>
            </div>

            <div className='mx-2 grid grid-col-6'>
              <table className='table-auto col-start-1' id='tabela'>
                <thead className='border-0 border-b-2 border-b-gray-600'>
                  <tr>
                    <th>Gasto:</th>
                    <th>Quantidade:</th>
                    <th>Preço:</th>
                    <th>Resultado:</th>
                  </tr>
                </thead>

                <tbody id='local' className='text-center'>
                  <tr>
                    <th>{valor1}</th>
                    <th>{valor2}</th>
                    <th>{valor3}</th>
                    <th>{((valor2 * valor3) - valor1)}</th>
                  </tr>
                </tbody>

              </table>
            </div>




            {/* EXPONENCIAL */}
            <div className='border-1 border-grey mx-15 my-5 rounded-xl'>
              <h1 className="text-1xl p-5 font-semibold border-0 border-b-1 border-grey">EXPONENCIAL:</h1>
              <div className='text-center'>
                <h2 className="text-1xl font-semibold py-5">Calculando exponencial:</h2>
                <p className="py-5">
                    Calculo de juros compostos.
                </p>
                <p className="py-5">
                    M = C * (1 + i)^t
                </p>
                <p className="py-5">
                    M - Montante ; C - Capital ; i - Taxa ; t - Tempo ; 
                </p>
              </div>
            </div>

            <div className='text-center mb-5'>
              <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">Teste 1:</h2>
              <form>
                <div className='grid grid-cols-3 py-2 mx-3 gap-10'>
                    <label htmlFor="Capital:" className='underline hover:text-red-500 font-semibold'>Capital:</label>
                    <label htmlFor="Taxas:" className='underline hover:text-red-500 font-semibold'>Taxas:</label>
                    <label htmlFor="Tempo:" className='underline hover:text-red-500 font-semibold'>Tempo:</label>


                    <input className='border-2 border-red-950 rounded-2xl text-center' width={100} type="number" name='Capital' min={0} placeholder='0' id='Capital' required value={valor4} onChange={(e) => setValor4(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={100} type="number" name='Taxas' min={0} placeholder='0' id='Taxas' required value={valor5} onChange={(e) => setValor5(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={100} type="number" name='Tempo' min={0} placeholder='0' id='Tempo' required value={valor6} onChange={(e) => setValor6(Number(e.target.value))}/>


                </div>
              </form>
            </div>

            <div className='mx-2 grid grid-col-6'>
              <table className='table-auto col-start-1' id='tabela'>
                <thead className='border-0 border-b-2 border-b-gray-600'>
                  <tr>
                    <th>Capital:</th>
                    <th>Taxa:</th>
                    <th>Tempo:</th>
                    <th>Montante:</th>
                  </tr>
                </thead>

                <tbody id='local' className='text-center'>
                  <tr>
                    <th>{valor4}</th>
                    <th>{valor5}</th>
                    <th>{valor6}</th>
                    <th>{(valor4 + ((1 + (valor5/100)) ** valor6))}</th>
                  </tr>
                </tbody>

              </table>
            </div>




            {/* LIMITE */}
            <div className='border-1 border-grey mx-15 my-5 rounded-xl'>
              <h1 className="text-1xl p-5 font-semibold border-0 border-b-1 border-grey">LIMITE:</h1>
              <div className='text-center'>

                <h2 className="text-1xl font-semibold py-5">Calculando Limite:</h2>
                <p className="py-5">
                    Calculo limite.
                </p>
                <p className="py-5">
                    F(x) = (x^2 + 1) / (x - 1)
                </p>
                <p className="py-5">
                    F - total ; x - variavel; 
                </p>


                <h2 className="text-1xl font-semibold py-5">Calculando Tendência:</h2>
                <p className="py-5">
                    Calculo de curva de aprendizado.
                </p>
                <p className="py-5">
                    F(t) = C - k.e^(at) 
                </p>
                <p className="py-5">
                    F - total ; C - número base ; k - Taxa ; t - Tempo ; a - valor ; 
                </p>
              </div>
            </div>



            <div className='text-center mb-5'>
              <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">Teste Tendência:</h2>
              <form>
                <div className='grid grid-cols-3 py-2 mx-3 gap-10'>
                    <label htmlFor="Número Base:" className='underline hover:text-red-500 font-semibold'>Número Base:</label>
                    <label htmlFor="Taxa:" className='underline hover:text-red-500 font-semibold'>Taxa:</label>
                    <label htmlFor="Valor:" className='underline hover:text-red-500 font-semibold'>Valor:</label>


                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='Base' min={0} placeholder='0' id='base' required value={valor7} onChange={(e) => setValor7(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='taxa' min={0} placeholder='0' id='taxa' required value={valor8} onChange={(e) => setValor8(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='valor' min={0} placeholder='0' id='valor' required value={valor9} onChange={(e) => setValor9(Number(e.target.value))}/>

                    <div></div>
                    <label htmlFor="tempo:" className='underline hover:text-red-500 font-semibold'>tempo:</label>
                    <div></div>
                    <div></div>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" 
                    name='tempo' min={0} placeholder='0' id='tempo' required value={valor10} onChange={(e) => setValor10(Number(e.target.value))}/>

                </div>
              </form>
            </div>

            <div className='mx-2 grid grid-col-6'>
              <table className='table-auto col-start-1' id='tabela'>
                <thead className='border-0 border-b-2 border-b-gray-600'>
                  <tr>
                    <th>Número Base:</th>
                    <th>Taxa:</th>
                    <th>Valor:</th>
                    <th>Tempo:</th>
                    <th>Total:</th>
                  </tr>
                </thead>

                <tbody id='local' className='text-center'>
                  <tr>
                    <th>{valor7}</th>
                    <th>{valor8}</th>
                    <th>{valor9}</th>
                    <th>{valor10}</th>
                    <th>{valor7 - (valor8 * (numeroEuler ** (valor10 * valor9)))}</th>
                  </tr>
                </tbody>

              </table>
            </div>



            <div className='text-center mb-5'>
              <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">Teste de Limite:</h2>
              <form>
                <div className='grid grid-cols-1 py-2 mx-3 gap-10'>
                    <label htmlFor="Valor de X:" className='underline hover:text-red-500 font-semibold'>Valor de X:</label>

                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='Valor de X' min={0} placeholder='0' id='base' required value={valorx} onChange={(e) => setValorx(Number(e.target.value))}/>

                </div>
              </form>
            </div>

            <div className='mx-2 grid grid-col-6'>
              <table className='table-auto col-start-1' id='tabela'>
                <thead className='border-0 border-b-2 border-b-gray-600'>
                  <tr>
                    <th>Valor de X:</th>
                    <th>Resultado:</th>
                  </tr>
                </thead>

                <tbody id='local' className='text-center'>
                  <tr>
                    <th>{valorx}</th>
                    <th>{((valorx ** 2) + 1) / (valorx - 1)}</th>
                  </tr>
                </tbody>

              </table>
            </div>




            {/* Simulacão de Consumo de Energia */}
            <div className='border-1 border-grey mx-15 my-5 rounded-xl'>
              <h1 className="text-1xl p-5 font-semibold border-0 border-b-1 border-grey">Consumo de Energia:</h1>
              <div className='text-center'>
                <h2 className="text-1xl font-semibold py-5">Como funciona:</h2>
                <p className="py-5">
                    Consumo de energia refere-se a quantidade de energia, que nesse contexto é a energia elétrica, que é consumida ou usada pelas aplicações de uma moradia.
                </p>
                <p>
                  E se desejar em ver uma simulação mais detalhada entrar no site da enel: <a className="hover:text-red-500 text-blue-800 underline" href="https://enel-rj.simuladordeconsumo.com.br/">Simulador de Consumo de Energia</a>
                </p>
                <p className="py-5">
                    kWh = kW x h x D
                </p>
                <p className="py-5">
                    kWh - Consumo ; kW - Potência ; h - Horas de uso ; D - Dias de uso ; 
                </p>
              </div>
            </div>

            <div className='text-center mb-5'>
              <h2 className="text-2xl underline hover:text-red-500 py-10 font-bold">Teste 1:</h2>
              <form>
                <div className='grid grid-cols-3 py-2 mx-3 gap-10'>
                    <label htmlFor="kW:" className='underline hover:text-red-500 font-semibold'>kW:</label>
                    <label htmlFor="h:" className='underline hover:text-red-500 font-semibold'>h:</label>
                    <label htmlFor="Dias de uso:" className='underline hover:text-red-500 font-semibold'>Dias de uso:</label>

                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='kW' min={0} placeholder='0' id='taxa' required value={valorA} onChange={(e) => setValorA(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='h' min={0} max={24} placeholder='0' id='valor' required value={valorB} onChange={(e) => setValorB(Number(e.target.value))}/>
                    <input className='border-2 border-red-950 rounded-2xl text-center' width={50} type="number" name='Dias_de_uso' min={0} placeholder='0' id='valor' required value={valorC} onChange={(e) => setValorC(Number(e.target.value))}/>

                </div>
              </form>
            </div>

            <div className='mx-2 grid grid-col-6'>
              <table className='table-auto col-start-1' id='tabela'>
                <thead className='border-0 border-b-2 border-b-gray-600'>
                  <tr>
                    <th>kW:</th>
                    <th>h:</th>
                    <th>Dias de uso:</th>
                    <th>kWh:</th>
                  </tr>
                </thead>

                <tbody id='local' className='text-center'>
                  <tr>
                    <th>{valorA}</th>
                    <th>{valorB}</th>
                    <th>{valorC}</th>
                    <th>{valorA * valorB * valorC}</th>
                  </tr>
                </tbody>

              </table>
            </div>




          </div>
        </>

      <Footer/>
    </div>
  )
}

export default Experimento
