import React,{ useEffect, useState } from "react"; 
import { customFetch } from "../utils/customFetch";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer () {
    const [producto, setProducto] = useState ([]);
    
    useEffect(() => {
        customFetch.then((resultado) => setProducto(resultado)).catch((error) => console.log(error)
        );

    }, []);
    
    return (
    <>
    <ItemCount stock={10}/>
    <br /><br /><br />
    <ItemList prods={producto} />
    </>
    
    );
};
    export default ItemListContainer