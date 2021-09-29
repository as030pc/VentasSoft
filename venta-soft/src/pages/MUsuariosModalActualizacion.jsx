import React from 'react';

const MUsuariosModalActualizacion = () => {
  return (
    <div>
      <main>
        <section id="Titulares" align="center">
          <h1>Modal Actualizacion Info Usuarios-Muestra 1</h1>
          <h2>Actualización información de usuarios</h2>
        </section>

        <section id="FormularioActualizacionDatos" align="center">
          <form>
            <label for="Nombre y apellido">Nombre y apellido </label>
            <input
              type="text"
              class="controls"
              name=""
              placeholder="Juan Ossa"
            />
            <br />
            <br />

            <label for="Usuario">Usuario </label>
            <input
              type="username"
              class="controls"
              name=""
              placeholder="juaoss"
            />
            <br />
            <br />

            <label for="Rol Usuario">Rol del usuario </label>
            <input
              type="text"
              class="controls"
              name=""
              placeholder="Vendedor"
            />
            <br />
            <br />

            <label for="Estado Usuario">Estado del usuario </label>
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
          <button type="submit">Guardar cambios</button>
        </section>
      </main>
    </div>
  );
};

export default MUsuariosModalActualizacion;