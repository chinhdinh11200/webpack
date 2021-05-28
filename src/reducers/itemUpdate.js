import { ITEM_UPDATE } from './../constants/ActionType';

var initialState = {};

const item_update = (state= initialState, action) => {
    switch(action.type){
        case ITEM_UPDATE: 
            return action.product;
        default:
            return state;
    }
}

export default item_update;