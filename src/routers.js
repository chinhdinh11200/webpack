import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/HomePage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routers = [
    {
        path: "/",
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: "/products",
        exact: false,
        main: () => <ProductListPage/>
    },
    {
        path: "/product/add",
        exact: false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: "/product/:id/edit",
        exact: false,
        main: ({match, history}) => <ProductActionPage match = {match} history={history}/>
    },
    {
        path: "",
        exact: false,
        main: () => <NotFoundPage/>
    },
]

export default routers;
