import React from "react";
import "./styles/App.scss";
import Layout from "./layout/Layout";
import Contacts from './contacts/Contacts';

export const App = React.memo(() => {
  return(
      <Layout comp={<Contacts />} />
  );
});
