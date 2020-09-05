// 数据中心放购物车的数据，起始的购物车是空，所以设置成一个空数组
let reducer = (state = [], action) => {
    if (action.type === 'add_goods') {
        let aNewState = JSON.parse(JSON.stringify(state));
        // 判断增加的商品是否是重复的商品,判断传入的商品id和已有的商品id是否相等
        let oFindGoods = aNewState.find(item => item.id === action.value.id);

        // 如果找到商品，说明是重复添加的商品
        if (oFindGoods) {
            oFindGoods.num += 1;
            return aNewState;
        } else {
            aNewState.push(action.value);
            return aNewState;
        }
    }

    if (action.type === 'change_goods_num') {
        let aNewState = JSON.parse(JSON.stringify(state));
        // 找到传入的id对应的商品
        let oFindGoods = aNewState.find(item => item.id === action.id);
        // 将商品的num值改成传入的商品数量值
        oFindGoods.num = action.val;
        return aNewState;
    }

    if (action.type === 'del_goods') {
        let aNewState = JSON.parse(JSON.stringify(state));
        // 过滤数组，返回一个不包含传入的id值对应的数组
        let aFilterState = aNewState.filter(item => item.id !== action.id)
        return aFilterState;
    }

    return state;
}

export default reducer;