import React, {useState} from 'react';
import axios from 'axios';

export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
    
    React.useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const resp = await axios.get(url);
                const data = await resp?.data;

                setApiData(data);
                setIsLoading(false);
            } catch(error) {
                setServerError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { isLoading, apiData, serverError }
}