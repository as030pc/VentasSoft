import React from 'react'


const header = () => {
    return (
        <div>
            <header class="encabezado">
        <img class="logovs" src="VentaSoft.png" alt=""/>
        <h1>VentaSoft</h1>
    </header>
    <nav class="menu">
        <ul>
            <li>home</li>
            <li>registro ventas</li>
            <li>estado ventas</li>
            <li>registro producto</li>
            <li>estado producto</li>
            <li>gestion usuario</li>
            <li>salir</li>
        </ul>
    </nav>
        </div>
    )
}

export default header