import React, { useState, memo } from 'react'
import { useSelector,shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import '@/view/home/App.less'

import DemoComponent from '@/component/demoComponent'

function App(props:any) {
  const routes = props.route.routes
  const [count, setCount] = useState(0)

  const loginStatus = useSelector((state:any)=>{
    return state.loginReducer.loginStatus
  },shallowEqual)

  return (
    <div className="App text-yellow-400">
      <div className=" text-yellow-400 text-9xl h-44" onClick={(e)=>{console.log("tailwind test ...",e.target)}}>tailwind test ...</div>
      <div className=" text-yellow-400 text-9xl h-44">{loginStatus}</div>
      <NavLink to={'/login'} >
        <DemoComponent  testProp={'测试传参'} testProp2={'测试传参'}></DemoComponent>
      </NavLink>
      <div className=" flex justify-around h-44 bg-font-light-black items-center">
        <NavLink to={'/home/homeA'}>
          <div className=" text-app-orange text-8xl">homeA页面</div>
        </NavLink>
        <NavLink to={'/home/homeB'}>
          <div className=" text-app-purple text-8xl">homeB页面</div>
        </NavLink>
      </div>
      {
        renderRoutes(routes)
      }
    </div>
  )
}

export default memo(App)
