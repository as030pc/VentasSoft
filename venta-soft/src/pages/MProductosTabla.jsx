import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/styleMUsuarios.css';
import NavbarVentasoft from 'Layout/NavbarVentasoft';
import axios from 'axios';
import Swal from 'sweetalert2';




const MProductosTabla = () => {



        const [productos, setProductos] = useState([])
        const [nombre, setNombre] = useState("")
        const [descripcion, setDescripcion] = useState("")
        const [cantidad, setCantidad] = useState("")
        const [precio, setPrecio] = useState("")



        useEffect(() => {
                obtenerProductos()

        }, [])
        const obtenerProductos = async () => {
                const id = sessionStorage.getItem('idUsuario')
                const token = sessionStorage.getItem('token')
                const respuesta = await axios.get("http//localhost:4000/productos/listaproductos/" + id, {
                        headers: { 'autorizacion': token }
                })
                setProductos(respuesta.data)

        }

        const guardar = async (e) => {
                e.preventDefault()
                const producto = {
                        nombre,
                        precio,
                        descripcion,
                        cantidad,
                        administrador: sessionStorage.getItem('idusuario')

                }
                const token = sessionStorage.getItem('token')
                const respuesta = await axios.post("url", producto, {
                        headers: {
                                'autorizacion': token
                        }
                })
                const mensaje = respuesta.data.mensaje
                Swal.fire({
                        icon: "success",
                        title: mensaje,
                        showConfirmButton: false
                })
                setTimeout(() => {
                        window.location.href = "/producto"
                }, 1500)

        }


        const buscar = async (e) => {
                if (e.target.value === "") {
                        obtenerProductos()
                }
                const buscar = e.target.value
                console.log(buscar)
                const token = sessionStorage.getItem('token')
                const respuesta = await axios.get('http://localhost:4000/empleados/buscar/' + buscar, {
                        headers: { 'autorizacion': token }
                })
                setProductos(respuesta.data)


        }

        return (
                <div>
                        <NavbarVentasoft />
                        <h2 align="center" className="subtitulo"> Gestion de productos </h2>


                        <nav className="nav py-4">
                                <div className="container">
                                        <div className="col-md-3">
                                                <button type="button" className="btn btn-primary my-1" data-bs-toggle="modal" data-bs-target="#addProductos">
                                                        Añadir un nuevo producto
                                                </button>
                                        </div>
                                        <div className="col-md-6 ml-auto" >
                                                <div className="input-group">
                                                        <select className="form-select" id="inputGroupSelect01">
                                                                <option selected defaultValue>Buscar por...</option>
                                                                <option value="1">Identificador de producto</option>
                                                                <option value="2">Nombre del producto</option>
                                                        </select>
                                                        <input className="form-control" type="search" placeholder="buscar" onChange={(e) => buscar(e)} />
                                                </div>
                                        </div>

                                </div>
                        </nav>

                        <section id="Tabla">
                                <table className="centrar">
                                        <thead>
                                                <tr>
                                                        <th className="th">ID del producto </th>
                                                        <th className="th"> Nombre del producto  </th>
                                                        <th className="th">Descripcion  </th>
                                                        <th className="th"> Cantidad </th>
                                                        <th className="th"> Precio Unitario </th>
                                                        <th className="th"> Acciones</th>
                                                </tr>
                                        </thead>

                                        <tbody>
                                                {
                                                        // eslint-disable-next-line array-callback-return
                                                        productos.map((producto, id) => {
                                                                <tr key={producto.id}>
                                                                        <td id="celda1-0" className="td">
                                                                                {producto.id}
                                                                        </td>
                                                                        <td id="celda-1" className="td">
                                                                                {producto.nombre}
                                                                        </td>
                                                                        <td id="celda1-2" className="td">
                                                                                {producto.descripcion}
                                                                        </td>
                                                                        <td id="celda1-3" className="td">
                                                                                {producto.cantidad}
                                                                        </td>
                                                                        <td id="celda1-4" className="td">
                                                                                {producto.precio}
                                                                        </td>
                                                                        <td id="celda1-5" className="td">
                                                                                <Link to={"/productoModificar" + producto.id} type="submit" className="botonTabla"> Editar </Link>

                                                                        </td>
                                                                </tr>
                                                        })

                                                }



                                        </tbody>

                                </table>
                        </section>





                        {/* modal */}
                        <div className="modal fade" id="addProductos" tabindex="-1" aria-labelledby="addVentasLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                                <div className="modal-header bg-primary text-white">
                                                        <h5 className="modal-title">
                                                                Añadir producto
                                                        </h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        <form onSubmit={guardar}>
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
                </div>

        )
}

export default MProductosTabla
