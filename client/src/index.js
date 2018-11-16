import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Admin from "./views/Admin/index";
import {PanelUsers, PanelGeneral, PanelPost, PanelRoles} from "./components/Admin/Panel"
import Error from "./views/error";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/admin" component={Admin} />
      <Route component={Error} />
      {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
         */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
