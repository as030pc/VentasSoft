import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Axios from 'axios'


export default function MIndexVentas() {


    const [ventas, setVentas] = useState([])
    const [fecha, setFecha] = useState('')
    const [codigoProducto, setCodigoProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precioUni, setPrecioUni] = useState('')
    const [clienteId, setClienteId] = useState('')
    const [nombreCliente, setNombreCliente] = useState('')
    const [vendedorId, setVendedorId] = useState('')
    const [nombreVendedor, setNombreVendedor] = useState('')
    const [estado, setEstado] = useState('')
    const [totalPago, setTotal] = useState('')
    const [estadoSelect, setEstadoSelect] = useState('')


    const [productos, setProductos] = useState([])
    
    const [listarVentas, setListarVentas] = useState([])


    useEffect(() => {
        obtenerVentas()
        setEstado(['En proceso', 'Cancelada', 'Entregada'])
        setEstadoSelect('En proceso')
    }, [])


    const obtenerVentas = async () => {
        const id = sessionStorage.getItem('ventaId')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/ventas//verVentas',
            {
                headers: { 'autorizacion': token }
            })
        setVentas(respuesta.data)
        console.log(respuesta.data)
    }


    // const mensajeEjemplo = () => {
    //     Swal.fire({
    //         title: "Gestión de ventas",
    //         text: "Venta eliminada",
    //         icon: "succes",
    //         button: "Aceptar"
    //     })
    // }

    const buscar = async (e) => {
        if (e.target.value === '') {
            return obtenerVentas()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http//localhost:4000/ventas//verventas/' + buscar, {
            haeaders: { 'autorizacion': token }
        })
        setVentas(respuesta.data)
    }


    const guardar = async (e) => {
        e.preventDefault()
        const ventas = {
            fecha,
            codigoProducto,
            cantidad,
            precioUni,
            clienteId,
            nombreCliente,
            vendedorId,
            nombreVendedor,
            estado: estadoSelect,
            totalPago
        }
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.post('http://localhost:4000/ventas/crearventa', ventas, {
            headers: { 'autorización': token }
        })

        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'succes',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.href = '/MIndexVentas'
        }, 1500)

    }


    const eliminar = async (id) => {
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.delete('http://localhost:4000/ventas/borrar' + id, {
            headers: { 'autorización': token }
        })
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'succes',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
        obtenerVentas()
    }



    function calcular() {
        var Box1 = document.getElementById('precio').value;
        var Box2 = document.getElementById('cantidad').value;
        var result = document.getElementById('total');
        var myResult = Box1 * Box2;
        result.value = myResult;
        setTotal(result.value = myResult);
        console.log(myResult)
    }


    return (
        <div>
            <header className='py-2 bg-primary text-white'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fas fa-pencil-alt"></i>Ventas</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* //BUSCAR */}
            {/* <nav className='navbar py-4'>
                <div className="container">

                <div className='col-md-3'>
                        <Link to='#' className=" btn-bg-primary btn-block" data-toggle='modal' data-target="#addVenta"><i className="fas fa-plus">Agregar ventas</i>
                        </Link>
                    </div>
                </div>
            </nav > */}

            <div className="container py-md-5">
                <div className="row">
                    <div className="col">
                        <div className='col-md-3 '>
                            {/* <Link to='#' className="btn btn- primary btn-block" data-toggle='modal' data-target="#addVenta"><i className="fas fa-plus"></i>Nueva venta
                            </Link> */}
                        </div>
                        <button type="button" className="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#addVentas">     
                            Nueva venta     
                        </button>
                    </div>

                    <div className="col">
                        <div class="input-group">
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected>Buscar por...</option>
                                <option value="1">Identificador de la venta</option>
                                <option value="2">Identificación cliente</option>
                                <option value="3">Nombre cliente</option>
                            </select>

                            <input type="text" className="form-control" placeholder="Buscar por" aria-label="Buscar" aria-describedby="button-addon2" onChange={(e) => buscar(e)} />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={buscar}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>

            


            {/* MOSTRAR EMPLEADOS */}
            <section>
                <div class="container-fluid py-md-4">
                    <div className="row">
                        <div className="col -md-15">
                            <div className="card">
                                <div className="card-header"></div>
                                <h4>Ventas</h4>
                            </div>
                            <div className="table-responsive-lg">

                                <table className="table -table-striped card-text">
                                    <thead class="table-dark text-white">
                                        <tr>
                                            <th>Fecha</th>
                                            <th>CódigoProducto</th>
                                            <th>Cantidad</th>
                                            <th>Precio Unitario</th>
                                            <th>Identificación Cliente</th>
                                            <th>Nombre Cliente</th>
                                            <th>Identificación vendedor</th>
                                            <th>Nombre vendedor </th>
                                            <th>Estado Venta</th>
                                            <th>Opciones </th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                        <tr>
                                            <th>Fecha</th>
                                            <th>CódigoProducto</th>
                                            <th>Cantidad</th>
                                            <th>Precio Unitario</th>
                                            <th>Identificación Cliente</th>
                                            <th>Nombre Cliente</th>
                                            <th>Identificación vendedor</th>
                                            <th>Nombre vendedor </th>
                                            <th>Estado Venta</th>
                                            <td>
                                                <Link className="btn btn-warning mr-1" to={'/ventasAcualizar/' + ventas._id}>Editar</Link>
                                                <button className="btn btn-danger mr-0" onClick={() => eliminar(ventas._id)}>Eliminar</button>
                                            </td>
                                        </tr>
















                                        {
                                           ventas.map((venta, i) => (
                                                <tr key={venta._id} >
                                                    <td>{venta.fecha}</td>
                                                    <td>{venta.codigoProducto}</td>
                                                    <td>{venta.cantidad}</td>
                                                    <td>{venta.precioUni}</td>
                                                    <td>{venta.clienteId}</td>
                                                    <td>{venta.nombreCliente}</td>
                                                    <td>{venta.vendedorId}</td>
                                                    <td>{venta.nombreVendedor}</td>
                                                   <td>{venta.estado}</td>
                                                   <td>{venta.totalPago}</td>
                                                    <td>
                                                        <button className="btn btn-warning mr-1" >Editar</button>
                                                       <Link className="btn btn-warning mr-1" to={'/ventasAcualizar' + ventas._id}>Editar</Link>
                                                        <button className="btn btn-danger mr-0" onClick={() => eliminar(ventas._id)}>Eliminar</button>
                                                   </td>
                                                   <td></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-9  py-md-4">
                                <div className="d-grid gap-1 d-md-flex justify-content d-grid-grid-flex-grow-1 "><br />
                                    

                                    <button type="submit" className="btn btn-primary mb-2" >Imprimir</button>
                                    <button type="submit" className="btn btn-primary mb-2">Descargar</button>
                                    <button type="submit" className="btn btn-primary mb-2">Modificar </button>

                                    <button type="submit" className="btn btn-primary mb-2">Registrar venta</button>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </section> 




            {/* MODAL */}

            <div className="modal fade" id="addVentas" tabindex="-1" aria-labelledby="addVentasLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title" id="exampleModalLabel">Gestión de ventas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <form onSubmit={guardar}>                            
                                <div className='md-3'>
                                    <div className="row">
                                        <div className="col-md-5 ">
                                            <label className="form-label">Fecha</label>
                                            <input type="date" className='form-control' required onChange={(e) => setFecha(e.target.value)} />
                                        </div>

                                        <div className='md-3'>
                                            <div className="row">
                                                <div className="col-md-5 ">
                                                    <label className="form-label">Código Producto</label>
                                                    <input type="number" className='form-control' required onChange={(e) => setCodigoProducto(e.target.value)} />
                                                </div>

                                                <div className='col'>
                                                    <label className="form-label">Precio Unitario</label>
                                                    <input type="number" id="precio" className='form-control' required onChange={(e) => setPrecioUni(e.target.value)} />
                                                </div>

                                                <div className="col">

                                                    <label className="form-label">Cantidad</label>
                                                    <input type="number" id="cantidad"  className='form-control' required onChange={(e) => setCantidad(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='md-3'>
                                            <div className="row">
                                                <div className="col-md-5">

                                                    <label className="form-label">Total a pagar</label>
                                                    <input type="number" className='form-control' id="total" required onChange={() => setTotal(calcular)} />
                                                </div>
                                            </div>
                                        </div>

                                       
                                        <div className='md-3'>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <label className="form-label">Identificación cliente</label>
                                                    <input type="number" className='form-control' required onChange={(e) => setClienteId(e.target.value)} />
                                                </div>

                                                <div className="col-md-7">
                                                    <label className="form-label">Nombre Cliente</label>
                                                    <input type="text" className='form-control' required onChange={(e) => setNombreCliente(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='md-3'>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <label className="form-label">Identificación Vendedor</label>
                                                    <input type="number" className='form-control' required onChange={(e) => setVendedorId(e.target.value)} />
                                                </div>

                                                <div className="col-md-7">
                                                    <label className="form-label">Nombre Vendedor</label>
                                                    <input type="text" className='form-control' required onChange={(e) => setNombreVendedor(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='md-3'>
                                            <div className="col-md-5">
                                                <label className="form-label" for='select'>Estado</label>
                                                 <select className='md-3 form-control' required onChange={(e) => setEstadoSelect(e.target.value)}>
                                                    {/* {
                                                        estado.map(estado => (
                                                        <option key={estado}>
                                                        {estado}
                                                        </option>
                                                        ))
                                                    } */}
                                                </select> 
 
                                                {/* <select className="form-select" required id="select" >
                                                
                                                    <option selected ></option>                                                    
                                                    <option value="1">En proceso</option>
                                                    <option value="2">Cancelada</option>
                                                    <option value="3">Entregada</option>
                                                </select> */}
                                            </div>
                                        </div>



                                        {/* <div className="form-group">
                                                    <button className="btn btn-primary" type="submit" >Guardar</button>
                                                </div> */}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div class="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button className="btn btn-primary" type="submit">Guardar</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >
        </div >


    )
}


