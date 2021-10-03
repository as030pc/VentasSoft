import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styleMUsuarios.css';

const MproductosCrear = () => {
    return (
        <div  id="FormularioActualizacionDatos" align="center" >
            <form >
                <h1> Actualización Información de Productos </h1>
                <div className="form-group">
                    
                    <div className="form-group col-md-4">
                        <label htmlFor="nombre">Nombre de producto </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="cantidad"> Cantidad </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="cantidad" 
                        id="cantidad" 
                       />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="descripcion"> Descripción </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="descripcion" 
                        id="descripcion"
                        
                        required
                         />
                    </div>

                   
                    <br />
                    <div className="form-group col-md-4">
                        <label htmlFor="precio"> Precio unitario </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="precio" 
                        id="precio" 
                       />
                    </div>
                    
                    <div id="botonesVentas" align="center">
                        <button className="btn btn-primary"
                            type="submit"> <Link to = "/producto">  Modificar </Link> </button>
                    </div>

                   
                </div>
            </form>

            

            
        </div>
    )
}

export default MproductosCrear
