import React from 'react'
import { NavBar } from '../componentes/navbar/navbar'
import { Productoshook } from '../componentes/productos/productos'



const Home = ({setcontador}) => {

    
    
    return (
        <div>
            
            <Productoshook setContador={setcontador}></Productoshook>

            




        </div>
    )
}

export default Home