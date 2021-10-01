import React, {useEffect} from 'react'
import "../styles/styleMVentas.css"

const MVentasLista = () => {
    return (    
        <div>
            <h1>Interfaz Módulo Lista de ventas</h1>
            <main>

            <form>
                <div id="buscarLista">
                    <p>
                            
                    <input type ="search" name="buscarid" list="listaventa" cplaceholder="Buscar"/>
                    
                    <input type="search" id="buscarVenta" placeholder="Buscar" />
                    
                    <input type="submit" value="Buscar" class="boton" />
                    </p>

                    <datalist id="listaventa">
                    <option value="Identificador venta"></option>
                    <option value="Documento identidad cliente"></option>
                    <option value="Nombre cliente"></option>
                    </datalist>
                </div>

                <div id="tabla_ventas">
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
                            <td >22/09/2021</td>
                            <td >001</td>
                            <td >43833733</td>
                            <td >22222222</td>
                            <td >Nombre cliente</td>
                            <td >P-0234</td>
                            <td >100000</td>
                            <td >1</td>
                            <td >100000</td>
                            <td >  <p>
                                <input type="search" name="buscarestado" list="listaestados" placeholder="Estado venta"/>
                            </p></td>
                            <td ><input type="checkbox" id="cbox1" value="first_checkbox"/></td><br/>

                        </tr>
                        <tr>
                            <td >22/09/2021</td>
                            <td >001</td>
                            <td >43833733</td>
                            <td >22222222</td>
                            <td >Nombre cliente</td>
                            <td >P-0234</td>
                            <td >100000</td>
                            <td >1</td>
                            <td >100000</td>
                            <td >  <p>
                            <input type="search" name="buscarestado" list="listaestados" placeholder="Estado venta"/>
                            </p></td>
                            <td ><input type="checkbox" id="cbox2" value="first_checkbox"/></td><br/>
                        </tr>

                        <tr>
                            <td >22/09/2021</td>
                            <td >001</td>
                            <td >43833733</td>
                            <td >22222222</td>
                            <td >Nombre cliente</td>
                            <td >P-0234</td>
                            <td >100000</td>
                            <td >1</td>
                            <td >100000</td>
                                <td >  <p>
                                    <input type="search" name="buscarestado" list="listaestados" placeholder="Estado venta" />
                                </p></td>
                            <td ><input type="checkbox" id="cbox3" value="first_checkbox"/></td><br/>
                            </tr>
                            
                        <tr>
                            <td >22/09/2021</td>
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
                        <td  >300000</td>


                    </tr>

                </table>
            

            <div id="botonesListaVentas">
                <button type="submit" class="boton">Imprimir</button>
                <button type="submit" class="boton">Descargar</button>
                <button type="submit" class="boton">Modificar</button>
                <button type="submit" class="boton">Guardar cambios</button>
            </div>
                </div>
    </main >

        </div >
    )
}

export default MVentasLista
