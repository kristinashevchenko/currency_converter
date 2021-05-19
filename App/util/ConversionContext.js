import React, { createContext, useState, useEffect } from "react";
import { api } from "./api";
import { Alert } from "react-native";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const defaultBaseCurrency = "USD";
  const defaultQuoteCurrency = "GBP";
  const [baseCurrency, _setBaseCurrency] = useState(defaultBaseCurrency);
  const [quoteCurrency, setQuoteCurrency] = useState(defaultQuoteCurrency);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    setIsLoading(true);
    return api(`/latest?base=${currency}`)
      .then((response) => {
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((err) => {
        Alert.alert("Sorry, something went wrong", err.message);
      })
      .finally(() => setIsLoading(false));
  };
  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    setBaseCurrency(defaultBaseCurrency);
  }, []);

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
    isLoading,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
