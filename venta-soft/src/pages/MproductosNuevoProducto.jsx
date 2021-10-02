import React from 'react'

const MproductosCrear = () => {
    return (
        <div>
            <form >
                <h1> Creacion de nuevo producto </h1>
                <div className="form-group">
                    
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Nombre de producto </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        required
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="direccion"> Cantidad </label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="fecha" 
                        id="fecha" 
                       />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres"> Descripción </label>
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
                        <label htmlFor="direccion"> Precio unitario </label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="fecha" 
                        id="fecha" 
                       />
                    </div>
                    
                    <div>
                        <button className="btn btn-primary"
                            type="submit">Guardar</button>
                    </div>

                   
                </div>
            </form>

            
        </div>
    )
}

export default MproductosCrear
