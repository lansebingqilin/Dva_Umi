import React, { Component } from 'react';
import Tabbar from './tabs';
import styles from './index.less';
const ULR_NO_LAYOUT = ['/','/classify', '/shopcar', '/mine'];
export default class Index extends Component{
    render(){
        const {location: {pathname}, children } = this.props;
        if (ULR_NO_LAYOUT.includes(pathname)) {
            return (
              <div className={styles.container}>
                <div className={styles.content}>{this.props.children}</div>
                <Tabbar {...this.props}/>
              </div>
            );
        }else{
            return <>{children}</>
        }
    }
}