import React, { useEffect, useState } from "react";
import productosData from "../componentes/Productos2.json";
import { useParams } from "react-router-dom";

const Otros = () => {

    const [productos, setProductos] = useState([]);
    const { otrosID } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            // Filtrar productos por el categoriaID
            const productosFiltrados = productosData.filter(
                (producto) => producto.categoria === otrosID
            );
            setProductos(productosFiltrados);
        };

        fetchData();
    }, [otrosID]);

    console.log(productos);








    return (
        <div>O</div>
    )
}

export default Otros