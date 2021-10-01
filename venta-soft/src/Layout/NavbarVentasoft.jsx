import React from "react";

function NavbarVentasoft() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="https://res.cloudinary.com/caugustog/image/upload/v1633125757/VentaSoft/VENTASOFT_LOGO_s2gxbl.png" alt="" width="160" height="40" class="d-inline-block align-text-top"/>
                    
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Ventas</a>
                        <a class="nav-link" href="#">Productos</a>
                        <a class="nav-link" href="#">Usuarios</a>
                        <a class="nav-link" href="#">Salir</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default NavbarVentasoft;