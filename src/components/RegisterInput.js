import React from 'react';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
	const [name, OnNameChange] = useInput('');
	const [email, OnEmailChange] = useInput('');
	const [password, OnPasswordChange] = useInput('');

	function onSubmitHandler(event) {
		event.preventDefault();

		register({
			name: name,
			email: email,
			password: password,
		});
	}

	return (
		<form onSubmit={onSubmitHandler} className='input-register'>
			<label id="name">Nama</label>
			<input id="name" type="text" placeholder="Nama" value={name} onChange={OnNameChange} />
			<label id="email">Email</label>
			<input id="email" type="email" placeholder="Email" value={email} onChange={OnEmailChange} />
			<label id="password">Password</label>
			<input id="password" type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={OnPasswordChange} />
			<button>Register</button>
		</form>
	)
}

export default RegisterInput;