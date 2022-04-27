import Button from "react-bootstrap/Button";
import React,{ useState } from "react";
import './ItemCount.module.css';


const ItemCount =({stock, initial, onAdd}) => {
    const [number, setNumber] = useState(initial);
    
    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > initial && setNumber(number - 1);
    };
    const hadleConfirmar = () => {
        console.log()
        onAdd(number)
    }
    return (
        <div>
            <div className="detail" style={{margin: "20px"}}>
                <h3>Contador</h3>
                <div className="contenidoCard">
                <p>Mi contador actual : {number}</p>
                <Button onClick={substract} variant="warning">Disminuir</Button>           
                <Button onClick={add} variant="warning">Aumentar</Button>
                <Button onClick={hadleConfirmar} variant="dark">Confirmar</Button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;
