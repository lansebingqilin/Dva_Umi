import React, { Component } from 'react';
import {Icon} from 'antd';
import PropTypes from 'prop-types';
import ListSort from '../../component/ListSort';


const dataArray = [
  {
    icon: 'question-circle-o',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    icon: 'plus-circle-o',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  },
  {
    icon: 'check-circle-o',
    color: '#2DB7F5',
    title: 'Visual Designer',
    text: 'Visual Designer',
  },
  {
    icon: 'dollar',
    color: '#FFAA00',
    title: 'Computer Engineer',
    text: 'Computer Engineer',
  },
  {
    icon: 'global',
    color: '#FF5500',
    title: 'Senior Product Designer',
    text: 'Senior Product Designer',
  },
  {
    icon: 'scan',
    color: '#5FC296',
    title: 'Senior Animator',
    text: 'Senior Animator',
  }
];
export default class Mine extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'list-sort-demo',
  };

  render() {
    const childrenToRender = dataArray.map((item, i) => {
      const {icon, color, title, text,} = item;
      return (
        <div key={i} className={`${this.props.className}-list`}>
            <style>{`
                .list-sort-demo-wrapper {
                    position: relative;
                    background: #e6e6e6;
                    overflow: hidden;
                    height:100%;
                  }
                  
                  .list-sort-demo {
                    margin: 40px auto;
                    max-width: 350px;
                    width: 90%;
                    cursor: url('http://gtms02.alicdn.com/tps/i2/T1_PMSFLBaXXcu5FDa-20-20.png') 10 10,pointer!important;
                    position: relative;
                    height: 305px;
                  }
                  .list-sort-demo > div{
                    overflow: hidden;
                  }
                  
                  .list-sort-demo-list {
                    background: #fff;
                    border-radius: 6px;
                    margin: 5px auto;
                    padding: 10px;
                    height: 70px;
                    transition:  box-shadow .5s, transform .5s;
                  }
                  
                  .list-sort-demo-list.list-drag-selected{
                    box-shadow: 0 8px 20px #E6E6E6;
                    transform: scale(1.1) !important;
                  }
                  
                  .list-sort-demo-icon {
                    width: 20%;
                    display: inline-block;
                    text-align: center;
                    font-size: 24px;
                    line-height: 50px;
                    vertical-align: top;
                  }
                  .list-sort-demo-text{
                    width: 80%;
                    display: inline-block;
                  }
                  
                  .list-sort-demo-text h1 {
                    font-size: 18px;
                  }
                  
                  .list-sort-demo-text p{
                    font-size: 12px;
                  }
                  
                  @media screen and (max-width: 320px) {
                    .list-sort-demo-text h1 {
                      font-size: 14px;
                      line-height: 28px;
                    }
                  }
            `}</style>
          <div className={`${this.props.className}-icon`}>
            <Icon type={icon} style={{ color }} />
          </div>
          <div className={`${this.props.className}-text`}>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      );
    });
    return (
      <div className={`${this.props.className}-wrapper`}>
        <h2 style={{fontSize:'35px',color:'#4e76d0',textAlign:'center'}}>可拖动列表</h2>
        <div className={this.props.className}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            {childrenToRender}
          </ListSort>
        </div>
      </div>
    );
  }
}
