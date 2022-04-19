import React from "react"; 
import { Link } from "react-router-dom";

const Item = ({ producto }) => {


  return (
    <div >
      <div className="card" style={{ width: "15rem" }}>
        <img src={producto.img} alt={producto.name} />
          <div>
              <h1>{producto.name}</h1>
              <p>category: {producto.category}</p>
              <p>Price: ${producto.price}</p>
              <Link to={`/item/${producto.id}`}>Ver detalle</Link>
          </div>
        </div>

    </div>
  );
};

export default Item;


