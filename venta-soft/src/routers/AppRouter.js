import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    

} from "react-router-dom"
import MIngresopage from '../pages/MIngresopage'
import MUsuariosLista from '../pages/MUsuariosLista'
import MUsuariosModalActualizacion from '../pages/MUsuariosModalActualizacion'
import MHome from '../pages/MHome'
import MproductosCrear from '../pages/MproductosNuevoProducto'
import MProductosTabla from '../pages/MProductosTabla'
import MVentasLista from 'pages/MVentasLista'
import MVentasModificar from 'pages/MVentasModificar'
//import NavbarVentasoft from 'Layout/NavbarVentasoft'
//import Footer from 'Layout/footerBar'
import MVentasNueva from 'pages/MVentasNueva'
import MproductosModificar from 'pages/MproductosModificar'
import MVentas from 'pages/MVentas'
import MIndexVentas from 'pages/MIndexVentas'
import Actualizar from 'pages/Actualizar'


const AppRouter = () => {
    return (
        <div>
            <Router>
            
                <Switch>
                    <Route exact path = "/"  >
                        <MIngresopage/>
                    </Route>
                    <Route exact path = "/usuarioLista"  >
                        <MUsuariosLista/>
                    </Route>
                    <Route exact path = "/usuarioModal"  >
                        <MUsuariosModalActualizacion/>
                    </Route>
                    <Route exact path = "/home"  >
                        <MHome/>
                    </Route>
                    <Route exact path = "/producto"  >
                        <MProductosTabla/>
                    </Route>
                    <Route exact path = "/crearProducto"  >
                        <MproductosCrear/>
                    </Route>
                    <Route exact path = "/ventasLista"  >
                        <MVentasLista/>
                    </Route>
                    <Route exact path = "/ventasModificar"  >
                        <MVentasModificar/>
                    </Route>
                    <Route exact path = "/productoModificar"  >
                        <MproductosModificar/>
                    </Route>
                    <Route exact path = "/ventasNueva"  >
                        <MVentasNueva/>
                    </Route>
                    <Route exact path="/ventas"  >
                        <MVentas />
                    </Route>
                    <Route exact path="/ventasIndex"  >
                        <MIndexVentas />
                    </Route>
                    <Route exact path="/ventasAcualizar"  >
                        <Actualizar />
                    </Route>

                    <Redirect to="/" />
                </Switch>
       
            </Router>    
            
        </div>
    )
}

export default AppRouter
