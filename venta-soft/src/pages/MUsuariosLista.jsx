import React from 'react';
import '../styles/styleMUsuarios.css';
import NavbarVentasoft from 'Layout/NavbarVentasoft';

const MUsuariosLista = () => {
 return (
   <div>
	<NavbarVentasoft/>
 	<body className="body">

   	<section id="Titulares">
     	<h2 align="center" className="subtitulo">Listado de usuarios</h2>
   	</section>
 
		
   	<section id="Tabla">

     	<table className="centrar">
          
						<thead>
							<tr>
									<th className="th">Nombre y apellido</th>
									<th className="th">Usuario</th>
									<th className="th">Correo Electrónico</th>
									<th className="th">Rol</th>
									<th className="th">Estado</th>
									<th className="th">Cambios en rol y estado</th>
							</tr>
					 </thead>

					 <tbody>
       	
							<tr id="fila1">
									<td id="celda1-0" className="td">
									Juan Ossa
									</td>
									<td id="celda-1" className="td">
									juaoss
									</td>
									<td id="celda1-2" className="td">
									juan@email.com
									</td>
									<td id="celda1-3" className="td">
									Vendedor
									</td>
									<td id="celda1-4" className="td">
									Activo
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
 
   	<section id="botonesVentas" align="center">
     	<button type="submit" className="botonAzul">Imprimir</button>
     	<button type="submit" className="botonAzul">Descargar</button>
   	</section>
 	</body>
   </div>
 );
};
 
export default MUsuariosLista;
