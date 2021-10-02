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

                </Switch>

            </Router>
        

            
        </div>
    )
}

export default AppRouter
