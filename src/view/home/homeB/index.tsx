import React,{memo}from "react"
import demoImg from '@img/demoImg.jpg'

const homeB = () => {
    return (
        <div>
          <div className=" text-9xl">homeB页面</div>
          <header className="App-header">
            <img src={demoImg} className="App-logo" alt="logo" />
            <img src={demoImg} className="App-logo" alt="logo" />
          </header>
        </div>
    )
}

export default memo(homeB)