import React, { Component } from 'react'

// Custom components
import Navbar from './layout/Navbar'
import Landing from './layout/Landing'
import Footer from './layout/Footer'

class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Landing />
                <Footer />
            </div>
        )
    }
}

export default App;