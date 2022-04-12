import Button from "react-bootstrap/Button";
import React,{ useState } from "react";
import s from './ItemCount.module.css';


export default function ItemCount({stock}) {

    const [count, setCount] = useState(0);
    
    function onAdd () {
        alert("Agregaste " + count + " items a tu carrito")
    }

    function adding () {
        if(count < stock) {
        setCount(count + 1);}
        console.log(count);
    }
    function subs () {
        if(count > 0) {
        setCount(count - 1);}
    }
    function reset () {
        if (count !== 0) {
            setCount(0);
        }
    }

    return (
        <div>
            <div className={s.botonContador}>
            <Button onClick={subs} variant="warning">-</Button>
            <p>{count}</p>
            <Button onClick={adding} variant="warning">+</Button>
            <Button onClick={() => onAdd(count)} variant="dark">Comprar</Button>
            <Button onClick={reset} variant="dark">Resetear</Button>
            </div>
        </div>
    )
}

