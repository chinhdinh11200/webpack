import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { actAddProductRequest, actGetUpdateProductRequest, actUpdateProductRequest } from './../../actions/index'


class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtname: '',
            price: 0,
            status: false
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (event) => {
        event.preventDefault();
        var { id, txtname, price, status } = this.state;
        var { history } = this.props;
        if (id) {// update
            this.props.updateProduct(
                {
                id: id,
                name: txtname,
                price: price,
                status: status
                }
            )
            history.goBack();
        } else {
            this.props.addProduct({
                name: txtname,
                price: price,
                status: status
            })
            history.goBack();
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.itemUpdate(id);
        }
    }
    UNSAFE_componentWillReceiveProps(nextprops){
        if(nextprops && nextprops.productUpdate) {
            this.setState({
                id: nextprops.productUpdate.id,
                txtname: nextprops.productUpdate.name,
                price: nextprops.productUpdate.price,
                status: nextprops.productUpdate.status,
            })
        }
    }
    render() {
        var { txtname, price, status } = this.state;
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-header bg-primary">Thêm mới sản phẩm</div>
                    <div className="card-body">
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label>Tên sản phẩm:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtname"
                                    value={txtname}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    value={price}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="status"
                                        value={status}
                                        onChange={this.onChange}
                                        checked={status}
                                    /> Còn hàng
                            </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu</button>
                            <Link to="/products" className="ml-4 btn btn-success"> Trở về </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        productUpdate : state.item_update,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct : product => {
            dispatch(actAddProductRequest(product))
        },
        itemUpdate : id => {
            dispatch(actGetUpdateProductRequest(id))
        } ,
        updateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);