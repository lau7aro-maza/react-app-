import Button from "react-bootstrap/Button";
import React,{ useState } from "react";
import s from './ItemCount.module.css';


const ItemCount =({stock, initial, addCart}) => {
    const [number, setNumber] = useState(initial);
    
    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > initial && setNumber(number - 1);
    };
    const handleClick = () => {
        addCart(number);
    };

    return (
        <div>
            <div className={s.botonContador}>
            <Button disabled={number === initial} onClick={substract} variant="warning">-</Button>           
            <p>{number}</p>
            <Button disabled={number === stock} onClick={add} variant="warning">+</Button>
            </div>
            <div>
            <Button onClick={handleClick} variant="dark">Añadir al carrito</Button>
            </div>
        </div>
    )
}
export default ItemCount;

