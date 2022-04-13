import React, { useEffect, useState } from "react";
import { Reloj } from "../utils/customFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        Reloj().then((res) => {
            setProducto(res);
        });
    }, []);

    console.log(producto);



    return (
        <>
        <ItemDetail producto={producto}/>
        </>
    );
};

export default ItemDetailContainer;