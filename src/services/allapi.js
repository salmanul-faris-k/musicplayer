import commonApi from "./commonApi"
import serverurl from "./serverurl"




export const addvideo = async (video) => {
    return await commonApi("POST", `${serverurl}/allvideos`, video)
}

export const getvideo = async () => {
    return await commonApi("GET", `${serverurl}/allvideos`, "")
}

export const deleteapi = async (videoid) => {
    return await commonApi("DELETE", `${serverurl}/allvideos/${videoid}`, {})
}
export const historyapi = async (video) => {
    return await commonApi("POST", `${serverurl}/history`, video)
}

export const gethistory = async () => {
    return await commonApi("GET", `${serverurl}/history`, "")
}
export const deletehistoryapi = async (videoid) => {
    return await commonApi("DELETE", `${serverurl}/history/${videoid}`, {})
}

export const addcatoryapi = async (addcat) => {
    return await commonApi("POST", `${serverurl}/allcategory`, addcat)
}

export const getcatoapi= async () => {
    return await commonApi("GET", `${serverurl}/allcategory`, "")
}
export const deletecatoapi = async (videoid) => {
    return await commonApi("DELETE", `${serverurl}/allcategory/${videoid}`, {})
}

export const getsinglecatoapi= async (videoid) => {
    return await commonApi("GET", `${serverurl}/allvideos/${videoid}`, "")
}

export const putsinglecatoryapi = async (catid,catdeetail) => {
    return await commonApi("PUT", `${serverurl}/allcategory/${catid}`, catdeetail)
}