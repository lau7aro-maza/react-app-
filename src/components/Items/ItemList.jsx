import React from "react";
import Item from "./Item";

export default function ItemList ({ prods }) {
    return (
        <div>
            {prods.map((prod) => (
                <Item key={prod.id} prod={prod} />
            ))}
        </div>
    )
}
