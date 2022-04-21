import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./Item.modules.css"

const ItemDetail = ({img, name, price, stock}) => {
    const [number, setNumber] = useState(0);

    const addCart = (cantidad) => {
        setNumber(cantidad);
    };
    console.log(number);

    return (
    <div className="containerCard">
        <div className="card" style={{ width: "15rem", align: "center"}}>
            <img src={img} alt={name} />
            <div className="contenidoCard">
              <h1> ${price}</h1>
              <h3>{name}</h3>
              <p>Detalle: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum officiis ducimus repellat inventore.</p>
            </div>
            <ItemCount stock={stock} initial={1} addCart={addCart} /> : 
            <Link to={'/cart'}>Ir al Carrito</Link>
        </div>
    </div>
        
    );
};

export default ItemDetail