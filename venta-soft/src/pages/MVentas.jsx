import Axios from 'axios'
import { Link }  from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import NavbarVentasoft from 'Layout/NavbarVentasoft'


export default function MVentas(){

    const [fecha, setFecha] = useState('')
    const [codigoProducto, setCodigoProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precioUni, setPrecioUni] = useState('')
    const [clienteId, setClienteId] = useState('')
    const [nombreCliente, setNombreCliente] = useState('')
    const [vendedorId, setVendedorId] = useState('')
    const [nombreVendedor, setNombreVendedor] = useState('')
    const [totalPago, setTotal] = useState('')
    const [estado, setEstado] = useState('')


    const [producto, setProducto] = useState([]);
    const [vendedor, setVendedor] = useState([]);



    const crearVentas = async (e) => {
        e.preventDefault()
        const capturaVenta = { fecha, codigoProducto, cantidad, precioUni, clienteId, nombreCliente, vendedorId, nombreVendedor, totalPago }
        const respuesta = await Axios.post('http://localhost:4000/ventas/crearventa', capturaVenta)
        const mensaje=respuesta.data.mensaje
        if (mensaje !== 'Bienvenido') {
            console.log(respuesta)
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
                
            })
        } else {
            const token = respuesta.data.token
            sessionStorage.setItem('token', token)
            window.location.href = '/MIndexVentas'    
        }
    }

    useEffect(() => {
        console.log(producto);
    }, [producto]);

    useEffect(() => {
        console.log(vendedor);
    }, [vendedor]);


    // const mnsGuardar = () => {
    //     Swal.fire({
    //         title: "Gestión de ventas",
    //         text: "La nueva venta ha sido registrada correctamente",
    //         icon: "succes",
    //         button: "Aceptar"
    //     })
    // }

        //useEffect(() => {
        //     obtenerProductos(setProductos);
        //     obtenerUsuarios(setUsuarios);
        // }, []);

    
    // Swal.fire({
    //     title: "Gestión de ventas",
    //     text: "Venta eliminada",
    //     icon: "succes",
    // //     button: "Aceptar"
    // }
    // )


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
            <div >

                <header className='py-1 bg-primary text-white'>

                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fas fa-user"></i>Ventas</h1>
                        </div>
                    </div>
                </header>
               
                <div className="container">
                    <div className="col-md-9 mx-auto text-lg">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4> Registro de ventas nuevas</h4>
                            </div>
                           
                            <div className="card-body">

                                <form onSubmit={crearVentas} id="formCrear">
                                    <div className='form-group'>
                                        <div className="col-md-6">
                                                <label className="form-label">Fecha</label>
                                                <input type="date" className='form-control' autoFocus required onChange={(e) => setFecha(e.target.value)} />
                                        </div>
                                    </div>
                                   

                                    <div className='form-group  col-md-6'>
                                        <label className="form-label">Código Producto</label>
                                        <input type="number" className='form-control' required onChange={(e) => setCodigoProducto(e.target.value)} />
                                    </div>


                                    <div className='form-group'>
                                        <div className="row">
                                            <div className="col">                                          
                                                <label className="form-label">Cantidad</label>
                                                <input type="number" id="cantidad" className='form-control' required onChange={(e) => setCantidad(e.target.value)}/>
                                            </div>
                                            <div className='col'>
                                                <label className="form-label">Precio Unitario</label>
                                                <input type="number" id="precio" className='form-control' required onChange={(e) => setPrecioUni(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className="form-label" >Total a pagar</label>

                                        <input type="number" className='form-control' id="total" required onChange={() => setTotal(calcular)}  />
                                    </div>


                                    <div className='form-group'>
                                        <div className="col-md-6">
                                            <label className="form-label">Identificación cliente</label>
                                            <input type="number" className='form-control' required onChange={(e) => setClienteId(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className="form-label">Nombre Cliente</label>
                                        <input type="text" className='form-control' required onChange={(e) => setNombreCliente(e.target.value)} />
                                    </div>
                                    <div className='form-group'>
                                        <div className="col-md-6">
                                            <label className="form-label">Identificación Vendedor</label>
                                            <input type="number" className='form-control' required onChange={(e) => setVendedorId(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label className="form-label">Nombre Vendedor</label>
                                        <input type="text" className='form-control' required onChange={(e) => setNombreVendedor(e.target.value)} />
                                    </div>


                                    <div className="col-md-9  py-md-4">
                                        <div className="d-grid gap-1 d-md-flex justify-content d-grid-grid-flex-grow-1 ">
                                         <button type="submit" className="btn btn-primary mb-2" >Registrat venta</button> 
                                            <button type="reset" className="btn btn-primary mb-2" >Restaurar</button>
                                            
                                            <button className="btn btn-primary mb-2"
                                                type="submit"><Link to="/ventasIndex">  Listas </Link> </button>
                                         
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }

    //export default MVentas


