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

const AppRouter = () => {
    return (
        <div>
            <Router>
                
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
                    <Redirect to="/login" />

                </Switch>

            </Router>
        

            
        </div>
    )
}

export default AppRouter
