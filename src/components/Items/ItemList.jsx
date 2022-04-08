import React from "react";
import Item from "./Item";

const ItemList = ({ prods }) => {
    return (
        <div>
            {prods.map((prod) => (
                <Item key={prod.id} prod={prod} />
            ))}
        </div>
    )
}

export default ItemList