import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import Axios from 'axios';

export default class Detail extends Component {
    state={
        product: {},
        // categories: []
    }
    componentDidMount(){
        Axios.get('http://5b8971636b7dcb0014d5f3f1.mockapi.io/products/'+this.props.match.params.id)
        .then((data)=>{
            this.setState({
                product: data.data
            })
        })
    }
    render() {
        let {title, image, price, desc, cate_id} = this.state.product
        
        return (
            <MainLayout>
                <div style={{width: '50%'}}>
                    <h1>{title} of Category {cate_id}</h1>
                    <h2>{price}</h2>
                    <div>
                        <img src={image} alt={title} className="full"/>
                    </div>
                    <p>{desc}</p>
                </div>
            </MainLayout>
        )
    }
}
