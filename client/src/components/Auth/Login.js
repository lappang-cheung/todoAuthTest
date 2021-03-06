import React, { Component } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'

import setAuthToken from '../utils/setAuthToken'

class Login extends Component {

	state = {
        email: '',
		password: '',
		errors:{}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/login', newUser)
			.then(res => {
				// Save the token to local storage
				const { token } = res.data
				// Storage the token in local storage
				localStorage.setItem('jwtToken', token)
				// Set token to Auth header
				setAuthToken(token)
				this.props.history.push('/tasks/')
				}	
			)
            .catch(err => this.setState({
                errors: err.response.data
            }))
    }

	render() {

		const { errors } = this.state

		return (
			<div className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">Sign in to your DevConnector account</p>
							<form onSubmit={this.onSubmit}>
								
								<div className="form-group">
									{/* Email input */}
									<input 
										type="email" 
										className={
											classnames('form-control form-control-lg', {
												'is-invalid': errors.email
											})
										}
										placeholder="Email Address" 
										name="email" 
										value={this.state.email}
										onChange={this.onChange}
									/>
									{/* Showing email is required */}
									{errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
								</div>

								{/* Password input */}
								<div className="form-group">
									<input 
										type="password" 
										className={
												classnames('form-control form-control-lg', {
													'is-invalid': errors.password
												})
											}
										placeholder="Password" 
										name="password"
										value={this.state.password}
										onChange={this.onChange} 
									/>
									{/* Showing password is required */}
									{errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
								</div>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default (withRouter(Login))
