import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { traerProduct } from "../utils/products";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams()

    console.log (id);

    useEffect(() => {
        traerProduct(id)
        .then((res) => {
            setProducto(res);
        })
        .catch((error) => {
            console.log(error);
        });

    }, [id]);

    

    return (
        <>
        <ItemDetail {...producto}/>
        </>
    );
};

export default ItemDetailContainer;