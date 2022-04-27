import React from "react";
import Item from "./Item";

export default function ItemList ({ productos }) {
    return (
        <div className="containerCard">
            {productos.map((producto) => (
                <div>
                    <Item key={producto.id} producto={producto} />
                </div>
            ))}
        </div>
    )
}
