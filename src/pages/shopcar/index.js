import React, { Component } from 'react';
// import styles from './index.less';
import {List} from 'antd-mobile';
// import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
export default class Shopcar extends Component {
    state = {
        show: true
    };
    onClick = () => {
        this.setState({
          show: !this.state.show
        });
    }
    render(){
        return(
            <QueueAnim delay={300} className="queue-simple">
                <List.Item key='a' extra={'extra content'}>Title</List.Item>
                <List.Item key='b' extra={'extra content'}>Title</List.Item>
                <List.Item key='c' extra={'extra content'}>Title</List.Item>
                <List.Item key='d' extra={'extra content'}>Title</List.Item>
                <List.Item key='e' extra={'extra content'}>Title</List.Item>
                <List.Item key='f' extra={'extra content'}>Title</List.Item>
                <List.Item key='g' extra={'extra content'}>Title</List.Item>
                <List.Item key='l' extra={'extra content'}>Title</List.Item>
            </QueueAnim>
        )
    }
}