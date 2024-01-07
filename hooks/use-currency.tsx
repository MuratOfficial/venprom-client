import { useEffect, useState } from "react";

const useCurrency = () => {
  const [responseData, setResponseData] = useState<any | null>(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/currency")
      .then((res) => res.json())
      .then((data) => {
        setResponseData(data.data.rates);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!isLoading) {
    const curr = responseData.KZT / responseData.RUB;
    const other = responseData;
    return { curr, other };
  }
};

export default useCurrency;
