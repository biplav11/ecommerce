import React, { Component } from 'react'
import { Row, Col, Icon, Button, Typography, Modal } from 'antd';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import auth from '../../auth';

const { Text } = Typography;

export default class Header extends Component {
    state = {
        categories: []
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories')
        .then(data => {
            this.setState({
                categories: data.data
            })
        })
    }
    handleClick = () => {
        Modal.confirm({
            title: 'Are you sure you want to Logout?',
            onOk() {
              auth.signout(() => {
                  window.location.reload();
              })
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    render() {
        return (
            <header>
                <nav>
                    <Row>
                        <Col span={12}>
                            <img src="https://www.volusion.com/downloads/brand/Volusion_Color_Logo_Dark.png" alt="Logo" className="logo" />
                        </Col>
                        <Col span={12}>
                            <ul className="social">
                                <li><a href = "#" ><Icon type="facebook" /></a></li>
                                <li><a href = "#" ><Icon type="twitter" /></a></li>
                                <li><a href = "#" ><Icon type="youtube" /></a></li>
                                <li><a href = "#" ><Icon type="linkedin" /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </nav>
                <div  className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        {
                            this.state.categories.map((category) => {
                                return(
                                    <li key={category.id}><Link to={"/category/"+category.id}>{category.name}</Link></li>
                                )
                            })
                        }
                        <li><Link to="/contact">Contact</Link></li>
                        {
                            auth.isAuthenticated === "true" ?
                            <li><Button type="link" onClick={this.handleClick}><Text type="danger">Logout</Text></Button></li> :
                            <li><Link to="/login">Login</Link></li>
                        }
                        
                    </ul>
                </div>
            </header>
        )
    }
}
