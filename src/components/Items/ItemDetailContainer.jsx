import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import Loading from "../utils/Loading"
import { contexto } from "../Cart/MiProvider";
import {  collection , where , query , getDocs, getFirestore} from "firebase/firestore"

import "./Item.modules.css"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const [seleccionado, setSeleccionado] = useState(false);
    const {agregarProducto} = useContext(contexto)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      const db = getFirestore();
      const productosRef = collection(db, "productos")
      const miFiltro = query(productosRef,where("id","==",Number(id)))
      const documentos = getDocs(miFiltro)


        documentos
        .then(res => 
            setItem(res.docs.map(doc=>doc.data())[0]
        ))
        .catch(error => 
            console.log(error))
        .finally(() => setLoading(false))

    }, [id]);

    const onAdd = (unidadSeleccionada) => {
        if (unidadSeleccionada !== undefined) {
          setSeleccionado(unidadSeleccionada)
        }
      }
    
      const handleClick = (e) => {
        e.preventDefault()
        agregarProducto(item,seleccionado)
        navigate("/cart")
      };


      if (loading) {
        return <Loading />
      } else {
    return (
        <div className="detail" >
        <div className="card" style={{ width: "20rem", align: "center"}}>
            <img src={item.img} alt="" />
            <div className="contenidoCard">
              <h1> ${item.price}</h1>
              <h2>{item.name}</h2>
              <br />
              <h5>Detalle: 
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laborum officiis ducimus repellat inventore.</p></h5>
              <h6>{item.category}</h6>
            </div>
            <ItemCount style={{ width: "15rem", align: "center"}} stock={5} initial={1} onAdd={onAdd}/>
            <p>{seleccionado ? "Ya se selecciono algo!" : "No se eligion ninguna cantidad"}</p>
            {seleccionado ? <Link className="button" onClick={handleClick} to="/cart">Ir al Carrito</Link> : null }
            
        </div>
        </div>
    );
    }
};

export default ItemDetailContainer;