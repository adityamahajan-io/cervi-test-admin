import {combineReducers} from 'redux'
import authReducer from './auth'
import appData from './appData'



export default combineReducers({
    auth: authReducer,
    appData: appData
})