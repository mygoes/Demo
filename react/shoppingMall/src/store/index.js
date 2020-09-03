// 导入创建 store 的方法：
import { createStore } from 'redux';
// 导入仓库数据：
import reducer from './reducer';
// 创建 store：
let store = createStore(reducer);
// 导出 store：
export default store;