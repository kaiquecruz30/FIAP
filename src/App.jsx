import { use, useState } from "react";

//Componentes


//Imagens
import sao_paulo from "./imagens/governo de sao paulo.png"

//CSS
import "./CSS/global.css";



function App() {

  //Alertas
  function concluido() {
    alert("A sua solicitação foi concluida.")
  }

  function erro() {
    alert("!!!ERRO!!!\n\nEspere alguns segundo e tente novamente.")
  }

  //useState
  const [nome, setNome] = useState("")

  const [endereco, serEndereco] = useState("")

  const [descricao, setDescricao] = useState("")


  return (
    <>

      <header className="barra">
        <div>
          <img src={sao_paulo} height="auto" width="200px" alt="imagem escrito Gov com cada letra de uma cor diferente da outra" />
          <p className="negrito">Voltar</p>
        </div>
      </header>



      <body>
        <div>
          <h1>Solicitação de Serviço:</h1>
          <p>Nessa página é possivel fazer solicitações para inspeções.</p>

          <div className="questionario formatacao">

            <form className="solicitacao">

              <legend className="negrito">Solicitação</legend>
              
              <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value={nome} placeholder="Digite o seu nome"/>
              </div>

              <div>
                <label htmlFor="endereco">Endereço:</label>
                <input type="text" id="endereco" name="endereco" value={endereco} placeholder="Digite o endereço do buraco"/>
              </div>

              <div>
                <label htmlFor="descricao">Descrição: </label>
                <textarea className="regiao" id="descricao" name={descricao} value="descricao" placeholder="Este buraco está aberto a 3 meses ..."></textarea>
              </div>

              <input type="submit" value="solicitar"/>
            </form>

          </div>
        </div>
      </body>

    </>
  )

}


export default App