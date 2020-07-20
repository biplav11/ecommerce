import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import { Input, Icon, Row, Col, Button, Modal } from 'antd'
import auth from '../auth';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        redirectToReferrer: localStorage.isAuthenticated === "true" ? true : false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state
        if (email === 'biplav@basobaas.com' && password === '123456') {
            auth.login(() => {
                Modal.success({
                    title: 'This is a success message',
                    content: 'some messages...some messages...',
                });
                window.location.reload();
            })
        } else {
            Modal.error({
                title: 'This is an error message',
                content: 'some messages...some messages...',
            });
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <MainLayout>
                <form className="contact-form" style={{ width: '50%' }} onSubmit={this.handleSubmit}>
                    <h1>Login to Continue</h1>
                    <Row gutter={15}>
                        <Col span={12}>
                            <Input
                                placeholder="Enter your email"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                name="email"
                                type="email"
                                required={true}
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </Col>
                        <Col span={12}>
                            <Input
                                placeholder="Enter your email"
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                name="password"
                                type="password"
                                required={true}
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </Col>
                        <Col span={12}>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginTop: 10 }}>
                                Login
                        </Button>
                        </Col>
                    </Row>
                </form>
            </MainLayout>
        )
    }
}
