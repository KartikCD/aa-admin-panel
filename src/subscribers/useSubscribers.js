import { ENDPOINTS, URLS } from "../constants";
import { useFetch } from "../util/requests/useFetch";

export function useSubscribers() {
    const rows = ["Email Address"];

    const { isLoading, apiData, serverError } = useFetch(`${URLS.BASE_URL}${ENDPOINTS.SUBSCRIBERS}`);

    return {
        rows, isLoading, apiData, serverError
    }
}