import React from 'react'

const demoComponent:React.FC<{[propName:string]:string}> = (props:any)=>{
    console.log(props)
    console.log(props.testProp)
    return (
        <div className=" text-9xl text-app-orange h-44">跳到登录页面</div>
    )
}

export default demoComponent