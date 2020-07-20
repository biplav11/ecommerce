import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import { Input, Row, Col, Button, Modal } from 'antd'
import Axios from 'axios';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
const { TextArea } = Input;

export default class CategoryListing extends Component {
    state = {
        fullname: '',
        email: '',
        message: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://5b8971636b7dcb0014d5f3f1.mockapi.io/contact', this.state)
            .then((data) => {
                Modal.success({
                    title: 'Message Posted Successfully',
                });
            })
        this.setState({
            fullname: '',
            email: '',
            message: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <MainLayout>
                <form className="contact-form" style={{ width: '50%' }} onSubmit={this.handleSubmit}>
                    <h1>Contact Us</h1>
                    <Row gutter={15}>
                        <Col span={12}>
                            <Input
                                placeholder="Enter your name"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                name="fullname"
                                required={true}
                                onChange={this.handleChange}
                                value={this.state.fullname}
                            />
                        </Col>
                        <Col span={12}>
                            <Input
                                placeholder="Enter your email"
                                prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="email"
                                type="email"
                                required={true}
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </Col>
                        <Col span={24}>
                            <TextArea
                                placeholder="Enter your message"
                                name="message"
                                style={{ marginTop: 15 }}
                                required={true}
                                onChange={this.handleChange}
                                value={this.state.message}
                            />
                        </Col>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10 }}>
                                Submit Contact Query
                        </Button>
                        </Col>
                    </Row>
                </form>
            </MainLayout>
        )
    }
}
