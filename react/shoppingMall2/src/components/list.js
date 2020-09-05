import React from 'react';
import { Breadcrumb, Layout, Card, Button } from 'element-react';
import { connect } from 'react-redux';

let List = props => (
    <div>
        <Breadcrumb separator="/" className="mp10">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>商品列表</Breadcrumb.Item>
        </Breadcrumb>

        <Layout.Row gutter="20" className="mp10">
            {
                props.aGoods_list.map(item => (
                    <Layout.Col span="6" key={item.id}>
                        <Card bodyStyle={{ padding: 0 }}>
                            <img src={item.url} className="goods_pic" alt="商品图片" />
                            <div style={{ padding: 14 }}>
                                <h4 className="goods_name">{item.goods_name}</h4>
                                <div className="price">￥<b>{item.price}</b></div>
                                {/* 
                                    将一个商品的完整数据传递给fnAdd方法
                                */}
                                <Button type="danger" size="small" className="button" onClick={() => props.fnAdd(item)}>加入购物车</Button>
                            </div>
                        </Card>
                    </Layout.Col>
                ))
            }
        </Layout.Row>
    </div>
);

let mapStateToProps = state => {
    return {
        aGoods_list: [
            {
                "id": 1001,
                "goods_name": "男式黑白格子衬衫",
                "url": "./static/images/clothes01.jpg",
                "price": 169,
                "num": 1
            },
            {
                "id": 1002,
                "goods_name": "纯棉印花宽松长袖T恤",
                "url": "./static/images/clothes02.jpg",
                "price": 69,
                "num": 1
            },
            {
                "id": 1003,
                "goods_name": "男士连帽夹克2019春季新款",
                "url": "./static/images/clothes03.jpg",
                "price": 249,
                "num": 1
            },
            {
                "id": 1004,
                "goods_name": "2019夏装新品时尚百搭",
                "url": "./static/images/clothes04.jpg",
                "price": 49,
                "num": 1
            }
        ]
    }
}

// 定义方法，将dispatch方法映射到组件的props属性上
let mapDispatchToProps = dispatch => {
    return {
        fnAdd(oBj) {
            dispatch({
                type: 'add_goods',
                value: oBj
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);