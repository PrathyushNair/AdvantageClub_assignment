import { ERROR, LOADING, LOGIN, LOGOUT, NOERROR } from "./Logintype";
let initialState={isAuth:false,isError:false,isLoading:false}
export const loginreducer=(state=initialState,action)=>{
 switch(action.type)
 {
    case LOADING:
        {
            return{...state,isLoading:true}
        }
     case ERROR:
     {
         return {...state,isAuth:false,isError:true,isLoading:false}
    }
    case LOGIN:
        {   
            console.log("in reducer",action.payload)
            let {email,password}=action.payload
            
            
            if((email==="advantageclub@test.com"&&password==="advantageclub"))
            {   localStorage.setItem("logged",JSON.stringify(true))
                return {...state,isAuth:true,isLoading:false,isError:false}
            }
            else
            {

                return {...state,isAuth:false,isLoading:false,isError:true}
            }
        }
        case LOGOUT:
            {   localStorage.setItem("logged",JSON.stringify(false))
                return {...state,isAuth:false,isLoading:false,isError:false} 
            }
            case NOERROR:
                {
                    return {...state.isAuth,isError:false}
                }
        default:
            { let logged=JSON.parse(localStorage.getItem("logged"))
                if(logged)
                {
                    return {...state,isAuth:true}
                }
                return {...state}
            }
 }
}