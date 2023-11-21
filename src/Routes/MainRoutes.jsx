import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import { NavBar } from '../componentes/navbar/navbar'
import Categoria from '../Pages/categoria'
import Otros from '../Pages/otros'
import ProductoDetallado from '../componentes/productos/ProductoDetallado'
import { useState, useEffect } from 'react';

const MainRoutes = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>

        <BrowserRouter>
          <NavBar contador={contador}></NavBar>
        <Routes>

            <Route path="/" element={<Home setcontador={setContador} ></Home>}></Route>
            <Route path="/categoria/:categoriaID" element={<Categoria setcontador={setContador}></Categoria>}></Route>
            <Route path="/categoria/:otrosID" element={<Otros></Otros>}></Route>
            <Route path="/item/:itemID" element={<ProductoDetallado></ProductoDetallado>}></Route>




        </Routes>
                
        
        
        </BrowserRouter>





    </div>
    
  )
}

export default MainRoutes