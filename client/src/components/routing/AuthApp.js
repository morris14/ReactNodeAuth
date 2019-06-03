import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import AuthHome from "../pages/auth/AuthHome";
import AuthNav from "../layout/AuthNav";
import NotFound from "../pages/NotFound";
import Settings from "../pages/auth/Settings";

const AuthApp = () => {
    return (
        <Fragment>
            <AuthNav />
            <Switch>
                <Route exact path='/' component={AuthHome} />
                <Route path='/settings' component={Settings} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default AuthApp;
