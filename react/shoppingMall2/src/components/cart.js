import React, { Component } from 'react';
import { Breadcrumb, Table, InputNumber, Button } from 'element-react';
import { connect } from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    label: "名称",
                    prop: "goods_name"
                },
                {
                    label: "图片",
                    prop: "url",
                    // data操作表示整个一行数据的对象
                    render: function (data) {
                        return <img src={data.url} alt="商品图片" style={{ 'width': '100%', 'margin': '10px 0px' }} />
                    }
                },
                {
                    label: "数量",
                    prop: "num",
                    // 这里render对应的方法需要改成箭头函数的形式，否则，它里面的this会指向undefined
                    // onChange事件会传递一个输入框的值给到关联的方法
                    // min属性限制输入框的最小值
                    render: data => {
                        return <InputNumber size="small" defaultValue={data.num} value={data.num} onChange={(val) => this.props.fnChange(val, data.id)} min={1} ></InputNumber>
                    }
                },
                {
                    label: "单价",
                    prop: "price"
                },
                {
                    label: "总价",
                    prop: "date",
                    render: function (data) {
                        return <span>{data.price * data.num}</span>
                    }
                },
                {
                    label: "操作",
                    prop: "date",
                    render: data => {
                        return <Button type="danger" size="small" className="button" onClick={() => this.props.fnDel(data.id)}>删除</Button>
                    }
                }
            ]

        }
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
                    data={this.props.data}
                    border={true}
                    highlightCurrentRow={true}

                />
                <div className="total_price">总价：￥<b>{this.props.iTotalPrice}</b></div>
            </div>
        );
    }
}

let mapStateToProps = state => {
    let fnCountTotalPrice = () => {
        let iTotalPrice = 0;
        state.map(item => {
            iTotalPrice += item.num * item.price
        })
        return iTotalPrice;
    }
    return {
        data: state,
        iTotalPrice: fnCountTotalPrice()
    }
}

let mapDispatchToProps = dispatch => {
    return {
        fnChange(val, id) {
            dispatch({
                type: 'change_goods_num',
                val,
                id
            })
        },
        fnDel(id) {
            dispatch({
                type: 'del_goods',
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);