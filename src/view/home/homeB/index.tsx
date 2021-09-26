import React,{memo}from "react"
import { useSelector,useDispatch,shallowEqual } from "react-redux"
import demoImg from '@img/demoImg.jpg'

const homeB = () => {
    const dispatch = useDispatch()
    const loginStatus = useSelector((state:any)=>{
      return state.loginReducer.loginStatus
    },shallowEqual)
    const loginAction = ()=>{
      dispatch({
        type:loginStatus == '未登录'?true:false
      })
    }
    return (
        <div>
          <div className=" text-9xl">homeB页面</div>
          <div className=" text-8xl cursor-pointer" onClick={()=>{loginAction()}}>{loginStatus == '未登录'?'登录':'退出'}</div>
          <header className="App-header">
            <img src={demoImg} className="App-logo" alt="logo" />
            <img src={demoImg} className="App-logo" alt="logo" />
          </header>
        </div>
    )
}

export default memo(homeB)