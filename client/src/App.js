import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Custom components
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'

// Import CSS
import './css/App.css'

class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        )
    }
}

export default App;