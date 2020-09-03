import React, { Component } from 'react';
import { Breadcrumb, Table, InputNumber, Button } from 'element-react';
import store from '../store';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    label: "名称",
                    prop: "goods_name"
                }, {
                    label: "图片",
                    prop: "url",
                    render: function (data) {
                        return <img src={data.url} alt="商品" style={{ 'width': '100%', 'margin': '10px 0px' }} />
                    }
                }, {
                    label: "数量",
                    prop: "num",
                    render: data =>
                        <InputNumber size="small" defaultValue={data.num} value={data.num} onChange={(val) => this.fnChange(val, data.id)} min={1}></InputNumber>
                }, {
                    label: "单价",
                    prop: "price"
                }, {
                    label: "总价",
                    prop: "date",
                    render: data =>
                        <span>{data.price * data.num}</span>
                }, {
                    label: "操作",
                    prop: "date",
                    render: data =>
                        <Button type="danger" size="small" className="button" onClick={() => this.fnDel(data.id)}>删除</Button>
                },
            ],
            data: store.getState(), // 去数据中心拿数据

            iTotalPrice: this.fnCountTotalPrice() // 定义变量来存储所有商品的总价格
        }
        // 订阅数据中心的修改：
        this.unsubscribe = store.subscribe(this.fnStoreChange)
    }

    fnStoreChange = () => {
        this.setState({
            data: store.getState(),
            // 在数据中心数据发生改变时，重新计算商品总价
            iTotalPrice: this.fnCountTotalPrice()
        })
    }

    // 定义一个方法来计算所有商品的总价
    fnCountTotalPrice = () => {
        let aList = store.getState();
        let iTotalPrice = 0;
        aList.map(item => (
            iTotalPrice += item.num * item.price
        ))
        return iTotalPrice;
    }

    // 在组件销毁之前取消数据中心的定义，从而优化组件
    componentWillUnmount() {
        this.unsubscribe()
    }

    // 点击改变商品数量时触发
    fnChange = (val, id) => {
        //console.log(val);
        // 创建并提交工单：
        store.dispatch({
            type: 'change_goods_num',
            val,
            id
        })
    }

    fnDel = (id) => {
        store.dispatch({
            type: 'del_goods',
            id
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb separator="/" className="mp10">
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>购物车</Breadcrumb.Item>
                </Breadcrumb>

                <Table
                    className="mp10"
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.data}
                    border={true}
                    highlightCurrentRow={true}
                />
                <div className="total_price">总价：￥<b>{this.state.iTotalPrice}</b></div>
            </div>
        );
    }
}

export default Cart;