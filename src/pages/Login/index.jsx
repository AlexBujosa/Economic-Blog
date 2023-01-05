import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Login = () => {
	const { user, updateUser } = UserAuth();
	const [formData, setFormData] = useState({});
	const handleLogin = async (e) => {
		e.preventDefault();
		await fetch(
			'https://economic-blog-backend.up.railway.app/api/users/login',
			{
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
		)
			.then((res) => res.json())
			.then((res) => updateUser(res.username, res.accessToken))
			.then(() => {
				resetFormData();
			});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const resetFormData = () => {
		setFormData({});
	};
	useEffect(() => {
		const localAuthToken = localStorage.getItem('authToken');
		if (
			localAuthToken !== undefined &&
			localAuthToken !== null &&
			localAuthToken !== 'undefined'
		) {
			window.location.href = 'https://economic-blog-oduranc.vercel.app/';
		}
	}, [user]);
	return (
		<div>
			<div className="login">
				<div className="title">
					<h1 className="blog-name">Runo</h1>
					<div className="line" />
				</div>
				<div className="login-form">
					<form onSubmit={handleLogin}>
						<p>Bienvenido de nuevo</p>
						<h2 style={{ marginBottom: '30px' }}>
							Iniciar sesión en su cuenta
						</h2>
						<div>
							<div className="container-input" style={{ marginBottom: '20px' }}>
								<p className="label-input">Correo</p>
								<input
									className="form-input"
									type="email"
									name="email"
									value={formData.email || ''}
									onChange={handleChange}
								/>
							</div>
							<div>
								<p className="label-input">Contraseña</p>
								<input
									className="form-input"
									type="password"
									name="password"
									value={formData.password || ''}
									onChange={handleChange}
								/>
							</div>
						</div>
						<button className="btn-login" type="submit">
							Login
						</button>
					</form>
					<div className="sign-in">
						<p>
							¿No tienes una cuenta?
							<span>
								<Link to="/signUp">Registrate</Link>{' '}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
