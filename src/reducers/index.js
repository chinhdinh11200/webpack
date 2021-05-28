import {combineReducers} from 'redux'
import products from './products'
import item_update from './itemUpdate'

const appReducer = combineReducers({
    products,
    item_update,
});

export default appReducer;