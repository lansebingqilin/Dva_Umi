import React,{Component} from 'react';
import { Tabs, SearchBar } from 'antd-mobile';
import styles from './index.less';
export default class Classify extends Component{
    render(){
        const tabs = [
            { title: '1 Tab' },
            { title: '2 Tab' },
            { title: '3 Tab' },
            { title: '1 Tab' },
            { title: '2 Tab' },
            { title: '3 Tab' },
            { title: '1 Tab' },
            { title: '2 Tab' },
            { title: '3 Tab' },
          ];
          
        return(
            <div className={styles.App}>
                <SearchBar placeholder="Search" maxLength={8} />
                <Tabs tabs={tabs}
                    initalPage={'t2'}
                    tabBarPosition="left"
                    tabDirection="vertical"
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
            </div>
        )
    }
}