import { useEffect, useState } from "react";

export const useUser = (url, message, param) => {
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
        const newData = await data.results.find((el) => (el.email = param));
        console.log(newData);
        setData(newData);
        console.log(newData);
      } catch (err) {
        setError(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, message, param]);
  return { data, error, loading };
};
