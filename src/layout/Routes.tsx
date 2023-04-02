import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Games from "../pages/Games";


const Routes = () => {
    return(
        <main>
            <Switch>
                <Route exact key="/" path="/" component={Index} />;
                <Route exact key="/" path="/about" component={About} />;
                <Route exact key="/" path="/games" component={Games} />;
            </Switch>
        </main>
    )
};

export default Routes;