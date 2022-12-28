import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";
const SignUp = () => {
  return (
    <div>
        <div className='signUp'>
            <div className='title'>
              <h1 className='blog-name'>Runo</h1>
              <div className='line'/>
            </div>
            <div className='signUp-form'>
                <form action="">
                    <p>Bienvenido</p>
                    <h2 style={{marginBottom:'30px'}}>Regístrese en su cuenta</h2>
                    <div>
                    <div className='container-input' style={{marginBottom:'20px'}}>
                      <p className='label-input'>Usuario</p>
                      <input className='form-input' type="text"/>
                    </div>
                     <div className='container-input' style={{marginBottom:'20px'}}>
                      <p className='label-input'>Correo</p>
                      <input className='form-input' type="email"/>
                    </div>
                     <div>
                        <p className='label-input'>Contraseña</p>
                        <input className='form-input' type="password"/>
                    </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                     <button className='btn-signUp' type="submit">Registrarse</button>
                     </div>
                </form>
                <div className='sign-in'>
                  <p >¿Ya tienes una cuenta?<span><Link to="/login">Inicie sesión en su cuenta</Link></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;
