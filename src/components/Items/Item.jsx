import React from "react"; 
import { Link } from "react-router-dom";

const Item = ({ prod }) => {


  return (
    <div >
      <div className="card" style={{ width: "15rem" }}>
      <img src={prod.img} alt={prod.name} />
            <div>
                <h1>Name: {prod.name}</h1>
                <p>Stock: {prod.stock}</p>
                <p>Price: {prod.price}</p>
                <Link to={`/item/${prod.id}`}>Ver detalle</Link>
            </div>
        </div>

    </div>
  );
};

export default Item;


