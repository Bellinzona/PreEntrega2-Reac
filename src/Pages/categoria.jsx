import React, { useEffect, useState } from "react";
import productosData from "../componentes/Productos2.json";
import { useParams } from "react-router-dom";

const Categoria = ({setcontador}) => {
  const [productos, setProductos] = useState([]);
  const { categoriaID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productosFiltrados = productosData.filter(
        (producto) => producto.categoria === categoriaID
      );
      setProductos(productosFiltrados);
    };

    fetchData();
  }, [categoriaID]);

  console.log(productos);

  return (
    <div>
      <div className="Personal">
      {productos.map((item, index) => (
        <div key={index}>
          <div className="Tarjetas">
            <img src={item.imagen} alt="" width={"110px"} />
            <div className="informcion">
              <p>{item.Titulo}</p>
              <p> $ {item.Precio}</p>
              <button
                onClick={() => {
                  setcontador((contador) => contador + 1); console.log(setContador)
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Categoria;
