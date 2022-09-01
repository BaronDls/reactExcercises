/* eslint-disable no-unused-vars */
import React from "react";
import '../stylesheets/Boton.css'

function Boton({text, esBotonDeClick, manejarclick}) {
    return (
    <button 
        className={ esBotonDeClick?'boton-click':'boton-reiniciar' }
        onClick={manejarclick}>
        
        {text}
    </button>
    )
}

export default Boton