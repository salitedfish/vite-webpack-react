import React,{memo} from "react"
import { NavLink } from "react-router-dom"

const Login:React.FC<{[propName:string]:any}> = ()=>{
    return (
        <NavLink to='/home'>
          <div className=" text-green-800 text-center text-9xl h-96 flex items-center justify-around">跳到首页</div>
        </NavLink>
    )
}

export default memo(Login)