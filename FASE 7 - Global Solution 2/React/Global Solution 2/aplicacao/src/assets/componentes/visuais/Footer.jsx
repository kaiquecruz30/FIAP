import { Link } from "react-router-dom";


function Footer() {

    const footer={
        height: '15vh',
        display: 'flex',
        borderTop: '3px solid white',
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
                {/* <li style={aplicativos}><img width={30} alt="" /></li> */}
            </ul>
        </div>
    )
}

export default Footer