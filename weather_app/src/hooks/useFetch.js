import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function useFetch(
  url,
  { queryParams = {}, method = "get", requestData = {} },
  deps = []
) {
  //url = baseURL + url;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const cancelRequest = useRef(false);

  //if url is not define return

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method,
          url,
          params: queryParams,
          data: requestData,
          mode: "no-cors",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, error, isLoading: loading };
}
