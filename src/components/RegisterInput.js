import React from 'react';

class RegisterInput extends React.Component {
	constructor(props) {
		super(props)
   
		this.state = {
			name: '',
			email: '',
			password: '',
		}
   
		this.onNameChange = this.onNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
   
	onNameChange(event) {
		this.setState(() => {
			return {
				name: event.target.value,
			};
		});
	}
   
	onEmailChange(event) {
		this.setState(() => {
			return {
				email: event.target.value
			};
		});
	}
   
	onPasswordChange(event) {
		this.setState(() => {
			return {
				password: event.target.value
			};
		})
	}
   
	onSubmitHandler(event) {
		event.preventDefault();
	
		this.props.register({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		});
	}
   
	render() {
		return (
			<form onSubmit={this.onSubmitHandler} className='input-register'>
				<label for="name">Nama</label>
				<input id="name" type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChange} />
				<label for="email">Email</label>
				<input id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
				<label for="password">Password</label>
				<input id="password" type="password" placeholder="Password" autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
				<button>Register</button>
			</form>
		)
	}
}

export default RegisterInput;