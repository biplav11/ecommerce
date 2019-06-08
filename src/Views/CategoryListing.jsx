import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import {Link} from 'react-router-dom'

import { Card, Row, Col } from 'antd';
import Axios from 'axios';

const { Meta } = Card;

export default class CategoryListing extends Component {
    state={
        products: [],
        category: {}
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/products')
        .then((data) => {
            let cateData = data.data.filter(obj=>{
                return obj.cate_id+'' === this.props.match.params.id
            })
            this.setState({
                products: cateData
            })
        })

        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories/'+this.props.match.params.id)
        .then(data => {
            this.setState({
                category: data.data
            })
        })
    }
    componentWillReceiveProps(nextProps){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/products')
        .then((data) => {
            let cateData = data.data.filter(obj=>{
                return obj.cate_id+'' === nextProps.match.params.id
            })
            this.setState({
                products: cateData
            })
        })   

        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/categories/'+nextProps.match.params.id)
        .then(data => {
            this.setState({
                category: data.data
            })
        })
    }
    render() {
        let {products} = this.state
        return (
            <MainLayout>
                <div className="listing">
                    <h1>Products in {this.state.category.name}</h1>
                    <Row gutter={30}>
                        {
                            products.length === 0 ? 
                            <Col span={24}>
                                <h1>No Products Found</h1>
                            </Col>
                            : ''
                        }
                        {
                            products.map((item, i) => {
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
