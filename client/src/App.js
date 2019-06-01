import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";

import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./components/layout/Navbar";

// If a token is found in localStorage then set axios headers
if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Navbar />
            <div>App</div>
        </Provider>
    );
};

export default App;
