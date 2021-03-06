
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.scss?v=1.3.0";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin/Admin.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/views/products" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
