// state 参数是仓库的数据；action 参数是由 store 传递进来的数据变更
let reducer = (state = [], action) => {

    // 增加商品的数量：
    if (action.type === "add_goods") {
        // 深拷贝:
        let aNewState = JSON.parse(JSON.stringify(state));

        // 判断（传入的商品id和已有的商品id是否相等）是否有重复的商品
        let oFindGoods = aNewState.find(item => item.id === action.value.id);
        if (oFindGoods) {
            // 是重复添加的商品：
            oFindGoods.num += 1;
            return aNewState;
        } else {
            // 不是重复添加的商品：
            aNewState.push(action.value);
            return aNewState;
        }
    }

    // 点击计数器时修改商品的数量：
    if (action.type === 'change_goods_num') {
        let aNewState = JSON.parse(JSON.stringify(state));
        // 找到传入的id对应的商品
        let oFindGoods = aNewState.find(item => item.id === action.id);
        // 将商品的num值改成传入的商品数量值
        oFindGoods.num = action.val;
        return aNewState;
    }

    // 删除：
    if (action.type === 'del_goods') {
        let aNewState = JSON.parse(JSON.stringify(state));
        // 过滤数组，返回一个不包含传入的id值对应的数组
        let aFilterState = aNewState.filter(item => item.id !== action.id)
        return aFilterState;
    }

    return state;
}
export default reducer;