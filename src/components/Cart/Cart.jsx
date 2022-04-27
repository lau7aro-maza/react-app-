import { useContext } from "react";
import { contexto } from "./MiProvider";
import { Link } from "react-router-dom"

const Card = () => {

  const {carrito,disminuirProducto,borrarProducto,AumentarProducto,total} = useContext(contexto)

  const handleClick = () => {

    const orden = {
      buyer : {
        nombre : "Mariano Villalonga",
        telefono : "3413692907",
        email : "marianovillalonga94.mv@gmail.com",
        calle: "Calle falsa 123",
        provincia: "Santa Fe",
        localidad: "Rosario"
      },
      items : carrito,
      total : total
    }

    const pedido = (orden);

    pedido
    .then(res=>{
      console.log(res.id)
    })
    console.log("se confirno la compra correctamente")
  };

  return (
    <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Aumentar</th>
                    <th>Disminuir</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio * producto.cantidad}</td>
                        <td>
                            <button
                                className="button"
                                onClick={() => AumentarProducto(producto.id)}
                            >
                                Aumentar
                            </button>
                        </td>
                        <td>
                            <button
                                className="button"
                                onClick={() => disminuirProducto(producto.id)}
                            >
                                Disminuir
                            </button>
                        </td>
                        <td>
                            <button
                                className="button"
                                onClick={() => borrarProducto(producto.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">Total</td>
                    <td>{total}</td>
                    <td>
                        <Link className="button" to="/formulario" onClick={handleClick}>Confirmar Compra</Link>
                    </td>
                </tr>
            </tfoot>
        </table>
  );
};

export default Card;