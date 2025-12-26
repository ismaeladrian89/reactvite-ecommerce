import { combineReducers } from "@reduxjs/toolkit"
import authReducers  from "../Reducers/authReducers"

const rootReducers = combineReducers({ auth: authReducers, });

export default rootReducers