import Button from "react-bootstrap/Button";
import React,{ useEffect, useState } from "react";
import './ItemCount.module.css';


const ItemCount =({stock, initial, setQuantity}) => {
    const [number, setNumber] = useState(initial);
    
    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > initial && setNumber(number - 1);
    };
    useEffect(() => {
        setQuantity(number);
    }, [number, setQuantity]);

    return (
        <div>
            <div className="botonContador">
            <Button disabled={number === initial} onClick={substract} variant="warning">-</Button>           
            <p>{number}</p>
            <Button disabled={number === stock} onClick={add} variant="warning">+</Button>
            </div>
        </div>
    )
}
export default ItemCount;

