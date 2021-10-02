import React from 'react'
import "../styles/styleMProductos.css"


const MProductosTabla = () => {
    return (
        <div className="container div">
            <h1> Registro de productos </h1>
            <table striped bordered hover>
                <thead>
                    <tr>
                        <th> Nombre del producto </th>
                        <th> Descripcion del producto </th>
                        <th> Cantidad </th>
                        <th> Precio unitario </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Producto x </td>
                        <td> XXXX </td>
                        <td> XXXX </td>
                        <td> XXXX </td>
                        <td>
                            <button className="btn btn-primary">Modificar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MProductosTabla
