import styled from 'styled-components'


export const DivEntrada = styled.div`

    div{
        padding: 10px 3rem;
        background-color: rgb(116, 255, 82);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: auto auto;
        gap: 10px;
    }

    p{
        font-size: 1.7rem;
        position: relative;
        top: 40%;
    }

    fieldset{
        margin: 5px;
        padding: 20px;
        border: none;
    }

    label{
        font-size: 1.5rem;
    }

    input{
        border: 2px solid white;
        border-radius: 10px;
        background-color: rgb(190, 190, 190);
        color: black;
        padding: 2px;
        margin: 10px;
    }

    input:focus {
        background-color: white;
    }

    button {
        border: 2px solid #008d0094;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
    }

    button:hover {
        border: 2px solid #00000094;
        color: white;
        background-color: rgb(255, 54, 32);
    }

    .link {
        color: black;
        text-decoration: none;
    }

    .link, section, p{
        background-color: rgba(128, 128, 128, 0);
    }

    .separa{
        padding: 0px;
        margin: 5px;
        width:100%; 
        height:3px; 
        background: #008d0094; 
    }

    .menu{
        width: 70%;
        height: 80%;
        box-shadow: 10px 10px rgba(130, 255, 98, 0.29);
        border-radius: 10px;
        padding: 10px;
        margin: 1.5rem auto; 
    }

    .imagem-background{
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.93), rgba(255, 255, 255, 0.24)), url(https://images.pexels.com/photos/38626301/pexels-photo-38626301.jpeg);
        background-attachment: scroll;
        background-position: center;
        background-repeat: no-repeat;
        height: min(500px);
    }

    .menu, h1, fieldset, form, label, button {
        color: black;
        background-color: rgb(116, 255, 82);
    }
`

export const DivCadastrar = styled.div`

    div {
        padding: 20px;
        align-items: center;
        justify-items: center;
    }

    section{
        width: 50%;
        height: 90%;
        padding: 10px;
        background-color: rgba(155, 255, 130, 0.84);
        display: grid;
        grid-template-columns: 1fr;
        grid-area: auto auto;
        gap: 10px;
        border-radius: 10px;
    }

    fieldset{
        margin: 5px;
        padding: 10px;
        border: none;
    }

    label{
        font-size: 1.5rem;
    }

    input{
        width: 80%;
        border: 2px solid white;
        border-radius: 10px;
        background-color: rgb(190, 190, 190);
        color: black;
        padding: 2px;
        margin: 10px;
    }

    input:focus {
        background-color: white;
    }

    button {
        border: 2px solid #008d0094;
        border-radius: 2rem;
        Font-size: 1rem;
        padding: 1rem;
        margin: 20px;
    }

    button:hover {
        border: 2px solid #00000094;
        color: white;
        background-color: rgb(255, 54, 32);
    }

    .limpar {
        padding: 5px;
    }

    .link {
        color: black;
        text-decoration: none;
    }

    h1, p, div, .link, fieldset, form, label, button {
        color: black;
        background-color: rgba(128, 128, 128, 0);
    }

    .sombra{
        box-shadow: 10px 10px rgba(219, 219, 219, 0.56);
        border-radius: 10px;
    }

    .imagem-background{
        padding: 2rem;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.77)), url(https://images.pexels.com/photos/14000729/pexels-photo-14000729.jpeg);
        background-attachment: scroll;
        background-position: center;
        background-repeat: no-repeat;
        height: min(700px);
    }

`

export const DivHome = styled.div`

    p{
        width: 70%;
        padding: 10px;
        font-size: 2rem;
        position: relative;
        top: 35%;
        left: 15%
    }

    section{
        width: 100%;
        height: 100%;
    }

    section, p{
        background-color: rgba(128, 128, 128, 0);
    }

    .imagem-background{
        background: rgb(214, 214, 214);
        background-image: linear-gradient(rgba(83, 83, 83, 0.66)), url(https://images.pexels.com/photos/27083694/pexels-photo-27083694.jpeg);
        background-attachment: scroll;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.9;
        height: min(500px);
    }
    
`

export const DivAvisos = styled.div`

    div {
        padding: 1rem 0;
    }

    section {
        align-items: center;
        justify-items: center;    
    }

    img {
        width: 80px;
        margin: 0 0 0 1rem;
    }

    h2 {
        padding: 10px;
    }

    .aviso-tempestade {
        background-color: rgb(70, 166, 255);
        border: 4px solid rgba(0, 85, 165, 0.81);
    }

    .aviso-deslisamento {
        background-color: rgb(255, 198, 43);
        border: 4px solid rgba(170, 125, 0, 0.81);
    }

    .aviso-incendio {
        background-color: rgb(255, 72, 72);
        border: 4px solid rgba(165, 0, 0, 0.81);
    }

    .aviso-calor {
        background-color: rgb(235, 219, 0);
        border: 4px solid rgba(167, 155, 0, 0.81);
    }

    .separador-horizontal {
        padding: 0;
        height: 2px;
        border-bottom: 2px dashed white;
        margin: 1rem 0;
    }

    .aviso-tempestade, .aviso-deslisamento, .aviso-incendio, .aviso-calor{
        padding: 1.5rem;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-area: auto auto;
        gap: 10px;
        border-radius: 2rem;
        width: 60%;
        height: 50%;
    }


    img, h2 {
        background-color: rgba(128, 128, 128, 0);
    }


`

export const DivPrevissao = styled.div`

    div {
        padding: 2.5rem 0;
    }

    section {
        margin: 2rem 0;
        padding: 1.5rem;
        height: 700px;
        align-items: center;
        justify-items: center;
    }

    iframe {
        width: 100%;
        height: 100%;
        frameBorder: 1;
        border-radius: 10px;
    }

    .background {
        width: 90%;
        height: 90%;
        padding: 0;
        background-color: grey;
        border: 3px solid white;
        border-radius: 20px;
    }

    .separador-horizontal {
        padding: 0;
        height: 2px;
        border-bottom: 2px dashed white;
        margin: 1rem 0;
    }

    p {
        background-color: rgba(128, 128, 128, 0);
    }
`