import thunk from 'redux-thunk'
import { authReducer } from '../auth/authReducer';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import { sportsReducer } from '../reducers/sportsReducer';


const reducers = combineReducers({
    auth: authReducer,
    sports: sportsReducer,
})


export const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware( thunk )
    )
    )