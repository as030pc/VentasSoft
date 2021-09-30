import React from 'react'

const MVentasVentaNueva = () => {
    return (
        <div>
            <h1>Interfaz Módulo Venta Nueva</h1>

            <main>
                <form>
                    <div id="buscar_ventas">

                        <p>
                            <input type="search" name="busquedaventa" list="listaventa" />
                            <input type="buscar" name="buscar" placeholder="Buscar" />
                            <input type="submit" value="Buscar" class="contols" />
                        </p>


                        <datalist id="listaventa">
                            <option value="Identificador venta"></option>
                            <option value="Documento identidad cliente"></option>
                            <option value="Nombre cliente"></option>
                        </datalist>


                        <div id="general_ventas">

                            <div id="producto"><br />
                                <label for="codigo-producto" >Código producto</label>
                                <input type="codigo-producto" class="controls" name="" placeholder="Ej: 0001" />
                                <br />
                                <label for="cantidad">Cantidad</label>
                                <input type="cantidad" class="controls" name="" placeholder="Ej: 0001" />
                                <br />
                                <label for="nombre-producto" >Nombre producto</label>
                                <input type="nombre-producto" class="controls" name="" placeholder="Ej: 0001" />
                                <br />
                                <label for="precio">Precio unitario</label>
                                <input type="precio" class="controls" name="" placeholder="Ej: 0001" />
                                <br />

                                <label for="precio">Subtotal</label>
                                <input type="precio" class="controls" name="" placeholder="Ej: 0001" />
                                <button type="submit">Agregar</button><br /><br /><br />
                            </div>


                            <div id="clientes"><br />

                                <label for="codigo-cliente" >Identificación cliente</label>
                                <input type="text" id="id-cliente" name="id-cliente" class="controls" placeholder="Ej: 11222333" />
                                <br />

                                <label for="nombre-cliente" >Nombre cliente</label>
                                <input type="nombre-cliente" name="nombre-cliente" class="controls" placeholder="Ej: Juan Correa" />
                                <br />
                                <label for="direccion-cliente">Dirección</label>
                                <input type="direccion-cliente" name="direccion-cliente" class="controls" placeholder="Ej: calle 13 sur" />
                                <br />
                                <label for="telefono-cliente" >Teléfono</label>
                                <input type="telefono-cliente" name="telefono-cliente" class="controls" placeholder="Ej: 300 333 333 333" />

                            </div>

                            <div id="tablaventas" ><br />

                                <br /><br />
                                <table id="registro_ventas" border="1" >
                                    <tr>
                                        <th>Código artículo</th>
                                        <th>Artículo</th>
                                        <th>Precio unitario</th>
                                        <th>Cantidad</th>
                                        <th>Cambios</th>
                                    </tr>

                                    <tr>
                                        <td align="center">P-0234</td>
                                        <td align="center"> Pantalón</td>
                                        <td align="center">100000</td>
                                        <td align="center">1</td>
                                        <td align="center"><input type="checkbox" id="cbox1" value="first_checkbox" /><input type="checkbox" id="cbox1" value="first_checkbox" /><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                                    </tr>

                                    <tr>
                                        <td align="center">C-0123</td>
                                        <td align="center">Camisa</td>
                                        <td align="center">100000</td>
                                        <td align="center">1</td>
                                        <td align="center"><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                                    </tr>

                                    <tr>
                                        <td align="center">C-0123</td>
                                        <td align="center">Camisa</td>
                                        <td align="center">100000</td>
                                        <td align="center">1</td>
                                        <td align="center"><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                                    </tr>

                                    <tr>
                                        <td align="center">C-0123</td>
                                        <td align="center">Camisa</td>
                                        <td align="center">100000</td>
                                        <td align="center">1</td>
                                        <td align="center"><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                                    </tr>
                                </table>

                            </div>

                            <div id="total">



                            </div>

                            <div id="botones">
                                <button type="submit" >Registrar venta</button>
                                <button type="submit" >Modificar</button>
                            </div>

                        </div>


                        <footer>

                            <div id="footer_lista">
                                <ul>
                                    <li><h4>VentaSoft - Todos los derechos reservados 2021 </h4></li>
                                    <li><a href="#"><h4>Sobre Nosotros</h4></a></li>
                                    <li>ico1</li>
                                    <li>ico2</li>
                                    <li>ico3</li>
                                </ul>
                            </div>

                        </footer>
                    </div>
                </form>
            </main>



        </div>

    )
}

export default MVentasVentaNueva
