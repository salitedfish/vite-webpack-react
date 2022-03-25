import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Login = () => {
    const loginStatus = useSelector((state) => {
        return state.loginReducer.loginStatus;
    });
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => { setCount(count + 1); }, 1000);
        console.log(count);
    }, [count]);
    return (React.createElement(NavLink, { to: '/home' },
        React.createElement("div", { className: " text-green-800 text-center text-9xl h-96 flex items-center justify-around" }, loginStatus == '未登录' ? '登录' : '退出')));
};
export default memo(Login);
//# sourceMappingURL=index.js.map