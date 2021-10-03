import React from 'react'
import "../styles/stylesVentaNueva.css"

const MVentasNueva = () => {
    return (
    <div>

    
    <div>
        <h1 aling="center">Interfaz Módulo Venta Nueva</h1>
    </div>


    <div id="ventasGeneral" class="general">

        <form>

            <div id="datosfra"><br/>
                <label for="idfactura" >Factura</label><br/>
                <input class="id" id="idfactura" name="idfactura" type="number" placeholder="#####"/><br/>

                <label for="fecha" >Fecha</label><br/>
                <input class="id" id="fecha"  type="date" placeholder="Ej: dd/mm/aaaa"/><br/>
            </div>
            

            <div id="producto" ><br/>

                <label for="codigo-producto">Código producto</label><br/>
                <input class="id" placeholder="Código" type="text"/><br/>

                <label for="cantidad">Cantidad</label><br/>
                <input class="id" name type="number" placeholder="Cantidad"/>

            </div>


            <div id="clientes"><br/>
                <label for="idCliente">Identificación cliente</label><br/>
                <input type="number" class="id" name="" placeholder="Identificación cliente" /><br/>

                <label for="nombreCliente">Nombre cliente</label><br/>
                <input class="controls" name type="text" placeholder="Nombre cliente"/>
            
            </div>


            <div id="vendedor"><br/>
                <label for="vendedor">Identificación vendedor</label><br/>
                <input type="number" class="id" name="" placeholder="Identificación vendedor" /><br/>
                
                <label for="nombreVendedor">Nombre vendedor</label><br/>
                <input class="controls" name type="text" placeholder="Nombre vendedor"/>
            </div>

            <div id="total">
                <label for="Total">Total a pagar</label><br/>
                <input class="controls" type="number" placeholder="Total a pagar"/>
            </div>

            <div id="botones"><br/>
                <button class="boton" type="submit">Registrar venta</button>
                        <button class="boton" type="submit">Modificar</button>
                        <button class="boton" type="submit">Listas</button>
            </div>

        </form>
    </div>

</div>
    )
};

export default MVentasNueva
