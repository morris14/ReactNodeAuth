import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import GuestHome from "../pages/guest/GuestHome";
import GuestNav from "../layout/GuestNav";
import Login from "../pages/guest/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/guest/Register";

const GuestApp = () => {
    return (
        <Fragment>
            <GuestNav />
            <Switch>
                <Route exact path='/' component={GuestHome} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    );
};

export default GuestApp;
