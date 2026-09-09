import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import "../css/solicitacao.css"

const schena = yup.object({
    cep: yup.string().min(8, 'O cep deverá apresentar no minimo 8 caracteres.').max(8, 'O cep deverá apresentar no maximo 8 caracteres').required("O cep é obrigatório."),
    numero: yup.string().required("É necessario que o número do local mais proximo da poda seja colocado."),
    descricao: yup.string().required("É necessaria uma descrição do local, da situação."),
})

export default function Solicitacao() {

    function buscarEndereco(e) {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json())
        .then(dados => {
            setValue('rua', dados.logradouro)
            setValue('bairro', dados.bairro)
            setFocus('numero')
        })
    }

    const {register, handleSubmit, formState:{errors}, setValue, setFocus} = useForm({
        resolver: yupResolver(schena)
    })

    const [listaSolicitacoes, setListaSolicitacoes] = useState([])

    function inserirSolicitacao(solicitacao) {
        setListaSolicitacoes([...listaSolicitacoes, solicitacao])
    }

    return (
        <>
            <div className="solicitacoes-container">
                <div>
                    <h2><strong>SOLICITAÇÕES:</strong></h2>
                    <p>Aqui você poderá fazer as solicitações para as podas das vegetações.</p>
                </div>

                <div>
                    <form onSubmit={handleSubmit(inserirSolicitacao)}>
                        <fieldset>
                            <legend>Solicitações</legend>
                            
                            <fieldset className="endereco">
                                <legend>Endereço</legend>
                                <p>*Colocar endereço aproximado do local da poda.</p>

                                <label>Cep:
                                    <input type="text" {...register('cep')} onBlur={buscarEndereco}/>
                                    <span>{errors.cep?.message}</span>
                                </label>

                                <label>Rua:
                                    <input type="text" {...register('rua')}/>
                                </label>

                                <label>Número::
                                    <input type="text" {...register('numero')}/>
                                    <span>{errors.numero?.message}</span>
                                </label>

                                <label>Bairro:
                                    <input type="text" {...register('bairro')}/>
                                </label>
                            </fieldset>

                            <label>Descrição:
                                <p>*Colocar uma descrição da poda pedida.</p>
                                <input type="text" {...register('descricao')}/>
                                <span>{errors.descricao?.message}</span>
                            </label>

                            <label>Imagens:
                                <p>*Colocar imagens do local da poda e do espaço ao redor.</p>
                                <input type="image" src="submit.png" height="50" {...register('imagens')}/>
                            </label>

                            <button type="submit">Enviar</button>
                        </fieldset>
                    </form>
                </div>

                <div className="historico">
                    <h2><strong>HISTORICO:</strong></h2>
                    <div className="solicitacao-organizacao protocolos">
                        {listaSolicitacoes.map((cli, index) => 
                        <div key={index} className="solicitacao">
                            <h2><strong>Solicitação</strong></h2>
                            <div className="endereco-informacoes">
                                <p><strong>Cep:</strong> {cli.cep}</p>
                                <p><strong>Rua:</strong> {cli.rua}</p>
                                <p><strong>Número:</strong> {cli.numero}</p>
                                <p><strong>Bairro:</strong> {cli.bairro}</p>
                            </div>
                            <p><strong>Descrição:</strong> {cli.descricao}</p> 
                        </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )

}