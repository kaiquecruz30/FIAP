import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

import './../css/global.css';

import { DivFormulario } from "../JS/style";

const schena = yup.object({
    cep: yup.string().min(8, 'O cep deverá apresentar no minimo 8 caracteres.').max(8, 'O cep deverá apresentar no maximo 8 caracteres').required("O cep é obrigatório."),
    numero: yup.string().required("É necessario que o número do local mais proximo do buracoseja colocado."),
    descricao: yup.string().required("É necessaria uma descrição do local, da situação."),
})

export default function Formulario() {
    
    function buscarEndereco(e) {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(res => res.json())
        .then(dados => {
            setValue('rua', dados.logradouro)
            setValue('bairro', dados.bairro)
            setValue('cidade', dados.localidade)
            setValue('estado', dados.uf)
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
        <DivFormulario>
            <form onSubmit={handleSubmit(inserirSolicitacao)}>
                <fieldset>
                    <legend>Solicitações</legend>
                    <p>Aqui você irá inserir os dados da sua solicitação.</p>
                    <fieldset>
                        <legend>Endereço</legend>
                        <p><small>*Colocar endereço aproximado do local do buraco.</small></p>
                        <label htmlFor="cep">Cep:
                            <input type="text" name="cep"  {...register('cep')} onBlur={buscarEndereco}/>
                            <span>{errors.cep?.message}</span>
                        </label>
                        <label htmlFor="rua">Rua:
                            <input type="text" name="rua" disabled {...register('rua')}/>
                        </label>
                        <label htmlFor="bairro">Bairro:
                            <input type="text" name="bairro" disabled {...register('bairro')}/>
                        </label>
                        <label htmlFor="cidade">Cidade:
                            <input type="text" name="cidade" disabled {...register('cidade')}/>
                        </label>
                        <label htmlFor="estado">Estado:
                            <input type="text" name="estado" disabled {...register('estado')}/>
                        </label>
                        <label htmlFor="numero">Número:
                            <input type="text" name="numero" {...register('numero')}/>
                            <span>{errors.numero?.message}</span>
                        </label>
                    </fieldset>

                    <label>Descrição:
                        <p>*Colocar uma descrição do buraco.</p>
                        <input type="text" {...register('descricao')}/>                            
                        <span>{errors.descricao?.message}</span>
                    </label>

                    <label>Imagens:
                        <p>*Colocar imagens do local do buraco.</p>
                        <input type="image" src="submit.png" height="50" {...register('imagens')}/>
                    </label>

                    <button type="submit">Enviar</button>
                    
                </fieldset>
            </form>

            <div>
                <h1>Histórico</h1>
                <p>
                    Aqui aparecerão as suas solicitações.
                </p>
                <div className="painel">
                    {listaSolicitacoes.map((cli, index) => 
                        <div key={index} className="etiqueta">
                            <h2><strong>Solicitação {index}</strong></h2>
                            <div>
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
        </DivFormulario>
    )
}