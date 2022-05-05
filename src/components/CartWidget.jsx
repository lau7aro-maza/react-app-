import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './Cart/MiProvider';



export default function CartWidget(){
    let { carrito } = useContext(CartContext);


    return (
            <div>
                <ShoppingCartIcon fontSize="large">
                    ({carrito.length})
                </ShoppingCartIcon>
            </div>

    )
}