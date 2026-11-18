import { useState } from "react";

import './../../../assets/css/global.css'
import { DivHome } from "../../../assets/JS/style";


function Home() {

    return (
        <DivHome>
            <div className="imagem-background">
                <section>
                    <p>
                        Nessa aplicação você receberá previsões do tempo, assim como alertas de encehentes, deslizamentos, incêndios e ondas de calor
                    </p>
                </section>
            </div>
        </DivHome>
    )
}

export default Home