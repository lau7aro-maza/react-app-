import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({img, name, price, stock, discount}) => {
    const [number, setNumber] = useState(0);

    const addCart = (cantidad) => {
        setNumber(cantidad);
    };
    console.log(number);
    //No se como continuar para redireccionar el boton de addCart al link Cart

    return (
        <>
        <div className="card" style={{ width: "15rem", align: "center"}}>
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <div>
            <h3> ${price}</h3>
            <p>Detalle: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum officiis ducimus repellat inventore.</p>
            </div>
            <ItemCount stock={stock} initial={1} addCart={addCart} /> : 
            <Link to={'/cart'}>Ir al Carrito</Link>
        </div>
        </>
    );
};

export default ItemDetail