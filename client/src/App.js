import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Custom components
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'

// User auth
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

// Import CSS
import './css/App.css'
import TaskList from './components/Tasks/TaskList';


class App extends Component {

    render(){
        return (
            <Router> 
                <div>
                    {/* Navigation */}
                    <Navbar />
                    {/* Landing Page */}
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/tasks' component={TaskList} />
                    {/* User auth routes */}
                    <div className="container">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;