import { useEffect, useState } from "react";

export const useFetch = (url, message) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Something went wrongs`);
        }

        const data = await response.json();
        console.log(data.results);
        setData(data.results);
      } catch (err) {
        setError(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { data, error, loading };
};
