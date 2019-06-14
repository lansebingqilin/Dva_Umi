import React, { Component } from 'react';
import styles from './index.less';
import { Carousel, Grid,WhiteSpace,NoticeBar,Card,SearchBar} from 'antd-mobile';
import QueueAnim from 'rc-queue-anim';
import { Gethome } from '../../services/home';
export default class Index extends Component {
    state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
        cards:[1,2,3,4,5,6]
    }
    async componentDidMount(){
        const result=await Gethome();
        console.log(result,"/////")
    }
    render(){
        const data = Array.from(new Array(9)).map((_val, i) => ({
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: `name${i}`,
        }));
        return(
            <div className={styles.container}>
                <SearchBar placeholder="Search" maxLength={8} />
                <Carousel
                    autoplay={true}
                    infinite
                    dots={true}
                    >
                    {this.state.data.map((val,index) => (
                        <img
                            key={index}
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {window.dispatchEvent(new Event('resize'));this.setState({ imgHeight: 'auto' });}}
                            onClick={()=>console.log(val,"////")}
                        />
                    ))}
                </Carousel>
                <WhiteSpace size="sm" />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                </NoticeBar>
                <WhiteSpace size="sm" />
                <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
                <WhiteSpace size="sm" />
                <QueueAnim duration={1000} type={'scale'} className="queue-simple">
                    {
                        this.state.cards.map((val)=>(
                            <Card key={val}>
                                <Card.Header
                                    title="This is title"
                                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                                    extra={<span>this is extra</span>}
                                />
                                <Card.Body>
                                    <div>This is content of `Card`</div>
                                </Card.Body>
                                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                            </Card>
                        ))
                    }
                </QueueAnim>
            </div>
        )
    }
}