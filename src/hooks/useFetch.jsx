import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error((await res.json()).message);
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, setData, error, setError };
}
