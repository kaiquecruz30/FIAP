import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import './../css/global.css';

import { DivFormulario } from "../JS/style";

const schena = yup.object({
    cpf: yup.string().min(11, "O cpf tem que ter no minimo 11 numeros.").max(11, "O cpf tem que ter no maximo 11 numeros.").required("O cpf é obrigatório."),
    senha: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres.").required("A senha é necessária."),
    nome: yup.string().required("É necessaria uma descrição do local, da situação."),
    gps: yup.string().required("É necessário colocar a sua localização."),
})


export default function Formulario() {

    const [id, setId] = useState(0);

    function aumentarId(id) {
        setId(id++);
    }

    const {register, handleSubmit, formState:{errors}, setValue, setFocus} = useForm({
        resolver: yupResolver(schena)
    })

    const [listaCadastro, setListaCadastro] = useState([])

    function inserirCadastro(cadastro) {
        setListaCadastro([...listaCadastro, cadastro])
    }

    return (
        <DivFormulario>
            <form onSubmit={handleSubmit(inserirCadastro)}>
                <fieldset>
                    <legend>Cadastro</legend>
                    <p>Aqui você irá inserir os dados para o seu cadastro.</p>


                    <label>cpf:
                        <p>*Colocar uma descrição da poda pedida.</p>
                        <input type="number" name="cpf" id="cpf" {...register('cpf')}/>                      
                        <span>{errors.cpf?.message}</span>
                    </label>

                    <label>senha:
                        <p>*Colocar uma descrição da poda pedida.</p>
                        <input type="text" name="senha" id="senha" {...register('senha')}/>                            
                        <span>{errors.senha?.message}</span>
                    </label>

                    <label>nome:
                        <p>*Colocar uma descrição da poda pedida.</p>
                        <input type="text" name="nome" id="nome" {...register('nome')}/>                            
                        <span>{errors.nome?.message}</span>
                    </label>

                    <label>gps:
                        <p>*Colocar uma descrição da poda pedida.</p>
                        <input type="text" name="gps" id="gps" {...register('gps')}/>                            
                        <span>{errors.gps?.message}</span>
                    </label>

                    <button type="submit">Enviar</button>
                    
                </fieldset>
            </form>
        </DivFormulario>
    )
}