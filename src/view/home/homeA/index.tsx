import React,{memo} from "react"
import { useSelector , useDispatch,shallowEqual} from "react-redux"
import logo from '@img/logo.svg'

const homeA = () => {
    const dispatch = useDispatch()
    const loginStatus = useSelector((state:{loginReducer:any})=>{
      return state.loginReducer.loginStatus
    },shallowEqual)
    
    const loginAction = ()=>{
      dispatch((dispatch:any)=>{
        dispatch({
          type:loginStatus == '未登录'?true:false,
        })
      })
    }

    return (
        <div>
          <div className=" text-9xl">homeA页面</div>
          <div className=" text-8xl cursor-pointer" onClick={()=>{loginAction()}}>{loginStatus == '未登录'?'登录':'退出'}</div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
    )
}

export default memo(homeA)