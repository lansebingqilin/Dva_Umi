import React from 'react';
import router from 'umi/router';
import styles from './index.less';
import Tab1 from '../../assets/recycleH5_07.png';
import Tab11 from '../../assets/recycleH5_02.png';
import Tab2 from '../../assets/recycleH5_03.png';
import Tab21 from '../../assets/recycleH5_06.png';
import Tab3 from '../../assets/recycleH5_04.png';
import Tab31 from '../../assets/recycleH5_05.png';
import Tab4 from '../../assets/recycleH5_07.png';
import Tab41 from '../../assets/recycleH5_02.png';
class Tabbar extends React.Component {
  render() {
    const selectedTabBar=this.props.location.pathname;
    return (
      <div  className={styles.tabBarAll}>
          <div className={styles.tabBarItem} onClick={()=>router.push('/')}>
            <div className={styles.tabBarItemInfo}>
              <div className={styles.tabBarItemInfoIcon} style={{background:`url(${selectedTabBar==='/'?Tab11:Tab1}) center center no-repeat`}}></div>
              <span className={selectedTabBar==='/'?styles.tabBarItemInfoTextActive:styles.tabBarItemInfoText}>首页</span>
            </div>
          </div>
          <div className={styles.tabBarItem} onClick={()=>router.push('/classify')}>
            <div className={styles.tabBarItemInfo}>
              <div className={styles.tabBarItemInfoIcon} style={{background:`url(${selectedTabBar==='/classify'?Tab21:Tab2}) center center no-repeat`}}></div>
              <span className={selectedTabBar==='/classify'?styles.tabBarItemInfoTextActive:styles.tabBarItemInfoText}>分类</span>
            </div>
          </div>
          <div className={styles.tabBarItem} onClick={()=>router.push('/shopcar')}>
            <div className={styles.tabBarItemInfo}>
              <div className={styles.tabBarItemInfoIcon} style={{background:`url(${selectedTabBar==='/shopcar'?Tab31:Tab3}) center center no-repeat`}}></div>
              <span className={selectedTabBar==='/shopcar'?styles.tabBarItemInfoTextActive:styles.tabBarItemInfoText}>购物车</span>
            </div>
          </div>
          <div className={styles.tabBarItem} onClick={()=>router.push('/mine')}>
            <div className={styles.tabBarItemInfo}>
              <div className={styles.tabBarItemInfoIcon} style={{background:`url(${selectedTabBar==='/mine'?Tab41:Tab4}) center center no-repeat`}}></div>
              <span className={selectedTabBar==='/mine'?styles.tabBarItemInfoTextActive:styles.tabBarItemInfoText}>我的</span>
            </div>
          </div>
    </div>
    );
  }
}

export default Tabbar;
