import React from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";

const ItemDetail = ({img, name, price, stock, discount}) => {
    return (
        <>
        <div>
            <img src={img} alt={name} />
        </div>
            <h1>{name}</h1>
            <h2>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi labore quae saepe consequuntur facere iure beatae soluta. Praesentium laudantium sunt deleniti. Doloremque non iusto exercitationem vero molestiae unde consequatur?
               Itaque nisi voluptates voluptatem maxime non! Amet atque architecto a neque odit obcaecati, nisi voluptas fugit dolor accusantium et, inventore ad. Dignissimos, blanditiis enim quam ea et deleniti consectetur ipsum. 
            </h2>
            <div>
            <h3>{price}</h3>
            <h4>{discount}</h4>
            </div>
            <h5>${price - price * (discount / 100)}</h5>
            <ItemCount stock={20}/>
        </>
    );
};

export default ItemDetail