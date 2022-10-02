import React from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
	const [email, OnEmailChange] = useInput('');
	const [password, OnPasswordChange] = useInput('');

	function onSubmitHandler(event) {
		event.preventDefault();

		login({
			email: email,
			password: password,
		});
	}

	return (
		<form onSubmit={onSubmitHandler} className='input-login'>
			<label id="email">Email</label>
			<input id="email" type="email" placeholder='Email' value={email} onChange={OnEmailChange} />
			<label id="password">Password</label>
			<input id="password" type="password" placeholder='Password' value={password} onChange={OnPasswordChange} />
			<button>Login</button>
		</form>
	)
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired
}

   
export default LoginInput;