import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import {Link} from 'react-router-dom'

import { Card, Row, Col } from 'antd';
import Axios from 'axios';

const { Meta } = Card;

export default class Listing extends Component {
    state={
        products: []
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/products')
        .then((data) => {
            this.setState({
                products: data.data
            })
        })
    }
    render() {
        let {products} = this.state
        return (
            <MainLayout>
                <div className="listing">
                    <h1>All Products</h1>
                    <Row gutter={30}>
                        {
                            products.map((item) => {
                                return(
                                    <Col key={item.id} span={6}>
                                        <Link to={"/product/"+item.id}>
                                        <Card
                                            style={{ marginBottom: 30 }}
                                            cover={
                                                <img
                                                    alt={item.title}
                                                    src={item.image}
                                                    onError= {() => {this.onerror = null; this.src = "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"}}
                                                />
                                            }
                                        >
                                            <Meta
                                                title={item.title}
                                                description={item.desc}
                                            />
                                            <h2>{item.price}</h2>
                                        </Card>
                                        </Link>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </MainLayout>
        )
    }
}
