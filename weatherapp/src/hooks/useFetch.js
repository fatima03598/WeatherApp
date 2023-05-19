import axios from "axios";
import { useEffect, useState, useRef } from "react";

export function useFetch(url, queryParams = {}, method = "get", requestData = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const cancelRequest = useRef(false);

  //if url is not define return

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios(
         {
            method,
            url,
            params: queryParams,
            data: requestData
         });
        setData(response.data);
        setError(null);
    
        if (cancelRequest.current) return;
      } catch (err) {
        if (cancelRequest.current) return;

        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();

    //cancel the request if unmounted
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return { data, error, isLoading: loading };
}
