import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const traerProducto = new Promise((resolve, reject) => {
        const productoElegido = producto.find(
                (prod) => prod.id === Number(id)
                )
                setTimeout(() => {
                    resolve(productoElegido);
                }, 1000);
            })
        


        traerProducto.then((res) => {
            setProducto(res);
        })
        .catch((error) => {
            console.log(error);
        });

    }, [id]);

    

    return (
        <>
        <ItemDetail producto={producto}/>
        </>
    );
};

export default ItemDetailContainer;