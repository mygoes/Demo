import React, { Component } from 'react';
import { Button, Badge } from 'element-react';
import 'element-theme-default';
import './static/css/main.css';
import banner from './static/images/banner.png';
import { HashRouter, Route } from 'react-router-dom';
import List from './components/list';
import Cart from './components/cart';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iTotalCount: this.fnCountTotalNum()
    }
    // 订阅数据中心的修改
    this.unsubscribe = store.subscribe(this.fnStoreChange);
  }

  // 每次数据更新时，重新去数据中心拿数据，再计算所有商品的数量
  fnStoreChange = () => {
    this.setState({
      iTotalCount: this.fnCountTotalNum()
    })
  }

  // 在组件销毁之前取消数据中心的定义，从而优化组件
  componentWillUnmount() {
    this.unsubscribe()
  }

  //定义一个方法，去数据中心获取所有商品的数据
  fnCountTotalNum = () => {
    let aList = store.getState(); // 拿到数据中心所有商品的数据
    let iTotalCount = 0; // 定义一个变量来存商品的累加数量

    // 遍历数组，累加商品的数量
    aList.map(item => (
      iTotalCount += item.num
    ));

    return iTotalCount;
  }

  render() {
    return (
      <div className="main_wrap">
        <img src={banner} alt="banner" className="banner" />
        <div className="menu">
          <a href="#/">
            <Button type="success">商品列表</Button>
          </a>
          <Badge value={this.state.iTotalCount}>
            <a href="#/cart">
              <Button type="success">购物车</Button>
            </a>
          </Badge>
        </div>
        <HashRouter>
          <Route path="/" exact component={List} />
          <Route path="/cart" component={Cart} />
        </HashRouter>
      </div >
    );
  }
}

export default App;