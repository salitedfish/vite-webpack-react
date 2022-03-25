import React, { useState, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import '@/view/home/App.less';
import DemoComponent from '@/component/demoComponent';
function App(props) {
    const routes = props.route.routes;
    const [count, setCount] = useState(0);
    const loginStatus = useSelector((state) => {
        return state.loginReducer.loginStatus;
    }, shallowEqual);
    return (React.createElement("div", { className: "App text-yellow-400" },
        React.createElement("div", { className: " text-yellow-400 text-9xl h-44", onClick: (e) => { console.log("tailwind test ...", e.target); } }, "tailwind test ..."),
        React.createElement("div", { className: " text-yellow-400 text-9xl h-44" }, loginStatus),
        React.createElement(NavLink, { to: '/login' },
            React.createElement(DemoComponent, { testProp: '测试传参', testProp2: '测试传参' })),
        React.createElement("div", { className: " flex justify-around h-44 bg-font-light-black items-center" },
            React.createElement(NavLink, { to: '/home/homeA' },
                React.createElement("div", { className: " text-app-orange text-8xl" }, "homeA\u9875\u9762")),
            React.createElement(NavLink, { to: '/home/homeB' },
                React.createElement("div", { className: " text-app-purple text-8xl" }, "homeB\u9875\u9762"))),
        renderRoutes(routes)));
}
export default memo(App);
//# sourceMappingURL=App.js.map