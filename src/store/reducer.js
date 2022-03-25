import { combineReducers } from "redux";
const loginStatus = {
    loginStatus: "未登录"
};
function loginReducer(state = loginStatus, action) {
    switch (action.type) {
        case true:
            return { ...state, loginStatus: '已登录' };
        case false:
            return { ...state, loginStatus: '未登录' };
        default:
            return state;
    }
}
const reducers = combineReducers({
    loginReducer
});
export default reducers;
//# sourceMappingURL=reducer.js.map