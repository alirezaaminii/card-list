import React, { Component } from 'react';
import { Route , Switch, BrowserRouter } from 'react-router-dom';
import My404Component from './components/My404Component/My404Component';
import DynamicImport from './DynamicImport';
import Loading from "./components/LoadingCom/Loading";
import RequireData from './components/RequireData/require_data'

class RouteAPI extends Component {

    Home = (props) => (
        <DynamicImport load={() => import('./components/HomeCom/HomeCom')}>
            {(Component) => Component === null
                ? <Loading/>
                : <Component {...props} />}
        </DynamicImport>
    );

    PostPage = (props) => (
        <DynamicImport load={() => import('./components/PostCom/PostCom')}>
            {(Component) => Component === null
                ? <Loading/>
                : <Component {...props} />}
        </DynamicImport>
    );

    render() {

        return (
            <BrowserRouter>
                <main className="flex-column responsive-margin MainContainer">
                    <Switch>
                        <Route exact path="/" component={RequireData(this.Home)}/>
                        <Route path="/post/:id" component={RequireData(this.PostPage)}/>
                        <Route component={My404Component} />
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
};


export default RouteAPI;

