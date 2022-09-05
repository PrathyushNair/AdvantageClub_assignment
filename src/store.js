import thunk from "redux-thunk"
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { loginreducer } from "./Redux/Loginreducer"

let rootreducer=combineReducers({login:loginreducer})
export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))