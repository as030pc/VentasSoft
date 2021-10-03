import React from 'react'
import "../styles/stylesVentaNueva.css"

const MVentasNueva = () => {
    return (
        <div>


            <div>
                <h1 aling="center">Regito de Ventas Nuevas</h1>
            </div>


            <div id="ventasGeneral" class="general">

                <form>
                    <div id="infoFecha">
                        <label for="fecha" >Fecha</label><br/>
                        <input class ="id" id="fecha"  type ="date" placeholder="Ej: dd/mm/aaaa"/>

                        </div>

                        <div id="idFactura">
                        <label for="idventa" >Identificador venta</label><br/>
                        <input class ="id" id="idfactura" name="idventa" type ="number" placeholder="#####"/>

                        </div>


                        <div id="producto" >
                        <div id="codigo">
                        <label for="codigo-producto">Código producto</label>
                        <input class ="id" placeholder="Código" type ="text"/><br/>
                        </div>

                        <div id="cantidadPrecio">
                        <label for="cantidad">Cantidad</label><br/>
                        <input class ="id" id="cantidad" type ="number" placeholder="Cantidad"/><br/>

                        <label for="precio">Precio unitario</label><br/>
                        <input class ="id" id="precio" type ="number" placeholder="$$$$$$"/>
                        </div>
                        </div>


                        <div id="clientes"><br/>
                        <label for="idCliente">Identificación cliente</label><br/>
                        <input type ="number" class ="id" name="" placeholder="Identificación cliente" /><br/>

                        <label for="nombreCliente">Nombre cliente</label><br/>
                        <input class ="controls" name type ="text" placeholder="Nombre cliente"/>

                        </div>


                        <div id="vendedor"><br/>
                        <label for="vendedor">Identificación vendedor</label><br/>
                        <input type ="number" class ="id" name="" placeholder="Identificación vendedor" /><br/>

                        <label for="nombreVendedor">Nombre vendedor</label><br/>
                        <input class ="controls" name type ="text" placeholder="Nombre vendedor"/>
                        </div>

                        <div id="total">
                        <label for="Total">Total a pagar</label><br/>
                        <input class ="controls" type ="number" placeholder="Total a pagar"/>
                        </div>

                        <div id="botones"><br/>
                        <button class ="boton" type ="submit">Registrar venta</button>
                        <button class ="boton" type ="submit">Modificar</button>
                        <button class ="boton" type ="submit">Listas</button>
                        </div>

                        </form>
                        </div>

                    </div>
                    )
};

                    export default MVentasNueva
