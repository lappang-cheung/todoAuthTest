import React, { Component } from 'react'
import setAuthToken from './setAuthToken';
const AuthContext = React.createContext()

class AuthProvider extends Component {

    state = {
        isAuth: false
    }

    login = () => {
        if(localStorage.jwtToken === undefined){
            setTimeout(() => this.setState({
                isAuth: !this.state.isAuth
            }), 1000)
        }else{
            console.log('Already sign in')
        }
    }

    logout = () => {
        if(localStorage.jwtToken !== undefined){
            localStorage.removeItem('jwtToken')
            setAuthToken(false)
            setTimeout(() => this.setState({
                isAuth: !this.state.isAuth
            }), 1000)
        }
    }

    render() {
        return(
            <AuthContext.Provider
                value={{ 
                    isAuth: this.state.isAuth,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

export {AuthProvider, AuthConsumer}