import React, { Component } from 'react';
import { Button, Badge } from 'element-react';
import 'element-theme-default';
import './static/css/main.css';
import banner from './static/images/banner.png';
import { HashRouter, Route } from 'react-router-dom';
import List from './components/list';
import Cart from './components/cart';
// 导入connect高阶组件来连接数据中心：
import { connect } from 'react-redux'

let App = props => (
  <div className="main_wrap">
    <img src={banner} alt="banner" className="banner" />
    <div className="menu">
      <a href="#/">
        <Button type="success">商品列表</Button>
      </a>
      <Badge value={props.iTotalCount}>
        <a href="#/cart">
          <Button type="success">购物车</Button>
        </a>
      </Badge>
    </div>
    <HashRouter>
      <Route exact path="/" component={List} />
      <Route path="/cart" component={Cart} />
    </HashRouter>
  </div>
);

// 定义一个函数，名称叫做mapStateToProps，它将组件state里面的属性映射到组件的props属性上
// 这个函数会接收一个参数，这个参数就是数据中心最新的值，相当于store.getState()拿到的值
let mapStateToProps = (state) => {
  let fnCountTotalNum = () => {
    // 定义一个变量来存商品的累加数量
    let iTotalCount = 0;

    // 遍历数组，累加商品的数量
    state.map(item => {
      iTotalCount += item.num
    });
    return iTotalCount;
  }

  return {
    iTotalCount: fnCountTotalNum()
  }
}

// 在导出的地方，用connect高级组件包裹组件导出
// connect接收两层参数，第二层参数是要包裹的组件
// 第一层参数是两个函数，一个是mapStateToProps，一个是mapDispatchToProps,第二个没有可以写一个null
export default connect(mapStateToProps, null)(App);