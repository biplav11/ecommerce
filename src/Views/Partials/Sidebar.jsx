import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li>
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/products">All Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/categories">All Categories</Link>
                    </li>
                    <li>
                        <Link to="/admin/contact-queries">All Contact Queries</Link>
                    </li>
                </ul>
            </aside>
        )
    }
}
