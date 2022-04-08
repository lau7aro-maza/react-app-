import Button from "react-bootstrap/Button";
import React,{ useState } from "react";
import s from './ItemCount.module.css';


function ItemCount({stock}) {
    const [count, setCount] = useState(0);
    

    function adding () {
        if(count < stock) {
        setCount(count + 1);}
    }
    function subs () {
        if(count > 0) {
        setCount(count - 1);}
    }
    function onAdd () {
        alert('You added' + count + 'items to your cart');
    }

    return (
        <div>
            <div className={s.botonContador}>
            <Button onClick={subs} variant="warning">-</Button>
            <p>{count}</p>
            <Button onClick={adding} variant="warning">+</Button>
            </div>
            <Button onClick={onAdd} variant="dark">Comprar</Button>
        </div>
    )
}

export default ItemCount
