/* eslint-disable no-unused-vars */
import './App.css'
import Contador  from './components/Contador';
import Boton from './components/Boton';
import freecodecamp from './img/freeCodeCamp-logo.png'
import {useState} from 'react';
import React from 'react';

function App() {
		const [numClicks,setNumClick]=useState(0)
    const aumentarContador = ()=>{
			console.log('Click')
		}
		const reiniciarContador = ()=>{
			console.log('Reiniciar')
		}
    return (
        <div className='App'>
						
            <div className='freecodecamp-logo-contenedor'>
                <img
                className='freecodecamp-logo'
                src={freecodecamp}
                alt='logo de freecodecamp'/>
            </div>
            <div className='contenedor-principal'>
								<Contador 
									numClicks={5}
								/>
                <Boton
                    text='Click'
                    esBotonDeClick={true}
										manejarclick={aumentarContador}
                />
								 <Boton

                    text='Reiniciar'
                    esBotonDeClick={false}
										manejarclick={reiniciarContador}
                />
            </div>
        </div>
    )
}


export default App;