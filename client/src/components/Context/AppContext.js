import React, {Component} from 'react'

export const AppContext = React.createContext()

export class AppProvider extends Component{

    state = {
        name: '',
        email: '',
        password: '',
        password2: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <AppContext.Provider  
                value={{
                    ...this.state,
                    onChange: this.onChange
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}