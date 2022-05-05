import { useContext } from "react";
import { db } from "./Firebase";
import { CartContext } from "../Cart/MiProvider";
import { addDoc , collection } from "firebase/firestore";

const Login = () => {
    const { setUsuario } = useContext(CartContext)

    const handleSubmit = e => {
        e.preventDefault()
        const usuarioCollection = collection(db, "compras")
        const compras = addDoc(usuarioCollection, {
            nombre : e.target.nombre.value,
            telefono : e.target.telefono.value,
            email : e.target.email.value,
            calle: e.target.calle.value,
            provincia: e.target.provincia.value,
            localidad: e.target.localidad.value
        })
        compras.then(res=> {
            setUsuario(res.id)
            console.log("se registro correctamente")
        }).catch(error => {
            console.log("Error al registrar")
        })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Gracias por confiar en nosotros</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Nombre</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Telefono</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">E-Mail</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Calle</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Provincia</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Localidad</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <button type="submit" className="button" onClick={handleSubmit}>Finalizar Comprar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;







