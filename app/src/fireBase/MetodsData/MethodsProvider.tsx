import React, { useState, useContext } from "react";

//@ts-expect-error ???
const MethodsContext = React.createContext();

export function useMethods() {
  // создадим хук работы с методами
  return useContext(MethodsContext);
}

//@ts-expect-error ???
export function MethodsProvider({ children }) {
  // создадим контекст методов
  const [currentUser, setCurrentUser] = useState();

  const value = {
    currentUser,
    setCurrentUser,
  };
  return (
    <MethodsContext.Provider value={value}>{children}</MethodsContext.Provider>
  );
}
