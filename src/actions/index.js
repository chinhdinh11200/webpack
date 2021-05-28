import * as types from './../constants/ActionType';
import callApi from './../utils/apiCall';

export const actFetchProducts = (products) => {
    return {
        type : types.FETCH_PRODUCTS,
        products: products,   
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actDeleteProductRequest = id =>{
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = id => {
    return {
        type: types.DELETE_PRODUCT,
        id,
    }
};

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi("products", "POST", product).then((res) => {
        dispatch(actAddProduct(res.data));
        });
    };
};
export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product,
    };
};


export const actGetUpdateProductRequest = id => {
    return dispacth => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispacth(actGetUpdateProduct(res.data))
        })
    }
}
export const actGetUpdateProduct = (product) => {
    return {
        type: types.ITEM_UPDATE,
        product,
    }
}


export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT',product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}
export const actUpdateProduct = product => {
    return {
        type: types.UPDATE_PRODUCT,
        product,
    }
}