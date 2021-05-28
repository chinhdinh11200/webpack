import React, { Component } from 'react';



class ProductList extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary">Danh sách sản phẩm</div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr className="d-flex">
                                <th className="col-sm-1">STT</th>
                                <th className="col-sm-3">Name</th>
                                <th className="col-sm-3">Price</th>
                                <th className="col-sm-2">Status</th>
                                <th className="col-sm-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ProductList;