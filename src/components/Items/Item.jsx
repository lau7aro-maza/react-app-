import React from "react"; 
import styles from './Item.modules.css'

const Item = ({ prod }) => {
    return (
      <div className={styles.card}>
      <img src={prod.img} alt={prod.name} />
            <div className={styles.contenidoCard}>
                <h1>Name: {prod.name}</h1>
                <p>Descripcion: {prod.description}</p>
                <p>Stock: {prod.stock}</p>
                <p>ID: {prod.id}</p>
                <p>Price: {prod.price}</p>
            </div>
      </div>

    );
};

export default Item