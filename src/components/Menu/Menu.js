import { Component } from 'react';
import { Route, Link } from 'react-router-dom'

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match && "active";
                return (
                    <li className={`nav-item ${active}`}>
                        <Link to={to} className="nav-link">
                            {lable}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

const menus = [
    {
        lable: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        lable: "Sản phẩm",
        to: "/products",
        exact: false
    },
]
class App extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <ul className="navbar-nav">
                    {this.showMenuLink(menus)}
                </ul>
            </nav>
        );
    }
    showMenuLink = menus => {
        return menus.map((menu, index) => {
            return (
                <MenuLink
                    lable={menu.lable}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                    key={index}
                />
            )
        })
    }
}

export default App;
