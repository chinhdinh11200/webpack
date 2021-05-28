import *as types from './../constants/ActionType'

var initialState = [];
var findIndex = (id,products) =>{
    var result = -1;
    products.forEach((product,index) => {
        if(product.id === id){
            result = index;
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            var id = action.id;
            index = findIndex(id, state);
            if(index !== -1){
                state.splice(index,1);
            }
            return [...state];
        case types.ADD_PRODUCT: 
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            var id_update = action.product.id;
            index = findIndex(id_update,state);
            console.log(index);
            if( index !== -1){
                state[index] = action.product
            }
            console.log(state);
            return [...state]
        default : return [...state];
    }
}


export default products