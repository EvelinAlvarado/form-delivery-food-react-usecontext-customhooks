import { createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const data = {
    count: 0,
  };
  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};
