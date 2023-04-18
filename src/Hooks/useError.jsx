import { React, createContext, useContext, useState } from "react";
/* -------------------------------------------------------------------------- */
/*                                  Used Doesnt Work                         */
/* -------------------------------------------------------------------------- */
const ErrorCtx = createContext(null);
export const ErrorCtxProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const errorDisplay = (err) => {
    setError(err);
  };
  return (
    <ErrorCtx.Provider value={{ error, errorDisplay }}>
      {children}
    </ErrorCtx.Provider>
  );
};

export const useErrorContext = () => {
  return useContext(ErrorCtx);
};
