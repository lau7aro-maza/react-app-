import React,{ useEffect, useState } from "react"; 
import ItemList from "./ItemList";
import { traerProducto } from "../utils/products";
import { useParams } from "react-router-dom";

export default function ItemListContainer () {
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading ] = useState(true);

    const { categoryId } = useParams (); 
    console.log (categoryId);

    useEffect(() => {
        setLoading(true)
        traerProducto(categoryId)
        .then((res) => setProductos(res))
        .catch((error) => console.log(error))
        .finally(() => {
            setLoading(false);
        });
    }, [categoryId]);


    return (
    <div style={{minHeight: '90vh', display: 'flex', justifyContent: 'center',}}>
        {loading ? (
            <h1>Cargando productos, espera por favor!</h1>
        ) : (
        <ItemList productos={productos} />
        )}
    </div>
        
    );
};