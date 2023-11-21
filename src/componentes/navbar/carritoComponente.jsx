import React, { useState } from "react";
import "./carritoComponente.css";



export function Carrito({ contador }) {

  return (
    <div className="carrito">
      <img src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" alt="" />
      <span>{contador}</span>
    </div>
  );
}
