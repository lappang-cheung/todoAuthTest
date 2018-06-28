import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { AppProvider, AppContext } from './components/Context/AppContext'

ReactDOM.render(
    <AppProvider>
        <AppContext.Consumer>
            {({ name, email, password, password2, onChange }) => (
                <App 
                    name={name}
                    email={email}
                    password={password}
                    password2={password2}
                    onChange={onChange}
                />
            )}
        </AppContext.Consumer>
    </AppProvider>, 
    document.getElementById('root')
)