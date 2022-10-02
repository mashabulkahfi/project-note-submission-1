import React from 'react';

class LoginInput extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			email: '',
			password: '',
		};
	
		this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
		this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
   
	onEmailChangeHandler(event) {
		this.setState(() => {
			return {
				email: event.target.value
			}
		})
	}
   
	onPasswordChangeHandler(event) {
		this.setState(() => {
			return {
				password: event.target.value
			};
		});
	}
	
	onSubmitHandler(event) {
		event.preventDefault();
	
		this.props.login({
			email: this.state.email,
			password: this.state.password,
		});
	}
	
	render() {
		return (
			<form onSubmit={this.onSubmitHandler} className='input-login'>
				<label for="email">Email</label>
				<input id="email" type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChangeHandler} />
				<label for="password">Password</label>
				<input id="password" type="password" placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
				<button>Masuk</button>
			</form>
		);
	}
}
   
export default LoginInput;