import React from "react";
import AppContext from "../context/AppContext";

const AppProvider = ({ children }) => {
  const [contacts, setContacts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const data = [];
  const planTripObj = {
    name: "Keval Dave",
    email: "chawdakartik@gmail.com",
    phoneNumber: 919987746997,
    enquiry: "Hello Please Contact me",
  };

  const fetchContacts = () => {
    for (var i = 0; i < 5; i++) {
      data.push(planTripObj);
    }
    setContacts(data);
  };

  return (
    <AppContext.Provider value={{ fetchContacts, contacts }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
