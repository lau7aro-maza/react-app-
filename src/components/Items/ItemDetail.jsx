import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import CartContext from "../Cart/CartContext";
import CartWidget from '../CartWidget';
import "./Item.modules.css"

const ItemDetail = ({img, name, price, stock}) => {
    const [number, setNumber] = useState();
    const { setCart, setQnt } = useContext(CartContext);  
    
    useEffect(() => {
        setNumber(stock);
    }, [stock]);
    
    const [quantity, setQuantity] = useState(1);

    const addCart = () => {
        setQnt((value) => value + quantity);
        number.quantity = quantity;


        setCart((value) => [...value]);
    };

    return (
    <div className="containerCard">
        <div className="card" style={{ width: "15rem", align: "center"}}>
            <img src={img} alt={name} />
            <div className="contenidoCard">
              <h1> ${price}</h1>
              <h3>{name}</h3>
              <p>Detalle: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum officiis ducimus repellat inventore.</p>
            </div>
            <h4>
            <ItemCount stock={stock} initial={0} setQuantity={setQuantity}/>
            </h4>
            <CartWidget quantity={quantity} />
            
        </div>
    </div>
        
    );
};

export default ItemDetail