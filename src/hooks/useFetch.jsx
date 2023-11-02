import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(data);
    const getData = async () => {
      setIspending(true);
      try {
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Xatolik yuz berdi :(");
        }
        const data = await request.json();
        setData(data);
        setError(null);
        setIspending(false);
      } catch (error) {
        setIspending(false);
        setError(error.message);
        console.log(error.message);
      }
    };
    getData();
  }, [url]);
  return { data, isPending, error };
}

export default useFetch;
