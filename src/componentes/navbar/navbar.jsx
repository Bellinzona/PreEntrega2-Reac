import React from "react";
import "./navbar.css"
import { Carrito } from "./carritoComponente";
import { Link } from "react-router-dom";



export function NavBar({contador}) {

    return (

        <div className="navbar">

            <div className="container">

            <Link to="/"> <h1>Tienda Mateo</h1> </Link>

                <div className="form">
                    <input type="text" />
                    <button><img src="https://cdn.icon-icons.com/icons2/1129/PNG/512/searchmagnifierinterfacesymbol1_79893.png" width={"20px"} /></button>


                </div>


                <div className="otros">

                  <Link to={"/categoria/carnes"}>  <a href="#">Carnes</a>   </Link>
                  <Link to={"/categoria/otros"}>  <a href="#">Otros</a>   </Link>

                    <Carrito contador={contador}></Carrito>


                </div>


            </div>







        </div>


    )
}