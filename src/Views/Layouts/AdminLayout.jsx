import React, { Component } from 'react'
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import Sidebar from '../Partials/Sidebar';

export default class AdminLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main className="admin-main">
                    <Sidebar/>
                    <div className="content">
                        {this.props.children}
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
