import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import '../styles/styleMUsuarios.css';

const MproductosModificar = (props) => {
    // const [productos, setProductos] = useState([])
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [cantidad, setCantidad] = useState("")

    useEffect(() => {
        obtenerProductos()
    })
    const obtenerProductos = async () => {
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const respuesta = await axios.get("url/ " + id, {
            headers: { 'autorizacion': token }
        })
        setNombre(respuesta.data.nombre)
        setDescripcion(respuesta.data.descripcion)
        setPrecio(respuesta.data.precio)
        setCantidad(respuesta.data.cantidad)

    }

    const actualizar = async(e)=> {
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const producto = {
            nombre,
            descripcion,
            precio,
            cantidad
        }
        const respuesta = await axios.put("url"+id, producto, {
            headers:{'autorizacion':token}

    })
    const mensaje = respuesta.data.mensaje
    Swal.fire({
        icon:"success",
        title:mensaje,
        showConfirmButton:false
    })
    setTimeout(()=> {
        window.location.href = "/index"
    })
        

    }

    return (
        <div>
            <div className="container col md-6 mt-4" id="addProducto">
                <div className="card">
                    
                        <div className="card-header">
                            <h5>
                                Editar
                            </h5>
           
                        </div>
                        <div className="card-body">
                            <form onSubmit={actualizar}>
                                <div className="form-group">
                                    <label htmlFor="">Nombres</label>
                                    <input type="text" name="nombre" className="form-control"
                                        onChange={(e) => setNombre(e.target.value)} required />

                                </div>
                                <div className="form-group">
                                    <label htmlFor=""> Descripcion </label>
                                    <input type="text" name="descripcion" className="form-control"
                                        onChange={(e) => setDescripcion(e.target.value)} required />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Precio </label>
                                    <input type="text" name="precio" className="form-control"
                                        onChange={(e) => setPrecio(e.target.value)} required />

                                </div>
                                <div className="form-group">
                                    <label htmlFor=""> Cantidad </label>
                                    <input type="text" name="cantidad" className="form-control"
                                        onChange={(e) => setCantidad(e.target.value)} required />

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">
                                        Guardar
                                    </button>

                                </div>


                            </form>

                        </div>
                    
                </div>

            </div>



        </div>





    )
}

export default MproductosModificar
