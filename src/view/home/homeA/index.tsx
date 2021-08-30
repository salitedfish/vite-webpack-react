import React,{memo} from "react"
import logo from '@img/logo.svg'

const homeA = () => {
    return (
        <div>
          <div className=" text-9xl">homeA页面</div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
    )
}

export default memo(homeA)