import { React, createContext, useContext, useState } from "react";
/* -------------------------------------------------------------------------- */
/*                                  Not Used                                  */
/* -------------------------------------------------------------------------- */
const ErrorContext = createContext(null);
export const useErrorContext = () => {
  return useContext(ErrorContext);
};

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const errorDisplay = (err) => {
    setError(err);
  };
  return (
    <ErrorContext.Provider value={{ error, errorDisplay }}>
      {children}
    </ErrorContext.Provider>
  );
};
