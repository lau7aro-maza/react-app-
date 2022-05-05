import React from "react"; 
import { Link } from "react-router-dom";
import "./Item.modules.css"

const Item = ({ producto }) => {

  return (
    <div className="containerCard">
      <div className="card" style={{ width: "15rem", align: "center" }}>
        <img src={producto.img} alt={producto.name} />
          <div className="contenidoCard">
              <h1> ${producto.price}</h1>
              <p>{producto.category}</p>
              <h5>{producto.name}</h5>
              <Link to={'/item/' + producto.id}>Ver detalle</Link>
          </div>
        </div>
        <br /><br />
    </div>
    
  );
};

export default Item;


