import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout'

import { Input, Col } from 'antd';

const Search = Input.Search;

export default class Home extends Component {
    render() {
        return (
            <MainLayout>
                    <form action="/search">
                        <h1>Search For Products</h1>
                        <Col span={12}>
                        <Search
                            placeholder="Search For Products"
                            enterButton="Search"
                            size="large"
                            name="q"
                        />
                        </Col>
                    </form>
            </MainLayout>
        )
    }
}
