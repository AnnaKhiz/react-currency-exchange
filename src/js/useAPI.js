import {useEffect, useState} from "react";

export const useAPI = (url) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const curArray = json.map((item) => {
          return {[`${item.cc} - ${item.txt}`]: item.rate};
        });
        setResponse(curArray);
      }
      catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [url]);
  return response;
}


