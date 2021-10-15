import React from "react";
import { Link } from "react-router-dom"

function NavbarVentasoft() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">
                    <img src="https://res.cloudinary.com/caugustog/image/upload/v1633125757/VentaSoft/VENTASOFT_LOGO_s2gxbl.png" alt="" width="160" height="40" class="d-inline-block align-text-top" />

                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        {/* //<Link class="nav-link" to="/ventas">Ventas</Link> */}
                        <Link class="nav-link" to="/producto">Productos</Link>
                        <Link class="nav-link" to="/usuarioLista">Usuarios</Link>
                        <Link class="nav-link" to="/">Salir</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default NavbarVentasoft;