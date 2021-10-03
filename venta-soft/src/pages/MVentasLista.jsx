import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/stylesVentaNueva.css"

const MVentasLista = () => {
    return (
        <div>
            <h1>Estado de ventas</h1>
            <main>
            <div id="lista">
                <form>
                    <div id="buscarLista">
                        <p>

                            <input type="search" id="buscarid" list="listaventa" placeholder="Buscar por ..." />

                            <input type="search" id="buscarVenta" placeholder="Buscar" />

                            <input type="submit" value="Buscar" class="boton" />
                        </p>

                        <datalist id="listaventa">
                            <option value="Identificador venta"></option>
                            <option value="Documento identidad cliente"></option>
                            <option value="Nombre cliente"></option>
                        </datalist>
                    </div>

                    <div id="tablaVentas">
                        <table id="ventas" border="1">

                            <tr>
                                <th>Fecha venta</th>
                                <th>Código venta</th>
                                <th>Código vendedor</th>
                                <th>Código cliente</th>
                                <th>Nombre cliente</th>
                                <th>Producto</th>
                                <th>Precio unitario</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Estado venta</th>
                                <th>Actualizar</th>
                            </tr>
                            <tr>
                                <td >Fecha</td>
                                <td >Código venta</td>
                                <td >Código vendedor</td>
                                <td >Código cliente</td>
                                <td >Nombre cliente</td>
                                <td >Producto</td>
                                <td >Precio unitario</td>
                                <td >Cantidad</td>
                                <td >Total</td>
                                <td >  <p>
                                    <input type="search" name="buscarestado" list="listaestados" placeholder="Estado venta" />
                                </p></td>
                                <td ><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />

                            </tr>
                            <tr>
                                    <td >Fecha</td>
                                    <td >Código venta</td>
                                    <td >Código vendedor</td>
                                    <td >Código cliente</td>
                                    <td >Nombre cliente</td>
                                    <td >Producto</td>
                                    <td >Precio unitario</td>
                                    <td >Cantidad</td>
                                    <td >Total</td>
                                <td >  <p>
                                    <input type="search" name="buscarestado" list="listaestados" placeholder="Estado venta" />
                                </p></td>
                                <td ><input type="checkbox" id="cbox2" value="first_checkbox" /></td><br />
                            </tr>

                            <tr>
                                <td >Fecha</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <br />
                            <datalist id="listaestados">
                                <option value="En proceso"></option>
                                <option value="Cancelada"></option>
                                <option value="Enviada"></option>
                            </datalist>

                        </table>
                    </div>
                </form>

                <div id="totalFra"  >
                    <table id="totalFraVentas" border="1">
                        <tr>
                            <td  >Total ventas realizadas</td>
                            <td  >$$$$$$$$</td>


                        </tr>

                    </table>


                    <div id="botonesListaVentas">
                        <button type="submit" class="boton">Imprimir</button>
                        <button type="submit" class="boton">Descargar</button>
                        <button type="submit" class="boton"> <Link to = "/ventasModificar"> Modificar </Link></button>
                        <button type="submit" class="boton">Guardar cambios</button>
                    </div>
                </div>
            </div>
            </main >

        </div >
    )
}

export default MVentasLista
