import { createContext, useState } from "react";

export const DisplayContext = createContext();

const DisplayContextProvider = ({ children }) => {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const value = {
    result,
    setResult,
    calc,
    setCalc,
  };
  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
};
export default DisplayContextProvider;
