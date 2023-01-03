import React, {useEffect, useState} from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';
const SignUp = () => {
  const {user,updateUser} = UserAuth();
  const [formData, setFormData] = useState({});
  const handleSignUp = async(e) => {
    e.preventDefault();
    await fetch("https://economic-blog-backend.up.railway.app/api/users/signup",{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(res => res.json()).then(res => updateUser(res.username, res.accessToken)).then(
      ()=>{
        resetFormData();
      }
    )
  }

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  }

  const resetFormData = () =>{
    setFormData({})
  }
  useEffect(()=>{
    const localAuthToken = localStorage.getItem('authToken');
    if(
      localAuthToken !== undefined && 
      localAuthToken !== null &&
      localAuthToken !== 'undefined'
      ){
      window.location.href="http://localhost:3000/";
    }
  },[user])

  return (
    <div>
        <div className='signUp'>
            <div className='title'>
              <h1 className='blog-name'>Runo</h1>
              <div className='line'/>
            </div>
            <div className='signUp-form'>
                <form onSubmit={handleSignUp}>
                    <p>Bienvenido</p>
                    <h2 style={{marginBottom:'30px'}}>Regístrese su cuenta</h2>
                    <div>
                    <div className='container-input' style={{marginBottom:'20px'}}>
                      <p className='label-input'>Usuario</p>
                      <input 
                        className='form-input' 
                        type="text" 
                        name="username"
                        value={formData.username || ''}
                        onChange={handleChange}/>
                    </div>
                     <div className='container-input' style={{marginBottom:'20px'}}>
                      <p className='label-input'>Correo</p>
                      <input 
                        className='form-input'
                        type="email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}/>
                    </div>
                     <div>
                        <p className='label-input'>Contraseña</p>
                        <input 
                          className='form-input' 
                          type="password" 
                          name="password"
                          value={formData.password || ''}
                          onChange={handleChange}/>
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
