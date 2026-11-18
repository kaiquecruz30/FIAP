import {Link} from 'react-router-dom'


import './../../css/global.css'


function Menu(){

    const menu={
        height: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '3px solid white'
    }

    const link={
        height: 'fit',
        display: 'inlineBlock',
        textDecoration: 'none',
        padding:'20px',
        fontSize:'1.5em',
    }


    return(
        <nav style={menu}>
            <ul style={{display:'flex',listStyle:'none'}}>
                {/* <li><Link style={link} to='/'><img src={sao_paulo} height="auto" width="80px" alt="imagem escrito Gov com cada letra de uma cor diferente da outra" /></Link></li> */}
                <li><Link style={link} to='/Home'>HOME</Link></li>
                <li><Link style={link} to='/Avisos'>AVISOS</Link></li>
                <li><Link style={link} to='/Previssao'>PREVISSAO</Link></li>
            </ul>
        </nav>
    )
}
export default Menu