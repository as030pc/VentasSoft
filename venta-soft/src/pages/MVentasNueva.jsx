import React, { useEffect, useState } from 'react'
import "../styles/styleMVentas.css"

const MVentasNueva = () => {

    const [codigoVenta, setCodigoVenta] = useState('');

    useEffect(() => {
        console.log("Hola soy useEEfect que se ejecuta solo una vez");
    },
        []);


    const guardarDatos = () => {
        console.log('El valor de la variable Código venta es ', codigoVenta);
    }


    const cambioCodigo = (e) => {
        console.log("Codigo: ", e.target.value);
    }

    return (
        <div>

            <h1 aling="center">Interfaz Módulo Venta Nueva</h1>
            <main>
                <form>
                    <div id="buscarVentas">

                        <p>
                            <input type="search" name="busquedaventa" list="listaventa" />
                            
                            <input type="search" id="buscar" placeholder="Buscar" />
                            
                            <input type="submit" value="Buscar" class="boton" />
                        </p>


                        <datalist id="listaventa">
                            <option value="Identificador venta"></option>
                            <option value="Documento identidad cliente"></option>
                            <option value="Nombre cliente"></option>
                        </datalist>

                    </div>
                    <div id="ventasGeneral">

                        <div id="producto"><br />
                            <div id="codProducto">
                                <label for="codigo-producto" >Código producto</label>
                                <input onChange={(e) => {
                                    console.log("Codigo: ", e.target.value)
                                }} type="codigo-producto" name="" placeholder="Código producto" />


                                <label for="cantidad">Cantidad</label>
                                <input type="n" class="controls" name="" placeholder="Ej: Cantidad" />

                            </div>
                            <label for="nombre-producto" >Nombre producto</label>
                            <input type="nombre-producto" class="controls" name="" placeholder="Nombre producto" />

                            <label for="precio">Precio unitario</label>
                            <input type="number" class="controls" name="" placeholder="Precio unitario" />

                            <label for="precio">Subtotal</label>
                            <input type="number" class="controls" name="" placeholder="Subtotal" />

                            <button type="button" class="boton" aling="center"> Agregar</button><br />
                        </div>


                        <div id="clientes"><br />
                            <label for="idCliente" >Identificación cliente</label>
                            <input onChange={(e) => {
                                console.log("Codigo: ", e.target.value)
                            }} type="codigo-producto" class="controls" name="" placeholder="Identificación cliente" />


                            <label for="nombreCliente">Nombre cliente</label>
                            <input type="nombreCliente" class="controls" name="" placeholder="Nombre cliente" />

                            <label for="Dirección" >Dirección</label>
                            <input type="Dirección" class="controls" name="" placeholder="Dirección" />

                            <label for="telefono">Teléfono</label>
                            <input type="tel" class="controls" name="" placeholder="Teléfono" />
                        </div>

                    </div>
                    <div id="tablaVentas" ><br />
                        <table id="registroVentas" border="1" aling="center">


                            <tr>
                                <th colSpan="2">Productos agregados</th>

                            </tr>
                            <br />

                            <tr>
                                <th>Código artículo</th>
                                <th>Artículo</th>
                                <th>Precio unitario</th>
                                <th>Cantidad</th>
                                <th>Cambios</th>
                            </tr>
                            <tr>
                                <td >P-0234</td>
                                <td > Pantalón</td>
                                <td >100000</td>
                                <td >1</td>
                                <td ><input type="checkbox" id="cbox1" /></td>
                            </tr>
                            <tr>
                                <td >C-0123</td>
                                <td >Camisa</td>
                                <td >100000</td>
                                <td >1</td>
                                <td ><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                            </tr>
                            <tr>
                                <td >C-0123</td>
                                <td >Camisa</td>
                                <td >100000</td>
                                <td >1</td>
                                <td ><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                            </tr>
                            <tr>
                                <td >C-0123</td>
                                <td >Camisa</td>
                                <td >100000</td>
                                <td >1</td>
                                <td ><input type="checkbox" id="cbox1" value="first_checkbox" /></td><br />
                            </tr>
                        </table>

                    </div>

                    <div id="vendedor">
                        <p>
                            <label for="nombreVendedor">Vendedor</label><br/>
                            <input type="search" id="nombreVendedor"  class="controls" list="listavendedor"  />

                            <label for="Total">Total a pagar</label>
                            <input type="number" name="total" class="controls" />

                        </p>
                        <datalist id="listavendedor">
                            <option value="Id vendedor1 - Nombre vendedor"></option>
                            <option value="Id vendedor2 - Nombre vendedor"></option>
                            <option value="Id vendedor3 - Nombre vendedor"></option>
                        </datalist>
                    </div>
                    <div id="botones">
                        <button type="submit" class="boton">Registrar venta</button>
                        <button type="submit" class="boton">Modificar</button>
                    </div>

                </form>
            </main>
        </div>

    )
};
export default MVentasNueva

