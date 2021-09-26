import React,{memo,useEffect,useState} from "react"
import { NavLink } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"

const Login:React.FC<{[propName:string]:any}> = ()=>{
    const loginStatus = useSelector((state:any)=>{
      return state.loginReducer.loginStatus
    })

    const [count,setCount] = useState(0)
    useEffect(() => {
      setTimeout(()=>{ setCount(count+1)},1000)
      console.log(count)
    },[count])

    return (
        <NavLink to='/home'>
          <div className=" text-green-800 text-center text-9xl h-96 flex items-center justify-around">{loginStatus == '未登录'?'登录':'退出'}</div>
        </NavLink>
    )
}

export default memo(Login)