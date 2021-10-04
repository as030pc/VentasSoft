import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styleMUsuarios.css';
import NavbarVentasoft from 'Layout/NavbarVentasoft';


const MProductosTabla = () => {
    return (
        <div>
        <NavbarVentasoft/>
        <body className="body">
   
          <section id="Titulares">
            <h2 align="center" className="subtitulo">Listado de productos</h2>
          </section>

          <div id="buscarLista">
                        <p>

                            <input type="search" id="buscarid" list="listaventa" placeholder="Buscar por ..." />

                            <input type="search" id="buscarVenta" placeholder="Buscar" />

                            <input type="submit" value="Buscar" class="boton" />
                        </p>

                        <datalist id="listaventa">
                            <option value="Identificador de producto"></option>
                            <option value="Descripcion de producto"></option>
                        </datalist>
                    </div>
    
           
          <section id="Tabla">
   
            <table className="centrar">
             
                           <thead>
                               <tr>
                                       <th className="th">ID del producto </th>
                                       <th className="th"> Nombre del producto  </th>
                                       <th className="th">Descripcion  </th>
                                       <th className="th"> Cantidad </th>
                                       <th className="th"> Precio Unitario </th>
                                       <th className="th"> Acciones</th>
                               </tr>
                        </thead>
   
                        <tbody>
              
                               <tr id="fila1">
                                       <td id="celda1-0" className="td">
                                       XXXX
                                       </td>
                                       <td id="celda-1" className="td">
                                       Producto X
                                       </td>
                                       <td id="celda1-2" className="td">
                                       XXXX XXXX
                                       </td>
                                       <td id="celda1-3" className="td">
                                       X
                                       </td>
                                       <td id="celda1-4" className="td">
                                       X
                                       </td>
                                       <td id="celda1-5" className="td">
                                       <button type="submit" className="botonTabla">Click para actualizar</button>

                                       </td>
                               </tr>
       
                               <tr id="fila2">
                                       <td id="celda2-0" className="td"></td>
                                       <td id="celda2-1" className="td"></td>
                                       <td id="celda2-2" className="td"></td>
                                       <td id="celda2-3" className="td"></td>
                                       <td id="celda2-4" className="td"></td>
                                       <td id="celda2-5" className="td">
                                       <button type="submit" className="botonTabla">Click para actualizar</button>
                                       </td>
                               </tr>
       
                               <tr id="fila3">
                                       <td id="celda3-0" className="td"></td>
                                       <td id="celda3-1" className="td"></td>
                                       <td id="celda3-2" className="td"></td>
                                       <td id="celda3-3" className="td"></td>
                                       <td id="celda3-4" className="td"></td>
                                       <td id="celda3-5" className="td">
                                       <button type="submit" className="botonTabla">Click para actualizar</button>
                                       </td>
                               </tr>
       
                               <tr id="fila4">
                                       <td id="celda4-0" className="td"></td>
                                       <td id="celda4-1" className="td"></td>
                                       <td id="celda4-2" className="td"></td>
                                       <td id="celda4-3" className="td"></td>
                                       <td id="celda4-4" className="td"></td>
                                       <td id="celda4-5" className="td">
                                       <button type="submit" className="botonTabla">Click para actualizar</button>
                                       </td>
                               </tr>
                           </tbody>
                    
                   </table>
          </section>
    
         
        </body>
      </div>
    )
}

export default MProductosTabla
