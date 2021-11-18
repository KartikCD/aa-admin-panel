import React from "react";
import "./styles/App.scss";
import Layout from "./layout/Layout";
import { IntlProvider } from "react-intl";
import { ENGLISH } from "./assets/en/messages";
import { Contacts } from './contacts/Contacts';

export const App = React.memo(() => {
  return(
    <IntlProvider locale="en" messages={ENGLISH["en"]}>
      <Layout comp={<Contacts />} />
    </IntlProvider>
  );
});
