import React, { Component } from 'react'
import AdminLayout from '../Layouts/AdminLayout.jsx';
import {Row, Col, Input, Button} from 'antd'
import Axios from 'axios';

export default class Admin extends Component {
    state = {
        name: ''
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories/'+this.props.match.params.id)
        .then((data) => {
            this.setState({
                name: data.data.name
            })
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        Axios.put('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories/'+this.props.match.params.id, this.state)
        .then((data) => {
            this.props.history.push("/admin/categories");
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <AdminLayout>
                <Row>
                    <Col span={12}>
                        <h1>Edit Category of {this.props.match.params.id}</h1>
                    </Col>
                </Row>
                <form onSubmit ={this.handleSubmit}>
                    <Row>
                        <Col span={12}>
                            <Input
                                placeholder="Enter category Name"
                                name="name"
                                required={true}
                                onChange={this.handleChange}
                                value = {this.state.name}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{marginTop: 10}}>
                                Edit Category
                            </Button>
                        </Col>
                    </Row>
                </form>
            </AdminLayout>
        )
    }
}
