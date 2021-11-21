import { ENDPOINTS, URLS } from "../constants";
import { useFetch } from "../util/requests/useFetch";

export function usePlanTrip() {
  const { isLoading, apiData, serverError } = useFetch(
    `${URLS.BASE_URL}${ENDPOINTS.PLAN_TRIP}`
  );

  return {
    isLoading,
    apiData,
    serverError,
  };
}
