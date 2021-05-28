import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Products extends Component {
    onDelete = (id) => {
        if(confirm('bạn chắc chắn xóa không ??')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'còn hàng' : 'hết hàng'
        var statusClass = product.status ? 'còn hàng' : 'hết hàng'
        return (
            <tr className="d-flex">
                <td className="col-sm-1"> {index + 1} </td>
                <td className="col-sm-3"> {product.name} </td>
                <td className="col-sm-3"> {product.price} </td>
                <td className={`col-sm-2 ${statusClass}`}> {statusName} </td>
                <td className="text-center col-sm-3">
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-info mr-2"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>

            </tr>
        );
    }
}
export default Products;