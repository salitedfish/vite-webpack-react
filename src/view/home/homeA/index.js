import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import logo from '@img/logo.svg';
const homeA = () => {
    const dispatch = useDispatch();
    const loginStatus = useSelector((state) => {
        return state.loginReducer.loginStatus;
    }, shallowEqual);
    const loginAction = () => {
        dispatch((dispatch) => {
            dispatch({
                type: loginStatus == '未登录' ? true : false,
            });
        });
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: " text-9xl" }, "homeA\u9875\u9762"),
        React.createElement("div", { className: " text-8xl cursor-pointer", onClick: () => { loginAction(); } }, loginStatus == '未登录' ? '登录' : '退出'),
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }))));
};
export default memo(homeA);
//# sourceMappingURL=index.js.map