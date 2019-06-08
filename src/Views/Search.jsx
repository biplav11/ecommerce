import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import qs from 'query-string'

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
            let searchText = qs.parse(this.props.location.search).q;
            let searchData = data.data.filter((obj) => {
                return obj.title.toLowerCase().includes(searchText)
            })
            this.setState({
                products: searchData
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
                            products.length === 0 ? 
                            <Col span={24}>
                                <h1>No Products Found</h1>
                            </Col>
                            : ''
                        }
                        {
                            products.map((item) => {
                                return(
                                    <Col key={item.id} span={6}>
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
                                                price= {item.price}
                                            />
                                        </Card>
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
