import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({img, name, price, stock, discount}) => {
    return (
        <>
        <div className="card" style={{ width: "15rem", align: "center"}}>
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <div>
            <h3> ${price}</h3>
            <p>Detalle: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum officiis ducimus repellat inventore.</p>
            <h4>{discount}</h4>
            </div>
            <h5>${price - price * (discount / 100)}</h5>
            <ItemCount stock={stock} initial={1}/>
        </div>
        </>
    );
};

export default ItemDetail