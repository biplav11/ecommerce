import React, { Component } from 'react'
import AdminLayout from '../Layouts/AdminLayout.jsx';
import {Row, Col, Button, Modal} from 'antd'
import Axios from 'axios';

export default class Admin extends Component {
    state = {
        contact: []
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/contact')
        .then((data) => {
            this.setState({
                contact: data.data
            })
        })
    }
    handleDelete(id){
        Axios.delete('http://5b8971636b7dcb0014d5f3f1.mockapi.io/contact/'+id)
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
                        <h1>Contact Queries</h1>
                    </Col>
                </Row>
                <div>
                    <table className="full">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contact.map(item => {
                                    let {createdAt, id, fullname, email, message} = item;
                                    let currentDate = new Date(createdAt);
                                    let date = currentDate.getDate();
                                    let month = currentDate.getMonth(); //Be careful! January is 0 not 1
                                    let year = currentDate.getFullYear();
                                    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                    let dateString = date + "-" +monthNames[month]+ "-" + year;
                                    return(
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{fullname}</td>
                                            <td>{email}</td>
                                            <td>{message}</td>
                                            <td>{dateString}</td>
                                            <td><Button type="danger" onClick = {() => {this.handleDelete(id)}}>Delete</Button></td>
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
