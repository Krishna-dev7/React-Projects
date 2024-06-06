import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency) {
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  const [data, setData] = useState({});

  // using useEffect to fetch api
  useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((res) => {
      setData(res[currency]);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [currency])

  console.log(data);
  return data;
}

export default useCurrencyInfo;