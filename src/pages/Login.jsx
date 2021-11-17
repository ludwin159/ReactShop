import React, { useRef } from 'react';
import '@styles/Login.scss';
import logos from '@logos/logo_yard_sale.svg'

const Login = () => {

	const form = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		//new FormData esto es parte de JavaScript, con form.current que es lo que esta trayendo lo que actualmente esta trayendo en el formulario
		const formData = new FormData(form.current)
		const data = {
			username: formData.get('email'),//para usar esto tiene que tener el nombre y no id
			password: formData.get('password')
		}
		console.log(data)
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logos} alt="logo" className="logo" />
				<form action="/" className="form" ref={form} >
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						type='submit'
						className="primary-button login-button"
						onClick={handleSubmit}
					>
						Log In
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button
					className="secondary-button signup-button"
				>
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
