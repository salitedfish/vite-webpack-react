import axios from 'axios'
import urlConfig from './urlConfig'

const myAxios = axios.create({
    timeout: 3000
})

myAxios.interceptors.request.use((config)=>{
    return config
})

myAxios.interceptors.response.use((res)=>{
    return res
})

export default {
    async chain33Request(data:any){
        return await myAxios.post(urlConfig.defaultUrl,data) as any
    },
}
