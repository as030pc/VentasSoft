import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/styleMUsuarios.css';
import NavbarVentasoft from 'Layout/NavbarVentasoft';
import axios from 'axios';



const MProductosTabla = () => {



        const [productos, setProductos] = useState([])

        useEffect(() => {
                obtenerEmpleados()

        }, [])
        const obtenerEmpleados = async () => {
                const id = sessionStorage.getItem('idUsuario')
                const token = sessionStorage.getItem('token')
                const respuesta = await axios.get("url/ " + id, {
                        headers: { 'autorizacion': token }
                })
                setProductos(respuesta.data)

        }
        return (
                <div>
                        <NavbarVentasoft />
                        <body className="body">

                                <section id="Titulares">
                                        <h2 align="center" className="subtitulo"> Gestion de productos </h2>
                                </section>

                                <nav className="nav py-4">
                                        <div className="container">
                                                <div className="col-md-3">
                                                        <Link to="/" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addProducto"> Añadir empleado</Link>
                                                </div>
                                                <div className="col-md-6 ml-auto" >
                                                        <div className="input-group">
                                                                <datalist id="listaventa">
                                                                        <option value="Identificador de producto"></option>
                                                                        <option value="Descripcion de producto"></option>
                                                                </datalist>
                                                                <input className="form-control" type="search" placeholder="buscar" />
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
                                                                                <button type="submit" className="botonTabla"> Actualizar </button>

                                                                        </td>
                                                                </tr>
                                                                })

                                                        }



                                                </tbody>

                                        </table>
                                </section>


                        </body>


                        {/* modal */}
                        <div className="modal fade" id="addProducto">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title">
                                                                Añadir producto
                                                        </h5>
                                                        <button className="close">

                                                        </button>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>

        )
}

export default MProductosTabla
