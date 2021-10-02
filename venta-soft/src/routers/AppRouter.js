import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    

} from "react-router-dom"
import MIngresopage from '../pages/MIngresopage'

const AppRouter = () => {
    return (
        <div>
            <Router>
                
                <Switch>
                    <Route exact path = "/"  >
                        <MIngresopage/>
                    </Route>
                    <Route exact path = "/registro"  >
                        <MIngresopage/>
                    </Route>

                </Switch>

            </Router>
        

            
        </div>
    )
}

export default AppRouter
