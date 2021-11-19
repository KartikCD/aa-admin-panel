import { ENDPOINTS } from "../constants";
import { makeGetRequest } from "../util/requests/makeGetRequest";

export function useContacts() {
  const { data, loading, error } = makeGetRequest(ENDPOINTS.CONTACTS);
  const rows = ["Name", "Email", "Phone", "Description"];

  // const data = [];
  // const planTripObj = {
  //   name: "Keval Dave",
  //   email: "chawdakartik@gmail.com",
  //   phoneNumber: 919987746997,
  //   enquiry: "Hello Please Contact me",
  // };

  // for (var i = 0; i < 5; i++) {
  //   data.push(planTripObj);
  // }

  return {
    data,
    loading,
    error,
    rows,
  };
}
