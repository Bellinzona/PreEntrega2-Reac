import React, { useEffect, useState } from "react";
import productosData from "../Productos2.json";
import { useParams } from "react-router-dom";
import "./ProductoDetallado.css"

const ProductoDetallado = () => {
  const [producto, setProducto] = useState([]);
  const { itemID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      
      console.log(itemID)
    
      const productoEncontrado = productosData.find(
        (producto) => producto.id == itemID
      );

      setProducto(productoEncontrado);
    };

    fetchData();
  }, [itemID]);

  console.log(producto);

  if (!producto) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="containerP">
      <img src={producto.imagen} alt={producto.Titulo} />

      <div className="informacionP">

      <h2>{producto.Titulo}</h2>
      <p>Precio: ${producto.Precio}</p>
      <p>Unidades disponibles: {producto.unidades}</p>



      </div>
      
      
    </div>
  );
};

export default ProductoDetallado;
