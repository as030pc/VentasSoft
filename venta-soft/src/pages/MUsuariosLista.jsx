import React from 'react';


const MUsuariosLista = () => {
    return (
        <div> 

            <main>
            
                <section id="Titulares">
                    <h1>Tabla Muestra 1</h1>
                    <h2 align="center">Listado de usuarios</h2>

                </section>

                <section id="TablaUsuarios">

                    <table align="center" border="1">
                        <tbody>
                            <tr>
                                <td align="center">Nombre y apellido</td>
                                <td align="center">Usuario</td>
                                <td align="center">Correo Electrónico</td>
                                <td align="center">Rol</td> 
                                <td align="center">Estado</td>
                                <td align="center">Cambios en rol y estado</td>
                            </tr>

                            <tr id="row1">
                                <td id="cell1-0" align="center">Juan Ossa</td>
                                <td id="cell1-1" align="center">juaoss</td>
                                <td id="cell1-2" align="center">juan@email.com</td>
                                <td id="cell1-3" align="center">Vendedor</td>
                                <td id="cell1-4" align="center">Activo</td>
                                <td id="cell1-5" align="center"><button>Click para actualizar</button></td>
                            </tr>

                            <tr id="row2">
                                <td id="cell2-0" align="center"></td>
                                <td id="cell2-1" align="center"></td>
                                <td id="cell2-2" align="center"></td>
                                <td id="cell2-3" align="center"></td>
                                <td id="cell2-4" align="center"></td>
                                <td id="cell2-5" align="center"><button>Click para actualizar</button></td>
                            </tr>

                            <tr id="row3">
                            <td id="cell2-0" align="center"></td>
                                <td id="cell3-1" align="center"></td>
                                <td id="cell3-2" align="center"></td>
                                <td id="cell3-3" align="center"></td>
                                <td id="cell3-4" align="center"></td>
                                <td id="cell3-5" align="center"><button>Click para actualizar</button></td>
                            </tr>

                            <tr id="row4">
                            <td id="cell2-0" align="center"></td>
                                <td id="cell4-1" align="center"></td>
                                <td id="cell4-2" align="center"></td>
                                <td id="cell4-3" align="center"></td>
                                <td id="cell4-4" align="center"></td>
                                <td id="cell4-5" align="center"><button>Click para actualizar</button></td>
                            </tr>

                            <tr id="row5">
                                <td id="cell5-0" align="center"></td>
                                <td id="cell5-1" align="center"></td>
                                <td id="cell5-2" align="center"></td>
                                <td id="cell5-3" align="center"></td>
                                <td id="cell5-4" align="center"></td>
                                <td id="cell5-5" align="center"><button>Click para actualizar</button></td>
                            </tr> 
                        </tbody>
                    </table>
                   
                </section>
              
                <section id="botonesVentas" align="center">
                    <button type="submit" >Imprimir</button>
                    <button type="submit">Descargar</button> 
                </section>

            </main>

        </div>

    )
}

export default MUsuariosLista
