import React, { Component } from 'react'
import AdminLayout from '../Layouts/AdminLayout.jsx';
import {Row, Col, Button, Modal} from 'antd'
import {Link} from 'react-router-dom'
import Axios from 'axios';

export default class Admin extends Component {
    state = {
        contact: []
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories')
        .then((data) => {
            this.setState({
                contact: data.data
            })
        })
    }
    handleDelete(id){
        Axios.delete('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories/'+id)
        .then(data => {
            console.log(data);
            window.location.reload();
        })
    }
    render() {
        return (
            <AdminLayout>
                <Row>
                    <Col span={12}>
                        <h1>Categories</h1>
                    </Col>
                </Row>
                <div>
                    <table className="full">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Image</th>
                                <th>Category Name</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contact.map(item => {
                                    let {createdAt, id, name, image} = item;
                                    let currentDate = new Date(createdAt);
                                    let date = currentDate.getDate();
                                    let month = currentDate.getMonth(); //Be careful! January is 0 not 1
                                    let year = currentDate.getFullYear();
                                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                    let dateString = date + "-" +monthNames[month]+ "-" + year;
                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td><img className="thumb" src={image} alt={name}/></td>
                                            <td>{name}</td>
                                            <td>{dateString}</td>
                                            <td><Link to={"/admin/categories/"+id}><Button type="default">Edit</Button></Link>&nbsp;&nbsp;&nbsp;<Button type="danger" onClick = {() => {this.handleDelete(id)}}>Delete</Button></td>
                                        </tr>            
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
        )
    }
}
