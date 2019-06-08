import React, { Component } from 'react'

import Header from '../Partials/Header.jsx'
import Footer from '../Partials/Footer.jsx'

export default class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>   
                
                <main className="wrapper">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
