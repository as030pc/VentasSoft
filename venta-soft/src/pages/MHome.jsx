import React from 'react'
import "../styles/stylesHome.css"

const MHome = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row row-cols-5">
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="33568655-iconos-grandes-de-la-venta-de-tecnología-de-comercio-electrónico-en-línea-de-compras-el-concepto-de-.jpg" class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">REGISTRO DE VENTA</h5>
                            <p class ="card-text">Para ingresar una nueva venta pulse en IR.</p>
                            <a href="dirige al modal de registro de ventas" class ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="54-tecnicas-para-vender-mas-y-mejor.jpg" class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">ESTADO DE VENTA</h5>
                            <p class ="card-text">Para visualizar todas las ventas, hacer búsquedas y actualizar información pulse en IR.</p>
                            <a href="dirige al modal de estado de ventas" class ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="unnamed.png" class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">REGISTRO DE PRODUCTO</h5>
                            <p class ="card-text">Para ingresar un producto pulse en IR.</p>
                            <a href="dirige al modal de registro de producto" class ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="1166780.png" class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">ESTADO DE PRODUCTO</h5>
                            <p class ="card-text">Para visualizar listado de productos, hacer búsquedas y actualizar información pulse en IR.</p>
                            <a href="dirige al modal de estado de producto" class ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <img src="acceso-usuarios.png" class="card-img-top" alt="..."/>
                            <div class ="card-body">
                            <h5 class ="card-title">GESTIÓN DE USUARIOS</h5>
                            <p class ="card-text">Para consultar y actualizar información de usuarios pulse en IR.</p>
                            <a href="dirige al modal de gestion de usuarios" class ="btn btn-primary">IR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MHome
