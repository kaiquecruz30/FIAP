import styled from 'styled-components'

export const DivImagens = styled.div`

    img{
        width: 600px;
        height: 200px;
        border-radius: 10px;
        box-shadow: 5px 5px 2px rgb(179, 178, 178);
        opacity: 3;
    }

    section{
        margin: 3rem 0;
    }

`

export const DivFormulario = styled.div`

    form{
        width: 800px; 
        margin: 2rem auto;
    }

    fieldset{
        padding: 20px;
        border: 2px solid grey;
        border-radius: 10px
    }

    legend{
        font-size: 20px; 
        text-align: center;
        padding: 10px;
    }

    label{
        padding: 10px;
        display: flex; 
        flex-direction: column;
        margin-bottom: 10px;
    }

    input{
        padding: 5px; 
        border-radius: 5px;
        border: 1px solid lightgrey;
        outline-color: darkgray;
    }

    button{
        padding: 5px 20px; 
        border-radius: 5px; 
        border:none;
        background-color: lightblue;
    }

    button:hover{
        background-color: blue;
        color: white;
    }

    .painel{
        width: 80%;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 5px;
        display: flex; 
        margin: 3rem auto; 
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .etiqueta{
        padding: 5px; 
        border: 3px solid lightgrey; 
        width: 250px; 
        margin: 5px; 
        border-radius: 5px;
    }
`