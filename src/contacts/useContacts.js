import { ENDPOINTS, URLS } from "../constants";
import { useFetch } from '../util/requests/useFetch';

export function useContacts() {
  
  const rows = ["Name", "Email", "Phone", "Description"];

  const { isLoading, apiData, serverError } = useFetch(`${URLS.BASE_URL}${ENDPOINTS.CONTACTS}`);

  return {
    rows, isLoading, apiData, serverError
  };
}
