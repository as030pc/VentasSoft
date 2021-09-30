import React from 'react'

const MVentasLista = () => {
    return (
        <div>
            <main>
                <div id="general_informe">
                    <form>
                    <div id="buscar_informe">
                    <p>
                    <input type ="search" name="buscarid" list="listaventa" placeholder="Buscar"/>
                    <input type ="search" name="buscarventa" placeholder="Buscar"/>
                    <input type ="submit" value="Buscar"/>
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
                            <td align="center">22/09/2021</td>
                            <td align="center">001</td>
                            <td align="center">43833733</td>
                            <td align="center">22222222</td>
                            <td align="center">Nombre cliente</td>
                            <td align="center">P-0234</td>
                            <td align="center">100000</td>
                            <td align="center">1</td>
                            <td align="center">100000</td>
                            <td align="center">  <p>
                                <input type="buscarestado" name="buscarestado" list="listaestados" placeholder="Estado venta"/>
                            </p></td>
                            <td align="center"><input type="checkbox" id="cbox1" value="first_checkbox"/></td><br/>

                        </tr>

                        <tr>
                            <td align="center">22/09/2021</td>
                            <td align="center">001</td>
                            <td align="center">43833733</td>
                            <td align="center">22222222</td>
                            <td align="center">Nombre cliente</td>
                            <td align="center">P-0234</td>
                            <td align="center">100000</td>
                            <td align="center">1</td>
                            <td align="center">100000</td>
                            <td align="center">  <p>
                            <input type="buscarestado" name="buscarestado" list="listaestados" placeholder="Estado venta"/>
                            </p></td>
                            <td align="center"><input type="checkbox" id="cbox2" value="first_checkbox"/></td><br/>

                        </tr>

                        <tr>
                            <td align="center">22/09/2021</td>
                            <td align="center">001</td>
                            <td align="center">43833733</td>
                            <td align="center">22222222</td>
                            <td align="center">Nombre cliente</td>
                            <td align="center">P-0234</td>
                            <td align="center">100000</td>
                            <td align="center">1</td>
                            <td align="center">100000</td>
                            <td align="center">  <p>
                                <input type="buscarestado" name="buscarestado" list="listaestados" placeholder="Estado venta"/>
                            </p></td>
                            <td align="center"><input type="checkbox" id="cbox3" value="first_checkbox"/></td><br/>

                        </tr>

                        <tr>
                            <td align="center">22/09/2021</td>
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
                        <tr>
                            <td align="center">22/09/2021</td>
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

            <div id="totalfra"  >
                <table id="totalfraventas" border="1">
                    <tr>
                        <td  align="center">Total ventas realizadas</td>
                        <td  align="center">300000</td>
                        <td  align="center">3</td>
                        <td  align="center">300000</td>

                    </tr>

                </table>
            </div>

            <div id="botonesVentas">
                <button type="submit" >Imprimir</button>
                <button type="submit">Descargar</button>
                <button type="submit" >Modificar</button>
                <button type="submit">Guardar cambios</button>
            </div>
        </div>
    </main >



        </div >
    )
}

export default MVentasLista
