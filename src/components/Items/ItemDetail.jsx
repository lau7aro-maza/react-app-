import React from "react";  

const ItemDetail = ({producto}) => {
    return (
        <>
        <div>
            <img src={producto.img} alt="" />
        </div>
            <h2>{producto.name}</h2>
            <h3>${producto.price}</h3>
        </>
    );
};

export default ItemDetail