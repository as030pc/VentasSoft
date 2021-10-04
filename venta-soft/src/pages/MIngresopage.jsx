import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styleMIngreso.css'

function MIngresopage() {
    return (
        <div>
            <div className="imagen">
                <img src="https://res.cloudinary.com/dgalifmjr/image/upload/v1633140157/ventasoft/VENTASOFT_LOGO_xptkya.png" alt="" />
            </div>
            <section className="form-sesion">
                <div className="titulo">
                    <h5>Inicia sesión</h5>
                </div>

                <form className="user_psw">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Correo electronico </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Recuerdame</label>
                    </div>
                    <div className="btn-2">
                       <button type="submit" className="btn btn-primary btn-login"> Login </button>
                        <Link to="/home" className="btn btn-primary btn-google" type="submit">google</Link>
                    </div>
                </form>
                <p>¿Aún no estas registrado? </p>
                                
                    <button type="button" className="btn btn-primary btn-registro" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        registrate aqui
                    </button>

                    
                    <div className="modal fade modallogin" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Registro de usuario</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="mb-3 nombre">
                                            <label for="Nombre" className="form-label">Nombre y apellido </label>
                                            <input type="text" className="form-control alinear" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                        <div className="mb-3 nombre">
                                            <label for="username" className="form-label">Usuario </label>
                                            <input type="text" className="form-control alinear" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div> <div className="mb-3 nombre">
                                            <label for="pwd" className="form-label">Contraseña </label>
                                            <input type="password" className="form-control alinear" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div> <div className="mb-3 nombre">
                                            <label for="bdaymonth" className="form-label">Fecha de nacimiento </label>
                                            <input type="month" className="form-control alinear" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div> <div className="mb-3 nombre">
                                            <label for="exampleInputEmail1" className="form-label">Correo electronico </label>
                                            <input type="email" className="form-control alinear" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" className="btn btn-primary">registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}
export default MIngresopage;