
import React from 'react';
import '../styles/styleMUsuarios.css';


const MUsuariosModalActualizacion = () => {
  return (
    <div>
    <body>
  
      <section id="Titulares" align="center">
        <h2 className="subtitulo">Actualización información de usuarios </h2>
      </section>
  
      <section id="FormularioActualizacionDatos" align="center">
        <form className="formatoFormulario">
          <label for="Nombre y apellido" className="celdasDesactivadas">Nombre y apellido </label><br></br>
          <input
            type="text"
            class="controls"
            name=""
            placeholder="Juan Ossa"
          />
          <br />
          <br />
  
          <label for="Usuario" className="celdasDesactivadas">Usuario </label><br></br>
          <input
            type="username"
            class="controls"
            name=""
            placeholder="juaoss"
          />
          <br />
          <br />
  
          <label for="Rol Usuario">Rol del usuario </label><br></br>
          <input
            type="text"
            class="controls"
            name=""
            placeholder="Vendedor"
          />
          <br />
          <br />
  
          <label for="Estado Usuario">Estado del usuario </label><br></br>
          <input
            type="text"
            class="controls"
            name=""
            placeholder="Activo"
          />
          <br />
          <br />
        </form>
      </section>
  
      <section id="botonesVentas" align="center">
        <button type="submit" className="botonAzul">Guardar cambios</button>
      </section>
      
    </body>
    </div>
  );
 };
  
 export default MUsuariosModalActualizacion;
 
