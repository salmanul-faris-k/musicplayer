import axios from "axios"

const commonApi=async(httpmethod,url,reqbody)=>{
    const reqconfiq={
        method:httpmethod,
        url,
        data:reqbody
    }

 return await axios(reqconfiq).then(res=>{
    return res
}).catch(erro=>{
    return
})

}
export default commonApi