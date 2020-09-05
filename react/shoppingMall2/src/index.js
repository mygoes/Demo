import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// 导入react-redux中的Provider组件，用它来包裹App根组件
import { Provider } from 'react-redux';

// 导入数据中心
import store from './store'

// 用Provider组件包裹App,同时将store注入,注入之后，App里面的组件就不用导入store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));