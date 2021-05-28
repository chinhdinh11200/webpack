import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem'
import {connect} from 'react-redux';
// import callApi from './../../utils/apiCall';
import {Link} from 'react-router-dom'
import {actFetchProductsRequest, actDeleteProductRequest} from './../../actions/index'


class ProductListPage extends Component {

    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        this.props.fetchAllProducts();
    }
    findIndex = (id,products) =>{
        var result = -1;
        products.forEach((product,index) => {
            if(product.id === id){
                result = index;
            }
        });
        return result;
    }
    onDelete = (id) => {
        // var {products} = this.state;
        // callApi(`products/${id}`, 'DELETE', null).then(res => {
        //     if(res.status === 200){
        //         var index = this.findIndex(id,products);
        //         if(index !== -1){
        //             products.splice(index,1);
        //             this.setState({
        //                 products: products
        //             })
        //         }
        //     }
        // })
        this.props.deleteProducts(id)
    }
    render() {
        var {products} = this.props;
        // var {products} = this.state;
        
        return (
            <div>
                <Link to="product/add" className="btn btn-info mb-5">
                 Add + 
                </Link>
                <ProductList >
                    { this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) =>{
        return products.map((product,index) => {
            return <ProductItem
                product = {product}
                key= {index}
                index= {index}
                onDelete={this.onDelete}
            />
        })
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchAllProducts: (products) => {
            dispatch(actFetchProductsRequest(products))
        },
        deleteProducts: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);