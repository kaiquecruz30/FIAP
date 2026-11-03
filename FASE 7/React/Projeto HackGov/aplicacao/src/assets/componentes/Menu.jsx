import {Link} from 'react-router-dom'

import sao_paulo from './../imagens/governo de sao paulo.png'

import './../css/global.css'


function Menu(){

    const menu={
        height: '15vh',
        marginBottom: '3rem',
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '3px solid black'
    }

    const link={
        display: 'inlineBlock',
        textDecoration: 'none',
        padding:'20px',
        color:'black',
        fontSize:'1.5em',
    }


    return(
        <nav style={menu}>
            <ul style={{display:'flex',listStyle:'none'}}>
                <li><Link style={link} to='/'><img src={sao_paulo} height="auto" width="80px" alt="imagem escrito Gov com cada letra de uma cor diferente da outra" /></Link></li>
                <li><Link style={link} to='/'>Home</Link></li>
                <li><Link style={link} to='/Solicitacoes'>Solicitações</Link></li>
                <li><Link style={link} to='/Cadastro'>Cadastro</Link></li>
            </ul>
        </nav>
    )
}
export default Menu