import React from 'react'
import "../styles/styleMVentas.css"

const MVentasModificar = () => {
    return (
        <div>    
            <form>
                <main>
                    <section class="modificarVentas">
                        <h1>VentaSoft</h1>
                        <h4>   Interfaz Actualización Información de Ventas</h4>
                        <br />

                        <label for="fecha">Fecha</label>
                        <input name="fecha" class ="controls" type ="date" placeholder="Ej: dd/mm/aaaa" />

                        <label for="codigoVendedor">Código vendedor</label>
                        <input type="codigoVendedor" class ="controls" name=""  placeholder="Ej: 0001" />

                        <label for="codigoCliente">Identificación cliente </label>
                        <input type="codigoCliente" class="controls" name="" placeholder="Ej: Identificación cliente " />

                        <label for="nombreCliente">Nombre cliente </label>
                        <input type="nombreCliente" class="controls" name="" placeholder="Ej: Nombre cliente" />

                        <label for="codigoProducto">Código producto</label>
                        <input name="codigoProducto" class ="controls" placeholder="Ej: P-09887" />

                        <label for="precio">Precio unitario</label>
                        <input name="precio" class="controls" type="number" placeholder="Ej: 100.000" />

                        <label for="cantidad">Cantidad</label>
                        <input name="cantidad" class ="controls"  type ="number" placeholder="Ej: 10" />

                        <label for="total">Total</label>
                        <input name="total" class="controls" type="number" placeholder="Ej: 1.000.000" /><br />
                        
                        <label for="estado">Estado de la Venta</label>
                        <input type="search" name="buscarestado" list="listaestados" class="controls" placeholder="Estado venta" /><br/>
                        <button type="submit" class="boton" id="actualizarVentas">Actualizar venta</button>

                        <datalist id="listaestados">
                            <option value="En proceso"></option>
                            <option value="Cancelada"></option>
                            <option value="Enviada"></option>
                        </datalist>

                    </section>
                </main>
            </form>
        </div>
    )
}

export default MVentasModificar
