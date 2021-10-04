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
import NavbarVentasoft from 'Layout/NavbarVentasoft'
import Footer from 'Layout/footerBar'
import MVentasNueva from 'pages/MVentasNueva'
import MproductosModificar from 'pages/MproductosModificar'

const AppRouter = () => {
    return (
        <div>
            <Router>
            <NavbarVentasoft/>
                <Switch>
                    <Route exact path = "/login"  >
                        <MIngresopage/>
                    </Route>
                    <Route exact path = "/usuarioLista"  >
                        <MUsuariosLista/>
                    </Route>
                    <Route exact path = "/usuarioModal"  >
                        <MUsuariosModalActualizacion/>
                    </Route>
                    <Route exact path = "/"  >
                        <MHome/>
                    </Route>
                    <Route exact path = "/producto"  >
                        <MProductosTabla/>
                    </Route>
                    <Route exact path = "/crearProducto"  >
                        <MproductosCrear/>
                    </Route>
                    <Route exact path = "/ventas"  >
                        <MVentasLista/>
                    </Route>
                    <Route exact path = "/ventasModificar"  >
                        <MVentasModificar/>
                    </Route>
                    <Route exact path = "/productoModificar"  >
                        <MproductosModificar/>
                    </Route>

                   
                    <Redirect to="/login" />

                </Switch>
            <Footer/>

            </Router>
        

            
        </div>
    )
}

export default AppRouter
