import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="wrapper">
                    <Row>
                        <Col span={12}>
                            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
                    </Col>
                        <Col span={12} className="text-right">
                            {"</>"} with <HeartTwoTone twoToneColor="#eb2f96" /> by: Bishnu Rajkumar Thapa
                    </Col>
                    </Row>
                </div>
            </footer>
        )
    }
}
