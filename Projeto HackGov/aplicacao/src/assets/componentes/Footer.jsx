import { Link } from "react-router-dom";

import youtube from './../imagens/youtube.png'
import twiter from './../imagens/x-twiter.png'
import linkind from './../imagens/linkedin.png'
import facebook from './../imagens/facebook.png'

function Footer() {

    const footer={
        height: '15vh',
        display: 'flex',
        marginTop: '5rem',
        borderTop: '3px solid black',
        justifyContent: 'space-around',
    }

    const aplicativos={
        display: 'inlineBlock',
        textDecoration: 'none',
        padding:'10px',
        color:'black',
        fontSize:'1rem',
    }

    return (
        <div style={footer}>
            <ul style={{display: "flex", listStyle: "none"}}>
                <li style={aplicativos}><img src={youtube} width={30} alt="simbolo do youtube" /></li>
                <li style={aplicativos}><img src={twiter} width={30} alt="simbolo do twiter" /></li>
                <li style={aplicativos}><img src={linkind} width={30} alt="simbolo do linkind" /></li>
                <li style={aplicativos}><img src={facebook} width={30} alt="simbolo do facebook" /></li>
            </ul>
        </div>
    )
}

export default Footer