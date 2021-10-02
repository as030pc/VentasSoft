import React from 'react'
import NavbarVentasoft from '../Layout/NavbarVentasoft'
import footer from '../Layout/footerBar'

const MHome = () => {
    return (
        <div>
            <div className = "margen">
            <NavbarVentasoft/>
            </div>
            <div className="container-fluid">
                <div className="row row-cols-5">
                    <div className="col">
                        <div className="card" >
                            <img src="https://res.cloudinary.com/caugustog/image/upload/v1633121314/VentaSoft/estado_de_ventas_arbvuy.png" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">REGISTRO DE LAS VENTAS</h5>
                            <p className ="card-text">Para ingresar una nueva venta pulse en IR.</p>
                            <a href="dirige al modal de registro de ventas" className ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://res.cloudinary.com/caugustog/image/upload/v1633121314/VentaSoft/registro_de_ventas_y1i6l9.png" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">ESTADO DE lAS VENTAS</h5>
                            <p className ="card-text">Consulta el estado de las ventas dando clic en IR.</p>
                            <a href="dirige al modal de estado de ventas" className ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://res.cloudinary.com/caugustog/image/upload/v1633121314/VentaSoft/registro_del_producto_evvvyo.png" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">REGISTRO DE PRODUCTO</h5>
                            <p className ="card-text">Consulta el inventario dando clic en IR.</p>
                            <a href="dirige al modal de registro de producto" className ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://res.cloudinary.com/caugustog/image/upload/v1633121314/VentaSoft/estado_del_producto_o61pxc.png" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">ESTADO DE PRODUCTO</h5>
                            <p className ="card-text">Para ingresar un producto pulse en IR.</p>
                            <a href="dirige al modal de estado de producto" className ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://res.cloudinary.com/caugustog/image/upload/v1633121314/VentaSoft/gestion_de_usuarios_jnme77.png" className="card-img-top" alt="..."/>
                            <div className ="card-body">
                            <h5 className ="card-title">GESTIÓN DE USUARIOS</h5>
                            <p className ="card-text">COnlsulta y actualiza dando clic en IR.</p>
                            <a href="dirige al modal de gestion de usuarios" className ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MHome
