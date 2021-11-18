import * as React from "react";
import { IntlProvider } from "react-intl";
import { Router, Route, Routes } from "react-router";
import Dashboard from "../dashboard/Dashboard";
import Layout from "../layout/Layout";
import { ENGLISH } from "../assets/en/messages";

export const MyRouter = React.memo(() => {
  return (
    <Router>
      <IntlProvider>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </IntlProvider>
    </Router>
  );
});
