import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div>
        <div className='login'>
            <div className='title'>
              <h1 className='blog-name'>Runo</h1>
              <div className='line'/>
            </div>
            <div className='login-form'>
                <form action="">
                    <p>Bienvenido de nuevo</p>
                    <h2 style={{marginBottom:'30px'}}>Iniciar sesión en su cuenta</h2>
                    <div>
                    <div className='container-input' style={{marginBottom:'20px'}}>
                      <p className='label-input'>Correo</p>
                      <input className='form-input' type="email"/>
                    </div>
                     <div>
                        <p className='label-input'>Contraseña</p>
                        <input className='form-input' type="password"/>
                    </div>
                    </div>
                     <button className='btn-login' type="submit">Login</button>
                </form>
                <div className='sign-in'>
                  <p >¿No tienes una cuenta?<span><Link to="/signUp">Registrate</Link> </span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login;