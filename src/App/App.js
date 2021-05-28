import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'
import './App.css';
import Menu from './../components/Menu/Menu';
import routers from './../routers';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Menu />
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-sm-12">
                                <Switch>
                                    {this.showRoute(routers)}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
    showRoute = routers => {
        return routers.map((router, index) => {
            return (
                <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.main} />
            )
        })
    }
}

export default App;
