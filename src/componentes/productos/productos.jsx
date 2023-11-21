import React, { useEffect, useState } from "react";
import productosData from "./productos.json";
import "./productos.css";
import { Link } from "react-router-dom";

export function Productoshook({ setContador }) {
  const [productos, setProductos] = useState([]);

  function pedirProductos() {
    return new Promise((resolve) => {
      resolve(productosData);
    });
  }

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
      console.log(res)
    });
  }, []);

  return (
    <div className="Personal">
      {productos.map((item, index) => (
        <Link to={`/item/${item.id}`} key={index}> 
          <div className="Tarjetas">
            <img src={item.imagen} alt="" width={"110px"} />
            <div className="informcion">
              <p>{item.Titulo}</p>
              <p> $ {item.Precio}</p>
              <button
                onClick={() => {
                  setContador((contador) => contador + 1); console.log(setContador)
                }}
              >
                Comprar
              </button>
            </div>
          </div>
          </Link>
        
      ))}
    </div>
  );
}
