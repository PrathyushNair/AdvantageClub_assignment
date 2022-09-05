import { LOADING, LOGIN, LOGOUT, NOERROR } from "./Logintype"

export const loginaction=(data)=>(dispatch)=>{
        dispatch({type:LOADING})
        dispatch({type:LOGIN,payload:data})
}
export const logoutaction=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    dispatch({type:LOGOUT})
}
export const noerroraction=()=>(dispatch)=>{
    dispatch({type:NOERROR})
}