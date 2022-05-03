import React,{ useEffect, useState } from "react"; 
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/Firebase";
import { getDocs, collection , query , where } from "firebase/firestore"

export default function ItemListContainer () {
    const [productos, setProductos] = useState ([]);
    const [loading, setLoading ] = useState(true);
    const { categoryId } = useParams (); 

    useEffect(() => {
        if(!categoryId){

            const productosRef = collection(db, "items")
            const documentos = getDocs(productosRef)

            documentos
            .then(res => 
                setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() }) )
            ))
            .catch(error => 
                console.log(error))
            .finally(() => setLoading(false))

        } else {
            const productosRef = collection(db, "items")
            const miFiltro = query(productosRef,where("id","==",categoryId))
            const documentos = getDocs(miFiltro)

            documentos
            .then(res => 
                setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() }) )
            ))
            .catch(error => 
                console.log(error))
            .finally(() => setLoading(false))


        }
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